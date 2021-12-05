// ignore_for_file: unnecessary_null_comparison

import 'package:flutter_monet_theme/src/generate.dart';
import 'package:material_color_utilities/material_color_utilities.dart';
import 'package:flutter/material.dart';
import 'package:monet_theme/monet_theme.dart';
import 'custom_color.dart';

enum MonetColorKind {
  primary,
  secondary,
  tertiary,
  error,
  surface,
}

class MonetColorScheme {
  final Color primary;
  final Color onPrimary;
  final Color primaryContainer;
  final Color onPrimaryContainer;
  final Color secondary;
  final Color onSecondary;
  final Color secondaryContainer;
  final Color onSecondaryContainer;
  final Color tertiary;
  final Color onTertiary;
  final Color tertiaryContainer;
  final Color onTertiaryContainer;
  final Color error;
  final Color errorContainer;
  final Color onError;
  final Color onErrorContainer;
  final Color background;
  final Color onBackground;
  final Color surface;
  final Color onSurface;
  final Color surfaceVariant;
  final Color onSurfaceVariant;
  final Color outline;
  final Color onInverseSurface;
  final Color inverseSurface;
  final Brightness brightness;

  const MonetColorScheme({
    required this.primary,
    required this.onPrimary,
    required this.primaryContainer,
    required this.onPrimaryContainer,
    required this.secondary,
    required this.onSecondary,
    required this.secondaryContainer,
    required this.onSecondaryContainer,
    required this.tertiary,
    required this.onTertiary,
    required this.tertiaryContainer,
    required this.onTertiaryContainer,
    required this.error,
    required this.errorContainer,
    required this.onError,
    required this.onErrorContainer,
    required this.background,
    required this.onBackground,
    required this.surface,
    required this.onSurface,
    required this.surfaceVariant,
    required this.onSurfaceVariant,
    required this.outline,
    required this.onInverseSurface,
    required this.inverseSurface,
    required this.brightness,
  });

  factory MonetColorScheme.fromRaw(
    RawMonetColorScheme raw,
    Brightness brightness,
  ) =>
      MonetColorScheme(
        primary: Color(raw.primary),
        onPrimary: Color(raw.onPrimary),
        primaryContainer: Color(raw.primaryContainer),
        onPrimaryContainer: Color(raw.onPrimaryContainer),
        secondary: Color(raw.secondary),
        onSecondary: Color(raw.onSecondary),
        secondaryContainer: Color(raw.secondaryContainer),
        onSecondaryContainer: Color(raw.onSecondaryContainer),
        tertiary: Color(raw.tertiary),
        onTertiary: Color(raw.onTertiary),
        tertiaryContainer: Color(raw.tertiaryContainer),
        onTertiaryContainer: Color(raw.onTertiaryContainer),
        error: Color(raw.error),
        errorContainer: Color(raw.errorContainer),
        onError: Color(raw.onError),
        onErrorContainer: Color(raw.onErrorContainer),
        background: Color(raw.background),
        onBackground: Color(raw.onBackground),
        surface: Color(raw.surface),
        onSurface: Color(raw.onSurface),
        surfaceVariant: Color(raw.surfaceVariant),
        onSurfaceVariant: Color(raw.onSurfaceVariant),
        outline: Color(raw.outline),
        onInverseSurface: Color(raw.inverseOnSurface),
        inverseSurface: Color(raw.inverseSurface),
        brightness: brightness,
      );

  ColorScheme toColorScheme() => ColorScheme(
        primary: primary,
        primaryVariant: secondary,
        secondary: tertiary,
        secondaryVariant: tertiaryContainer,
        surface: surface,
        background: background,
        error: error,
        onPrimary: onPrimary,
        onSecondary: onSecondary,
        onSurface: onSurface,
        onBackground: onBackground,
        onError: onError,
        brightness: brightness,
      );

  CustomColorScheme get primaryScheme => CustomColorScheme(
        color: primary,
        onColor: onPrimary,
        colorContainer: primaryContainer,
        onColorContainer: onPrimaryContainer,
      );

  CustomColorScheme get secondaryScheme => CustomColorScheme(
        color: secondary,
        onColor: onSecondary,
        colorContainer: secondaryContainer,
        onColorContainer: onSecondaryContainer,
      );

