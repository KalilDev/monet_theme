'use strict';
const utils = require('../../utils/code.js');
const hct = require('../code.js');
class HCT {
    constructor(internalHue, internalChroma, internalTone) {
        this.internalHue = internalHue;
        this.internalChroma = internalChroma;
        this.internalTone = internalTone;
        this.setInternalState(this.toInt());
    }
    toInt() {
        return hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, utils.math_utils_clamp(100, this.internalTone));
    }
    setInternalState(argb) {
        const cam = google3.CAM16.fromIntInViewingConditions(argb), tone = google3.lstarFromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = tone;
    }
    get hue() {
        return this.internalHue;
    }
    set hue(newHue) {
        this.setInternalState(hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(utils.math_utils_sanitizeDegrees(newHue)), this.internalChroma, utils.math_utils_clamp(100, this.internalTone)));
    }
    get chroma() {
        return this.internalChroma;
    }
    set chroma(newChroma) {
        this.setInternalState(hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(this.internalHue), newChroma, utils.math_utils_clamp(100, this.internalTone)));
    }
    get tone() {
        return this.internalTone;
    }
    set tone(newTone) {
        this.setInternalState(hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, utils.math_utils_clamp(100, newTone)));
    }
};