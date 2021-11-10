import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/src/model.dart';

const MD3ElevationTheme baselineMD3Elevation = MD3ElevationTheme(
  level0: MD3ElevationLevel(4),
  level1: MD3ElevationLevel(6),
  level2: MD3ElevationLevel(8),
  level3: MD3ElevationLevel(12),
  level4: MD3ElevationLevel(16),
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

  const MD3ElevationLevel(this.value);

  static Color surfaceTint(MonetColorScheme scheme) => scheme.primary;

  Color overlaidColor(Color surface, Color surfaceTint) =>
      ElevationOverlay.colorWithOverlay(
        surface,
        surfaceTint,
        value,
      );
}
