import 'package:libmonet/libmonet.dart';

class RawMonetColorScheme {
  final int primary;
  final int onPrimary;
  final int primaryContainer;
  final int onPrimaryContainer;
  final int secondary;
  final int onSecondary;
  final int secondaryContainer;
  final int onSecondaryContainer;
  final int tertiary;
  final int onTertiary;
  final int tertiaryContainer;
  final int onTertiaryContainer;
  final int error;
  final int errorContainer;
  final int onError;
  final int onErrorContainer;
  final int background;
  final int onBackground;
  final int surface;
  final int onSurface;
  final int surfaceVariant;
  final int onSurfaceVariant;
  final int outline;
  final int inverseOnSurface;
  final int inverseSurface;

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
    int? primary,
    int? onPrimary,
    int? primaryContainer,
    int? onPrimaryContainer,
    int? secondary,
    int? onSecondary,
    int? secondaryContainer,
    int? onSecondaryContainer,
    int? tertiary,
    int? onTertiary,
    int? tertiaryContainer,
    int? onTertiaryContainer,
    int? error,
    int? errorContainer,
    int? onError,
    int? onErrorContainer,
    int? background,
    int? onBackground,
    int? surface,
    int? onSurface,
    int? surfaceVariant,
    int? onSurfaceVariant,
    int? outline,
    int? inverseOnSurface,
    int? inverseSurface,
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
