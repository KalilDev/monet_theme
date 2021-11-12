import 'dart:math';
import 'package:material_color_utilities/material_color_utilities.dart';

import 'monet_compatibility.dart';

/// Create an [TonalPalette] for an custom color that was harmonized with the
/// [primary] palette.
/// https://m3.material.io/styles/color/the-color-system/custom-colors
@Deprecated('Use generateHarmonizedCustomColor')
TonalPalette generateRarmonizedCustomColor(
  ARGBColor customColorSeed,
  TonalPalette primary,
) =>
    generateHarmonizedCustomColor(customColorSeed, primary);

/// Create an [TonalPalette] for an custom color that was harmonized with the
/// [primary] palette.
/// https://m3.material.io/styles/color/the-color-system/custom-colors
TonalPalette generateHarmonizedCustomColor(
  ARGBColor customColorSeed,
  TonalPalette primary,
) {
  final sourceColor = primary[50];
  final customHCT = HCT.fromInt(customColorSeed);
  final customHCT50 = HCT.from(customHCT.hue, customHCT.chroma, 50);

  final targetCustom = Blend.harmonize(customHCT50.toInt(), sourceColor);
  final targetCustomHCT = HCT.fromInt(targetCustom);
  return TonalPalette.of(targetCustomHCT.hue, targetCustomHCT.chroma);
}
