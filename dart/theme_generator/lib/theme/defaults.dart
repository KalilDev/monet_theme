import '../theme.dart';

const Set<String> KEY_COLORS = {
  'primary',
  'secondary',
  'tertiary',
  'neutral',
  'neutralVariant',
  'error',
};
final DefaultColors DEFAULT_COLORS = DefaultColors();

class DefaultBaselineThemeContexts {
  final ThemeSource source3p = defaults_COLORS_3P;
  final ThemeSource source1p = defaults_COLORS_1P;
  final String context_3p = defaults_COLORS_3P.seed!;
  final String context_1p = defaults_COLORS_1P.seed!;
}

class DefaultThemeSeedColors {
  final String green = '#386A20';
  final String yellow = '#616200';
  final String red = '#9C4146';
  final String blue = '#00658E';

  const DefaultThemeSeedColors();
}

class SemanticColors {
  final String red = '#DC362E';
  final String orange = '#C55400';
  final String yellow = '#B26C00';
  final String green = '#198639';
  final String blue = '#1B6EF3';
  const SemanticColors();
}

class DefaultColors {
  final DefaultBaselineThemeContexts baseline = DefaultBaselineThemeContexts();
  final DefaultThemeSeedColors theme = DefaultThemeSeedColors();
  final SemanticColors semantic = SemanticColors();
  final String white = '#FFFFFF';
  final String black = '#000000';
}
