'use strict';
const google3 = require('google3');
const theme = require('code.js');
function color_utils_numberToHex(value) {
    try {
        const g = (value & 65280) >> 8, b = value & 255, outParts = [
                ((value & 16711680) >> 16).toString(16),
                g.toString(16),
                b.toString(16)
            ];
        for (const [i__tsickle_destructured_1, part__tsickle_destructured_2] of outParts.entries()) {
            const i = i__tsickle_destructured_1, part = part__tsickle_destructured_2;
            1 === part.length && (outParts[i] = '0' + part);
        }
        return '#' + outParts.join('');
    } catch (error) {
        return console.log(`error converting [${ value }] to hex`, error), '#000000';
    }
}
function color_utils_luminance(color) {
    const options = theme.color_utils_hexToArgb(color), a = [
            options.r,
            options.g,
            options.b
        ].map(v => {
            v /= 255;
            return 0.03928 >= v ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function color_utils_rgbaToHex(r, g, b) {
    const componentToHex = c => {
            const hex = c.toString(16);
            return 1 === hex.length ? '0' + hex : hex;
        }, rr = componentToHex(r), gg = componentToHex(g), bb = componentToHex(b);
    return '#' + rr + gg + bb;
}
function color_utils_getOnColor(hex) {
    let r = 0, g = 0, b = 0;
    const hasFullSpec = 7 === hex.length, m = hex.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    m && (r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16), g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16), b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16));
    return 127.5 < (299 * r + 587 * g + 114 * b) / 1000 ? '#000000' : '#FFFFFF';
}
function color_utils_hexToArgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: 1
    } : null;
}
function checks_isTheme3p(theme) {
    var _a, _b;
    return 'Roboto' === (null === (_b = null === (_a = null === theme || void 0 === theme ? void 0 : theme.styles) || void 0 === _a ? void 0 : _a.headline1) || void 0 === _b ? void 0 : _b.fontFamilyName);
}
function checks_isThemeBaseline(theme) {
    let match$jscomp$0 = !0;
    const target = theme.checks_isTheme3p(theme) ? google3.BASELINE_3P : google3.BASELINE_1P, checkGroup = (name, group, targetGroup) => {
            if (match$jscomp$0) {
                let match;
                (match = theme.checks_isSameColor(group.luminance0, targetGroup.luminance0)) && (match = theme.checks_isSameColor(group.luminance10, targetGroup.luminance10));
                match && (match = theme.checks_isSameColor(group.luminance20, targetGroup.luminance20));
                match && (match = theme.checks_isSameColor(group.luminance30, targetGroup.luminance30));
                match && (match = theme.checks_isSameColor(group.luminance40, targetGroup.luminance40));
                match && (match = theme.checks_isSameColor(group.luminance50, targetGroup.luminance50));
                match && (match = theme.checks_isSameColor(group.luminance60, targetGroup.luminance60));
                match && (match = theme.checks_isSameColor(group.luminance70, targetGroup.luminance70));
                match && (match = theme.checks_isSameColor(group.luminance80, targetGroup.luminance80));
                match && (match = theme.checks_isSameColor(group.luminance90, targetGroup.luminance90));
                match && (match = theme.checks_isSameColor(group.luminance95, targetGroup.luminance95));
                match && (match = theme.checks_isSameColor(group.luminance98, targetGroup.luminance98));
                match && (match = theme.checks_isSameColor(group.luminance100, targetGroup.luminance100));
                match$jscomp$0 = match;
            }
            match$jscomp$0 || console.log(`theme adapter ${ name } group mismatch`, group, targetGroup);
        };
    checkGroup('primary', theme.primary, target.primary);
    checkGroup('secondary', theme.secondary, target.secondary);
    checkGroup('tertiary', theme.tertiary, target.tertiary);
    checkGroup('neutral', theme.neutral, target.neutral);
    checkGroup('neutralVariant', theme.neutralVariant, target.neutralVariant);
    checkGroup('error', theme.error, target.error);
    console.log(`theme adapter baseline match: ${ match$jscomp$0 }`);
    return match$jscomp$0;
}
function checks_isSameColor(target, expected) {
    return (null === target || void 0 === target ? void 0 : target.toUpperCase()) === (null === expected || void 0 === expected ? void 0 : expected.toUpperCase());
}
function tonal_group_tonesToTonalGroup(tones) {
    return {
        luminance100: theme.color_utils_numberToHex(tones.tone(100)),
        luminance99: theme.color_utils_numberToHex(tones.tone(99)),
        luminance98: theme.color_utils_numberToHex(tones.tone(98)),
        luminance95: theme.color_utils_numberToHex(tones.tone(95)),
        luminance90: theme.color_utils_numberToHex(tones.tone(90)),
        luminance80: theme.color_utils_numberToHex(tones.tone(80)),
        luminance70: theme.color_utils_numberToHex(tones.tone(70)),
        luminance60: theme.color_utils_numberToHex(tones.tone(60)),
        luminance50: theme.color_utils_numberToHex(tones.tone(50)),
        luminance40: theme.color_utils_numberToHex(tones.tone(40)),
        luminance35: theme.color_utils_numberToHex(tones.tone(35)),
        luminance30: theme.color_utils_numberToHex(tones.tone(30)),
        luminance25: theme.color_utils_numberToHex(tones.tone(25)),
        luminance20: theme.color_utils_numberToHex(tones.tone(20)),
        luminance10: theme.color_utils_numberToHex(tones.tone(10)),
        luminance0: theme.color_utils_numberToHex(tones.tone(0))
    };
}
function tonal_group_convertTonalGroupToMap(prefix, group) {
    const map = new Map();
    map.set(`${ prefix }-100`, group.luminance100);
    map.set(`${ prefix }-99`, group.luminance99);
    map.set(`${ prefix }-98`, group.luminance98);
    map.set(`${ prefix }-95`, group.luminance95);
    map.set(`${ prefix }-90`, group.luminance90);
    map.set(`${ prefix }-80`, group.luminance80);
    map.set(`${ prefix }-70`, group.luminance70);
    map.set(`${ prefix }-60`, group.luminance60);
    map.set(`${ prefix }-50`, group.luminance50);
    map.set(`${ prefix }-40`, group.luminance40);
    map.set(`${ prefix }-35`, group.luminance35);
    map.set(`${ prefix }-30`, group.luminance30);
    map.set(`${ prefix }-25`, group.luminance25);
    map.set(`${ prefix }-20`, group.luminance20);
    map.set(`${ prefix }-10`, group.luminance10);
    map.set(`${ prefix }-0`, group.luminance0);
    return map;
}
const defaults_COLORS_3P = {
    seed: '#6750A4',
    primary: '#6750A4',
    secondary: '#625B71',
    tertiary: '#7D5260',
    neutral: '#605D62',
    neutralVariant: '#605D66',
    error: '#BA1B1B'
};
const defaults_COLORS_1P = {
    seed: '#0B57D0',
    primary: '#0B57D0',
    secondary: '#00639B',
    tertiary: '#146C2E',
    neutral: '#5E5E5E',
    neutralVariant: '#585F65',
    error: '#BA1B1B'
};
function surfaces_addSurface(tonal, opacity, p) {
    const value = p.get(tonal);
    return {
        tonal,
        value,
        opacity: null === opacity ? 1 : opacity
    };
}