  CustomColorScheme get tertiaryScheme => CustomColorScheme(
        color: tertiary,
        onColor: onTertiary,
        colorContainer: tertiaryContainer,
        onColorContainer: onTertiaryContainer,
      );

  CustomColorScheme get errorScheme => CustomColorScheme(
        color: error,
        onColor: onError,
        colorContainer: errorContainer,
        onColorContainer: onErrorContainer,
      );

  CustomColorScheme get surfaceScheme => CustomColorScheme(
        color: surface,
        onColor: onSurface,
        colorContainer: surfaceVariant,
        onColorContainer: onSurfaceVariant,
      );

  CustomColorScheme getCustomColorScheme(MonetColorKind kind) {
    switch (kind) {
      case MonetColorKind.primary:
        return primaryScheme;
      case MonetColorKind.secondary:
        return secondaryScheme;
      case MonetColorKind.tertiary:
        return tertiaryScheme;
      case MonetColorKind.error:
        return errorScheme;
      case MonetColorKind.surface:
        return surfaceScheme;
    }
  }

  MonetColorScheme mergeCustomColor(
    CustomColorScheme scheme,
    MonetColorKind toKind,
  ) {
    switch (toKind) {
      case MonetColorKind.primary:
        return copyWith(
          primary: scheme.color,
          onPrimary: scheme.onColor,
          primaryContainer: scheme.colorContainer,
          onPrimaryContainer: scheme.onColorContainer,
        );
      case MonetColorKind.secondary:
        return copyWith(
          secondary: scheme.color,
          onSecondary: scheme.onColor,
          secondaryContainer: scheme.colorContainer,
          onSecondaryContainer: scheme.onColorContainer,
        );
      case MonetColorKind.tertiary:
        return copyWith(
          tertiary: scheme.color,
          onSecondary: scheme.onColor,
          tertiaryContainer: scheme.colorContainer,
          onTertiaryContainer: scheme.onColorContainer,
        );
      case MonetColorKind.error:
        return copyWith(
          error: scheme.color,
          onError: scheme.onColor,
          errorContainer: scheme.colorContainer,
          onErrorContainer: scheme.onColorContainer,
        );
      case MonetColorKind.surface:
        return copyWith(
          surface: scheme.color,
          onSurface: scheme.onColor,
          surfaceVariant: scheme.colorContainer,
          onSurfaceVariant: scheme.onColorContainer,
        );
    }
  }

