
import 'package:libmonet/libmonet.dart';

import '../theme.dart';

class ThemeAdapterProps {
  bool isBaseline;
  bool is3p;
  String imageUrl;
  CorePalette tones;
  ThemeAdapterOverrides overrides;
  String seed;
  CorePalette keyTones;
  bool blend;
}

class ThemeAdapterOverrides {
  TonalGroups tonalGroups;
  ThemeSource source;
}

typedef TonalGroup = Map<String, String>;

class TonalGroups {
  final TonalGroup? primary;
  final TonalGroup? secondary;
  final TonalGroup? tertiary;
  final TonalGroup? neutral;
  final TonalGroup? neutralVariant;
  final TonalGroup? error;

  TonalGroup? operator[](String name) {
    switch (name) {
      case 'primary': return primary;
      case 'secondary': return secondary;
      case 'tertiary': return tertiary;
      case 'neutral': return neutral;
      case 'neutralVariant': return neutralVariant;
      case 'error': return error;
    }
  }

  TonalGroups({this.primary, this.secondary, this.tertiary, this.neutral, this.neutralVariant, this.error,});

  TonalGroups assignFromOther(TonalGroups? other) {
    if (other == null) {
      return this;
    }
    return TonalGroups(
          primary: other.primary ?? primary,
          secondary: other.secondary ?? secondary,
          tertiary: other.tertiary ?? tertiary,
          neutral: other.neutral ?? neutral,
          neutralVariant: other.neutralVariant ?? neutralVariant,
          error: other.error ?? error,
    );
  }
}

class ThemeSource {
  final String? seed;
  final String? imageUrl;
  final String? primary;
  final String? secondary;
  final String? tertiary;
  final String? neutral;
  final String? neutralVariant;
  final String? error;

  ThemeSource({this.seed, this.imageUrl, this.primary, this.secondary, this.tertiary, this.neutral, this.neutralVariant, this.error,});

  ThemeSource assignFromOther(ThemeSource? other) {
    if (other == null) {
      return this;
    }
    return ThemeSource(
          seed: other.seed ?? seed,
          imageUrl: other.imageUrl ?? imageUrl,
          primary: other.primary ?? primary,
          secondary: other.secondary ?? secondary,
          tertiary: other.tertiary ?? tertiary,
          neutral: other.neutral ?? neutral,
          neutralVariant: other.neutralVariant ?? neutralVariant,
          error: other.error ?? error,
    );
  }
}

typedef MonetColor = String;

class MonetColorScheme {

  final MonetColor? primary;
  final MonetColor? onPrimary;
  final MonetColor? primaryContainer;
  final MonetColor? onPrimaryContainer;
  final MonetColor? secondary;
  final MonetColor? onSecondary;
  final MonetColor? secondaryContainer;
  final MonetColor? onSecondaryContainer;
  final MonetColor? tertiary;
  final MonetColor? onTertiary;
  final MonetColor? tertiaryContainer;
  final MonetColor? onTertiaryContainer;
  final MonetColor? error;
  final MonetColor? errorContainer;
  final MonetColor? onError;
  final MonetColor? onErrorContainer;
  final MonetColor? background;
  final MonetColor? onBackground;
  final MonetColor? surface;
  final MonetColor? onSurface;
  final MonetColor? surfaceVariant;
  final MonetColor? onSurfaceVariant;
  final MonetColor? outline;
  final MonetColor? inverseOnSurface;
  final MonetColor? inverseSurface;

  const MonetColorScheme({this.primary, this.onPrimary, this.primaryContainer, this.onPrimaryContainer, this.secondary, this.onSecondary, this.secondaryContainer, this.onSecondaryContainer, this.tertiary, this.onTertiary, this.tertiaryContainer, this.onTertiaryContainer, this.error, this.errorContainer, this.onError, this.onErrorContainer, this.background, this.onBackground, this.surface, this.onSurface, this.surfaceVariant, this.onSurfaceVariant, this.outline, this.inverseOnSurface, this.inverseSurface});

}

