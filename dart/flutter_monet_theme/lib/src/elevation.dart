import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/src/model.dart';

const MD3ElevationTheme baselineMD3Elevation = MD3ElevationTheme(
  level0: MD3ElevationLevel(1.0, 0),
  level1: MD3ElevationLevel(3.0),
  level2: MD3ElevationLevel(6.0),
  level3: MD3ElevationLevel(8.0),
  level4: MD3ElevationLevel(12.0),
);

class MD3ElevationTheme {
  final MD3ElevationLevel level0;
  final MD3ElevationLevel level1;
  final MD3ElevationLevel level2;
  final MD3ElevationLevel level3;
  final MD3ElevationLevel level4;

  const MD3ElevationTheme({
    required this.level0,
    required this.level1,
    required this.level2,
    required this.level3,
    required this.level4,
  });
}

class MD3ElevationLevel {
  final double value;
  final double _elevationTintValue;

  const MD3ElevationLevel(
    double value, [
    double? elevationShadowValue,
  ])  : this.value = elevationShadowValue ?? value,
        this._elevationTintValue = value;

  static Color surfaceTint(MonetColorScheme scheme) => scheme.primary;

  Color overlaidColor(Color surface, Color surfaceTint) {
    if (surfaceTint == null) {
      return surface;
    }
    return ElevationOverlay.colorWithOverlay(
      surface,
      surfaceTint,
      _elevationTintValue,
    );
  }
}
