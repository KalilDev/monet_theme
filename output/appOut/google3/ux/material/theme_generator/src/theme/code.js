'use strict';
const compat = require('../../../../../third_party/javascript/safevalues/compat/code.js');
const quantize = require('../../../libmonet/typescript/quantize/code.js');
const theme = require('code.js');
const builders = require('../../../../../third_party/javascript/safevalues/builders/code.js');
const google3 = require('google3');
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
function color_utils_numberToHex(value) {
    try {
        return google3.hexFromInt(value);
    } catch (error) {
        return console.log(`error converting [${ value }] to hex`, error), '#000000';
    }
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
async function image_utils_decodeToImageData(bytes) {
    const url = builders.safe_url_builders_fromBlob(new Blob([bytes], { type: 'image/png' })), image = await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject();
            };
            img.src = compat.index_unwrapSafeUrl(url);
        }), ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = 112;
    ctx.canvas.height = 112;
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
    return ctx.getImageData(0, 0, image.width, image.height);
}
async function image_utils_bufferToPixels(buffer) {
    const imageBytes = new Uint8Array(buffer), imageData = await theme.image_utils_decodeToImageData(imageBytes), pixels = [];
    for (let i = 0; i < imageData.data.length; i += 4)
        255 > imageData.data[i + 3] || pixels.push(google3.intFromRgb([
            imageData.data[i],
            imageData.data[i + 1],
            imageData.data[i + 2]
        ]));
    return pixels;
}
async function index_seedFromImage(image) {
    const imageBuffer = 'string' === typeof image ? await (await fetch(image)).arrayBuffer() : image;
    var pixels = await theme.image_utils_bufferToPixels(imageBuffer), JSCompiler_StaticMethods_quantize$self = new google3.QuantizerWu(), JSCompiler__a;
    JSCompiler_StaticMethods_quantize$self.weights = Array.from({ length: 35937 }).fill(0);
    JSCompiler_StaticMethods_quantize$self.momentsR = Array.from({ length: 35937 }).fill(0);
    JSCompiler_StaticMethods_quantize$self.momentsG = Array.from({ length: 35937 }).fill(0);
    JSCompiler_StaticMethods_quantize$self.momentsB = Array.from({ length: 35937 }).fill(0);
    JSCompiler_StaticMethods_quantize$self.moments = Array.from({ length: 35937 }).fill(0);
    var JSCompiler__a$jscomp$0;
    const countByColor = new Map();
    for (let i = 0; i < pixels.length; i++) {
        const pixel = pixels[i];
        255 > (pixel & 4278190080) >> 24 >>> 0 || countByColor.set(pixel, (null !== (JSCompiler__a$jscomp$0 = countByColor.get(pixel)) && void 0 !== JSCompiler__a$jscomp$0 ? JSCompiler__a$jscomp$0 : 0) + 1);
    }
    for (const [pixel__tsickle_destructured_1, count__tsickle_destructured_2] of countByColor.entries()) {
        const pixel = pixel__tsickle_destructured_1, count = count__tsickle_destructured_2, red = (pixel & 16711680) >> 16, green = (pixel & 65280) >> 8, blue = pixel & 255, index = JSCompiler_StaticMethods_getIndex((red >> 3) + 1, (green >> 3) + 1, (blue >> 3) + 1);
        JSCompiler_StaticMethods_quantize$self.weights[index] = (null !== (JSCompiler__a = JSCompiler_StaticMethods_quantize$self.weights[index]) && void 0 !== JSCompiler__a ? JSCompiler__a : 0) + count;
        JSCompiler_StaticMethods_quantize$self.momentsR[index] += count * red;
        JSCompiler_StaticMethods_quantize$self.momentsG[index] += count * green;
        JSCompiler_StaticMethods_quantize$self.momentsB[index] += count * blue;
        JSCompiler_StaticMethods_quantize$self.moments[index] += count * (red * red + green * green + blue * blue);
    }
    for (let r = 1; 33 > r; r++) {
        const area = Array.from({ length: 33 }).fill(0), areaR = Array.from({ length: 33 }).fill(0), areaG = Array.from({ length: 33 }).fill(0), areaB = Array.from({ length: 33 }).fill(0), area2 = Array.from({ length: 33 }).fill(0);
        for (let g = 1; 33 > g; g++) {
            let line = 0, lineR = 0, lineG = 0, lineB = 0, line2 = 0;
            for (let b = 1; 33 > b; b++) {
                const index = JSCompiler_StaticMethods_getIndex(r, g, b);
                line += JSCompiler_StaticMethods_quantize$self.weights[index];
                lineR += JSCompiler_StaticMethods_quantize$self.momentsR[index];
                lineG += JSCompiler_StaticMethods_quantize$self.momentsG[index];
                lineB += JSCompiler_StaticMethods_quantize$self.momentsB[index];
                line2 += JSCompiler_StaticMethods_quantize$self.moments[index];
                area[b] += line;
                areaR[b] += lineR;
                areaG[b] += lineG;
                areaB[b] += lineB;
                area2[b] += line2;
                const previousIndex = JSCompiler_StaticMethods_getIndex(r - 1, g, b);
                JSCompiler_StaticMethods_quantize$self.weights[index] = JSCompiler_StaticMethods_quantize$self.weights[previousIndex] + area[b];
                JSCompiler_StaticMethods_quantize$self.momentsR[index] = JSCompiler_StaticMethods_quantize$self.momentsR[previousIndex] + areaR[b];
                JSCompiler_StaticMethods_quantize$self.momentsG[index] = JSCompiler_StaticMethods_quantize$self.momentsG[previousIndex] + areaG[b];
                JSCompiler_StaticMethods_quantize$self.momentsB[index] = JSCompiler_StaticMethods_quantize$self.momentsB[previousIndex] + areaB[b];
                JSCompiler_StaticMethods_quantize$self.moments[index] = JSCompiler_StaticMethods_quantize$self.moments[previousIndex] + area2[b];
            }
        }
    }
    var colorCount = JSCompiler_StaticMethods_createBoxes(JSCompiler_StaticMethods_quantize$self).resultCount;
    const colors = [];
    for (let i = 0; i < colorCount; ++i) {
        const cube = JSCompiler_StaticMethods_quantize$self.cubes[i], weight = JSCompiler_StaticMethods_quantize$self.volume(cube, JSCompiler_StaticMethods_quantize$self.weights);
        if (0 < weight) {
            const r = Math.round(JSCompiler_StaticMethods_quantize$self.volume(cube, JSCompiler_StaticMethods_quantize$self.momentsR) / weight), g = Math.round(JSCompiler_StaticMethods_quantize$self.volume(cube, JSCompiler_StaticMethods_quantize$self.momentsG) / weight), b = Math.round(JSCompiler_StaticMethods_quantize$self.volume(cube, JSCompiler_StaticMethods_quantize$self.momentsB) / weight);
            colors.push(-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255);
        }
    }
    const pixelToCount = new Map(), points = [], pixels$jscomp$0 = [], pointProvider = new google3.LabPointProvider();
    let pointCount = 0;
    for (let i = 0; i < pixels.length; i++) {
        const inputPixel = pixels[i], pixelCount = pixelToCount.get(inputPixel);
        void 0 === pixelCount ? (pointCount++, points.push(google3.labFromInt(inputPixel)), pixels$jscomp$0.push(inputPixel), pixelToCount.set(inputPixel, 1)) : pixelToCount.set(inputPixel, pixelCount + 1);
    }
    const counts = [];
    for (let i = 0; i < pointCount; i++) {
        const count = pixelToCount.get(pixels$jscomp$0[i]);
        void 0 !== count && (counts[i] = count);
    }
    let clusterCount = Math.min(256, pointCount);
    0 < colors.length && (clusterCount = Math.min(clusterCount, colors.length));
    const clusters = [];
    for (let i = 0; i < colors.length; i++)
        clusters.push(google3.labFromInt(colors[i]));
    const additionalClustersNeeded = clusterCount - clusters.length;
    if (0 === colors.length && 0 < additionalClustersNeeded)
        for (let i = 0; i < additionalClustersNeeded; i++)
            clusters.push([
                100 * Math.random(),
                201 * Math.random() + -100,
                201 * Math.random() + -100
            ]);
    const clusterIndices = [];
    for (let i = 0; i < pointCount; i++)
        clusterIndices.push(Math.floor(Math.random() * clusterCount));
    const indexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
        indexMatrix.push([]);
        for (let j = 0; j < clusterCount; j++)
            indexMatrix[i].push(0);
    }
    const distanceToIndexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
        distanceToIndexMatrix.push([]);
        for (let j = 0; j < clusterCount; j++)
            distanceToIndexMatrix[i].push(new quantize.quantizer_wsmeans_DistanceAndIndex());
    }
    const pixelCountSums = [];
    for (let i = 0; i < clusterCount; i++)
        pixelCountSums.push(0);
    for (let iteration = 0; 10 > iteration; iteration++) {
        for (let i = 0; i < clusterCount; i++) {
            for (let j = i + 1; j < clusterCount; j++) {
                const distance = pointProvider.distance(clusters[i], clusters[j]);
                distanceToIndexMatrix[j][i].distance = distance;
                distanceToIndexMatrix[j][i].index = i;
                distanceToIndexMatrix[i][j].distance = distance;
                distanceToIndexMatrix[i][j].index = j;
            }
            distanceToIndexMatrix[i].sort();
            for (let j = 0; j < clusterCount; j++)
                indexMatrix[i][j] = distanceToIndexMatrix[i][j].index;
        }
        let pointsMoved = 0;
        for (let i = 0; i < pointCount; i++) {
            const point = points[i], previousClusterIndex = clusterIndices[i], previousDistance = pointProvider.distance(point, clusters[previousClusterIndex]);
            let minimumDistance = previousDistance, newClusterIndex = -1;
            for (let j = 0; j < clusterCount; j++) {
                if (distanceToIndexMatrix[previousClusterIndex][j].distance >= 4 * previousDistance)
                    continue;
                const distance = pointProvider.distance(point, clusters[j]);
                distance < minimumDistance && (minimumDistance = distance, newClusterIndex = j);
            }
            -1 !== newClusterIndex && 3 < Math.abs(Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)) && (pointsMoved++, clusterIndices[i] = newClusterIndex);
        }
        if (0 === pointsMoved && 0 !== iteration)
            break;
        const componentASums = Array(clusterCount).fill(0), componentBSums = Array(clusterCount).fill(0), componentCSums = Array(clusterCount).fill(0);
        for (let i = 0; i < clusterCount; i++)
            pixelCountSums[i] = 0;
        for (let i = 0; i < pointCount; i++) {
            const clusterIndex = clusterIndices[i], point = points[i], count = counts[i];
            pixelCountSums[clusterIndex] += count;
            componentASums[clusterIndex] += point[0] * count;
            componentBSums[clusterIndex] += point[1] * count;
            componentCSums[clusterIndex] += point[2] * count;
        }
        for (let i = 0; i < clusterCount; i++) {
            const count = pixelCountSums[i];
            clusters[i] = 0 === count ? [
                0,
                0,
                0
            ] : [
                componentASums[i] / count,
                componentBSums[i] / count,
                componentCSums[i] / count
            ];
        }
    }
    const argbToPopulation = new Map();
    for (let i = 0; i < clusterCount; i++) {
        const count = pixelCountSums[i];
        if (0 === count)
            continue;
        const possibleNewCluster = pointProvider.toInt(clusters[i]);
        argbToPopulation.has(possibleNewCluster) || argbToPopulation.set(possibleNewCluster, count);
    }
    const ranked = google3.score(argbToPopulation);
    return google3.hexFromInt(ranked[0]);
}