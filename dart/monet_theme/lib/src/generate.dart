import 'package:libmonet/libmonet.dart';

import 'model.dart';

CorePalette _seededOr(int? seed, CorePalette or) {
  if (seed == null) {
    return or;
  }
  return CorePalette(seed);
}

/// Generate an [RawMonetTheme] from the core palette [palette], while
/// optionally overriding the seeds for the [TonalPalette]s.
RawMonetTheme generateRawTheme(
  int seed, {
  int? primarySeed,
  int? secondarySeed,
  int? tertiarySeed,
  int? neutralSeed,
  int? neutralVariantSeed,
  int? errorSeed,
}) {
  final main = CorePalette(seed);
  final primary = _seededOr(primarySeed, main).a1,
      secondary = _seededOr(secondarySeed, main).a2,
      tertiary = _seededOr(tertiarySeed, main).a3,
      neutral = _seededOr(neutralSeed, main).n1,
      neutralVariant = _seededOr(neutralVariantSeed, main).n2,
      error = _seededOr(errorSeed, main).error;
  return generateRawThemeFrom(
    main,
    neutral: neutral,
    neutralVariant: neutralVariant,
    primary: primary,
    secondary: secondary,
    tertiary: tertiary,
    error: error,
  );
}

/// Generate an [RawMonetTheme] from the core palette [palette], while
/// optionally overriding [primary], [secondary], [tertiary], [neutral],
/// [neutralVariant] and [error].
RawMonetTheme generateRawThemeFrom(
  CorePalette? main, {
  TonalPalette? primary,
  TonalPalette? secondary,
  TonalPalette? tertiary,
  TonalPalette? neutral,
  TonalPalette? neutralVariant,
  TonalPalette? error,
}) {
  final primaryP = primary ?? main!.a1,
      secondaryP = secondary ?? main!.a2,
      tertiaryP = tertiary ?? main!.a3,
      neutralP = neutral ?? main!.n1,
      neutralVariantP = neutral ?? main!.n2,
      errorP = error ?? main!.error;
  final lightScheme = _lightSchemeFrom(
        primaryP,
        secondaryP,
        tertiaryP,
        neutralP,
        neutralVariantP,
        errorP,
      ),
      darkScheme = _darkSchemeFrom(
        primaryP,
        secondaryP,
        tertiaryP,
        neutralP,
        neutralVariantP,
        errorP,
      );
  return RawMonetTheme(
    light: lightScheme,
    dark: darkScheme,
    neutral: neutralP,
    neutralVariant: neutralVariantP,
    primary: primaryP,
    secondary: secondaryP,
    tertiary: tertiaryP,
    error: errorP,
  );
}

RawMonetColorScheme _lightSchemeFrom(
  TonalPalette primary,
  TonalPalette secondary,
  TonalPalette tertiary,
  TonalPalette neutral,
  TonalPalette neutralVariant,
  TonalPalette error,
) =>
    RawMonetColorScheme(
      primary: primary[40],
      onPrimary: primary[100],
      primaryContainer: primary[90],
      onPrimaryContainer: primary[10],
      secondary: secondary[40],
      onSecondary: secondary[100],
      secondaryContainer: secondary[90],
      onSecondaryContainer: secondary[10],
      tertiary: tertiary[40],
      onTertiary: tertiary[100],
      tertiaryContainer: tertiary[90],
      onTertiaryContainer: tertiary[10],
      error: error[40],
      errorContainer: error[90],
      onError: error[100],
      onErrorContainer: error[10],
      background: neutral[99],
      onBackground: neutral[10],
      surface: neutral[99],
      onSurface: neutral[10],
      surfaceVariant: neutralVariant[90],
      onSurfaceVariant: neutralVariant[30],
      outline: neutralVariant[50],
      inverseOnSurface: neutral[95],
      inverseSurface: neutral[20],
    );

RawMonetColorScheme _darkSchemeFrom(
  TonalPalette primary,
  TonalPalette secondary,
  TonalPalette tertiary,
  TonalPalette neutral,
  TonalPalette neutralVariant,
  TonalPalette error,
) =>
    RawMonetColorScheme(
      primary: primary[80],
      onPrimary: primary[20],
      primaryContainer: primary[30],
      onPrimaryContainer: primary[90],
      secondary: secondary[80],
      onSecondary: secondary[20],
      secondaryContainer: secondary[30],
      onSecondaryContainer: secondary[90],
      tertiary: tertiary[80],
      onTertiary: tertiary[20],
      tertiaryContainer: tertiary[30],
      onTertiaryContainer: tertiary[90],
      error: error[80],
      errorContainer: error[30],
      onError: error[20],
      onErrorContainer: error[90],
      background: neutral[10],
      onBackground: neutral[90],
      surface: neutral[10],
      onSurface: neutral[90],
      surfaceVariant: neutralVariant[30],
      onSurfaceVariant: neutralVariant[80],
      outline: neutralVariant[60],
      inverseOnSurface: neutral[10],
      inverseSurface: neutral[90],
    );
