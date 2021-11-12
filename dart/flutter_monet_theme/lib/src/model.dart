import 'package:flutter_monet_theme/src/generate.dart';
import 'package:libmonet/libmonet.dart' hide Color;
import 'package:flutter/material.dart';
import 'package:monet_theme/monet_theme.dart';
import 'custom_color.dart';

enum MonetColorKind {
  primary,
  secondary,
  tertiary,
  error,
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
  final Color inverseOnSurface;
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
    required this.inverseOnSurface,
    required this.inverseSurface,
    required this.brightness,
  });

  factory MonetColorScheme.fromRaw(
          RawMonetColorScheme raw, Brightness brightness) =>
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
        inverseOnSurface: Color(raw.inverseOnSurface),
        inverseSurface: Color(raw.inverseSurface),
        brightness: brightness,
      );

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
    Color? inverseOnSurface,
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
        inverseOnSurface: inverseOnSurface ?? this.inverseOnSurface,
        inverseSurface: inverseSurface ?? this.inverseSurface,
        brightness: brightness ?? this.brightness,
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
    }
  }
}

class ColorTonalPalette {
  final TonalPalette raw;

  const ColorTonalPalette._(this.raw);
  factory ColorTonalPalette.fromRaw(TonalPalette raw) =>
      ColorTonalPalette._(raw);

  Color getTone(int tone) => Color(raw.getTone(tone));
  Color operator [](int tone) => getTone(tone);
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

  MonetTheme mergeCustomColor(
    CustomColorTheme theme,
    MonetColorKind toKind,
  ) {
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
}
