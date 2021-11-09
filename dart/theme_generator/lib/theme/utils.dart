import 'dart:typed_data';

import 'package:libmonet/libmonet.dart';
import 'package:libmonet/math.dart';
import 'package:libmonet/utils.dart';

import 'base.dart';
import 'baseline_1p.dart';
import 'baseline_3p.dart';

bool checks_isTheme3p(MonetTheme theme) {
  return 'Roboto' == theme.styles['headline1']?.fontFamilyName;
}

bool checks_isThemeBaseline(MonetTheme theme) {
  var match$jscomp$0 = true;
  final target = checks_isTheme3p(theme) ? BASELINE_3P : BASELINE_1P;
  void checkGroup(name, TonalGroup group, TonalGroup targetGroup) {
    if (match$jscomp$0) {
      bool match;
      (match = checks_isSameColor(
              group['luminance0']!, targetGroup['luminance0']!)) &&
          (match = checks_isSameColor(
              group['luminance10']!, targetGroup['luminance10']!));
      match &&
          (match = checks_isSameColor(
              group['luminance20']!, targetGroup['luminance20']!));
      match &&
          (match = checks_isSameColor(
              group['luminance30']!, targetGroup['luminance30']!));
      match &&
          (match = checks_isSameColor(
              group['luminance40']!, targetGroup['luminance40']!));
      match &&
          (match = checks_isSameColor(
              group['luminance50']!, targetGroup['luminance50']!));
      match &&
          (match = checks_isSameColor(
              group['luminance60']!, targetGroup['luminance60']!));
      match &&
          (match = checks_isSameColor(
              group['luminance70']!, targetGroup['luminance70']!));
      match &&
          (match = checks_isSameColor(
              group['luminance80']!, targetGroup['luminance80']!));
      match &&
          (match = checks_isSameColor(
              group['luminance90']!, targetGroup['luminance90']!));
      match &&
          (match = checks_isSameColor(
              group['luminance95']!, targetGroup['luminance95']!));
      match &&
          (match = checks_isSameColor(
              group['luminance98']!, targetGroup['luminance98']!));
      match &&
          (match = checks_isSameColor(
              group['luminance100']!, targetGroup['luminance100']!));
      match$jscomp$0 = match;
    } else {
      print('theme adapter $name group mismatch $group $targetGroup');
    }
  }

  ;
  checkGroup('primary', theme.primary, target.primary);
  checkGroup('secondary', theme.secondary, target.secondary);
  checkGroup('tertiary', theme.tertiary, target.tertiary);
  checkGroup('neutral', theme.neutral, target.neutral);
  checkGroup('neutralVariant', theme.neutralVariant, target.neutralVariant);
  checkGroup('error', theme.error, target.error);
  print('theme adapter baseline match: ${match$jscomp$0}');
  return match$jscomp$0;
}

bool checks_isSameColor(String target, String expected) =>
    target.toUpperCase() == expected.toUpperCase();
String color_utils_numberToHex(value) {
  try {
    return hexFromInt(value);
  } catch (error) {
    print('error converting [${value}] to hex $error');
    return '#000000';
  }
}

TonalGroup tonal_group_tonesToTonalGroup(TonalPalette tones) {
  return {
    'luminance100': color_utils_numberToHex(tones.tone(100)),
    'luminance99': color_utils_numberToHex(tones.tone(99)),
    'luminance98': color_utils_numberToHex(tones.tone(98)),
    'luminance95': color_utils_numberToHex(tones.tone(95)),
    'luminance90': color_utils_numberToHex(tones.tone(90)),
    'luminance80': color_utils_numberToHex(tones.tone(80)),
    'luminance70': color_utils_numberToHex(tones.tone(70)),
    'luminance60': color_utils_numberToHex(tones.tone(60)),
    'luminance50': color_utils_numberToHex(tones.tone(50)),
    'luminance40': color_utils_numberToHex(tones.tone(40)),
    'luminance35': color_utils_numberToHex(tones.tone(35)),
    'luminance30': color_utils_numberToHex(tones.tone(30)),
    'luminance25': color_utils_numberToHex(tones.tone(25)),
    'luminance20': color_utils_numberToHex(tones.tone(20)),
    'luminance10': color_utils_numberToHex(tones.tone(10)),
    'luminance0': color_utils_numberToHex(tones.tone(0))
  };
}

Map<String, String> tonal_group_convertTonalGroupToMap(
    String prefix, TonalGroup group) {
  return {
    '$prefix-100': group['luminance100']!,
    '$prefix-99': group['luminance99']!,
    '$prefix-98': group['luminance98']!,
    '$prefix-95': group['luminance95']!,
    '$prefix-90': group['luminance90']!,
    '$prefix-80': group['luminance80']!,
    '$prefix-70': group['luminance70']!,
    '$prefix-60': group['luminance60']!,
    '$prefix-50': group['luminance50']!,
    '$prefix-40': group['luminance40']!,
    '$prefix-35': group['luminance35']!,
    '$prefix-30': group['luminance30']!,
    '$prefix-25': group['luminance25']!,
    '$prefix-20': group['luminance20']!,
    '$prefix-10': group['luminance10']!,
    '$prefix-0': group['luminance0']!,
  };
}

