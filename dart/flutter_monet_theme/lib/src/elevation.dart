import 'package:flutter/material.dart';
import 'package:flutter_monet_theme/src/lerp_double.dart';
import 'package:flutter_monet_theme/src/model.dart';
import 'dart:math' as math;

@Deprecated('Use MD3ElevationTheme.baseline')
const MD3ElevationTheme baselineMD3Elevation = MD3ElevationTheme.baseline;

class MD3ElevationTheme {
  final MD3ElevationLevel level0;
  final MD3ElevationLevel level1;
  final MD3ElevationLevel level2;
  final MD3ElevationLevel level3;
  final MD3ElevationLevel level4;
  final MD3ElevationLevel level5;

  const MD3ElevationTheme({
    required this.level0,
    required this.level1,
    required this.level2,
    required this.level3,
    required this.level4,
    required this.level5,
  });

  /// From https://github.com/flutter/flutter/pull/94486/commits/342ce7a5fdbe3c5b2b52076b61cbedc8c67efe53/#diff-bba2c9e0bf9fd27bf6fc72c07d2a36a8a66d8f4f984be7fdefeff579eff3edc7R1030
  /// and https://m3.material.io/styles/color/the-color-system/color-roles
  static const MD3ElevationTheme baseline = MD3ElevationTheme(
    level0: MD3ElevationLevel.from(0.0, 0.00),
    level1: MD3ElevationLevel.from(1.0, 0.05),
    level2: MD3ElevationLevel.from(3.0, 0.08),
    level3: MD3ElevationLevel.from(6.0, 0.11),
    level4: MD3ElevationLevel.from(8.0, 0.12),
    level5: MD3ElevationLevel.from(12.0, 0.14),
  );

  int get hashCode => Object.hashAll([
        level0,
        level1,
        level2,
        level3,
        level4,
        level5,
      ]);
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3ElevationTheme) {
      return false;
    }
    return true &&
        level0 == other.level0 &&
        level1 == other.level1 &&
        level2 == other.level2 &&
        level3 == other.level3 &&
        level4 == other.level4 &&
        level5 == other.level5;
  }

  MD3ElevationTheme copyWith({
    MD3ElevationLevel? level0,
    MD3ElevationLevel? level1,
    MD3ElevationLevel? level2,
    MD3ElevationLevel? level3,
    MD3ElevationLevel? level4,
    MD3ElevationLevel? level5,
  }) =>
      MD3ElevationTheme(
        level0: level0 ?? this.level0,
        level1: level1 ?? this.level1,
        level2: level2 ?? this.level2,
        level3: level3 ?? this.level3,
        level4: level4 ?? this.level4,
        level5: level5 ?? this.level5,
      );

  static MD3ElevationTheme lerp(
    MD3ElevationTheme a,
    MD3ElevationTheme b,
    double t,
  ) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3ElevationTheme(
      level0: MD3ElevationLevel.lerp(a.level0, b.level0, t),
      level1: MD3ElevationLevel.lerp(a.level1, b.level1, t),
      level2: MD3ElevationLevel.lerp(a.level2, b.level2, t),
      level3: MD3ElevationLevel.lerp(a.level3, b.level3, t),
      level4: MD3ElevationLevel.lerp(a.level4, b.level4, t),
      level5: MD3ElevationLevel.lerp(a.level5, b.level5, t),
    );
  }
}

class MD3ElevationLevel {
  /// The value to be passed to [Material].elevation in order to get the correct
  /// shadow for this [MD3ElevationLevel].
  final double value;

  /// The opacity of the color overlay that will be applied
  final double _overlayOpacity;

  const MD3ElevationLevel.from(
    this.value,
    double overlayOpacity,
  ) : _overlayOpacity = overlayOpacity;

  @Deprecated('Use MD3ElevationLevel.from')
  MD3ElevationLevel(
    double value, [
    double? elevationShadowValue,
  ])  : value = elevationShadowValue ?? value,
        _overlayOpacity = _overlayOpacityForElevation(value);

  static Color surfaceTint(MonetColorScheme scheme) => scheme.primary;

  /// Compute the opacity for the given elevation
  /// This formula matches the values in the spec:
  /// https://material.io/design/color/dark-theme.html#properties
  /// Imported from [ElevationOverlay._overlayColor]
  static double _overlayOpacityForElevation(double elevation) =>
      (4.5 * math.log(elevation + 1) + 2) / 100.0;

  Color overlaidColor(Color surface, Color surfaceTint) {
    if (surfaceTint == null) {
      return surface;
    }
    return Color.alphaBlend(
      surfaceTint.withOpacity(_overlayOpacity),
      surface,
    );
  }

  int get hashCode => Object.hashAll([
        value,
        _overlayOpacity,
      ]);

  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3ElevationLevel) {
      return false;
    }
    return true &&
        value == other.value &&
        _overlayOpacity == other._overlayOpacity;
  }

  static MD3ElevationLevel lerp(
    MD3ElevationLevel a,
    MD3ElevationLevel b,
    double t,
  ) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3ElevationLevel.from(
      nnLerpDouble(a.value, b.value, t),
      nnLerpDouble(a._overlayOpacity, b._overlayOpacity, t),
    );
  }
}