  @override
  int get hashCode => Object.hashAll([
        primary,
        onPrimary,
        primaryContainer,
        onPrimaryContainer,
        secondary,
        onSecondary,
        secondaryContainer,
        onSecondaryContainer,
        tertiary,
        onTertiary,
        tertiaryContainer,
        onTertiaryContainer,
        error,
        errorContainer,
        onError,
        onErrorContainer,
        background,
        onBackground,
        surface,
        onSurface,
        surfaceVariant,
        onSurfaceVariant,
        outline,
        onInverseSurface,
        inverseSurface,
        brightness,
      ]);

  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MonetColorScheme) {
      return false;
    }
    return true &&
        primary == other.primary &&
        onPrimary == other.onPrimary &&
        primaryContainer == other.primaryContainer &&
        onPrimaryContainer == other.onPrimaryContainer &&
        secondary == other.secondary &&
        onSecondary == other.onSecondary &&
        secondaryContainer == other.secondaryContainer &&
        onSecondaryContainer == other.onSecondaryContainer &&
        tertiary == other.tertiary &&
        onTertiary == other.onTertiary &&
        tertiaryContainer == other.tertiaryContainer &&
        onTertiaryContainer == other.onTertiaryContainer &&
        error == other.error &&
        errorContainer == other.errorContainer &&
        onError == other.onError &&
        onErrorContainer == other.onErrorContainer &&
        background == other.background &&
        onBackground == other.onBackground &&
        surface == other.surface &&
        onSurface == other.onSurface &&
        surfaceVariant == other.surfaceVariant &&
        onSurfaceVariant == other.onSurfaceVariant &&
        outline == other.outline &&
        onInverseSurface == other.onInverseSurface &&
        inverseSurface == other.inverseSurface &&
        brightness == other.brightness;
  }

  MonetColorScheme copyWith({
    Color? primary,
    Color? onPrimary,
    Color? primaryContainer,
    Color? onPrimaryContainer,
    Color? secondary,
    Color? onSecondary,
    Color? secondaryContainer,
    Color? onSecondaryContainer,
    Color? tertiary,
    Color? onTertiary,
    Color? tertiaryContainer,
    Color? onTertiaryContainer,
    Color? error,
    Color? errorContainer,
    Color? onError,
    Color? onErrorContainer,
    Color? background,
    Color? onBackground,
    Color? surface,
    Color? onSurface,
    Color? surfaceVariant,
    Color? onSurfaceVariant,
    Color? outline,
    Color? onInverseSurface,
    Color? inverseSurface,
    Brightness? brightness,
  }) =>
      MonetColorScheme(
        primary: primary ?? this.primary,
        onPrimary: onPrimary ?? this.onPrimary,
        primaryContainer: primaryContainer ?? this.primaryContainer,
        onPrimaryContainer: onPrimaryContainer ?? this.onPrimaryContainer,
        secondary: secondary ?? this.secondary,
        onSecondary: onSecondary ?? this.onSecondary,
        secondaryContainer: secondaryContainer ?? this.secondaryContainer,
        onSecondaryContainer: onSecondaryContainer ?? this.onSecondaryContainer,
        tertiary: tertiary ?? this.tertiary,
        onTertiary: onTertiary ?? this.onTertiary,
        tertiaryContainer: tertiaryContainer ?? this.tertiaryContainer,
        onTertiaryContainer: onTertiaryContainer ?? this.onTertiaryContainer,
        error: error ?? this.error,
        errorContainer: errorContainer ?? this.errorContainer,
        onError: onError ?? this.onError,
        onErrorContainer: onErrorContainer ?? this.onErrorContainer,
        background: background ?? this.background,
        onBackground: onBackground ?? this.onBackground,
        surface: surface ?? this.surface,
        onSurface: onSurface ?? this.onSurface,
        surfaceVariant: surfaceVariant ?? this.surfaceVariant,
        onSurfaceVariant: onSurfaceVariant ?? this.onSurfaceVariant,
        outline: outline ?? this.outline,
        onInverseSurface: onInverseSurface ?? this.onInverseSurface,
        inverseSurface: inverseSurface ?? this.inverseSurface,
        brightness: brightness ?? this.brightness,
      );

  static MonetColorScheme lerp(
      MonetColorScheme a, MonetColorScheme b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MonetColorScheme(
      primary: Color.lerp(a.primary, b.primary, t)!,
      onPrimary: Color.lerp(a.onPrimary, b.onPrimary, t)!,
      primaryContainer: Color.lerp(a.primaryContainer, b.primaryContainer, t)!,
      onPrimaryContainer:
          Color.lerp(a.onPrimaryContainer, b.onPrimaryContainer, t)!,
      secondary: Color.lerp(a.secondary, b.secondary, t)!,
      onSecondary: Color.lerp(a.onSecondary, b.onSecondary, t)!,
      secondaryContainer:
          Color.lerp(a.secondaryContainer, b.secondaryContainer, t)!,
      onSecondaryContainer:
          Color.lerp(a.onSecondaryContainer, b.onSecondaryContainer, t)!,
      tertiary: Color.lerp(a.tertiary, b.tertiary, t)!,
      onTertiary: Color.lerp(a.onTertiary, b.onTertiary, t)!,
      tertiaryContainer:
          Color.lerp(a.tertiaryContainer, b.tertiaryContainer, t)!,
      onTertiaryContainer:
          Color.lerp(a.onTertiaryContainer, b.onTertiaryContainer, t)!,
      error: Color.lerp(a.error, b.error, t)!,
      errorContainer: Color.lerp(a.errorContainer, b.errorContainer, t)!,
      onError: Color.lerp(a.onError, b.onError, t)!,
      onErrorContainer: Color.lerp(a.onErrorContainer, b.onErrorContainer, t)!,
      background: Color.lerp(a.background, b.background, t)!,
      onBackground: Color.lerp(a.onBackground, b.onBackground, t)!,
      surface: Color.lerp(a.surface, b.surface, t)!,
      onSurface: Color.lerp(a.onSurface, b.onSurface, t)!,
      surfaceVariant: Color.lerp(a.surfaceVariant, b.surfaceVariant, t)!,
      onSurfaceVariant: Color.lerp(a.onSurfaceVariant, b.onSurfaceVariant, t)!,
      outline: Color.lerp(a.outline, b.outline, t)!,
      onInverseSurface: Color.lerp(a.onInverseSurface, b.onInverseSurface, t)!,
      inverseSurface: Color.lerp(a.inverseSurface, b.inverseSurface, t)!,
      brightness: t < 0.5 ? a.brightness : b.brightness,
    );
  }
}

