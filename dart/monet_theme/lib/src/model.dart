import 'package:libmonet/libmonet.dart';

class RawMonetColorScheme {
  final ARGBColor primary;
  final ARGBColor onPrimary;
  final ARGBColor primaryContainer;
  final ARGBColor onPrimaryContainer;
  final ARGBColor secondary;
  final ARGBColor onSecondary;
  final ARGBColor secondaryContainer;
  final ARGBColor onSecondaryContainer;
  final ARGBColor tertiary;
  final ARGBColor onTertiary;
  final ARGBColor tertiaryContainer;
  final ARGBColor onTertiaryContainer;
  final ARGBColor error;
  final ARGBColor errorContainer;
  final ARGBColor onError;
  final ARGBColor onErrorContainer;
  final ARGBColor background;
  final ARGBColor onBackground;
  final ARGBColor surface;
  final ARGBColor onSurface;
  final ARGBColor surfaceVariant;
  final ARGBColor onSurfaceVariant;
  final ARGBColor outline;
  final ARGBColor inverseOnSurface;
  final ARGBColor inverseSurface;

  const RawMonetColorScheme({
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

  RawMonetColorScheme copyWith({
    ARGBColor? primary,
    ARGBColor? onPrimary,
    ARGBColor? primaryContainer,
    ARGBColor? onPrimaryContainer,
    ARGBColor? secondary,
    ARGBColor? onSecondary,
    ARGBColor? secondaryContainer,
    ARGBColor? onSecondaryContainer,
    ARGBColor? tertiary,
    ARGBColor? onTertiary,
    ARGBColor? tertiaryContainer,
    ARGBColor? onTertiaryContainer,
    ARGBColor? error,
    ARGBColor? errorContainer,
    ARGBColor? onError,
    ARGBColor? onErrorContainer,
    ARGBColor? background,
    ARGBColor? onBackground,
    ARGBColor? surface,
    ARGBColor? onSurface,
    ARGBColor? surfaceVariant,
    ARGBColor? onSurfaceVariant,
    ARGBColor? outline,
    ARGBColor? inverseOnSurface,
    ARGBColor? inverseSurface,
  }) =>
      RawMonetColorScheme(
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

class OverridenTonalPalette extends TonalPalette {
  final Map<int, ARGBColor> _values;

  const OverridenTonalPalette(this._values);

  @override
  ARGBColor getTone(int tone) => _values[tone]!;
}

class RawMonetTheme {
  final RawMonetColorScheme light;
  final RawMonetColorScheme dark;
  final TonalPalette primary;
  final TonalPalette secondary;
  final TonalPalette tertiary;
  final TonalPalette neutral;
  final TonalPalette neutralVariant;
  final TonalPalette error;

  const RawMonetTheme({
    required this.light,
    required this.dark,
    required this.primary,
    required this.secondary,
    required this.tertiary,
    required this.neutral,
    required this.neutralVariant,
    required this.error,
  });
  RawMonetTheme override({
    RawMonetColorScheme Function(RawMonetColorScheme)? light,
    RawMonetColorScheme Function(RawMonetColorScheme)? dark,
  }) =>
      RawMonetTheme(
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

class RawCustomColorScheme {
  final ARGBColor color;
  final ARGBColor onColor;
  final ARGBColor colorContainer;
  final ARGBColor onColorContainer;

  const RawCustomColorScheme({
    required this.color,
    required this.onColor,
    required this.colorContainer,
    required this.onColorContainer,
  });

  RawCustomColorScheme copyWith({
    ARGBColor? color,
    ARGBColor? onColor,
    ARGBColor? colorContainer,
    ARGBColor? onColorContainer,
  }) =>
      RawCustomColorScheme(
        color: color ?? this.color,
        onColor: onColor ?? this.onColor,
        colorContainer: colorContainer ?? this.colorContainer,
        onColorContainer: onColorContainer ?? this.onColorContainer,
      );
}

class RawCustomColorTheme {
  final TonalPalette color;
  final RawCustomColorScheme light;
  final RawCustomColorScheme dark;

  const RawCustomColorTheme({
    required this.color,
    required this.light,
    required this.dark,
  });
}