class FontStyle {
  final String fontFamilyName;
    final String fontFamilyStyle;
    final int fontSize;
    final int lineHeight;
    final double letterSpacing;
    final double paragraphSpacing;

  const FontStyle({required this.fontFamilyName, required this.fontFamilyStyle,required  this.fontSize,required  this.lineHeight,required  this.letterSpacing,required  this.paragraphSpacing,});
}

class ThemeAdapterBase {
    ThemeAdapterProps props;
    ThemeAdapterBase(this.props);
    bool get isBaseline {
        return checks_isThemeBaseline(this.save());
    }
    bool get is3p {
        return this.props.is3p;
    }
    Map<String, FontStyle> get styles {
        return this.props.is3p ? BASELINE_3P.styles : BASELINE_1P.styles;
    }
    String? get imageUrl {
        return this.props.imageUrl;
    }
    
    MonetColorScheme get light {
        final overrides = props.isBaseline ? BASELINE_3P.light : props.overrides?.light ?? Object();
        final p = palettes;
        return MonetColorScheme(
            primary: overrides?.primary ?? p['P-40']!,
            onPrimary: overrides?.onPrimary ?? p['P-100']!,
            primaryContainer: overrides?.primaryContainer ?? p['P-90']!,
            onPrimaryContainer: overrides?.onPrimaryContainer ?? p['P-10']!,
            secondary: overrides?.secondary ?? p['S-40']!,
            onSecondary: overrides?.onSecondary ?? p['S-100']!,
            secondaryContainer: overrides?.secondaryContainer ?? p['S-90']!,
            onSecondaryContainer: overrides?.onSecondaryContainer ?? p['S-10']!,
            tertiary: overrides?.tertiary ?? p['T-40']!,
            onTertiary: overrides?.onTertiary ?? p['T-100']!,
            tertiaryContainer: overrides?.tertiaryContainer ?? p['T-90']!,
            onTertiaryContainer: overrides?.onTertiaryContainer ?? p['T-10']!,
            error: overrides?.error ?? p['E-40']!,
            errorContainer: overrides?.errorContainer ?? p['E-90']!,
            onError: overrides?.onError ?? p['E-100']!,
            onErrorContainer: overrides?.onErrorContainer ?? p['E-10']!,
            background: overrides?.background ?? p['N-99']!,
            onBackground: overrides?.onBackground ?? p['N-10']!,
            surface: overrides?.surface ?? p['N-99']!,
            onSurface: overrides?.onSurface ?? p['N-10']!,
            surfaceVariant: overrides?.surfaceVariant ?? p['NV-90']!,
            onSurfaceVariant: overrides?.onSurfaceVariant ?? p['NV-30']!,
            outline: overrides?.outline ?? p['NV-50']!,
            inverseOnSurface: overrides?.inverseOnSurface ?? p['N-95']!,
            inverseSurface: overrides?.inverseSurface ?? p['N-20']!
        );
    }
    MonetColorScheme get dark {
        final overrides = props.isBaseline ? BASELINE_3P.dark : props.overrides.dark ?? Object();
        final p = palettes;
        return MonetColorScheme(
            primary: overrides?.primary ?? p['P-80']!,
            onPrimary: overrides?.onPrimary ?? p['P-20']!,
            primaryContainer: overrides?.primaryContainer ?? p['P-30']!,
            onPrimaryContainer: overrides?.onPrimaryContainer ?? p['P-90']!,
            secondary: overrides?.secondary ?? p['S-80']!,
            onSecondary: overrides?.onSecondary ?? p['S-20']!,
            secondaryContainer: overrides?.secondaryContainer ?? p['S-30']!,
            onSecondaryContainer: overrides?.onSecondaryContainer ?? p['S-90']!,
            tertiary: overrides?.tertiary ?? p['T-80']!,
            onTertiary: overrides?.onTertiary ?? p['T-20']!,
            tertiaryContainer: overrides?.tertiaryContainer ?? p['T-30']!,
            onTertiaryContainer: overrides?.onTertiaryContainer ?? p['T-90']!,
            error: overrides?.error ?? p['E-80']!,
            errorContainer: overrides?.errorContainer ?? p['E-30']!,
            onError: overrides?.onError ?? p['E-20']!,
            onErrorContainer: overrides?.onErrorContainer ?? p['E-90']!,
            background: overrides?.background ?? p['N-10']!,
            onBackground: overrides?.onBackground ?? p['N-90']!,
            surface: overrides?.surface ?? p['N-10']!,
            onSurface: overrides?.onSurface ?? p['N-90']!,
            surfaceVariant: overrides?.surfaceVariant ?? p['NV-30']!,
            onSurfaceVariant: overrides?.onSurfaceVariant ?? p['NV-80']!,
            outline: overrides?.outline ?? p['NV-60']!,
            inverseOnSurface: overrides?.inverseOnSurface ?? p['N-10']!,
            inverseSurface: overrides?.inverseSurface ?? p['N-90']!
        );
    }
    /*get androidLight() {
        var _a, p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidLight, JSCompiler__a, JSCompiler__b, JSCompiler__c, JSCompiler__d, JSCompiler__e, JSCompiler__f, JSCompiler__g, JSCompiler__h, JSCompiler__j, JSCompiler__k, JSCompiler__l, JSCompiler__m, JSCompiler__o, JSCompiler__p, JSCompiler__q, JSCompiler__r, JSCompiler__s, JSCompiler__t, JSCompiler__u, JSCompiler__v, JSCompiler__w, JSCompiler__x, JSCompiler__y, JSCompiler__z, JSCompiler__0, JSCompiler__1, JSCompiler__2, JSCompiler__3, JSCompiler__4, JSCompiler__5, JSCompiler__6, JSCompiler__7, JSCompiler__8, JSCompiler__9, JSCompiler__10, JSCompiler__11, JSCompiler__12, JSCompiler__13, JSCompiler__14, JSCompiler__15, JSCompiler__16, JSCompiler__17, JSCompiler__18, JSCompiler__19, JSCompiler__20, JSCompiler__21, JSCompiler__22, JSCompiler__23, JSCompiler__24, JSCompiler__25;
        return {
            colorAccentPrimary: null !== (JSCompiler__b = null !== (JSCompiler__a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== JSCompiler__a ? JSCompiler__a : p['P-90']!) && void 0 !== JSCompiler__b ? JSCompiler__b : color_utils_numberToHex(key.a1.tone(90)),
            colorAccentPrimaryVariant: null !== (JSCompiler__d = null !== (JSCompiler__c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== JSCompiler__c ? JSCompiler__c : p['P-40']!) && void 0 !== JSCompiler__d ? JSCompiler__d : color_utils_numberToHex(key.a1.tone(40)),
            colorAccentSecondary: null !== (JSCompiler__f = null !== (JSCompiler__e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== JSCompiler__e ? JSCompiler__e : p['S-90']!) && void 0 !== JSCompiler__f ? JSCompiler__f : color_utils_numberToHex(key.a2.tone(90)),
            colorAccentSecondaryVariant: null !== (JSCompiler__h = null !== (JSCompiler__g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== JSCompiler__g ? JSCompiler__g : p['S-40']!) && void 0 !== JSCompiler__h ? JSCompiler__h : color_utils_numberToHex(key.a2.tone(40)),
            colorAccentTertiary: null !== (JSCompiler__k = null !== (JSCompiler__j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== JSCompiler__j ? JSCompiler__j : p['T-90']!) && void 0 !== JSCompiler__k ? JSCompiler__k : color_utils_numberToHex(key.a3.tone(90)),
            colorAccentTertiaryVariant: null !== (JSCompiler__m = null !== (JSCompiler__l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== JSCompiler__l ? JSCompiler__l : p['T-40']!) && void 0 !== JSCompiler__m ? JSCompiler__m : color_utils_numberToHex(key.a3.tone(40)),
            textColorPrimary: null !== (JSCompiler__p = null !== (JSCompiler__o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== JSCompiler__o ? JSCompiler__o : p['N-10']!) && void 0 !== JSCompiler__p ? JSCompiler__p : color_utils_numberToHex(key.n1.tone(10)),
            textColorSecondary: null !== (JSCompiler__r = null !== (JSCompiler__q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== JSCompiler__q ? JSCompiler__q : p['NV-30']!) && void 0 !== JSCompiler__r ? JSCompiler__r : color_utils_numberToHex(key.n2.tone(30)),
            textColorTertiary: null !== (JSCompiler__t = null !== (JSCompiler__s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== JSCompiler__s ? JSCompiler__s : p['NV-50']!) && void 0 !== JSCompiler__t ? JSCompiler__t : color_utils_numberToHex(key.n2.tone(50)),
            textColorPrimaryInverse: null !== (JSCompiler__v = null !== (JSCompiler__u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== JSCompiler__u ? JSCompiler__u : p['N-95']!) && void 0 !== JSCompiler__v ? JSCompiler__v : color_utils_numberToHex(key.n1.tone(95)),
            textColorSecondaryInverse: null !== (JSCompiler__x = null !== (JSCompiler__w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== JSCompiler__w ? JSCompiler__w : p['N-80']!) && void 0 !== JSCompiler__x ? JSCompiler__x : color_utils_numberToHex(key.n1.tone(80)),
            textColorTertiaryInverse: null !== (JSCompiler__z = null !== (JSCompiler__y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== JSCompiler__y ? JSCompiler__y : p['N-60']!) && void 0 !== JSCompiler__z ? JSCompiler__z : color_utils_numberToHex(key.n1.tone(60)),
            colorBackground: null !== (JSCompiler__1 = null !== (JSCompiler__0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== JSCompiler__0 ? JSCompiler__0 : p['N-95']!) && void 0 !== JSCompiler__1 ? JSCompiler__1 : color_utils_numberToHex(key.n1.tone(95)),
            colorBackgroundFloating: null !== (JSCompiler__3 = null !== (JSCompiler__2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== JSCompiler__2 ? JSCompiler__2 : p['N-98']!) && void 0 !== JSCompiler__3 ? JSCompiler__3 : color_utils_numberToHex(key.n1.tone(98)),
            colorSurface: null !== (JSCompiler__5 = null !== (JSCompiler__4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== JSCompiler__4 ? JSCompiler__4 : p['N-98']!) && void 0 !== JSCompiler__5 ? JSCompiler__5 : color_utils_numberToHex(key.n1.tone(98)),
            colorSurfaceVariant: null !== (JSCompiler__7 = null !== (JSCompiler__6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== JSCompiler__6 ? JSCompiler__6 : p['N-90']!) && void 0 !== JSCompiler__7 ? JSCompiler__7 : color_utils_numberToHex(key.n1.tone(90)),
            colorSurfaceHighlight: null !== (JSCompiler__9 = null !== (JSCompiler__8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== JSCompiler__8 ? JSCompiler__8 : p['N-100']!) && void 0 !== JSCompiler__9 ? JSCompiler__9 : color_utils_numberToHex(key.n1.tone(100)),
            surfaceHeader: null !== (JSCompiler__11 = null !== (JSCompiler__10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== JSCompiler__10 ? JSCompiler__10 : p['N-90']!) && void 0 !== JSCompiler__11 ? JSCompiler__11 : color_utils_numberToHex(key.n1.tone(90)),
            underSurface: null !== (JSCompiler__13 = null !== (JSCompiler__12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== JSCompiler__12 ? JSCompiler__12 : p['N-0']!) && void 0 !== JSCompiler__13 ? JSCompiler__13 : color_utils_numberToHex(key.n1.tone(0)),
            offState: null !== (JSCompiler__15 = null !== (JSCompiler__14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== JSCompiler__14 ? JSCompiler__14 : p['N-20']!) && void 0 !== JSCompiler__15 ? JSCompiler__15 : color_utils_numberToHex(key.n1.tone(20)),
            accentSurface: null !== (JSCompiler__17 = null !== (JSCompiler__16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== JSCompiler__16 ? JSCompiler__16 : p['NV-95']!) && void 0 !== JSCompiler__17 ? JSCompiler__17 : color_utils_numberToHex(key.a2.tone(95)),
            textPrimaryOnAccent: null !== (JSCompiler__19 = null !== (JSCompiler__18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== JSCompiler__18 ? JSCompiler__18 : p['N-10']!) && void 0 !== JSCompiler__19 ? JSCompiler__19 : color_utils_numberToHex(key.n1.tone(10)),
            textSecondaryOnAccent: null !== (JSCompiler__21 = null !== (JSCompiler__20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== JSCompiler__20 ? JSCompiler__20 : p['NV-30']!) && void 0 !== JSCompiler__21 ? JSCompiler__21 : color_utils_numberToHex(key.n2.tone(30)),
            volumeBackground: null !== (JSCompiler__23 = null !== (JSCompiler__22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== JSCompiler__22 ? JSCompiler__22 : p['N-25']!) && void 0 !== JSCompiler__23 ? JSCompiler__23 : color_utils_numberToHex(key.n1.tone(25)),
            scrim: null !== (JSCompiler__25 = null !== (JSCompiler__24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== JSCompiler__24 ? JSCompiler__24 : p['N-80']!) && void 0 !== JSCompiler__25 ? JSCompiler__25 : color_utils_numberToHex(key.n1.tone(80))
        };
    }
    get androidDark() {
        var _a, p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidDark, JSCompiler__a, JSCompiler__b, JSCompiler__c, JSCompiler__d, JSCompiler__e, JSCompiler__f, JSCompiler__g, JSCompiler__h, JSCompiler__j, JSCompiler__k, JSCompiler__l, JSCompiler__m, JSCompiler__o, JSCompiler__p, JSCompiler__q, JSCompiler__r, JSCompiler__s, JSCompiler__t, JSCompiler__u, JSCompiler__v, JSCompiler__w, JSCompiler__x, JSCompiler__y, JSCompiler__z, JSCompiler__0, JSCompiler__1, JSCompiler__2, JSCompiler__3, JSCompiler__4, JSCompiler__5, JSCompiler__6, JSCompiler__7, JSCompiler__8, JSCompiler__9, JSCompiler__10, JSCompiler__11, JSCompiler__12, JSCompiler__13, JSCompiler__14, JSCompiler__15, JSCompiler__16, JSCompiler__17, JSCompiler__18, JSCompiler__19, JSCompiler__20, JSCompiler__21, JSCompiler__22, JSCompiler__23, JSCompiler__24, JSCompiler__25;
        return {
            colorAccentPrimary: null !== (JSCompiler__b = null !== (JSCompiler__a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== JSCompiler__a ? JSCompiler__a : p['P-90']!) && void 0 !== JSCompiler__b ? JSCompiler__b : color_utils_numberToHex(key.a1.tone(90)),
            colorAccentPrimaryVariant: null !== (JSCompiler__d = null !== (JSCompiler__c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== JSCompiler__c ? JSCompiler__c : p['P-70']!) && void 0 !== JSCompiler__d ? JSCompiler__d : color_utils_numberToHex(key.a1.tone(70)),
            colorAccentSecondary: null !== (JSCompiler__f = null !== (JSCompiler__e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== JSCompiler__e ? JSCompiler__e : p['S-90']!) && void 0 !== JSCompiler__f ? JSCompiler__f : color_utils_numberToHex(key.a2.tone(90)),
            colorAccentSecondaryVariant: null !== (JSCompiler__h = null !== (JSCompiler__g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== JSCompiler__g ? JSCompiler__g : p['S-70']!) && void 0 !== JSCompiler__h ? JSCompiler__h : color_utils_numberToHex(key.a2.tone(70)),
            colorAccentTertiary: null !== (JSCompiler__k = null !== (JSCompiler__j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== JSCompiler__j ? JSCompiler__j : p['T-90']!) && void 0 !== JSCompiler__k ? JSCompiler__k : color_utils_numberToHex(key.a3.tone(90)),
            colorAccentTertiaryVariant: null !== (JSCompiler__m = null !== (JSCompiler__l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== JSCompiler__l ? JSCompiler__l : p['T-70']!) && void 0 !== JSCompiler__m ? JSCompiler__m : color_utils_numberToHex(key.a3.tone(70)),
            textColorPrimary: null !== (JSCompiler__p = null !== (JSCompiler__o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== JSCompiler__o ? JSCompiler__o : p['N-95']!) && void 0 !== JSCompiler__p ? JSCompiler__p : color_utils_numberToHex(key.n1.tone(95)),
            textColorSecondary: null !== (JSCompiler__r = null !== (JSCompiler__q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== JSCompiler__q ? JSCompiler__q : p['NV-80']!) && void 0 !== JSCompiler__r ? JSCompiler__r : color_utils_numberToHex(key.n2.tone(80)),
            textColorTertiary: null !== (JSCompiler__t = null !== (JSCompiler__s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== JSCompiler__s ? JSCompiler__s : p['NV-60']!) && void 0 !== JSCompiler__t ? JSCompiler__t : color_utils_numberToHex(key.n2.tone(60)),
            textColorPrimaryInverse: null !== (JSCompiler__v = null !== (JSCompiler__u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== JSCompiler__u ? JSCompiler__u : p['N-10']!) && void 0 !== JSCompiler__v ? JSCompiler__v : color_utils_numberToHex(key.n1.tone(10)),
            textColorSecondaryInverse: null !== (JSCompiler__x = null !== (JSCompiler__w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== JSCompiler__w ? JSCompiler__w : p['N-30']!) && void 0 !== JSCompiler__x ? JSCompiler__x : color_utils_numberToHex(key.n1.tone(30)),
            textColorTertiaryInverse: null !== (JSCompiler__z = null !== (JSCompiler__y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== JSCompiler__y ? JSCompiler__y : p['N-50']!) && void 0 !== JSCompiler__z ? JSCompiler__z : color_utils_numberToHex(key.n1.tone(50)),
            colorBackground: null !== (JSCompiler__1 = null !== (JSCompiler__0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== JSCompiler__0 ? JSCompiler__0 : p['N-10']!) && void 0 !== JSCompiler__1 ? JSCompiler__1 : color_utils_numberToHex(key.n1.tone(10)),
            colorBackgroundFloating: null !== (JSCompiler__3 = null !== (JSCompiler__2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== JSCompiler__2 ? JSCompiler__2 : p['N-10']!) && void 0 !== JSCompiler__3 ? JSCompiler__3 : color_utils_numberToHex(key.n1.tone(10)),
            colorSurface: null !== (JSCompiler__5 = null !== (JSCompiler__4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== JSCompiler__4 ? JSCompiler__4 : p['N-20']!) && void 0 !== JSCompiler__5 ? JSCompiler__5 : color_utils_numberToHex(key.n1.tone(20)),
            colorSurfaceVariant: null !== (JSCompiler__7 = null !== (JSCompiler__6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== JSCompiler__6 ? JSCompiler__6 : p['N-30']!) && void 0 !== JSCompiler__7 ? JSCompiler__7 : color_utils_numberToHex(key.n1.tone(30)),
            colorSurfaceHighlight: null !== (JSCompiler__9 = null !== (JSCompiler__8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== JSCompiler__8 ? JSCompiler__8 : p['N-35']!) && void 0 !== JSCompiler__9 ? JSCompiler__9 : color_utils_numberToHex(key.n1.tone(35)),
            surfaceHeader: null !== (JSCompiler__11 = null !== (JSCompiler__10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== JSCompiler__10 ? JSCompiler__10 : p['N-30']!) && void 0 !== JSCompiler__11 ? JSCompiler__11 : color_utils_numberToHex(key.n1.tone(30)),
            underSurface: null !== (JSCompiler__13 = null !== (JSCompiler__12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== JSCompiler__12 ? JSCompiler__12 : p['N-0']!) && void 0 !== JSCompiler__13 ? JSCompiler__13 : color_utils_numberToHex(key.n1.tone(0)),
            offState: null !== (JSCompiler__15 = null !== (JSCompiler__14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== JSCompiler__14 ? JSCompiler__14 : p['N-20']!) && void 0 !== JSCompiler__15 ? JSCompiler__15 : color_utils_numberToHex(key.n1.tone(20)),
            accentSurface: null !== (JSCompiler__17 = null !== (JSCompiler__16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== JSCompiler__16 ? JSCompiler__16 : p['NV-95']!) && void 0 !== JSCompiler__17 ? JSCompiler__17 : color_utils_numberToHex(key.a2.tone(95)),
            textPrimaryOnAccent: null !== (JSCompiler__19 = null !== (JSCompiler__18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== JSCompiler__18 ? JSCompiler__18 : p['N-10']!) && void 0 !== JSCompiler__19 ? JSCompiler__19 : color_utils_numberToHex(key.n1.tone(10)),
            textSecondaryOnAccent: null !== (JSCompiler__21 = null !== (JSCompiler__20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== JSCompiler__20 ? JSCompiler__20 : p['NV-30']!) && void 0 !== JSCompiler__21 ? JSCompiler__21 : color_utils_numberToHex(key.n2.tone(30)),
            volumeBackground: null !== (JSCompiler__23 = null !== (JSCompiler__22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== JSCompiler__22 ? JSCompiler__22 : p['N-25']!) && void 0 !== JSCompiler__23 ? JSCompiler__23 : color_utils_numberToHex(key.n1.tone(25)),
            scrim: null !== (JSCompiler__25 = null !== (JSCompiler__24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== JSCompiler__24 ? JSCompiler__24 : p['N-80']!) && void 0 !== JSCompiler__25 ? JSCompiler__25 : color_utils_numberToHex(key.n1.tone(80))
        };
    }*/
    TonalGroups get tonalGroups {
        return TonalGroups(
            primary: this.primaryGroup,
            secondary: this.secondaryGroup,
            tertiary: this.tertiaryGroup,
            neutral: this.neutralGroup,
            neutralVariant: this.neutralVariantGroup,
            error: this.errorGroup
        ).assignFromOther(this.props.overrides.tonalGroups);
    }
    TonalGroup  getColorGroup(String key, tones) {
        var _a;
        final overrideGroup = this.props.overrides.tonalGroups?[key];
        return overrideGroup ?? tonal_group_tonesToTonalGroup(tones);
    }
    TonalGroup get primaryGroup {
        return this.getColorGroup('primary', this.props.tones.a1);
    }
    TonalGroup get  secondaryGroup {
        return this.getColorGroup('secondary', this.props.tones.a2);
    }
    TonalGroup  get tertiaryGroup {
        return this.getColorGroup('tertiary', this.props.tones.a3);
    }
    TonalGroup get  neutralGroup {
        return this.getColorGroup('neutral', this.props.tones.n1);
    }
    TonalGroup  get neutralVariantGroup {
        return this.getColorGroup('neutralVariant', this.props.tones.n2);
    }
    TonalGroup  get errorGroup {
        return this.getColorGroup('error', this.props.tones.error);
    }
    Map<String, String> get primary {
        return tonal_group_convertTonalGroupToMap('P', this.primaryGroup);
    }
    Map<String, String> get secondary {
        return tonal_group_convertTonalGroupToMap('S', this.secondaryGroup);
    }
    Map<String, String> get tertiary {
        return tonal_group_convertTonalGroupToMap('T', this.tertiaryGroup);
    }
    Map<String, String> get neutral {
        return tonal_group_convertTonalGroupToMap('N', this.neutralGroup);
    }
    Map<String, String> get neutralVariant {
        return tonal_group_convertTonalGroupToMap('NV', this.neutralVariantGroup);
    }
    Map<String, String> get error {
        return tonal_group_convertTonalGroupToMap('E', this.errorGroup);
    }
    Map<String, String> get palettes => {
      ...primary,
      ...secondary,
      ...tertiary,
      ...neutral,
      ...neutralVariant,
      ...error,
    };
    String get seedValue {
        return this.props.seed;
    }
    ThemeSource get source {
        final p = this.palettes;
        var source = this.props.overrides.source;
        return ThemeSource(
            seed: this.seedValue,
            imageUrl: this.imageUrl,
            primary: source?.primary ?? this.getPrimaryTonal('P', p),
            secondary: source?.secondary ?? this.getPrimaryTonal('S', p),
            tertiary: source?.tertiary ?? this.getPrimaryTonal('T', p),
            neutral: source?.neutral ?? this.getPrimaryTonal('N', p),
            neutralVariant: source?.neutral ?? this.getPrimaryTonal('NV', p),
            error:source?.neutral ?? this.getPrimaryTonal('E', p),
        );
    }

