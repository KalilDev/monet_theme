'use strict';
const $m2dpalettes_boxSize = require('google3/ux/material/theme_generator/figmaplugin/src/canvas/tonal/2dpalettes_boxSize/code.js');
const tokens = require('google3/ux/material/theme_generator/figmaplugin/src/tokens/code.js');
const theme = require('google3/ux/material/theme_generator/src/theme/code.js');
const utils = require('google3/ux/material/theme_generator/figmaplugin/src/utils/code.js');
const google3 = require('google3');
var JSCompiler_StaticMethods_viewed = function (JSCompiler_StaticMethods_viewed$self) {
    const t = Math.pow((0 === JSCompiler_StaticMethods_viewed$self.chroma || 0 === JSCompiler_StaticMethods_viewed$self.j ? 0 : JSCompiler_StaticMethods_viewed$self.chroma / Math.sqrt(JSCompiler_StaticMethods_viewed$self.j / 100)) / Math.pow(1.64 - Math.pow(0.29, google3.DEFAULT.n), 0.73), 1 / 0.9), hRad = JSCompiler_StaticMethods_viewed$self.hue * Math.PI / 180, p2 = google3.DEFAULT.aw * Math.pow(JSCompiler_StaticMethods_viewed$self.j / 100, 1 / google3.DEFAULT.c / google3.DEFAULT.z) / google3.DEFAULT.nbb, hSin = Math.sin(hRad), hCos = Math.cos(hRad), gamma = 23 * (p2 + 0.305) * t / (50000 / 13 * (Math.cos(hRad + 2) + 3.8) * 5.75 * google3.DEFAULT.nc * google3.DEFAULT.ncb + 11 * t * hCos + 108 * t * hSin), a = gamma * hCos, b = gamma * hSin, rA = (460 * p2 + 451 * a + 288 * b) / 1403, gA = (460 * p2 - 891 * a - 261 * b) / 1403, bA = (460 * p2 - 220 * a - 6300 * b) / 1403, rF = 100 / google3.DEFAULT.fl * utils.math_utils_signum(rA) * Math.pow(Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA))), 1 / 0.42) / google3.DEFAULT.rgbD[0], gF = 100 / google3.DEFAULT.fl * utils.math_utils_signum(gA) * Math.pow(Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA))), 1 / 0.42) / google3.DEFAULT.rgbD[1], bF = 100 / google3.DEFAULT.fl * utils.math_utils_signum(bA) * Math.pow(Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA))), 1 / 0.42) / google3.DEFAULT.rgbD[2];
    return google3.intFromXyzComponents(1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF, 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF, -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF);
};
var JSCompiler_StaticMethods_setInternalState = function (JSCompiler_StaticMethods_setInternalState$self, argb) {
    const cam = google3.fromIntInViewingConditions(argb), tone = google3.lstarFromInt(argb);
    JSCompiler_StaticMethods_setInternalState$self.internalHue = cam.hue;
    JSCompiler_StaticMethods_setInternalState$self.internalChroma = cam.chroma;
    JSCompiler_StaticMethods_setInternalState$self.internalTone = tone;
};
var JSCompiler_StaticMethods_getColorGroup = function (JSCompiler_StaticMethods_getColorGroup$self, key, tones) {
    var _a;
    const groups = null !== (_a = JSCompiler_StaticMethods_getColorGroup$self.props.overrides.tonalGroups) && void 0 !== _a ? _a : {}, overrideGroup = Object(groups)[key];
    return overrideGroup ? overrideGroup : theme.tonal_group_tonesToTonalGroup(tones);
};
var JSCompiler_StaticMethods_getPrimaryTonal = function (JSCompiler_StaticMethods_getPrimaryTonal$self, prefix, palettes) {
    return (null !== palettes && void 0 !== palettes ? palettes : JSCompiler_StaticMethods_getPrimaryTonal$self.palettes).get(`${prefix}-40`);
};
var JSCompiler_StaticMethods_semanticColor = function (value) {
    const tokens = {};
    try {
        var JSCompiler_inline_result = google3.intFromHex(value);
    } catch (error) {
        console.log(`error converting [${value}] to number`, error), JSCompiler_inline_result = google3.intFromHex('#000000');
    }
    const tones = new google3.CorePalette(JSCompiler_inline_result).a1;
    var JSCompiler_object_inline_group_364 = theme.tonal_group_tonesToTonalGroup(tones);
    var JSCompiler_object_inline_light_365 = {
        color: theme.color_utils_numberToHex(tones.tone(40)),
        onColor: theme.color_utils_numberToHex(tones.tone(100)),
        colorContainer: theme.color_utils_numberToHex(tones.tone(90)),
        onColorContainer: theme.color_utils_numberToHex(tones.tone(10))
    };
    var JSCompiler_object_inline_dark_366 = {
        color: theme.color_utils_numberToHex(tones.tone(80)),
        onColor: theme.color_utils_numberToHex(tones.tone(20)),
        colorContainer: theme.color_utils_numberToHex(tones.tone(30)),
        onColorContainer: theme.color_utils_numberToHex(tones.tone(90))
    };
    tokens.value = value;
    tokens.group = JSCompiler_object_inline_group_364;
    tokens.light = JSCompiler_object_inline_light_365;
    tokens.dark = JSCompiler_object_inline_dark_366;
    return tokens;
};
var JSCompiler_StaticMethods_getOnColorStyle = function (JSCompiler_StaticMethods_getOnColorStyle$self, color, section = 'light') {
    const value = theme.color_utils_getOnColor(color), path = `read-only/${section}/${'#FFFFFF' === value ? 'white' : 'black'}`;
    let style = tokens.utils_findColorToken(JSCompiler_StaticMethods_getOnColorStyle$self.scene.themeName, path);
    return style = tokens.utils_setPaintStyle(JSCompiler_StaticMethods_getOnColorStyle$self.scene.themeName, path, [{ value }], style);
};
var JSCompiler_StaticMethods_addDivider = function (JSCompiler_StaticMethods_addDivider$self) {
    JSCompiler_StaticMethods_addDivider$self.scene.lastRect.dy += 20;
    JSCompiler_StaticMethods_addDivider$self.scene.lastRect.dy += 20;
};
var JSCompiler_StaticMethods_addGroup = function (JSCompiler_StaticMethods_addGroup$self, name, nodes, index = JSCompiler_StaticMethods_addGroup$self.nodes.length) {
    const group = figma.group(nodes, figma.currentPage);
    group.name = name;
    JSCompiler_StaticMethods_addGroup$self.nodes.splice(index, 0, group);
};
var JSCompiler_StaticMethods_createNodes = function (JSCompiler_StaticMethods_createNodes$self) {
    var _a;
    if (0 !== JSCompiler_StaticMethods_createNodes$self.nodes.length) {
        var localNodes = [], checkNode = node => {
            if (null === node || void 0 === node ? 0 : node.nodes) {
                for (const child of node.nodes)
                    figma.currentPage.appendChild(child);
                const group = figma.group(node.nodes, figma.currentPage);
                node.name && (group.name = node.name);
                return group;
            }
            figma.currentPage.appendChild(node);
            return node;
        };
        for (const node of JSCompiler_StaticMethods_createNodes$self.nodes)
            localNodes.push(checkNode(node));
        var parent = figma.currentPage, groupName = null !== (_a = JSCompiler_StaticMethods_createNodes$self.groupName) && void 0 !== _a ? _a : JSCompiler_StaticMethods_createNodes$self.themeName;
        for (const item of parent.children)
            JSCompiler_StaticMethods_createNodes$self.clear && item.name === groupName && item.remove();
        var group$jscomp$0 = figma.group(localNodes, parent);
        group$jscomp$0.name = groupName;
        figma.currentPage.selection = [group$jscomp$0];
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.selection);
    }
};
var JSCompiler_StaticMethods_createSectionLabel = function (JSCompiler_StaticMethods_createSectionLabel$self, name) {
    return utils.utils_createDefaultLabel({
        name,
        theme: JSCompiler_StaticMethods_createSectionLabel$self.themeName,
        offset: {
            dx: JSCompiler_StaticMethods_createSectionLabel$self.lastRect.dx,
            dy: JSCompiler_StaticMethods_createSectionLabel$self.lastRect.dy + -80
        },
        type: 'title/large'
    });
};
var JSCompiler_StaticMethods_addSectionSpacing = function (JSCompiler_StaticMethods_addSectionSpacing$self) {
    JSCompiler_StaticMethods_addSectionSpacing$self.lastRect.dx += 20;
};
var JSCompiler_StaticMethods_addBox = function (JSCompiler_StaticMethods_addBox$self, colors$jscomp$0, name, tonal, rect, tokenPath, onColor) {
    const main = colors$jscomp$0[0].value, bg = utils.utils_createRect(Object.assign({}, rect)), getStyle = (path, colors) => {
        let style = tokens.utils_findColorToken(JSCompiler_StaticMethods_addBox$self.scene.themeName, path);
        return style = tokens.utils_setPaintStyle(JSCompiler_StaticMethods_addBox$self.scene.themeName, path, colors, style);
    }, style$jscomp$0 = getStyle(tokenPath, colors$jscomp$0);
    style$jscomp$0 && (bg.fillStyleId = style$jscomp$0.id);
    bg.name = name;
    JSCompiler_StaticMethods_addBox$self.nodes.push(bg);
    const onColorStyle = (null === onColor || void 0 === onColor ? 0 : onColor.tokenPath) && (null === onColor || void 0 === onColor ? 0 : onColor.colors) ? getStyle(onColor.tokenPath, onColor.colors) : JSCompiler_StaticMethods_getOnColorStyle(JSCompiler_StaticMethods_addBox$self, main, JSCompiler_StaticMethods_addBox$self.section), label = utils.utils_createLabel(Object.assign(Object.assign({}, rect), {
        label: name,
        dx: rect.dx + 10,
        dy: rect.dy + 10,
        color: utils.color_hexToRgb(theme.color_utils_getOnColor(main)),
        theme: JSCompiler_StaticMethods_addBox$self.scene.themeName
    })), textStyle = tokens.utils_findFontToken(JSCompiler_StaticMethods_addBox$self.scene.themeName, 'subhead2');
    textStyle && (label.textStyleId = textStyle.id);
    onColorStyle && (label.fillStyleId = onColorStyle.id);
    label.name = name;
    JSCompiler_StaticMethods_addBox$self.nodes.push(label);
    const value = utils.utils_createLabel(Object.assign(Object.assign({}, rect), {
        label: tonal,
        dx: rect.dx,
        dy: rect.dy,
        color: utils.color_hexToRgb(theme.color_utils_getOnColor(main)),
        theme: JSCompiler_StaticMethods_addBox$self.scene.themeName
    }));
    value.textAlignHorizontal = 'RIGHT';
    value.x += rect.width - value.width - 10;
    value.y += rect.height - value.height - 10;
    textStyle && (value.textStyleId = textStyle.id);
    onColorStyle && (value.fillStyleId = onColorStyle.id);
    value.name = name;
    JSCompiler_StaticMethods_addBox$self.nodes.push(value);
};
var JSCompiler_StaticMethods_addGroupLabel = function (JSCompiler_StaticMethods_addGroupLabel$self, name) {
    const label = utils.utils_createDefaultLabel({
        name,
        offset: {
            dx: JSCompiler_StaticMethods_addGroupLabel$self.scene.lastRect.dx,
            dy: JSCompiler_StaticMethods_addGroupLabel$self.scene.lastRect.dy + -40
        },
        theme: JSCompiler_StaticMethods_addGroupLabel$self.scene.themeName,
        type: 'body/large'
    });
    JSCompiler_StaticMethods_addGroupLabel$self.nodes.push(label);
};
var JSCompiler_StaticMethods_addColorFamily = function (JSCompiler_StaticMethods_addColorFamily$self, name, group, tokenPrefix = 'sys', keyLabel) {
    const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1), fixedKey = (null !== keyLabel && void 0 !== keyLabel ? keyLabel : name).toLowerCase(), keyName = fixedKey.charAt(0).toUpperCase() + fixedKey.slice(1);
    JSCompiler_StaticMethods_addColorFamily$self.addColor({
        light: {
            label: `${keyName}40`,
            value: group.luminance40,
            tokenPath: `${tokenPrefix}/light/${fixedKey}`,
            onColor: {
                value: group.luminance100,
                tokenPath: `${tokenPrefix}/light/on-${fixedKey}`
            }
        },
        dark: {
            label: `${keyName}80`,
            value: group.luminance80,
            tokenPath: `${tokenPrefix}/dark/${fixedKey}`,
            onColor: {
                value: group.luminance20,
                tokenPath: `${tokenPrefix}/dark/on-${fixedKey}`
            }
        },
        label: `${nameUppercase}`,
        width: google3.defaultSize.width,
        height: google3.defaultSize.height
    });
    JSCompiler_StaticMethods_addColorFamily$self.addColor({
        shift: 1,
        light: {
            label: `${keyName}100`,
            value: group.luminance100,
            tokenPath: `${tokenPrefix}/light/on-${fixedKey}`,
            onColor: {
                value: group.luminance40,
                tokenPath: `${tokenPrefix}/light/${fixedKey}`
            }
        },
        dark: {
            label: `${keyName}20`,
            value: group.luminance20,
            tokenPath: `${tokenPrefix}/dark/on-${fixedKey}`,
            onColor: {
                value: group.luminance80,
                tokenPath: `${tokenPrefix}/dark/${fixedKey}`
            }
        },
        label: `On ${nameUppercase}`,
        width: google3.defaultSize.width,
        height: google3.defaultSize.height
    });
    JSCompiler_StaticMethods_addColorFamily$self.addColor({
        shift: 2,
        light: {
            label: `${keyName}90`,
            value: group.luminance90,
            tokenPath: `${tokenPrefix}/light/${fixedKey}-container`,
            onColor: {
                value: group.luminance10,
                tokenPath: `${tokenPrefix}/light/on-${fixedKey}-container`
            }
        },
        dark: {
            label: `${keyName}30`,
            value: group.luminance30,
            tokenPath: `${tokenPrefix}/dark/${fixedKey}-container`,
            onColor: {
                value: group.luminance90,
                tokenPath: `${tokenPrefix}/dark/on-${fixedKey}-container`
            }
        },
        label: `${nameUppercase} Container`,
        width: google3.defaultSize.width,
        height: google3.defaultSize.height
    });
    JSCompiler_StaticMethods_addColorFamily$self.addColor({
        shift: 3,
        light: {
            label: `${keyName}10`,
            value: group.luminance10,
            tokenPath: `${tokenPrefix}/light/on-${fixedKey}-container`,
            onColor: {
                value: group.luminance90,
                tokenPath: `${tokenPrefix}/light/${fixedKey}-container`
            }
        },
        dark: {
            label: `${keyName}90`,
            value: group.luminance90,
            tokenPath: `${tokenPrefix}/dark/on-${fixedKey}-container`,
            onColor: {
                value: group.luminance30,
                tokenPath: `${tokenPrefix}/dark/${fixedKey}-container`
            }
        },
        label: `On ${nameUppercase} Container`,
        width: google3.defaultSize.width,
        height: google3.defaultSize.height
    });
    JSCompiler_StaticMethods_addColorFamily$self.scene.lastRect.dy += 20;
};
var JSCompiler_StaticMethods_addRowLabel = function (JSCompiler_StaticMethods_addRowLabel$self, key) {
    console.log('adding row label');
    const label = utils.string_keyToLabel(key), rowLabel = utils.utils_createDefaultLabel({
        name: label,
        theme: JSCompiler_StaticMethods_addRowLabel$self.scene.themeName,
        offset: {
            dx: JSCompiler_StaticMethods_addRowLabel$self.scene.lastRect.dx,
            dy: JSCompiler_StaticMethods_addRowLabel$self.scene.lastRect.dy
        }
    });
    rowLabel.y += ('neutral-variant' === key ? 70 : $m2dpalettes_boxSize.height) / 2 - rowLabel.height / 2;
    JSCompiler_StaticMethods_addRowLabel$self.nodes.push(rowLabel);
};
var JSCompiler_StaticMethods_addKeyColor = function (JSCompiler_StaticMethods_addKeyColor$self, key, value$jscomp$0) {
    const value = key.toLowerCase().trim();
    var JSCompiler_inline_result = value.slice(0, 1).toUpperCase() + value.slice(1, value.length);
    var JSCompiler_object_inline_dx_367 = JSCompiler_StaticMethods_addKeyColor$self.scene.lastRect.dx, JSCompiler_object_inline_dy_368 = JSCompiler_StaticMethods_addKeyColor$self.scene.lastRect.dy;
    const node = figma.createEllipse();
    node.resize(40, 40);
    node.x = JSCompiler_object_inline_dx_367;
    node.y = JSCompiler_object_inline_dy_368;
    value$jscomp$0 && (node.fills = [tokens.utils_colorToPaintStyle({ value: value$jscomp$0 })]);
    node.name = JSCompiler_inline_result;
    node.y += ('neutral-variant' === key ? 70 : $m2dpalettes_boxSize.height) / 2 - node.height / 2;
    const style = tokens.utils_findColorToken(JSCompiler_StaticMethods_addKeyColor$self.scene.themeName, `source/${JSCompiler_inline_result}`);
    style && (node.fillStyleId = style.id);
    JSCompiler_StaticMethods_addKeyColor$self.nodes.push(node);
};
var JSCompiler_StaticMethods_addTonalRow = function (JSCompiler_StaticMethods_addTonalRow$self, key, map, prefix) {
    const steps = [...google3.LUMINANCE_STEPS].reverse(), values = [
        map.luminance0,
        map.luminance10,
        map.luminance20,
        map.luminance30,
        map.luminance40,
        map.luminance50,
        map.luminance60,
        map.luminance70,
        map.luminance80,
        map.luminance90,
        map.luminance95,
        map.luminance99,
        map.luminance100
    ].reverse(), prevDx = JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dx, prevDy = JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dy, height = 'neutral-variant' === key ? 70 : $m2dpalettes_boxSize.height;
    for (let i = 0; i < steps.length; i++) {
        const tonal = steps[i].toString(), value = values[i], node = utils.utils_createRect({
            dx: JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dx,
            dy: JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dy,
            width: 61,
            height,
            color: value
        });
        var JSCompiler_StaticMethods_modifyBaseTonal$self = JSCompiler_StaticMethods_addTonalRow$self, node$jscomp$0 = node, luminanceName = tonal, color = value, tokenPath = `${prefix}/${key}${tonal}`;
        node$jscomp$0.name = `${key}${luminanceName}`;
        const style = tokens.utils_findColorToken(JSCompiler_StaticMethods_modifyBaseTonal$self.scene.themeName, tokenPath);
        style && (node$jscomp$0.fillStyleId = style.id);
        JSCompiler_StaticMethods_modifyBaseTonal$self.nodes.push(node$jscomp$0);
        const label = utils.utils_createDefaultLabel({
            name: luminanceName,
            theme: JSCompiler_StaticMethods_modifyBaseTonal$self.scene.themeName,
            offset: {
                dx: node$jscomp$0.x,
                dy: node$jscomp$0.y + 10
            }
        });
        label.x += node$jscomp$0.width / 2 - label.width / 2;
        const onColorStyle = JSCompiler_StaticMethods_getOnColorStyle(JSCompiler_StaticMethods_modifyBaseTonal$self, color);
        onColorStyle && (label.fillStyleId = onColorStyle.id);
        JSCompiler_StaticMethods_modifyBaseTonal$self.nodes.push(label);
        JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dx += 61;
    }
    JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dx = prevDx;
    JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dy = prevDy;
    JSCompiler_StaticMethods_addTonalRow$self.scene.lastRect.dy += height;
};
var JSCompiler_StaticMethods_createStyle = function (JSCompiler_StaticMethods_createStyle$self, label, token, style) {
    const prev = JSCompiler_StaticMethods_createStyle$self.scene.lastRect, labelNode = utils.utils_createDefaultLabel({
        name: label,
        theme: JSCompiler_StaticMethods_createStyle$self.scene.themeName,
        offset: {
            dx: prev.dx,
            dy: prev.dy
        }
    });
    labelNode.fontName = {
        family: style.fontFamilyName,
        style: style.fontFamilyStyle
    };
    style.fontSize && (labelNode.fontSize = style.fontSize);
    style.lineHeight && (labelNode.lineHeight = {
        unit: 'PIXELS',
        value: style.lineHeight
    });
    style.letterSpacing && (labelNode.letterSpacing = {
        unit: 'PIXELS',
        value: style.letterSpacing
    });
    style.textCase && (labelNode.textCase = style.textCase);
    style.textDecoration && (labelNode.textDecoration = style.textDecoration);
    const colorStyle = tokens.utils_findColorToken(JSCompiler_StaticMethods_createStyle$self.scene.themeName, 'sys/light/on-background');
    colorStyle && (labelNode.fillStyleId = colorStyle.id);
    JSCompiler_StaticMethods_createStyle$self.scene.lastRect.dy += labelNode.height + 20;
    const textStyle = tokens.utils_findFontToken(JSCompiler_StaticMethods_createStyle$self.scene.themeName, token);
    textStyle && (labelNode.textStyleId = textStyle.id);
    return labelNode;
};