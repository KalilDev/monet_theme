// ignore_for_file: unnecessary_null_comparison

import 'lerp_double.dart';

class MD3StateLayerOpacityTheme {
  final double hovered;
  final double focused;
  final double pressed;
  final double dragged;

  const MD3StateLayerOpacityTheme({
    required this.hovered,
    required this.focused,
    required this.pressed,
    required this.dragged,
  });

  /// From https://github.com/flutter/flutter/pull/94486/files#diff-bba2c9e0bf9fd27bf6fc72c07d2a36a8a66d8f4f984be7fdefeff579eff3edc7R1047
  static const MD3StateLayerOpacityTheme baseline = MD3StateLayerOpacityTheme(
    hovered: 0.08,
    focused: 0.12,
    pressed: 0.12,
    dragged: 0.16,
  );
  @override
  int get hashCode => Object.hashAll([
        hovered,
        focused,
        pressed,
        dragged,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MD3StateLayerOpacityTheme) {
      return false;
    }
    return true &&
        hovered == other.hovered &&
        focused == other.focused &&
        pressed == other.pressed &&
        dragged == other.dragged;
  }

  MD3StateLayerOpacityTheme copyWith({
    double? hovered,
    double? focused,
    double? pressed,
    double? dragged,
  }) =>
      MD3StateLayerOpacityTheme(
        hovered: hovered ?? this.hovered,
        focused: focused ?? this.focused,
        pressed: pressed ?? this.pressed,
        dragged: dragged ?? this.dragged,
      );

  static MD3StateLayerOpacityTheme lerp(
      MD3StateLayerOpacityTheme a, MD3StateLayerOpacityTheme b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MD3StateLayerOpacityTheme(
      hovered: nnLerpDouble(a.hovered, b.hovered, t),
      focused: nnLerpDouble(a.focused, b.focused, t),
      pressed: nnLerpDouble(a.pressed, b.pressed, t),
      dragged: nnLerpDouble(a.dragged, b.dragged, t),
    );
  }
}
