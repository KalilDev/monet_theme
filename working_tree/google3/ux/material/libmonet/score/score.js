'use strict';
const utils = require('../utils/utils.js');
const color_utils = require('../utils/color_utils.js');
const cam16 = require('../hct/cam16.js')
exports = {
    score: score,
    filter: filter,
}
function score(colorsToPopulation) {
    let populationSum = 0;
    for (const population of colorsToPopulation.values())
        populationSum += population;
    const colorsToProportion = new Map(), colorsToCam = new Map(), hueProportions = Array(360).fill(0);
    for (const [color__tsickle_destructured_1, population__tsickle_destructured_2] of colorsToPopulation.entries()) {
        const color = color__tsickle_destructured_1, proportion = population__tsickle_destructured_2 / populationSum;
        colorsToProportion.set(color, proportion);
        const cam = cam16.CAM16.fromIntInViewingConditions(color);
        colorsToCam.set(color, cam);
        hueProportions[Math.round(cam.hue)] += proportion;
    }
    const colorsToExcitedProportion = new Map();
    for (const [color__tsickle_destructured_3, cam__tsickle_destructured_4] of colorsToCam.entries()) {
        const color = color__tsickle_destructured_3, hue = Math.round(cam__tsickle_destructured_4.hue);
        let excitedProportion = 0;
        for (let i = hue - 15; i < hue + 15; i++)
            excitedProportion += hueProportions[utils.math_utils_sanitizeDegrees(i)];
        colorsToExcitedProportion.set(color, excitedProportion);
    }
    const colorsToScore = new Map();
    for (const [color__tsickle_destructured_5, cam__tsickle_destructured_6] of colorsToCam.entries()) {
        const color = color__tsickle_destructured_5, cam = cam__tsickle_destructured_6, proportionScore = 70 * colorsToExcitedProportion.get(color);
        colorsToScore.set(color, proportionScore + (cam.chroma - 48) * (48 > cam.chroma ? 0.1 : 0.3));
    }
    const filteredColors = filter(colorsToExcitedProportion, colorsToCam), dedupedColorsToScore = new Map();
    for (const color of filteredColors) {
        let duplicateHue = !1;
        const hue = colorsToCam.get(color).hue;
        for (const [alreadyChosenColor__tsickle_destructured_7] of dedupedColorsToScore) {
            const alreadyChosenHue = colorsToCam.get(alreadyChosenColor__tsickle_destructured_7).hue;
            if (15 > 180 - Math.abs(Math.abs(hue - alreadyChosenHue) - 180)) {
                duplicateHue = !0;
                break;
            }
        }
        duplicateHue || dedupedColorsToScore.set(color, colorsToScore.get(color));
    }
    const colorsByScoreDescending = Array.from(dedupedColorsToScore.entries());
    colorsByScoreDescending.sort((first, second) => second[1] - first[1]);
    const answer = colorsByScoreDescending.map(entry => entry[0]);
    0 === answer.length && answer.push(4282549748);
    return answer;
};
var filter = function (colorsToExcitedProportion, colorsToCam) {
    const filtered = [];
    for (const [color__tsickle_destructured_8, cam__tsickle_destructured_9] of colorsToCam.entries()) {
        const color = color__tsickle_destructured_8, cam = cam__tsickle_destructured_9, proportion = colorsToExcitedProportion.get(color);
        15 <= cam.chroma && 10 <= color_utils.lstarFromInt(color) && 0.01 <= proportion && filtered.push(color);
    }
    return filtered;
};