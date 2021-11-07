'use strict';
const google3 = require('google3');
const utils = require('../utils/code.js');
function hct_getInt(hue$jscomp$0, chroma, tone$jscomp$0) {
    a: {
        var hue = utils.math_utils_sanitizeDegrees(hue$jscomp$0), tone = Math.min(Math.max(tone$jscomp$0, 0), 100);
        if (1 > chroma || 0 >= Math.round(tone) || 100 <= Math.round(tone))
            var JSCompiler_inline_result = google3.intFromLstar(tone);
        else {
            hue = utils.math_utils_sanitizeDegrees(hue);
            for (var high$jscomp$0 = chroma, mid$jscomp$0 = chroma, low$jscomp$0 = 0, isFirstLoop = !0, answer = null; 0.4 <= Math.abs(low$jscomp$0 - high$jscomp$0);) {
                let mid, low = 0, high = 100, bestdL = 1000, bestdE = 1000, bestCam = null;
                for (; 0.01 < Math.abs(low - high);) {
                    mid = low + (high - low) / 2;
                    const clipped = JSCompiler_StaticMethods_viewed(google3.fromJchInViewingConditions(mid, mid$jscomp$0, hue)), clippedLstar = google3.lstarFromInt(clipped), dL = Math.abs(tone - clippedLstar);
                    if (0.2 > dL) {
                        const camClipped = google3.fromIntInViewingConditions(clipped);
                        var other = google3.fromJchInViewingConditions(camClipped.j, camClipped.chroma, hue);
                        const dJ = camClipped.jstar - other.jstar, dA = camClipped.astar - other.astar, dB = camClipped.bstar - other.bstar, dE = 1.41 * Math.pow(Math.sqrt(dJ * dJ + dA * dA + dB * dB), 0.63);
                        1 >= dE && dE <= bestdE && (bestdL = dL, bestdE = dE, bestCam = camClipped);
                    }
                    if (0 === bestdL && 0 === bestdE)
                        break;
                    clippedLstar < tone ? low = mid : high = mid;
                }
                const possibleAnswer = bestCam;
                if (isFirstLoop) {
                    if (null != possibleAnswer) {
                        JSCompiler_inline_result = JSCompiler_StaticMethods_viewed(possibleAnswer);
                        break a;
                    }
                    isFirstLoop = !1;
                } else
                    null === possibleAnswer ? high$jscomp$0 = mid$jscomp$0 : (answer = possibleAnswer, low$jscomp$0 = mid$jscomp$0);
                mid$jscomp$0 = low$jscomp$0 + (high$jscomp$0 - low$jscomp$0) / 2;
            }
            JSCompiler_inline_result = null === answer ? google3.intFromLstar(tone) : JSCompiler_StaticMethods_viewed(answer);
        }
    }
    return JSCompiler_inline_result;
}