import 'package:libmonet/libmonet.dart';

import '../theme.dart';

class ThemeAdapter extends ThemeAdapterBase {
  ThemeAdapter(ThemeAdapterProps props) : super(props);
  factory ThemeAdapter.fromColor(String value, bool is3p,
      [ThemeAdapterOverrides? overrides]) {
    print('theme adapter from color');
    final keyTones = CorePalette(rgbFromHex(value));
    return ThemeAdapter(ThemeAdapterProps(
        tones: keyTones,
        seed: value,
        is3p: is3p,
        overrides: overrides ?? ThemeAdapterOverrides(),
        blend: false,
        isBaseline: false));
  }

  static String baselineSeed(bool is3p) {
    final baseline = DEFAULT_COLORS.baseline;
    return is3p ? baseline.context_3p : baseline.context_1p;
  }

  factory ThemeAdapter.fromTheme(MonetTheme theme) {
    print('theme adapter from theme $theme');
    final is3p = checks_isTheme3p(theme);
    final seed = theme?.source?.seed ?? ThemeAdapter.baselineSeed(is3p);
    final imageUrl = theme?.source?.imageUrl;
    final keyTones = new CorePalette(rgbFromHex(seed));
    final themeOverrides = ThemeAdapterOverrides(
      light: theme.light,
      dark: theme.dark,
      tonalGroups: TonalGroups(
          primary: theme.primary,
          secondary: theme.secondary,
          tertiary: theme.tertiary,
          neutral: theme.neutral,
          neutralVariant: theme.neutralVariant,
          error: theme.error),
      source: theme.source,
    );
    final isBaseline = checks_isThemeBaseline(theme);
    return new ThemeAdapter(ThemeAdapterProps(
        tones: keyTones,
        seed: seed,
        is3p: is3p,
        imageUrl: imageUrl,
        isBaseline: isBaseline,
        overrides: themeOverrides,
        blend: false));
  }
  factory ThemeAdapter.defaults([bool is3p = false]) {
    print('theme adapter defaults');
    final seed = ThemeAdapter.baselineSeed(is3p),
        keyTones = new CorePalette(rgbFromHex(seed));
    return is3p
        ? new ThemeAdapter(ThemeAdapterProps(
            tones: keyTones,
            seed: seed,
            is3p: is3p,
            overrides: ThemeAdapterOverrides(
                tonalGroups: TonalGroups(
                    primary: BASELINE_3P.primary,
                    secondary: BASELINE_3P.secondary,
                    tertiary: BASELINE_3P.tertiary,
                    neutral: BASELINE_3P.neutral,
                    neutralVariant: BASELINE_3P.neutralVariant,
                    error: BASELINE_3P.error)),
            blend: false,
            isBaseline: true))
        : new ThemeAdapter(ThemeAdapterProps(
            tones: keyTones,
            seed: seed,
            is3p: is3p,
            overrides: ThemeAdapterOverrides(
              tonalGroups: TonalGroups(
                  primary: BASELINE_1P.primary,
                  secondary: BASELINE_1P.secondary,
                  tertiary: BASELINE_1P.tertiary,
                  neutral: BASELINE_1P.neutral,
                  neutralVariant: BASELINE_1P.neutralVariant,
                  error: BASELINE_1P.error),
            ),
            blend: false,
            isBaseline: true));
  }
}