    String getPrimaryTonal(String prefix, Map<String,String>palettes) {
        return palettes['${prefix}-40']!;
    }

    void setCustomColor(key, value) {
        var _a, _b, _c, _d;
        this.props.isBaseline = false;
        props.overrides.source = source;
        this.props.overrides.source[key] = value;
        if (KEY_COLORS.includes(key)) {
            props.overrides.tonalGroups ??= TonalGroups();
            var JSCompiler_inline_result;
            try {
                JSCompiler_inline_result = intFromHex(value);
            } catch (error) {
                print('error converting [${value}] to number');
                print(error);
                JSCompiler_inline_result = intFromHex('#000000');
            }
            var keyTones = new CorePalette(JSCompiler_inline_result);
            switch (key) {
                case 'primary':
                    this.props.overrides.tonalGroups.primary = tonal_group_tonesToTonalGroup(keyTones.a1);
                    break;
                case 'secondary':
                    this.props.overrides.tonalGroups.secondary = tonal_group_tonesToTonalGroup(keyTones.a1);
                    break;
                case 'tertiary':
                    this.props.overrides.tonalGroups.tertiary = tonal_group_tonesToTonalGroup(keyTones.a1);
                    break;
                case 'error':
                    this.props.overrides.tonalGroups.error = tonal_group_tonesToTonalGroup(keyTones.error);
                    break;
                case 'neutral':
                    this.props.overrides.tonalGroups.neutral = tonal_group_tonesToTonalGroup(keyTones.n1);
                    break;
                case 'neutralVariant':
                    this.props.overrides.tonalGroups.neutralVariant = tonal_group_tonesToTonalGroup(keyTones.n2);
            }
        }
    }
    Map<String, dynamic> save() {
        final theme = {
            'light': this.light,
            'dark': this.dark,
            'androidLight': void 0,
            'androidDark': void 0,
            'primary': this.primaryGroup,
            'secondary': this.secondaryGroup,
            'tertiary': this.tertiaryGroup,
            'neutral': this.neutralGroup,
            'neutralVariant': this.neutralVariantGroup,
            'error': this.errorGroup,
            'styles': this.styles,
            'source': this.source
        };
        print('saved theme:\n$theme');
        return theme;
    }
}