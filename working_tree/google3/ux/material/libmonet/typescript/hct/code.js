'use strict';
const utils = require('../utils/code.js');
const google3 = require('google3');
function hct_getIntInViewingConditions(hue$jscomp$0, chroma$jscomp$0, tone$jscomp$0) {
    if (1 > chroma$jscomp$0 || 0 >= Math.round(tone$jscomp$0) || 100 <= Math.round(tone$jscomp$0))
        return google3.intFromLstar(tone$jscomp$0);
    hue$jscomp$0 = utils.math_utils_sanitizeDegrees(hue$jscomp$0);
    let high = chroma$jscomp$0, mid = chroma$jscomp$0, low = 0, isFirstLoop = !0, answer = null;
    for (; 0.4 <= Math.abs(low - high);) {
        var hue = hue$jscomp$0, chroma = mid, tone = tone$jscomp$0;
        let low$jscomp$0 = 0, high$jscomp$0 = 100, mid$jscomp$0, bestdL = 1000, bestdE = 1000, bestCam = null;
        for (; 0.01 < Math.abs(low$jscomp$0 - high$jscomp$0);) {
            mid$jscomp$0 = low$jscomp$0 + (high$jscomp$0 - low$jscomp$0) / 2;
            const clipped = google3.CAM16.fromJchInViewingConditions(mid$jscomp$0, chroma, hue).viewed(), clippedLstar = google3.lstarFromInt(clipped), dL = Math.abs(tone - clippedLstar);
            if (0.2 > dL) {
                const camClipped = google3.CAM16.fromIntInViewingConditions(clipped), dE = camClipped.distance(google3.CAM16.fromJchInViewingConditions(camClipped.j, camClipped.chroma, hue));
                1 >= dE && dE <= bestdE && (bestdL = dL, bestdE = dE, bestCam = camClipped);
            }
            if (0 === bestdL && 0 === bestdE)
                break;
            clippedLstar < tone ? low$jscomp$0 = mid$jscomp$0 : high$jscomp$0 = mid$jscomp$0;
        }
        const possibleAnswer = bestCam;
        if (isFirstLoop) {
            if (null != possibleAnswer)
                return possibleAnswer.viewed();
            isFirstLoop = !1;
        } else
            null === possibleAnswer ? high = mid : (answer = possibleAnswer, low = mid);
        mid = low + (high - low) / 2;
    }
    return null === answer ? google3.intFromLstar(tone$jscomp$0) : answer.viewed();
}