final ThemeSource defaults_COLORS_3P = ThemeSource(
  seed: '#6750A4',
  primary: '#6750A4',
  secondary: '#625B71',
  tertiary: '#7D5260',
  neutral: '#605D62',
  neutralVariant: '#605D66',
  error: '#BA1B1B',
);
final defaults_COLORS_1P = ThemeSource(
  seed: '#0B57D0',
  primary: '#0B57D0',
  secondary: '#00639B',
  tertiary: '#146C2E',
  neutral: '#5E5E5E',
  neutralVariant: '#585F65',
  error: '#BA1B1B',
);
// The user of the api has to implement decodeImageData
Future<List<int>> image_utils_bufferToPixels(
    buffer, Future<Uint8List> Function(Uint8List) decodeImageData) async {
  final imageBytes = new Uint8List(buffer),
      imageData = await decodeImageData(imageBytes),
      pixels = <int>[];
  for (var i = 0; i < imageData.length; i += 4)
    if (255 <= imageData[i + 3]) {
      pixels
          .add(intFromRgb([imageData[i], imageData[i + 1], imageData[i + 2]]));
    }
  return pixels;
}

// The user of the api has to implement decodeImageData
Future index_seedFromImage(
  image,
  decodeImageData,
  Future<Uint8List> Function(String) fetch,
) async {
  final imageBuffer = image is String ? await fetch(image) : image as Uint8List;
  var pixels = await image_utils_bufferToPixels(imageBuffer, decodeImageData),
      quantizer = new QuantizerWu(),
      JSCompiler__a;
  quantizer.weights = List<num>.filled(35937, 0);
  quantizer.momentsR = List<num>.filled(35937, 0);
  quantizer.momentsG = List<num>.filled(35937, 0);
  quantizer.momentsB = List<num>.filled(35937, 0);
  quantizer.moments = List<num>.filled(35937, 0);
  var JSCompiler__a$jscomp$0;
  final countByColor = <int, int>{};
  for (var i = 0; i < pixels.length; i++) {
    final pixel = pixels[i];
    if (255 <= (pixel & 0xff000000) >> 24 >>> 0) {
      countByColor[pixel] = (countByColor[pixel] ?? 0) + 1;
    }
  }
  for (final e in countByColor.entries) {
    final pixel__tsickle_destructured_1 = e.key,
        count__tsickle_destructured_2 = e.value;
    final pixel = pixel__tsickle_destructured_1,
        count = count__tsickle_destructured_2,
        red = (pixel & 16711680) >> 16,
        green = (pixel & 65280) >> 8,
        blue = pixel & 255,
        index = QuantizerWu.getIndex(
            (red >> 3) + 1, (green >> 3) + 1, (blue >> 3) + 1);
    quantizer.weights[index] = quantizer.weights[index] + count;
    quantizer.momentsR[index] += count * red;
    quantizer.momentsG[index] += count * green;
    quantizer.momentsB[index] += count * blue;
    quantizer.moments[index] +=
        count * (red * red + green * green + blue * blue);
  }
  for (var r = 1; 33 > r; r++) {
    final area = List<num>.filled(33, 0),
        areaR = List<num>.filled(33, 0),
        areaG = List<num>.filled(33, 0),
        areaB = List<num>.filled(33, 0),
        area2 = List<num>.filled(33, 0);
    for (var g = 1; 33 > g; g++) {
      num line = 0, lineR = 0, lineG = 0, lineB = 0, line2 = 0;
      for (var b = 1; 33 > b; b++) {
        final index = QuantizerWu.getIndex(r, g, b);
        line += quantizer.weights[index];
        lineR += quantizer.momentsR[index];
        lineG += quantizer.momentsG[index];
        lineB += quantizer.momentsB[index];
        line2 += quantizer.moments[index];
        area[b] += line;
        areaR[b] += lineR;
        areaG[b] += lineG;
        areaB[b] += lineB;
        area2[b] += line2;
        final previousIndex = QuantizerWu.getIndex(r - 1, g, b);
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
  var colorCount = quantizer.createBoxes().resultCount;
  final colors = [];
  for (var i = 0; i < colorCount; ++i) {
    final cube = quantizer.cubes[i],
        weight = quantizer.volume(cube, quantizer.weights);
    if (0 < weight) {
      final r = Math.round(quantizer.volume(cube, quantizer.momentsR) / weight),
          g = Math.round(quantizer.volume(cube, quantizer.momentsG) / weight),
          b = Math.round(quantizer.volume(cube, quantizer.momentsB) / weight);
      colors.add(-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255);
    }
  }
  final pixelToCount = <int, int>{},
      points = <List<num>>[],
      pixels$jscomp$0 = [],
      pointProvider = new LabPointProvider();
  var pointCount = 0;
  for (var i = 0; i < pixels.length; i++) {
    final inputPixel = pixels[i], pixelCount = pixelToCount[inputPixel];
    if (pixelCount == null) {
      pointCount++;
      points.add(labFromInt(inputPixel));
      pixels$jscomp$0.add(inputPixel);
      pixelToCount[inputPixel] = 1;
    } else {
      pixelToCount[inputPixel] = pixelCount + 1;
    }
  }
  final counts = <int>[];
  for (var i = 0; i < pointCount; i++) {
    final count = pixelToCount[pixels$jscomp$0[i]];
    if (count != null) {
      counts[i] = count;
    }
  }
  var clusterCount = Math.min(256, pointCount).toInt();
  if (0 < colors.length) {
    clusterCount = Math.min(clusterCount, colors.length).toInt();
  }
  final clusters = [];
  for (var i = 0; i < colors.length; i++) clusters.add(labFromInt(colors[i]));
  final additionalClustersNeeded = clusterCount - clusters.length;
  if (0 == colors.length && 0 < additionalClustersNeeded)
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
  final distanceToIndexMatrix = [];
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
      distanceToIndexMatrix[i].sort();
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
    final possibleNewCluster = pointProvider.toInt(clusters[i]);
    if (!argbToPopulation.containsKey(possibleNewCluster)) {
      argbToPopulation[possibleNewCluster] = count;
    }
  }
  final ranked = score(argbToPopulation);
  return hexFromInt(ranked[0]);
}