class ColorTonalPalette {
  final TonalPalette raw;

  const ColorTonalPalette._(this.raw);
  factory ColorTonalPalette.fromRaw(TonalPalette raw) =>
      ColorTonalPalette._(raw);

  Color getTone(int tone) => Color(raw.get(tone));
  Color operator [](int tone) => getTone(tone);
  @override
  int get hashCode => Object.hashAll([
        raw,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! ColorTonalPalette) {
      return false;
    }
    return true && raw == other.raw;
  }

  ColorTonalPalette copyWith({
    TonalPalette? raw,
  }) =>
      ColorTonalPalette._(
        raw ?? this.raw,
      );

  static ColorTonalPalette lerp(
      ColorTonalPalette a, ColorTonalPalette b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return ColorTonalPalette._(_LerpTonalPalette(a.raw, b.raw, t));
  }
}

class _LerpTonalPalette implements TonalPalette {
  final TonalPalette a;
  final TonalPalette b;
  final double t;

  _LerpTonalPalette(this.a, this.b, this.t);

  @override
  List<int> get asList => TonalPalette.commonTones.map(get).toList();

  final Map<int, int> _cache = {};

  @override
  int get(int tone) => _cache.putIfAbsent(
        tone,
        () {
          final aTone = Color(a.get(tone));
          final bTone = Color(b.get(tone));
          final lerped = Color.lerp(aTone, bTone, t)!;
          return lerped.value;
        },
      );
}

class MonetTheme {
  final MonetColorScheme light;
  final MonetColorScheme dark;
  final ColorTonalPalette primary;
  final ColorTonalPalette secondary;
  final ColorTonalPalette tertiary;
  final ColorTonalPalette neutral;
  final ColorTonalPalette neutralVariant;
  final ColorTonalPalette error;

  const MonetTheme({
    required this.light,
    required this.dark,
    required this.primary,
    required this.secondary,
    required this.tertiary,
    required this.neutral,
    required this.neutralVariant,
    required this.error,
  });

  factory MonetTheme.fromRaw(RawMonetTheme raw) => MonetTheme(
        light: MonetColorScheme.fromRaw(raw.light, Brightness.light),
        dark: MonetColorScheme.fromRaw(raw.dark, Brightness.dark),
        primary: ColorTonalPalette.fromRaw(raw.primary),
        secondary: ColorTonalPalette.fromRaw(raw.secondary),
        tertiary: ColorTonalPalette.fromRaw(raw.tertiary),
        neutral: ColorTonalPalette.fromRaw(raw.neutral),
        neutralVariant: ColorTonalPalette.fromRaw(raw.neutralVariant),
        error: ColorTonalPalette.fromRaw(raw.error),
      );

  static final MonetTheme baseline1p = MonetTheme.fromRaw(raw_baseline_1p);

  static final MonetTheme baseline3p = MonetTheme.fromRaw(raw_baseline_3p);

  /// Create an [ColorTonalPalette] for an custom color that was harmonized with
  /// the primary color in this [MonetTheme].
  ///
  /// https://m3.material.io/styles/color/the-color-system/custom-colors
  ColorTonalPalette harmonizedCustomColor(Color color) =>
      generateColorHarmonizedCustomColor(color, primary);

  /// Create an [CustomColorTheme] for an custom color that was harmonized with
  /// the primary color in this [MonetTheme].
  ///
  /// https://m3.material.io/styles/color/the-color-system/custom-colors
  CustomColorTheme harmonizedCustomColorTheme(Color color) =>
      generateCustomColorThemeFrom(harmonizedCustomColor(color));

