'use strict';
const google3 = require('google3');
const utils = require('code.js');
const tokens = require('../tokens/code.js');
const theme = require('../../../src/theme/code.js');
function color_hexToRgb(hex) {
    if (7 < hex.length) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result)
            return {
                r: parseInt(result[2], 16) / 255,
                g: parseInt(result[3], 16) / 255,
                b: parseInt(result[4], 16) / 255,
                a: parseInt(result[1], 16) / 255
            };
    } else {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result)
            return {
                r: parseInt(result[1], 16) / 255,
                g: parseInt(result[2], 16) / 255,
                b: parseInt(result[3], 16) / 255
            };
    }
    return {
        r: 0,
        g: 0,
        b: 0
    };
}
function color_rgbToHex(val) {
    return theme.color_utils_rgbaToHex(Math.round(255 * val.r), Math.round(255 * val.g), Math.round(255 * val.b));
}
function string_keyToLabel(str) {
    return (str.includes('-') ? str.split('-') : str.replace(/([A-Z][a-z])/g, ' $1').split(' ')).map(e => e.slice(0, 1).toUpperCase() + e.slice(1, e.length)).join(' ');
}
function string_labelToKey(str) {
    return str.toLowerCase().split(' ').map((n, i) => 0 === i ? n : n.charAt(0).toUpperCase() + n.slice(1)).join('');
}
function utils_createRect(options) {
    const node = figma.createRectangle();
    node.resize(options.width, options.height);
    node.x = options.dx;
    node.y = options.dy;
    options.color && (node.fills = [tokens.utils_colorToPaintStyle({ value: options.color })]);
    options.borderRadius && (node.cornerRadius = options.borderRadius);
    return node;
}
function utils_createLabel(options) {
    var _a;
    const node = figma.createText();
    node.characters = options.label;
    node.x = options.dx;
    node.y = options.dy;
    node.fills = [tokens.utils_colorToPaintStyle({ value: utils.color_rgbToHex(options.color) })];
    const textStyle = tokens.utils_findFontToken(options.theme, null !== (_a = null === options || void 0 === options ? void 0 : options.type) && void 0 !== _a ? _a : 'subhead1');
    textStyle && (node.textStyleId = textStyle.id);
    return node;
}
function utils_createDefaultLabel(options) {
    var _a;
    const node = utils.utils_createLabel({
            label: options.name,
            theme: options.theme,
            height: 70,
            width: 190,
            dx: options.offset.dx,
            dy: options.offset.dy,
            color: utils.color_hexToRgb('#000000')
        }), style = tokens.utils_findColorToken(options.theme, '$/sys/light/on-background');
    style && (node.fillStyleId = style.id);
    const textStyle = tokens.utils_findFontToken(options.theme, null !== (_a = null === options || void 0 === options ? void 0 : options.type) && void 0 !== _a ? _a : 'title/medium');
    textStyle && (node.textStyleId = textStyle.id);
    return node;
}
async function utils_saveLocalThemeName(name) {
    var JSCompiler_temp_const = figma.clientStorage, JSCompiler_temp_const$jscomp$0 = JSCompiler_temp_const.setAsync;
    const buf = new Uint8Array(name.length);
    for (let i = 0; i < name.length; i++)
        buf[i] = name.charCodeAt(i);
    await JSCompiler_temp_const$jscomp$0.call(JSCompiler_temp_const, 'theme-key-string', buf);
}
async function utils_getLocalThemeName() {
    const value = await figma.clientStorage.getAsync('theme-key-string');
    if (value) {
        let str = '';
        for (let i = 0; i < value.length; i++)
            str += String.fromCharCode(value[i]);
        var JSCompiler_temp = str;
    } else
        JSCompiler_temp = 'material-theme';
    return JSCompiler_temp;
}
async function utils_updateLocalTheme() {
    const themeName = await utils.utils_getLocalThemeName();
    let hasLocal, theme = tokens.theme_from_tokens_themeFromTokens(themeName);
    hasLocal = null !== theme;
    if (null === theme) {
        console.log('theme adapter default');
        const seed = google3.baselineSeed(!1), keyTones = new google3.CorePalette(google3.intFromHex(seed));
        theme = new google3.ThemeAdapter({
            tones: keyTones,
            seed,
            is3p: !1,
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
        }).save();
    }
    const adapter = google3.fromTheme(theme);
    console.log(`Local theme ${ themeName } ->`, theme);
    return {
        theme: adapter,
        themeName,
        hasLocal,
        is3p: adapter.is3p
    };
}