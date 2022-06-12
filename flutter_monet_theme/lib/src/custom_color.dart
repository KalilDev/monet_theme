import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/src/model.dart';
import 'package:monet_theme/monet_theme.dart';

/// Create an [ColorTonalPalette] for an custom color that was harmonized with
/// this [ColorTonalPalette].
///
/// https://m3.material.io/styles/color/the-color-system/custom-colors
ColorTonalPalette generateColorHarmonizedCustomColor(
  Color color,
  ColorTonalPalette primary,
) =>
    ColorTonalPalette.fromRaw(
      generateHarmonizedCustomColor(color.value, primary.raw),
    );