  /// Get one of the [MonetColorKind]s from this theme.
  ///
  /// # WARNING
  /// ## YOU WILL GET GARBAGE TONAL PALETTES WITH [MonetColorKind.surface]
  /// This will throw an [StateError] if [allowInvalidTonalPalettes] is false.
  /// Otherwise you WILL get the garbage data.
  CustomColorTheme getCustomColorTheme(
    MonetColorKind kind, {
    bool allowInvalidTonalPalettes = false,
  }) {
    final dark = this.dark.getCustomColorScheme(kind);
    final light = this.light.getCustomColorScheme(kind);
    final ColorTonalPalette palette;
    switch (kind) {
      case MonetColorKind.primary:
        palette = primary;
        break;
      case MonetColorKind.secondary:
        palette = secondary;
        break;
      case MonetColorKind.tertiary:
        palette = tertiary;
        break;
      case MonetColorKind.error:
        palette = error;
        break;
      case MonetColorKind.surface:
        palette = neutral;
        break;
    }
    return CustomColorTheme(
      customColor: palette,
      dark: dark,
      light: light,
    );
  }

  /// Merge an custom color into this theme, by replacing the chosen
  /// [MonetColorKind] with it.
  ///
  /// # WARNING
  /// ## YOU WILL GET GARBAGE TONAL PALETTES WITH [MonetColorKind.surface]
  /// This will throw an [StateError] if [allowInvalidTonalPalettes] is false.
  /// Otherwise you WILL get the garbage data.
  MonetTheme mergeCustomColor(
    CustomColorTheme theme,
    MonetColorKind toKind, {
    bool allowInvalidTonalPalettes = false,
  }) {
    var primary = this.primary,
        secondary = this.secondary,
        tertiary = this.tertiary,
        error = this.error;
    final customColor = theme.customColor;
    switch (toKind) {
      case MonetColorKind.primary:
        primary = customColor;
        break;
      case MonetColorKind.secondary:
        secondary = customColor;
        break;
      case MonetColorKind.tertiary:
        tertiary = customColor;
        break;
      case MonetColorKind.error:
        error = customColor;
        break;
      case MonetColorKind.surface:
        // surface comes from the neutral tonal palette and surfaceVariant comes
        // from neutralVariant tonal palette, so we cant do anything useful.
        //
        // therefore we may throw instead of giving the user garbage input.
        if (!allowInvalidTonalPalettes) {
          throw StateError(
            'Calling mergeCustomColor with MonetColorKind.surface '
            'will generate invalid tonal palettes for neutral and '
            'neutralVariant.\n\n'
            'This is most likely an unwanted behavior, but if you want this'
            ', set the allowInvalidTonalPalettes parameter to true.',
          );
        }
        break;
    }
    return MonetTheme(
      light: light.mergeCustomColor(theme.light, toKind),
      dark: dark.mergeCustomColor(theme.dark, toKind),
      primary: primary,
      secondary: secondary,
      tertiary: tertiary,
      neutral: neutral,
      neutralVariant: neutralVariant,
      error: error,
    );
  }

  MonetTheme override({
    MonetColorScheme Function(MonetColorScheme)? light,
    MonetColorScheme Function(MonetColorScheme)? dark,
  }) =>
      MonetTheme(
        light: light == null ? this.light : light(this.light),
        dark: dark == null ? this.dark : dark(this.dark),
        primary: primary,
        secondary: secondary,
        tertiary: tertiary,
        neutral: neutral,
        neutralVariant: neutralVariant,
        error: error,
      );

  int get hashCode => Object.hashAll([
        light,
        dark,
        primary,
        secondary,
        tertiary,
        neutral,
        neutralVariant,
        error,
      ]);

  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! MonetTheme) {
      return false;
    }
    return true &&
        light == other.light &&
        dark == other.dark &&
        primary == other.primary &&
        secondary == other.secondary &&
        tertiary == other.tertiary &&
        neutral == other.neutral &&
        neutralVariant == other.neutralVariant &&
        error == other.error;
  }

  MonetTheme copyWith({
    MonetColorScheme? light,
    MonetColorScheme? dark,
    ColorTonalPalette? primary,
    ColorTonalPalette? secondary,
    ColorTonalPalette? tertiary,
    ColorTonalPalette? neutral,
    ColorTonalPalette? neutralVariant,
    ColorTonalPalette? error,
  }) =>
      MonetTheme(
        light: light ?? this.light,
        dark: dark ?? this.dark,
        primary: primary ?? this.primary,
        secondary: secondary ?? this.secondary,
        tertiary: tertiary ?? this.tertiary,
        neutral: neutral ?? this.neutral,
        neutralVariant: neutralVariant ?? this.neutralVariant,
        error: error ?? this.error,
      );

  static MonetTheme lerp(MonetTheme a, MonetTheme b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return MonetTheme(
      light: MonetColorScheme.lerp(a.light, b.light, t),
      dark: MonetColorScheme.lerp(a.dark, b.dark, t),
      primary: ColorTonalPalette.lerp(a.primary, b.primary, t),
      secondary: ColorTonalPalette.lerp(a.secondary, b.secondary, t),
      tertiary: ColorTonalPalette.lerp(a.tertiary, b.tertiary, t),
      neutral: ColorTonalPalette.lerp(a.neutral, b.neutral, t),
      neutralVariant:
          ColorTonalPalette.lerp(a.neutralVariant, b.neutralVariant, t),
      error: ColorTonalPalette.lerp(a.error, b.error, t),
    );
  }
}

