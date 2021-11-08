// CorePalette, intFromHex
const libmonet = require('libmonet');
const utils = require('./utils.js');
const base = require('./base.js');
const defaults = require('./defaults.js');
const b1p = require('./baseline_1p.js');
const b3p = require('./baseline_3p.js');

class ThemeAdapter extends base.ThemeAdapterBase {
};
ThemeAdapter.fromColor = function (value, is3p, overrides = {}) {
    console.log('theme adapter from color');
    const keyTones = new libmonet.CorePalette(libmonet.intFromHex(value));
    return new ThemeAdapter({
        tones: keyTones,
        seed: value,
        is3p,
        overrides,
        blend: false,
        isBaseline: false
    });
};
ThemeAdapter.baselineSeed = function (is3p) {
    const baseline = defaults.DEFAULT_COLORS.baseline;
    return is3p ? baseline.context_3p : baseline.context_1p;
};
ThemeAdapter.fromTheme = function (theme) {
    var _a, _b, _c;
    console.log('theme adapter from theme', theme);
    const is3p = utils.checks_isTheme3p(theme), seed = null !== (_b = null === (_a = null === theme || void 0 === theme ? void 0 : theme.source) || void 0 === _a ? void 0 : _a.seed) && void 0 !== _b ? _b : ThemeAdapter.baselineSeed(is3p), imageUrl = null === (_c = null === theme || void 0 === theme ? void 0 : theme.source) || void 0 === _c ? void 0 : _c.imageUrl, keyTones = new libmonet.CorePalette(libmonet.intFromHex(seed)), themeOverrides = {
        light: theme.light,
        dark: theme.dark,
        tonalGroups: {
            primary: theme.primary,
            secondary: theme.secondary,
            tertiary: theme.tertiary,
            neutral: theme.neutral,
            neutralVariant: theme.neutralVariant,
            error: theme.error
        },
        source: theme.source
    }, isBaseline = utils.checks_isThemeBaseline(theme);
    return new ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        imageUrl,
        isBaseline,
        overrides: themeOverrides,
        blend: false
    });
};
ThemeAdapter.default = function (is3p = false) {
    console.log('theme adapter default');
    const seed = ThemeAdapter.baselineSeed(is3p), keyTones = new libmonet.CorePalette(libmonet.intFromHex(seed));
    return is3p ? new ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        overrides: {
            tonalGroups: {
                primary: b3p.BASELINE_3P.primary,
                secondary: b3p.BASELINE_3P.secondary,
                tertiary: b3p.BASELINE_3P.tertiary,
                neutral: b3p.BASELINE_3P.neutral,
                neutralVariant: b3p.BASELINE_3P.neutralVariant,
                error: b3p.BASELINE_3P.error
            }
        },
        blend: false,
        isBaseline: true
    }) : new ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        overrides: {
            tonalGroups: {
                primary: b1p.BASELINE_1P.primary,
                secondary: b1p.BASELINE_1P.secondary,
                tertiary: b1p.BASELINE_1P.tertiary,
                neutral: b1p.BASELINE_1P.neutral,
                neutralVariant: b1p.BASELINE_1P.neutralVariant,
                error: b1p.BASELINE_1P.error
            }
        },
        blend: false,
        isBaseline: true
    });
};


module.exports = {
    ThemeAdapter,
}