// The user of the api has to implement decodeImageData
import 'dart:typed_data';

import 'package:libmonet/libmonet.dart';
import 'package:libmonet/math.dart';

/// Try to infer an good seed from an image`s pixels, based on an scoring of the
/// colors in an quantized (into an 32x32x32 color space) version of the image.
ARGBColor inferSeedFromPixels(
  // Non opaque pixels will be ignored
  Uint32List pixels,
) {
  /// Create an quantizer for an color space with 32 values of red, green and
  /// blue, hence, 32*32*32 possible values, 32768.
  // TODO: check if changing from 35937 to 32768 is safe.
  var quantizer = new QuantizerWu();
  quantizer.weights = List<num>.filled(35937, 0);
  quantizer.momentsR = List<num>.filled(35937, 0);
  quantizer.momentsG = List<num>.filled(35937, 0);
  quantizer.momentsB = List<num>.filled(35937, 0);
  quantizer.moments = List<num>.filled(35937, 0);

  // First step: count how many instances of each color there are in the image.
  final countByColor = <ARGBColor, int>{};
  for (var i = 0; i < pixels.length; i++) {
    final color = pixels[i];
    if ((color & 0xff000000) >> 24 == 0xFF) {
      countByColor[color] = (countByColor[color] ?? 0) + 1;
    }
  }

  /// Second step: Populate the quantizer simplified color space cells with the
  /// weighted information of color population in the image.
  for (final e in countByColor.entries) {
    final pixel = e.key, count = e.value;
    final red = (pixel & 0xFF0000) >> 16,
        green = (pixel & 0xFF00) >> 8,
        blue = pixel & 0xFF;
    // Move the colors in the 256 space to the 32 space, and get the index for
    // the current entry.
    final index = QuantizerWu.getIndex(
      (red >> 3) + 1,
      (green >> 3) + 1,
      (blue >> 3) + 1,
    );
    // the squared distance of the color in the 256 color space from the origin
    final colorDistanceSquared = red * red + green * green + blue * blue;

    /// increment the counter of how many colors are in this cell of the
    /// quantizer space
    quantizer.weights[index] = quantizer.weights[index] + count;

    /// add the each weighted channel of the current color to the current cell
    quantizer.momentsR[index] += count * red;
    quantizer.momentsG[index] += count * green;
    quantizer.momentsB[index] += count * blue;

    /// add the weighted distance squared to the current cell
    quantizer.moments[index] += count * colorDistanceSquared;
  }

  // Third step: Walk the 32x32 color space, and increase the weight of the
  // values with higher indices. ???????????
  // For each red value, create an plane spanning the blue and green channels.
  for (var r = 1; r <= 32; r++) {
    final area = List<num>.filled(33, 0),
        areaR = List<num>.filled(33, 0),
        areaG = List<num>.filled(33, 0),
        areaB = List<num>.filled(33, 0),
        area2 = List<num>.filled(33, 0);
    // For each blue and green plane, walk each green value to create an line in
    // the blue channel
    for (var g = 1; g <= 32; g++) {
      num line = 0, lineR = 0, lineG = 0, lineB = 0, line2 = 0;
      // For each blue value in the line, do the rest
      for (var b = 1; b <= 32; b++) {
        // Find the index of the current point in the colorspace
        final index = QuantizerWu.getIndex(r, g, b);
        // Add the weighted values from the cell into the line weighted values
        line += quantizer.weights[index];
        lineR += quantizer.momentsR[index];
        lineG += quantizer.momentsG[index];
        lineB += quantizer.momentsB[index];
        line2 += quantizer.moments[index];
        // Add the weighted values from the partial line into the area values of
        // the current blue and green plane.
        area[b] += line;
        areaR[b] += lineR;
        areaG[b] += lineG;
        areaB[b] += lineB;
        area2[b] += line2;
        // Find the index of the cell in the previous blue and green plane
        final previousIndex = QuantizerWu.getIndex(r - 1, g, b);

        // Add the weighted values from the partial area of the blue and green
        // plane into the previous plane`s cell, and make this the current
        // cell`s values. ??????
        quantizer.weights[index] = quantizer.weights[previousIndex] + area[b];
        quantizer.momentsR[index] =
            quantizer.momentsR[previousIndex] + areaR[b];
        quantizer.momentsG[index] =
            quantizer.momentsG[previousIndex] + areaG[b];
        quantizer.momentsB[index] =
            quantizer.momentsB[previousIndex] + areaB[b];
        quantizer.moments[index] = quantizer.moments[previousIndex] + area2[b];
      }
    }
  }

  // Fourth step: create an cube in the 32x32 color space, divide it into
  // smaller cubes by maximizing for the variance between cubes.
  var colorCount = quantizer.createBoxes().resultCount;

  final colors = <ARGBColor>[];
  // Fifth step: Walk each generated cube, and assign an color to it based on
  // the volume of each channel and the weight it represents.
  for (var i = 0; i < colorCount; ++i) {
    final cube = quantizer.cubes[i],
        weight = quantizer.volume(cube, quantizer.weights);
    if (0 < weight) {
      final r = Math.round(quantizer.volume(cube, quantizer.momentsR) / weight),
          g = Math.round(quantizer.volume(cube, quantizer.momentsG) / weight),
          b = Math.round(quantizer.volume(cube, quantizer.momentsB) / weight);
      colors.add(0xFF000000 | (r & 0xFF) << 16 | (g & 0xFF) << 8 | b & 0xFF);
    }
  }

  final pixelToCount = <int, int>{},
      points = <List<double>>[],
      colorsInImage = <int>[],
      pointProvider = new LabPointProvider();
  var pointCount = 0;
  // Sixth step: walk each pixel of the image, count how many times each color
  // has appeared ...
  for (var i = 0; i < pixels.length; i++) {
    final inputPixel = pixels[i], pixelCount = pixelToCount[inputPixel];
    if (pixelCount == null) {
      pointCount++;
      points.add(labFromArgb(inputPixel));
      colorsInImage.add(inputPixel);
      pixelToCount[inputPixel] = 1;
    } else {
      pixelToCount[inputPixel] = pixelCount + 1;
    }
  }
  // TODO: this looks weird, an Map.values would work
  final counts = List<int>.filled(pointCount, 0);
  for (var i = 0; i < pointCount; i++) {
    final count = pixelToCount[colorsInImage[i]]!;
    counts[i] = count;
  }

  var clusterCount = Math.min(256, pointCount).toInt();
  if (colors.isNotEmpty) {
    clusterCount = Math.min(clusterCount, colors.length).toInt();
  }
  // convert each color from the quantizer into the lab colorspace
  final clusters = [];
  for (var i = 0; i < colors.length; i++) clusters.add(labFromArgb(colors[i]));
  final additionalClustersNeeded = clusterCount - clusters.length;
  // generate garbage data if there werent any colors selected by the quantizer
  if (colors.isEmpty && additionalClustersNeeded > 0)
    for (var i = 0; i < additionalClustersNeeded; i++)
      clusters.add([
        100 * Math.random(),
        201 * Math.random() + -100,
        201 * Math.random() + -100
      ]);
  final clusterIndices = [];
  for (var i = 0; i < pointCount; i++)
    clusterIndices.add(Math.floor(Math.random() * clusterCount));
  final indexMatrix = [];
  for (var i = 0; i < clusterCount; i++) {
    indexMatrix.add([]);
    for (var j = 0; j < clusterCount; j++) indexMatrix[i].add(0);
  }
  final distanceToIndexMatrix = <List<quantizer_wsmeans_DistanceAndIndex>>[];
  for (var i = 0; i < clusterCount; i++) {
    distanceToIndexMatrix.add([]);
    for (var j = 0; j < clusterCount; j++)
      distanceToIndexMatrix[i].add(new quantizer_wsmeans_DistanceAndIndex());
  }
  final pixelCountSums = <int>[];
  for (var i = 0; i < clusterCount; i++) pixelCountSums.add(0);
  for (var iteration = 0; 10 > iteration; iteration++) {
    for (var i = 0; i < clusterCount; i++) {
      for (var j = i + 1; j < clusterCount; j++) {
        final distance = pointProvider.distance(clusters[i], clusters[j]);
        distanceToIndexMatrix[j][i].distance = distance;
        distanceToIndexMatrix[j][i].index = i;
        distanceToIndexMatrix[i][j].distance = distance;
        distanceToIndexMatrix[i][j].index = j;
      }
      distanceToIndexMatrix[i].sort((a, b) => a.distance.compareTo(b.distance));
      for (var j = 0; j < clusterCount; j++)
        indexMatrix[i][j] = distanceToIndexMatrix[i][j].index;
    }
    var pointsMoved = 0;
    for (var i = 0; i < pointCount; i++) {
      final point = points[i],
          previousClusterIndex = clusterIndices[i],
          previousDistance =
              pointProvider.distance(point, clusters[previousClusterIndex]);
      var minimumDistance = previousDistance, newClusterIndex = -1;
      for (var j = 0; j < clusterCount; j++) {
        if (distanceToIndexMatrix[previousClusterIndex][j].distance >=
            4 * previousDistance) continue;
        final distance = pointProvider.distance(point, clusters[j]);
        if (distance < minimumDistance) {
          minimumDistance = distance;
          newClusterIndex = j;
        }
      }
      if (-1 != newClusterIndex &&
          3 <
              Math.abs(
                  Math.sqrt(minimumDistance) - Math.sqrt(previousDistance))) {
        pointsMoved++;
        clusterIndices[i] = newClusterIndex;
      }
    }
    if (0 == pointsMoved && 0 != iteration) break;
    final componentASums = List<num>.filled(clusterCount, 0),
        componentBSums = List<num>.filled(clusterCount, 0),
        componentCSums = List<num>.filled(clusterCount, 0);
    for (var i = 0; i < clusterCount; i++) pixelCountSums[i] = 0;
    for (var i = 0; i < pointCount; i++) {
      final clusterIndex = clusterIndices[i],
          point = points[i],
          count = counts[i];
      pixelCountSums[clusterIndex] += count;
      componentASums[clusterIndex] += point[0] * count;
      componentBSums[clusterIndex] += point[1] * count;
      componentCSums[clusterIndex] += point[2] * count;
    }
    for (var i = 0; i < clusterCount; i++) {
      final count = pixelCountSums[i];
      clusters[i] = 0 == count
          ? [0, 0, 0]
          : [
              componentASums[i] / count,
              componentBSums[i] / count,
              componentCSums[i] / count
            ];
    }
  }
  final argbToPopulation = <int, int>{};
  for (var i = 0; i < clusterCount; i++) {
    final count = pixelCountSums[i];
    if (0 == count) continue;
    final possibleNewCluster = pointProvider.toArgb(clusters[i]);
    if (!argbToPopulation.containsKey(possibleNewCluster)) {
      argbToPopulation[possibleNewCluster] = count;
    }
  }
  final ranked = score(argbToPopulation);
  return ranked[0];
}