class CustomColorScheme {
  final Color color;
  final Color onColor;
  final Color colorContainer;
  final Color onColorContainer;

  const CustomColorScheme({
    required this.color,
    required this.onColor,
    required this.colorContainer,
    required this.onColorContainer,
  });
  factory CustomColorScheme.fromRaw(RawCustomColorScheme raw) =>
      CustomColorScheme(
        color: Color(raw.color),
        onColor: Color(raw.onColor),
        colorContainer: Color(raw.colorContainer),
        onColorContainer: Color(raw.onColorContainer),
      );
  @override
  int get hashCode => Object.hashAll([
        color,
        onColor,
        colorContainer,
        onColorContainer,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! CustomColorScheme) {
      return false;
    }
    return true &&
        color == other.color &&
        onColor == other.onColor &&
        colorContainer == other.colorContainer &&
        onColorContainer == other.onColorContainer;
  }

  CustomColorScheme copyWith({
    Color? color,
    Color? onColor,
    Color? colorContainer,
    Color? onColorContainer,
  }) =>
      CustomColorScheme(
        color: color ?? this.color,
        onColor: onColor ?? this.onColor,
        colorContainer: colorContainer ?? this.colorContainer,
        onColorContainer: onColorContainer ?? this.onColorContainer,
      );

  static CustomColorScheme lerp(
      CustomColorScheme a, CustomColorScheme b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return CustomColorScheme(
      color: Color.lerp(a.color, b.color, t)!,
      onColor: Color.lerp(a.onColor, b.onColor, t)!,
      colorContainer: Color.lerp(a.colorContainer, b.colorContainer, t)!,
      onColorContainer: Color.lerp(a.onColorContainer, b.onColorContainer, t)!,
    );
  }
}

class CustomColorTheme {
  final ColorTonalPalette customColor;
  final CustomColorScheme light;
  final CustomColorScheme dark;

  const CustomColorTheme({
    required this.customColor,
    required this.light,
    required this.dark,
  });

  factory CustomColorTheme.fromRaw(RawCustomColorTheme raw) => CustomColorTheme(
        customColor: ColorTonalPalette.fromRaw(raw.color),
        light: CustomColorScheme.fromRaw(raw.light),
        dark: CustomColorScheme.fromRaw(raw.dark),
      );
  @override
  int get hashCode => Object.hashAll([
        customColor,
        light,
        dark,
      ]);
  @override
  bool operator ==(other) {
    if (identical(other, this)) {
      return true;
    }
    if (other is! CustomColorTheme) {
      return false;
    }
    return true &&
        customColor == other.customColor &&
        light == other.light &&
        dark == other.dark;
  }

  CustomColorTheme copyWith({
    ColorTonalPalette? customColor,
    CustomColorScheme? light,
    CustomColorScheme? dark,
  }) =>
      CustomColorTheme(
        customColor: customColor ?? this.customColor,
        light: light ?? this.light,
        dark: dark ?? this.dark,
      );

  static CustomColorTheme lerp(
      CustomColorTheme a, CustomColorTheme b, double t) {
    assert(a != null);
    assert(b != null);
    assert(t != null);
    return CustomColorTheme(
      customColor: ColorTonalPalette.lerp(a.customColor, b.customColor, t),
      light: CustomColorScheme.lerp(a.light, b.light, t),
      dark: CustomColorScheme.lerp(a.dark, b.dark, t),
    );
  }
}
