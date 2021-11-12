// The user of the api has to implement decodeImageData
import 'dart:typed_data';

import 'monet_compatibility.dart';
import 'package:material_color_utilities/material_color_utilities.dart' as m;

/// Try to infer an good seed from an image`s pixels, based on an scoring of the
/// colors in an quantized (into an 32x32x32 color space) version of the image.
Future<ARGBColor> inferSeedFromPixels(
  // Non opaque pixels will be ignored
  Uint32List pixels,
) async {
  final wuResult = await m.QuantizerWu().quantize(pixels, 256);
  final wsmeansResult = m.QuantizerWsmeans.quantize(
    pixels,
    256,
    startingClusters: wuResult.colorToCount.keys.toList(),
  );
  final argbToPopulation = wsmeansResult.colorToCount;
  final ranked = m.Score.score(argbToPopulation);
  return ranked[0];
}
