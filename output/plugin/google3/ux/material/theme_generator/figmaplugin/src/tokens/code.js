'use strict';
const theme = require('../../../src/theme/code.js');
const utils = require('../utils/code.js');
const google3 = require('google3');
const tokens = require('code.js');
function utils_getFontTokens(themeName) {
    var _a;
    const tokens = null !== (_a = figma.getLocalTextStyles()) && void 0 !== _a ? _a : [], styles = [];
    for (const style of tokens) {
        const name = style.name;
        name.includes('/') && name.split('/')[0] === themeName && styles.push(style);
    }
    return styles;
}
function utils_findFontToken(themeName, path, styles) {
    return (null !== styles && void 0 !== styles ? styles : tokens.utils_getFontTokens(themeName)).find(n => n.name === `${ themeName }/${ path }`);
}
function utils_findColorToken(themeName, path, styles) {
    return (null !== styles && void 0 !== styles ? styles : tokens.utils_getColorTokens(themeName)).find(n => n.name === `${ themeName }/${ path }`);
}
function utils_getColorTokens(themeName) {
    var _a;
    return (null !== (_a = figma.getLocalPaintStyles()) && void 0 !== _a ? _a : []).filter(token => token.name.startsWith(themeName));
}
function utils_paintStyleToColors(style) {
    var _a;
    return (null === style || void 0 === style ? 0 : style.paints) && 0 < style.paints.length ? (null !== (_a = style.paints.filter(paint => 'SOLID' === paint.type)) && void 0 !== _a ? _a : []).map(p => utils.color_rgbToHex(p.color)) : [];
}
function utils_colorsToPaintStyles(colors) {
    var _a;
    return null !== (_a = null === colors || void 0 === colors ? void 0 : colors.map(color => tokens.utils_colorToPaintStyle(color))) && void 0 !== _a ? _a : [];
}
function utils_colorToPaintStyle(color) {
    return {
        type: 'SOLID',
        color: utils.color_hexToRgb(color.value),
        opacity: null === color || void 0 === color ? void 0 : color.opacity
    };
}
async function utils_paintStyleToImage(style) {
    var _a;
    if ((null === style || void 0 === style ? 0 : style.paints) && 0 < style.paints.length) {
        const paints = null !== (_a = style.paints.filter(paint => 'IMAGE' === paint.type)) && void 0 !== _a ? _a : [];
        if (0 < paints.length) {
            const paint = paints[0];
            if ('IMAGE' === paint.type) {
                const imageHash = paint.imageHash;
                if (imageHash)
                    return await figma.getImageByHash(imageHash).getBytesAsync();
            }
        }
    }
}
function utils_setImageForTheme(themeName, imageBuffer) {
    var _a;
    const style = null !== (_a = tokens.utils_getColorTokens(themeName).find(n => n.name.endsWith('source/Image'))) && void 0 !== _a ? _a : figma.createPaintStyle();
    style.name = `${ themeName }/${ 'source/Image' }`;
    if (null !== imageBuffer) {
        const paints = [{
                type: 'IMAGE',
                imageHash: figma.createImage(new Uint8Array(imageBuffer)).hash,
                scaleMode: 'FILL'
            }];
        style.paints = [...paints];
    } else
        style.paints = [];
}
function utils_setPaintStyle(themeName, path, values, paintStyle) {
    const style = null !== paintStyle && void 0 !== paintStyle ? paintStyle : figma.createPaintStyle();
    style.name = `${ themeName }/${ path }`;
    style.paints = tokens.utils_colorsToPaintStyles(values);
    return style;
}
function theme_from_tokens_themeFromTokens(themeName) {
    const colors = tokens.utils_getColorTokens(themeName);
    if (0 === colors.length || -1 === colors.findIndex(t => t.name.includes(themeName)))
        return null;
    const fonts = tokens.utils_getFontTokens(themeName), lightColors = colors.filter(n => n.name.startsWith(`${ themeName }/sys/light/`)), darkColors = colors.filter(n => n.name.startsWith(`${ themeName }/sys/dark/`));
    colors.filter(n => n.name.startsWith(`${ themeName }/android/light/`));
    colors.filter(n => n.name.startsWith(`${ themeName }/android/dark/`));
    const getTonalColors = section => {
            const tonalColors = colors.filter(n => n.name.startsWith(`${ themeName }/ref/${ section }/`));
            return tokens.theme_from_tokens_tonalPaletteFromTokens(section, tonalColors);
        }, theme = {
            light: tokens.theme_from_tokens_materialColorsFromTokens(lightColors, 'light'),
            dark: tokens.theme_from_tokens_materialColorsFromTokens(darkColors, 'dark'),
            androidLight: void 0,
            androidDark: void 0,
            primary: getTonalColors('primary'),
            secondary: getTonalColors('secondary'),
            tertiary: getTonalColors('tertiary'),
            neutral: getTonalColors('neutral'),
            neutralVariant: getTonalColors('neutral-variant'),
            error: getTonalColors('error'),
            styles: tokens.theme_from_tokens_fontStylesFromTokens(fonts),
            source: (section => {
                const result = {}, customColors = colors.filter(n => n.name.startsWith(`${ themeName }/${ section }/`));
                for (const color of customColors) {
                    const colorName = color.name.split('/').pop(), colorKey = utils.string_labelToKey(colorName), hex = tokens.utils_paintStyleToColors(color)[0];
                    console.log('custom color', section, colorName, colorKey, hex);
                    hex && (result[colorKey] = hex);
                }
                return result;
            })('source')
        };
    console.log('theme', theme);
    return theme;
}
function theme_from_tokens_tonalPaletteFromTokens(prefix, tokens) {
    const getColor = luminance => {
        const value = tokens.find(n => n.name.toLowerCase().endsWith(`${ prefix }${ luminance }`));
        if (value)
            return tokens.utils_paintStyleToColors(value)[0];
    };
    return {
        luminance100: getColor('100'),
        luminance99: getColor('99'),
        luminance98: getColor('98'),
        luminance95: getColor('95'),
        luminance90: getColor('90'),
        luminance80: getColor('80'),
        luminance70: getColor('70'),
        luminance60: getColor('60'),
        luminance50: getColor('50'),
        luminance40: getColor('40'),
        luminance30: getColor('30'),
        luminance35: getColor('35'),
        luminance20: getColor('20'),
        luminance25: getColor('25'),
        luminance10: getColor('10'),
        luminance0: getColor('0')
    };
}
async function theme_from_tokens_imageForTheme(themeName) {
    const style = tokens.utils_getColorTokens(themeName).find(n => n.name.endsWith('source/Image'));
    if (style)
        return await tokens.utils_paintStyleToImage(style);
}
function theme_from_tokens_fontStylesFromTokens(tokens) {
    const getFontStyle = (key, alt) => {
        if (alt) {
            const fonts = tokens.find(n => n.name.toLowerCase().endsWith(alt));
            if (fonts)
                return tokens.theme_from_tokens_fontStyleFromToken(fonts);
        }
        const fonts$jscomp$0 = tokens.find(n => n.name.toLowerCase().endsWith(key));
        if (fonts$jscomp$0)
            return tokens.theme_from_tokens_fontStyleFromToken(fonts$jscomp$0);
    };
    return {
        display1: getFontStyle('display1'),
        display2: getFontStyle('display2', 'display/large'),
        display3: getFontStyle('display3', 'display/medium'),
        headline1: getFontStyle('headline1', 'display/small'),
        headline2: getFontStyle('headline2', 'headline/large'),
        headline3: getFontStyle('headline3', 'headline/medium'),
        headline4: getFontStyle('headline4', 'headline/small'),
        headline5: getFontStyle('headline5', 'title/large'),
        headline6: getFontStyle('headline6'),
        subhead2: getFontStyle('subhead2', 'title/small'),
        body1: getFontStyle('body1', 'body/large'),
        body2: getFontStyle('body2', 'body/medium'),
        caption: getFontStyle('caption', 'body/small'),
        subhead1: getFontStyle('subhead1', 'title/medium'),
        button: getFontStyle('button', 'label/large'),
        overline: getFontStyle('overline', 'label/medium'),
        labelSmall: getFontStyle('labelSmall', 'label/small')
    };
}
function theme_from_tokens_fontStyleFromToken(token) {
    var _a, _b, _c, _d;
    return {
        fontFamilyName: null === (_a = null === token || void 0 === token ? void 0 : token.fontName) || void 0 === _a ? void 0 : _a.family,
        fontFamilyStyle: null === (_b = null === token || void 0 === token ? void 0 : token.fontName) || void 0 === _b ? void 0 : _b.style,
        fontSize: null === token || void 0 === token ? void 0 : token.fontSize,
        letterSpacing: null === token || void 0 === token ? void 0 : token.letterSpacing.value,
        lineHeight: 'PIXELS' === (null === (_c = null === token || void 0 === token ? void 0 : token.lineHeight) || void 0 === _c ? void 0 : _c.unit) ? null === (_d = null === token || void 0 === token ? void 0 : token.lineHeight) || void 0 === _d ? void 0 : _d.value : void 0,
        paragraphIndent: null === token || void 0 === token ? void 0 : token.paragraphSpacing,
        paragraphSpacing: null === token || void 0 === token ? void 0 : token.paragraphSpacing,
        textCase: null === token || void 0 === token ? void 0 : token.textCase,
        textDecoration: null === token || void 0 === token ? void 0 : token.textDecoration
    };
}
function theme_from_tokens_materialColorsFromTokens(tokens, section) {
    const getColor = key => {
        const style = tokens.find(n => n.name.endsWith(`sys/${ section }/${ key }`));
        return tokens.utils_paintStyleToColors(style)[0];
    };
    return {
        primary: getColor('primary'),
        onPrimary: getColor('on-primary'),
        primaryContainer: getColor('primary-container'),
        onPrimaryContainer: getColor('on-primary-container'),
        secondary: getColor('secondary'),
        onSecondary: getColor('on-secondary'),
        secondaryContainer: getColor('secondary-container'),
        onSecondaryContainer: getColor('on-secondary-container'),
        tertiary: getColor('tertiary'),
        onTertiary: getColor('on-tertiary'),
        tertiaryContainer: getColor('tertiary-container'),
        onTertiaryContainer: getColor('on-tertiary-container'),
        error: getColor('error'),
        onError: getColor('on-error'),
        errorContainer: getColor('error-container'),
        onErrorContainer: getColor('on-error-container'),
        outline: getColor('outline'),
        background: getColor('background'),
        onBackground: getColor('on-background'),
        surface: getColor('surface'),
        onSurface: getColor('on-surface'),
        surfaceVariant: getColor('surface-variant'),
        onSurfaceVariant: getColor('on-surface-variant'),
        inverseSurface: getColor('inverse-surface'),
        inverseOnSurface: getColor('inverse-on-surface')
    };
}
async function contrast_checkContrastForTokens(themeName) {
    console.log('checking contrast for theme', themeName);
    const colors = tokens.utils_getColorTokens(themeName);
    for (const section of [
            'light',
            'dark'
        ])
        for (const key of 'primary primary-container secondary secondary-container tertiary tertiary-container error error-container background surface surface-variant'.split(' ')) {
            var key1 = `sys/${ section }/${ key }`, key2 = `sys/${ section }/on-${ key }`;
            const key1Path = key1.replace(`${ themeName }/`, ''), key2Path = key2.replace(`${ themeName }/`, ''), style1 = tokens.utils_findColorToken(themeName, key1Path, colors), style2 = tokens.utils_findColorToken(themeName, key2Path, colors), colors1 = tokens.utils_paintStyleToColors(style1), colors2 = tokens.utils_paintStyleToColors(style2);
            if (0 < colors1.length && 0 < colors2.length) {
                var color2 = colors2[0];
                const color1luminance = theme.color_utils_luminance(colors1[0]), color2luminance = theme.color_utils_luminance(color2), ratio = color1luminance > color2luminance ? (color2luminance + 0.05) / (color1luminance + 0.05) : (color1luminance + 0.05) / (color2luminance + 0.05);
                var JSCompiler_object_inline_pass_416 = ratio < 1 / 3, JSCompiler_object_inline_pass_417 = ratio < 1 / 4.5, JSCompiler_object_inline_pass_418 = ratio < 1 / 3, JSCompiler_object_inline_pass_419 = ratio < 1 / 4.5, JSCompiler_object_inline_pass_420 = ratio < 1 / 7;
                const key1Name = key1.split('/').pop(), key2Name = key2.split('/').pop();
                style1.description = [
                    `${ key1Name } : ${ key2Name }`,
                    '\nRegular text:',
                    `Level AA - ${ JSCompiler_object_inline_pass_417 ? '\u2705 Pass' : '\u274C Fail' }`,
                    `Level AAA - ${ JSCompiler_object_inline_pass_420 ? '\u2705 Pass' : '\u274C Fail' }`,
                    '\nLarge text:',
                    `Level AA - ${ JSCompiler_object_inline_pass_416 ? '\u2705 Pass' : '\u274C Fail' }`,
                    `Level AAA - ${ JSCompiler_object_inline_pass_419 ? '\u2705 Pass' : '\u274C Fail' }`,
                    '\nIcons:',
                    `Level AA - ${ JSCompiler_object_inline_pass_418 ? '\u2705 Pass' : '\u274C Fail' }`,
                    ''
                ].join('\n');
            }
        }
}
async function theme_to_tokens_themeToTokens(themeName, theme) {
    const adapter = google3.fromTheme(theme);
    console.log(`Setting up tokens for ${ themeName }`, theme);
    tokens.theme_to_tokens_updateThemeColorTokens(adapter, themeName);
    await tokens.theme_to_tokens_updateThemeFontTokens(adapter, themeName);
    await tokens.contrast_checkContrastForTokens(themeName);
    console.log(`Finished setting up tokens for ${ themeName }`);
}
function theme_to_tokens_updateThemeColorTokens(theme, themeName) {
    const colors = tokens.utils_getColorTokens(themeName), setMaterialColors = (section, materialColors) => {
            console.log(`Setting material colors for ${ section }`);
            for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(materialColors)) {
                const key = key__tsickle_destructured_1, value = value__tsickle_destructured_2;
                if ('colors' === key)
                    continue;
                const name = `${ themeName }/sys/${ section }/${ key.replace(/([A-Z])/g, '-$1').toLowerCase() }`;
                tokens.theme_to_tokens_setColorToken(colors, name, [{
                        value,
                        opacity: 1
                    }]);
            }
        }, setTonalPalettes = (section, group) => {
            const prefix = `${ themeName }/ref/${ section }`;
            console.log(`Setting tonal palette for ${ section }`, group);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }100`, [{
                    value: group.luminance100,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }99`, [{
                    value: group.luminance99,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }95`, [{
                    value: group.luminance95,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }90`, [{
                    value: group.luminance90,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }80`, [{
                    value: group.luminance80,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }70`, [{
                    value: group.luminance70,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }60`, [{
                    value: group.luminance60,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }50`, [{
                    value: group.luminance50,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }40`, [{
                    value: group.luminance40,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }30`, [{
                    value: group.luminance30,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }20`, [{
                    value: group.luminance20,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }10`, [{
                    value: group.luminance10,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(colors, `${ prefix }/${ section }0`, [{
                    value: group.luminance0,
                    opacity: 1
                }]);
        };
    setMaterialColors('light', theme.light);
    setMaterialColors('dark', theme.dark);
    setTonalPalettes('primary', theme.primaryGroup);
    setTonalPalettes('secondary', theme.secondaryGroup);
    setTonalPalettes('tertiary', theme.tertiaryGroup);
    setTonalPalettes('neutral', theme.neutralGroup);
    setTonalPalettes('neutral-variant', theme.neutralVariantGroup);
    setTonalPalettes('error', theme.errorGroup);
    (section => {
        console.log(`Setting custom colors for ${ section }`, theme.source);
        for (const [key__tsickle_destructured_5, value__tsickle_destructured_6] of Object.entries(theme.source)) {
            const key = key__tsickle_destructured_5, value = value__tsickle_destructured_6;
            if (!value || !key)
                continue;
            if ('imageUrl' === key)
                continue;
            const label = utils.string_keyToLabel(key);
            tokens.theme_to_tokens_setColorToken(colors, `${ themeName }/${ section }/${ label }`, [{
                    value,
                    opacity: 1
                }]);
        }
    })('source');
    tokens.theme_to_tokens_setSurfaceTokens(theme, themeName);
    tokens.theme_to_tokens_setCustomColorsTokens(theme, themeName);
}
async function theme_to_tokens_updateThemeFontTokens(theme, themeName) {
    const fonts = tokens.utils_getFontTokens(themeName), findFontToken = name => fonts.find(n => n.name.endsWith(name));
    await (async () => {
        console.log('Setting font styles');
        await tokens.theme_to_tokens_preloadFonts(theme);
        const findAndSetToken = (suffix, value) => {
            const name = `${ themeName }/${ suffix }`;
            let token = findFontToken(name);
            token || (token = figma.createTextStyle(), token.name = name);
            var style = token;
            value.fontFamilyName && value.fontFamilyStyle && (style.fontName = {
                family: value.fontFamilyName,
                style: value.fontFamilyStyle
            });
            value.fontSize && (style.fontSize = value.fontSize);
            value.letterSpacing && (style.letterSpacing = {
                unit: 'PIXELS',
                value: value.letterSpacing
            });
            value.lineHeight && (style.lineHeight = {
                unit: 'PIXELS',
                value: value.lineHeight
            });
            value.paragraphIndent && (style.paragraphIndent = value.paragraphIndent);
            value.paragraphSpacing && (style.paragraphSpacing = value.paragraphSpacing);
            value.textCase && (style.textCase = value.textCase);
            value.textDecoration && (style.textDecoration = value.textDecoration);
        };
        for (const [key__tsickle_destructured_7, value__tsickle_destructured_8] of Object.entries(theme.styles)) {
            const key = key__tsickle_destructured_7, value = value__tsickle_destructured_8;
            findAndSetToken(`${ key }`, value);
            switch (key) {
            case 'display2':
                findAndSetToken('display/large', value);
                break;
            case 'display3':
                findAndSetToken('display/medium', value);
                break;
            case 'headline1':
                findAndSetToken('display/small', value);
                break;
            case 'headline2':
                findAndSetToken('headline/large', value);
                break;
            case 'headline3':
                findAndSetToken('headline/medium', value);
                break;
            case 'headline4':
                findAndSetToken('headline/small', value);
                break;
            case 'headline5':
                findAndSetToken('title/large', value);
                break;
            case 'subhead1':
                findAndSetToken('title/medium', value);
                break;
            case 'subhead2':
                findAndSetToken('title/small', value);
                break;
            case 'body1':
                findAndSetToken('body/large', value);
                break;
            case 'body2':
                findAndSetToken('body/medium', value);
                break;
            case 'caption':
                findAndSetToken('body/small', value);
                break;
            case 'button':
                findAndSetToken('label/large', value);
                break;
            case 'overline':
                findAndSetToken('label/medium', value);
                break;
            case 'labelSmall':
                findAndSetToken('label/small', value);
            }
        }
    })();
}
function theme_to_tokens_setSurfaceTokens(theme, themeName) {
    const styles = tokens.utils_getColorTokens(themeName), tokens = {
            light: theme.lightSurfaces,
            dark: theme.darkSurfaces
        };
    console.log(`Setting surface colors for ${ themeName }`, tokens);
    for (const section of [
            'light',
            'dark'
        ]) {
        const surfaces = Object(tokens)[section];
        for (const [key__tsickle_destructured_9, values__tsickle_destructured_10] of Object.entries(surfaces))
            tokens.theme_to_tokens_setColorToken(styles, `${ themeName }/read-only/${ section }/${ key__tsickle_destructured_9 }`, values__tsickle_destructured_10);
    }
}
function theme_to_tokens_setCustomColorsTokens(theme, themeName) {
    var _a;
    const styles = tokens.utils_getColorTokens(themeName), tokens = Object(null !== (_a = theme.source) && void 0 !== _a ? _a : {});
    console.log(`Setting custom colors for ${ themeName }`, tokens);
    for (const [key__tsickle_destructured_11, value__tsickle_destructured_12] of Object.entries(tokens)) {
        const key = key__tsickle_destructured_11, value = value__tsickle_destructured_12;
        if (!key || !value)
            continue;
        if ('seed' === key || google3.KEY_COLORS.includes(key))
            continue;
        const tokenKey = key.toLowerCase(), prefix = `${ themeName }/read-only/${ tokenKey }`, group = JSCompiler_StaticMethods_semanticColor(tokens[key]);
        var section$jscomp$0 = tokenKey, group$jscomp$0 = group.group;
        console.log(`Setting tonal palette for ${ section$jscomp$0 }`);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }100`, [{
                value: group$jscomp$0.luminance100,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }99`, [{
                value: group$jscomp$0.luminance99,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }95`, [{
                value: group$jscomp$0.luminance95,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }90`, [{
                value: group$jscomp$0.luminance90,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }80`, [{
                value: group$jscomp$0.luminance80,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }70`, [{
                value: group$jscomp$0.luminance70,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }60`, [{
                value: group$jscomp$0.luminance60,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }50`, [{
                value: group$jscomp$0.luminance50,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }40`, [{
                value: group$jscomp$0.luminance40,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }30`, [{
                value: group$jscomp$0.luminance30,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }20`, [{
                value: group$jscomp$0.luminance20,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }10`, [{
                value: group$jscomp$0.luminance10,
                opacity: 1
            }]);
        tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/group/${ section$jscomp$0 }0`, [{
                value: group$jscomp$0.luminance0,
                opacity: 1
            }]);
        for (const section of [
                'light',
                'dark'
            ]) {
            const colors = Object(group)[section];
            tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/${ section }/${ tokenKey }`, [{
                    value: colors.color,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/${ section }/on-${ tokenKey }`, [{
                    value: colors.onColor,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/${ section }/${ tokenKey }-container`, [{
                    value: colors.colorContainer,
                    opacity: 1
                }]);
            tokens.theme_to_tokens_setColorToken(styles, `${ prefix }/${ section }/on-${ tokenKey }-container`, [{
                    value: colors.onColorContainer,
                    opacity: 1
                }]);
        }
    }
}
async function theme_to_tokens_preloadFonts(theme) {
    const loaded = new Map();
    for (const [key__tsickle_destructured_13, value__tsickle_destructured_14] of Object.entries(theme.styles)) {
        const key = key__tsickle_destructured_13, value = value__tsickle_destructured_14;
        if (value.fontFamilyName && value.fontFamilyStyle) {
            const font = {
                    family: value.fontFamilyName,
                    style: value.fontFamilyStyle
                }, fontKey = `${ font.family }_${ font.style }`;
            if (void 0 === loaded.get(fontKey)) {
                try {
                    console.log(`Loading font ${ fontKey }`), await figma.loadFontAsync(font);
                } catch (_a) {
                    console.log(`Failed to load font ${ fontKey }`);
                }
                loaded.set(key, !0);
                console.log(`Loaded font ${ fontKey }`);
            }
        }
    }
}
function theme_to_tokens_setColorToken(colors, name, values) {
    console.log(`Setting color token ${ name }`);
    const parts = name.split('/'), {themeName, path} = {
            themeName: parts[0],
            path: parts.slice(1).join('/')
        };
    let style = tokens.utils_findColorToken(themeName, path, colors);
    const paints = tokens.utils_colorsToPaintStyles(values);
    style || (style = figma.createPaintStyle(), style.name = name);
    style.paints = [...paints];
}
function validate_validateTheme(themeName, colors, textStyles) {
    let colorsValid = !0, androidValid = !0, textValid = !0, textV2Valid = !0;
    const textStyleTokens = textStyles.filter(n => n.name.startsWith(themeName));
    0 === textStyleTokens.length && (console.log('missing text tokens for prefix'), textV2Valid = textValid = !1);
    const colorStyleTokens = colors.filter(n => n.name.startsWith(themeName));
    0 === colorStyleTokens.length && (console.log('missing color tokens for prefix'), androidValid = colorsValid = !1);
    const validateMaterialColors = section => {
            if (colorsValid) {
                var keys = 'primary on-primary primary-container on-primary-container secondary on-secondary secondary-container on-secondary-container tertiary on-tertiary tertiary-container on-tertiary-container error on-error error-container on-error-container background on-background surface on-surface surface-variant on-surface-variant outline inverse-surface inverse-on-surface'.split(' ');
                for (const key of keys) {
                    const token = tokens.utils_findColorToken(themeName, `sys/${ section }/${ key }`, colorStyleTokens);
                    colorsValid && (colorsValid = void 0 !== token);
                    if (!colorsValid) {
                        console.log(`Missing color key: ${ key }`);
                        break;
                    }
                }
            }
        }, validateTonalSection = section => {
            if (colorsValid) {
                var keys = '100 99 95 90 80 70 60 50 40 30 20 10 0'.split(' ');
                for (const key of keys) {
                    const token = tokens.utils_findColorToken(themeName, `ref/${ section }/${ section }${ key }`, colorStyleTokens);
                    colorsValid && (colorsValid = void 0 != token);
                    if (!colorsValid) {
                        console.log(`Missing tonal color key: ${ section }${ key }`);
                        return;
                    }
                }
                var androidKeys = [
                    '98',
                    '35',
                    '25'
                ];
                for (const key of androidKeys) {
                    const token = tokens.utils_findColorToken(themeName, `ref/${ section }/${ section }${ key }`, colorStyleTokens);
                    androidValid && (androidValid = void 0 != token);
                    androidValid || console.log(`Missing android tonal color key: ${ section }${ key }`);
                }
            }
        };
    validateMaterialColors('light');
    validateMaterialColors('dark');
    validateTonalSection('primary');
    validateTonalSection('secondary');
    validateTonalSection('tertiary');
    validateTonalSection('neutral');
    validateTonalSection('neutral-variant');
    validateTonalSection('error');
    (() => {
        if (textValid) {
            var keys = 'display1 display2 display3 headline1 headline2 headline3 headline4 headline5 headline6 subhead1 subhead2 button body1 body2 caption overline'.split(' ');
            for (const key of keys) {
                const token = tokens.utils_findFontToken(themeName, `${ key }`, textStyleTokens);
                textValid && (textValid = null != token);
                if (!textValid) {
                    console.log(`Missing text key: ${ key }`);
                    break;
                }
            }
        }
    })();
    (() => {
        if (textV2Valid) {
            var keys = 'display/large display/medium display/small headline/large headline/medium headline/small title/large title/medium title/small label/large label/medium label/small body/large body/medium body/small'.split(' ');
            for (const key of keys) {
                const token = tokens.utils_findFontToken(themeName, `${ key }`);
                textV2Valid && (textV2Valid = void 0 !== token);
                if (!textV2Valid) {
                    console.log(`Missing text key: ${ key }`, textStyleTokens);
                    break;
                }
            }
        }
    })();
    const result = {
        colorsValid,
        androidValid,
        textValid,
        textV2Valid
    };
    console.log(`${ themeName }`, result);
    return result;
}
function validate_getLocalThemeNames() {
    var _a, _b;
    const prefixes = [], colorStyles = null !== (_a = figma.getLocalPaintStyles()) && void 0 !== _a ? _a : [], textStyles = null !== (_b = figma.getLocalTextStyles()) && void 0 !== _b ? _b : [];
    for (const style of colorStyles) {
        const prefix = style.name.split('/')[0];
        prefixes.includes(prefix) || prefixes.push(prefix);
    }
    for (const style of textStyles) {
        const prefix = style.name.split('/')[0];
        prefixes.includes(prefix) || prefixes.push(prefix);
    }
    const results = [];
    for (const prefix of prefixes) {
        const prefixColorStyles = colorStyles.filter(n => n.name.startsWith(prefix)), prefixTextStyles = textStyles.filter(n => n.name.startsWith(prefix)), result = tokens.validate_validateTheme(prefix, prefixColorStyles, prefixTextStyles), hasTextTokens = result.textValid || result.textV2Valid;
        result.colorsValid && hasTextTokens ? results.push(prefix) : console.log(prefix, 'missing tokens');
    }
    console.log('local themes - prefixes', prefixes, 'valid', results);
    return results;
}
async function migrate_migrateTheme(themeName) {
    var _a, _b;
    const colorStyles = null !== (_a = figma.getLocalPaintStyles()) && void 0 !== _a ? _a : [], textStyles = null !== (_b = figma.getLocalTextStyles()) && void 0 !== _b ? _b : [], prefixColorStyles = colorStyles.filter(n => n.name.startsWith(themeName)), prefixTextStyles = textStyles.filter(n => n.name.startsWith(themeName)), result = tokens.validate_validateTheme(themeName, prefixColorStyles, prefixTextStyles);
    if (!(result.colorsValid && result.androidValid && result.textValid && result.textV2Valid)) {
        var theme = tokens.theme_from_tokens_themeFromTokens(themeName), adapter = google3.fromTheme(theme);
        result.androidValid || (console.log(themeName, 'missing android tokens'), tokens.theme_to_tokens_updateThemeColorTokens(adapter, themeName));
        result.textV2Valid || (console.log(themeName, 'missing new text tokens'), await tokens.theme_to_tokens_updateThemeColorTokens(adapter, themeName));
    }
}
function swap_linkTokens(themeName, nodes) {
    const getIdParts = value => {
            const parts = value.toLowerCase().trim().split('/');
            return 1 < parts.length ? {
                section: parts[parts.length - 2],
                key: parts[parts.length - 1].toLowerCase().trim(),
                valid: !0
            } : {
                section: '',
                key: '',
                valid: !1
            };
        }, processColorStyle = style => {
            const {section, key, valid} = getIdParts(style.name);
            return valid ? tokens.swap_getColorStyleId(themeName, key, section, style) : style.id;
        };
    tokens.swap_crawlNodes(nodes, node => {
        console.log('processing node', node.name);
        tokens.swap_processStrokeStyleIdOnNode(node, (base, style) => {
            const styleId = processColorStyle(style);
            console.log('updating stroke style', node.name);
            base.strokeStyleId = styleId;
        });
        tokens.swap_processFillStyleIdOnNode(node, (base, style) => {
            const styleId = processColorStyle(style);
            console.log('updating fill style', node.name);
            base.fillStyleId = styleId;
        });
        tokens.swap_processTextStyleIdOnNode(node, (base, style) => {
            const {section, key, valid} = getIdParts(style.name);
            var JSCompiler_inline_result = valid ? tokens.swap_getTextStyleId(themeName, key, section, style) : style.id;
            console.log('updating text style', node.name);
            base.textStyleId = JSCompiler_inline_result;
        });
    });
}
function swap_toggleTheme(themeName, nodes, section) {
    tokens.swap_linkTokens(themeName, nodes);
    const colors = tokens.utils_getColorTokens(themeName);
    tokens.swap_crawlNodes(nodes, node => {
        const toggleStyle = (style, cb) => {
            const styleName = style.name, parts = styleName.split('/'), key = parts[parts.length - 1];
            if (styleName.startsWith(`${ themeName }/sys`)) {
                const token = tokens.utils_findColorToken(themeName, `sys/${ section }/${ key }`, colors);
                token && cb(token);
            }
            if (styleName.startsWith(`${ themeName }/read-only`)) {
                const token = tokens.utils_findColorToken(themeName, `read-only/${ section }/${ key }`, colors);
                token && cb(token);
            }
            if (styleName.startsWith(`${ themeName }/android`)) {
                const token = tokens.utils_findColorToken(themeName, `android/${ section }/${ key }`, colors);
                token && cb(token);
            }
        };
        tokens.swap_processFillStyleIdOnNode(node, (base, style) => {
            toggleStyle(style, token => {
                base.fillStyleId = token.id;
            });
        });
        tokens.swap_processStrokeStyleIdOnNode(node, (base, style) => {
            toggleStyle(style, token => {
                base.strokeStyleId = token.id;
            });
        });
    });
}
function swap_processFillStyleIdOnNode(node, cb) {
    if (null === node || void 0 === node ? 0 : node.fillStyleId) {
        const id = node.fillStyleId;
        if ('string' === typeof id) {
            const style = figma.getStyleById(id);
            style && 'PAINT' === style.type ? cb(node, style) : console.log('processFillStyleIdOnNode type', id, null === style || void 0 === style ? void 0 : style.type);
        } else
            console.log('processFillStyleIdOnNode', id);
    }
}
function swap_processStrokeStyleIdOnNode(node, cb) {
    if (null === node || void 0 === node ? 0 : node.strokeStyleId) {
        const id = node.strokeStyleId;
        if ('string' === typeof id) {
            const style = figma.getStyleById(id);
            style && 'PAINT' === style.type ? cb(node, style) : console.log('processStrokeStyleIdOnNode type', id, null === style || void 0 === style ? void 0 : style.type);
        } else
            console.log('processStrokeStyleIdOnNode', id);
    }
}
function swap_processTextStyleIdOnNode(node, cb) {
    if (null === node || void 0 === node ? 0 : node.textStyleId) {
        const id = node.textStyleId;
        if ('string' === typeof id) {
            const style = figma.getStyleById(id);
            style && cb(node, style);
        } else
            console.log('processTextStyleIdOnNode', id);
    }
}
function swap_getTextStyleId(themeName, key, section, fallback) {
    console.log('searching text token', section, key);
    const getStyleId = (themeKey, altKey) => {
        var _a;
        if (altKey) {
            const proposedStyle = tokens.utils_findFontToken(themeName, altKey);
            if (proposedStyle)
                return null === proposedStyle || void 0 === proposedStyle ? void 0 : proposedStyle.id;
        }
        const proposedStyle = tokens.utils_findFontToken(themeName, themeKey);
        return null !== (_a = null === proposedStyle || void 0 === proposedStyle ? void 0 : proposedStyle.id) && void 0 !== _a ? _a : fallback.id;
    };
    let styleId = fallback.id;
    if ([
            'display',
            'headline',
            'title',
            'label',
            'body'
        ].includes(section))
        switch (section) {
        case 'display':
            switch (key) {
            case '1':
            case '1 - 64pt':
                styleId = getStyleId('display1');
                break;
            case 'large':
            case '2':
            case '2 - 56pt':
                styleId = getStyleId('display2', 'display/large');
                break;
            case 'medium':
            case '3':
            case '3 - 44pt':
                styleId = getStyleId('display3', 'display/medium');
                break;
            case 'small':
                styleId = getStyleId('headline1', 'display/small');
            }
            break;
        case 'headline':
            switch (key) {
            case '1':
            case '1 - 36pt':
                styleId = getStyleId('headline1', 'display/small');
                break;
            case '2':
            case '2 - 32pt':
            case 'large':
                styleId = getStyleId('headline2', 'headline/large');
                break;
            case 'medium':
            case '3':
            case '3 - 28pt':
                styleId = getStyleId('headline3', 'headline/medium');
                break;
            case 'small':
            case '4':
            case '4 - 24pt':
                styleId = getStyleId('headline4', 'headline/small');
                break;
            case '5':
            case '5 - 22pt':
                styleId = getStyleId('headline5', 'title/large');
                break;
            case '6':
            case '6 - 18pt':
                styleId = getStyleId('headline6');
            }
            break;
        case 'subheader':
            switch (key) {
            case '1':
            case '1 - 16pt':
                styleId = getStyleId('subhead1', 'title/medium');
                break;
            case '2':
            case '2 - 14pt':
                styleId = getStyleId('subhead2', 'title/small');
            }
            break;
        case 'subtitle':
            switch (key) {
            case '1':
            case 'subtitle 1 - 16pt':
            case 'subtitle 1 (android) - 16pt':
            case 'subtitle 1 (ios) - 16pt':
                styleId = getStyleId('body1', 'body/large');
                break;
            case '2':
            case 'subtitle 2 - 14pt':
            case 'subtitle 2 (android) - 14pt':
            case 'subtitle 2 (ios) - 14pt':
                styleId = getStyleId('body2', 'body/medium');
            }
            break;
        case 'overline':
            switch (key) {
            case 'overline (android)':
            case 'overline (android) - 11pt':
            case 'overline (ios) - 11pt':
                styleId = getStyleId('overline', 'label/medium');
            }
            break;
        case 'caption':
            switch (key) {
            case 'caption (android)':
            case 'caption (android) - 12pt':
            case 'caption (ios) - 12pt':
                styleId = getStyleId('caption', 'body/small');
            }
            break;
        case 'component labels':
            switch (key) {
            case 'button':
                styleId = getStyleId('button', 'label/large');
                break;
            case 'input chips':
                styleId = getStyleId('button', 'label/large');
                break;
            case 'action chips':
                styleId = getStyleId('button', 'label/large');
                break;
            case 'menu and navigation':
            case 'menu navigation':
            case 'menu & navigation':
                styleId = getStyleId('button', 'label/large');
            }
            break;
        case 'title':
            switch (key) {
            case 'large':
                styleId = getStyleId('headline5', 'title/large');
                break;
            case 'medium':
                styleId = getStyleId('subhead1', 'title/medium');
                break;
            case 'small':
                styleId = getStyleId('subhead2', 'title/small');
            }
            break;
        case 'body':
            switch (key) {
            case '1':
            case 'body 1 - 16pt':
            case 'body 1 (android) - 16pt':
            case 'body 1 (ios) - 16pt':
            case 'large':
                styleId = getStyleId('body1', 'body/large');
                break;
            case '2':
            case 'body 2 - 14pt':
            case 'body 2 (android) - 14pt':
            case 'body 2 (ios) - 14pt':
            case 'medium':
                styleId = getStyleId('body2', 'body/medium');
                break;
            case 'small':
                styleId = getStyleId('caption', 'body/small');
            }
            break;
        case 'label':
            switch (key) {
            case 'large':
                styleId = getStyleId('button', 'label/large');
                break;
            case 'medium':
                styleId = getStyleId('overline', 'label/medium');
                break;
            case 'small':
                styleId = getStyleId('labelSmall', 'label/small');
            }
        }
    else
        switch (key) {
        case 'display 1':
        case 'display-1':
        case 'display1':
            styleId = getStyleId('display1');
            break;
        case 'display 2':
        case 'display-2':
        case 'display2':
        case 'display large':
        case 'large':
            styleId = getStyleId('display2', 'display/large');
            break;
        case 'display 3':
        case 'display-3':
        case 'display3':
        case 'display medium':
        case 'medium':
            styleId = getStyleId('display3', 'display/medium');
            break;
        case 'headline 1':
        case 'headline-1':
        case 'headline1':
        case 'display small':
        case 'small':
            styleId = getStyleId('headline1', 'display/small');
            break;
        case 'headline 2':
        case 'headline-2':
        case 'headline2':
            styleId = getStyleId('headline2', 'headline/large');
            break;
        case 'headline 3':
        case 'headline-3':
        case 'headline3':
            styleId = getStyleId('headline3', 'headline/medium');
            break;
        case 'headline 4':
        case 'headline-4':
        case 'headline4':
            styleId = getStyleId('headline4', 'headline/small');
            break;
        case 'headline 5':
        case 'headline-5':
        case 'headline5':
            styleId = getStyleId('headline5', 'title/large');
            break;
        case 'headline 6':
        case 'headline-6':
        case 'headline6':
            styleId = getStyleId('headline6');
            break;
        case 'subhead1':
        case 'subhead-1':
        case 'subhead 1':
        case 'subhead1 (ios)':
            styleId = getStyleId('subhead1', 'title/medium');
            break;
        case 'subhead2':
        case 'subhead-2':
        case 'subhead 2':
        case 'subhead2 (ios)':
            styleId = getStyleId('subhead2', 'title/small');
            break;
        case 'body1':
        case 'body-1':
        case 'body 1':
        case 'body1 (ios)':
            styleId = getStyleId('body1', 'body/large');
            break;
        case 'body2':
        case 'body-2':
        case 'body 2':
        case 'body2 (ios)':
            styleId = getStyleId('body2', 'body/medium');
            break;
        case 'button':
        case 'button (ios)':
            styleId = getStyleId('button', 'label/large');
            break;
        case 'caption':
        case 'caption (ios)':
            styleId = getStyleId('caption', 'body/small');
            break;
        case 'overline':
        case 'overline (ios)':
            styleId = getStyleId('overline', 'label/medium');
            break;
        case 'labelSmall':
            styleId = getStyleId('labelSmall', 'label/small');
        }
    return styleId;
}
function swap_getColorStyleId(themeName, key, section, fallback) {
    const colors = tokens.utils_getColorTokens(themeName), isRefToken = 'primary secondary tertiary error neutral neutral-variant'.split(' ').includes(section);
    let styleId = fallback.id;
    console.log('searching color token', section, key);
    if (isRefToken) {
        const lumValue = key.replace(section, '');
        return styleId = (themeKey => {
            var _a;
            const proposedStyle = tokens.utils_findColorToken(themeName, `ref/${ themeKey }`, colors);
            return null !== (_a = null === proposedStyle || void 0 === proposedStyle ? void 0 : proposedStyle.id) && void 0 !== _a ? _a : fallback.id;
        })(`${ section }/${ section }${ lumValue }`);
    }
    const getStyleId = (themeKey, subSection = 'sys') => {
        var _a;
        const proposedStyle = tokens.utils_findColorToken(themeName, `${ subSection }/${ section }/${ themeKey }`, colors);
        return null !== (_a = null === proposedStyle || void 0 === proposedStyle ? void 0 : proposedStyle.id) && void 0 !== _a ? _a : fallback.id;
    };
    switch (key) {
    case 'primary':
        styleId = getStyleId('primary');
        break;
    case 'on-primary':
    case 'on primary':
        styleId = getStyleId('on-primary');
        break;
    case 'primary-container':
    case 'primary container':
        styleId = getStyleId('primary-container');
        break;
    case 'on-primary-container':
    case 'on primary container':
        styleId = getStyleId('on-primary-container');
        break;
    case 'secondary':
        styleId = getStyleId('secondary');
        break;
    case 'on-secondary':
    case 'on secondary':
        styleId = getStyleId('on-secondary');
        break;
    case 'secondary-container':
    case 'secondary container':
        styleId = getStyleId('secondary-container');
        break;
    case 'on-secondary-container':
    case 'on secondary container':
        styleId = getStyleId('on-secondary-container');
        break;
    case 'tertiary':
        styleId = getStyleId('tertiary');
        break;
    case 'on-tertiary':
    case 'on tertiary':
        styleId = getStyleId('on-tertiary');
        break;
    case 'tertiary-container':
    case 'tertiary container':
        styleId = getStyleId('tertiary-container');
        break;
    case 'on-tertiary-container':
    case 'on tertiary container':
        styleId = getStyleId('on-tertiary-container');
        break;
    case 'surface':
        styleId = getStyleId('surface');
        break;
    case 'on-surface':
    case 'on surface':
        styleId = getStyleId('on-surface');
        break;
    case 'on-surface-variant':
    case 'on surface variant':
        styleId = getStyleId('on-surface-variant');
        break;
    case 'surface-variant':
    case 'surface variant':
        styleId = getStyleId('surface-variant');
        break;
    case 'inverse-surface':
    case 'inverse surface':
        styleId = getStyleId('inverse-surface');
        break;
    case 'inverse-on-surface':
    case 'inverse on surface':
        styleId = getStyleId('inverse-on-surface');
        break;
    case 'surface0':
    case 'surface-0':
    case 'surface 0':
        styleId = getStyleId('surface');
        break;
    case 'white':
        styleId = getStyleId('white', 'read-only');
        break;
    case 'black':
        styleId = getStyleId('black', 'read-only');
        break;
    case 'surface1':
    case 'surface 1':
        styleId = getStyleId('surface1', 'read-only');
        break;
    case 'surface2':
    case 'surface-2':
    case 'surface 2':
        styleId = getStyleId('surface2', 'read-only');
        break;
    case 'surface3':
    case 'surface-3':
    case 'surface 3':
        styleId = getStyleId('surface3', 'read-only');
        break;
    case 'surface4':
    case 'surface-4':
    case 'surface 4':
        styleId = getStyleId('surface4', 'read-only');
        break;
    case 'surface5':
    case 'surface-5':
    case 'surface 5':
        styleId = getStyleId('surface5', 'read-only');
        break;
    case 'background':
        styleId = getStyleId('background');
        break;
    case 'on-background':
    case 'on background':
        styleId = getStyleId('on-background');
        break;
    case 'error':
        styleId = getStyleId('error');
        break;
    case 'on-error':
    case 'on error':
        styleId = getStyleId('on-error');
        break;
    case 'error-container':
    case 'error container':
        styleId = getStyleId('error-container');
        break;
    case 'on-error-container':
    case 'on error container':
        styleId = getStyleId('on-error-container');
        break;
    case 'outline':
        styleId = getStyleId('outline');
        break;
    case 'color-accent-primary':
        styleId = getStyleId('color-accent-primary', 'android');
        break;
    case 'color-accent-primary-variant':
        styleId = getStyleId('color-accent-primary-variant', 'android');
        break;
    case 'color-accent-secondary':
        styleId = getStyleId('color-accent-secondary', 'android');
        break;
    case 'color-accent-secondary-variant':
        styleId = getStyleId('color-accent-secondary-variant', 'android');
        break;
    case 'color-accent-tertiary':
        styleId = getStyleId('color-accent-tertiary', 'android');
        break;
    case 'color-accent-tertiary-variant':
        styleId = getStyleId('color-accent-tertiary-variant', 'android');
        break;
    case 'text-color-primary':
        styleId = getStyleId('text-color-primary', 'android');
        break;
    case 'text-color-secondary':
        styleId = getStyleId('text-color-secondary', 'android');
        break;
    case 'text-color-tertiary':
        styleId = getStyleId('text-color-tertiary', 'android');
        break;
    case 'text-color-primary-inverse':
        styleId = getStyleId('text-color-primary-inverse', 'android');
        break;
    case 'text-color-secondary-inverse':
        styleId = getStyleId('text-color-secondary-inverse', 'android');
        break;
    case 'text-color-tertiary-inverse':
        styleId = getStyleId('text-color-tertiary-inverse', 'android');
        break;
    case 'color-background':
        styleId = getStyleId('color-background', 'android');
        break;
    case 'color-background-floating':
        styleId = getStyleId('color-background-floating', 'android');
        break;
    case 'color-surface':
        styleId = getStyleId('color-surface', 'android');
        break;
    case 'color-surface-variant':
        styleId = getStyleId('color-surface-variant', 'android');
        break;
    case 'color-surface-highlight':
        styleId = getStyleId('color-surface-highlight', 'android');
        break;
    case 'surface-header':
        styleId = getStyleId('surface-header', 'android');
        break;
    case 'under-surface':
        styleId = getStyleId('under-surface', 'android');
        break;
    case 'off-state':
        styleId = getStyleId('off-state', 'android');
        break;
    case 'accent-surface':
        styleId = getStyleId('accent-surface', 'android');
        break;
    case 'text-primary-on-accent':
        styleId = getStyleId('text-primary-on-accent', 'android');
        break;
    case 'text-secondary-on-accent':
        styleId = getStyleId('text-secondary-on-accent', 'android');
        break;
    case 'volume-background':
        styleId = getStyleId('volume-background', 'android');
        break;
    case 'scrim':
        styleId = getStyleId('scrim', 'android');
    }
    return styleId;
}
function swap_crawlNodes(nodes, cb) {
    const checkNode = node => {
        cb(node);
        if (null === node || void 0 === node ? 0 : node.children) {
            const children = node.children;
            for (const child of children)
                checkNode(child);
        }
    };
    for (const node of nodes)
        checkNode(node);
}