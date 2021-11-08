'use strict';
const theme = require('../../code.js');
const google3 = require('google3');
var fromColor = function (value, is3p, overrides = {}) {
    console.log('theme adapter from color');
    const keyTones = new google3.CorePalette(google3.intFromHex(value));
    return new google3.ThemeAdapter({
        tones: keyTones,
        seed: value,
        is3p,
        overrides,
        blend: !1,
        isBaseline: !1
    });
};
var baselineSeed = function (is3p) {
    const baseline = google3.DEFAULT_COLORS.baseline;
    return is3p ? baseline.context_3p : baseline.context_1p;
};
var fromTheme = function (theme) {
    var _a, _b, _c;
    console.log('theme adapter from theme', theme);
    const is3p = theme.checks_isTheme3p(theme), seed = null !== (_b = null === (_a = null === theme || void 0 === theme ? void 0 : theme.source) || void 0 === _a ? void 0 : _a.seed) && void 0 !== _b ? _b : google3.baselineSeed(is3p), imageUrl = null === (_c = null === theme || void 0 === theme ? void 0 : theme.source) || void 0 === _c ? void 0 : _c.imageUrl, keyTones = new google3.CorePalette(google3.intFromHex(seed)), themeOverrides = {
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
        }, isBaseline = theme.checks_isThemeBaseline(theme);
    return new google3.ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        imageUrl,
        isBaseline,
        overrides: themeOverrides,
        blend: !1
    });
};
var default = function (is3p = !1) {
    console.log('theme adapter default');
    const seed = google3.baselineSeed(is3p), keyTones = new google3.CorePalette(google3.intFromHex(seed));
    return is3p ? new google3.ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        overrides: {
            tonalGroups: {
                primary: google3.BASELINE_3P.primary,
                secondary: google3.BASELINE_3P.secondary,
                tertiary: google3.BASELINE_3P.tertiary,
                neutral: google3.BASELINE_3P.neutral,
                neutralVariant: google3.BASELINE_3P.neutralVariant,
                error: google3.BASELINE_3P.error
            }
        },
        blend: !1,
        isBaseline: !0
    }) : new google3.ThemeAdapter({
        tones: keyTones,
        seed,
        is3p,
        overrides: {
            tonalGroups: {
                primary: google3.BASELINE_1P.primary,
                secondary: google3.BASELINE_1P.secondary,
                tertiary: google3.BASELINE_1P.tertiary,
                neutral: google3.BASELINE_1P.neutral,
                neutralVariant: google3.BASELINE_1P.neutralVariant,
                error: google3.BASELINE_1P.error
            }
        },
        blend: !1,
        isBaseline: !0
    });
};