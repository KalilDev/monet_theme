import 'package:libmonet/libmonet.dart' hide Color;
import 'package:flutter/material.dart';
import 'package:monet_theme/monet_theme.dart';

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
  });

  factory MonetColorScheme.fromRaw(RawMonetColorScheme raw) => MonetColorScheme(
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
      );
}

class ColorTonalPalette {
  final TonalPalette _base;

  const ColorTonalPalette.fromRaw(this._base);

  Color getTone(int tone) => Color(_base.getTone(tone));
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
        light: MonetColorScheme.fromRaw(raw.light),
        dark: MonetColorScheme.fromRaw(raw.dark),
        primary: ColorTonalPalette.fromRaw(raw.primary),
        secondary: ColorTonalPalette.fromRaw(raw.secondary),
        tertiary: ColorTonalPalette.fromRaw(raw.tertiary),
        neutral: ColorTonalPalette.fromRaw(raw.neutral),
        neutralVariant: ColorTonalPalette.fromRaw(raw.neutralVariant),
        error: ColorTonalPalette.fromRaw(raw.error),
      );

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
