'use strict';
const utils = require('../../utils/code.js');
const hct = require('../code.js');
var HCT = class {
    constructor(internalHue, internalChroma, internalTone) {
        this.internalHue = internalHue;
        this.internalChroma = internalChroma;
        this.internalTone = internalTone;
        JSCompiler_StaticMethods_setInternalState(this, this.toInt());
    }
    toInt() {
        return hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, utils.math_utils_clamp(100, this.internalTone));
    }
    get hue() {
        return this.internalHue;
    }
    set hue(newHue) {
        JSCompiler_StaticMethods_setInternalState(this, hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(utils.math_utils_sanitizeDegrees(newHue)), this.internalChroma, utils.math_utils_clamp(100, this.internalTone)));
    }
    get chroma() {
        return this.internalChroma;
    }
    set chroma(newChroma) {
        JSCompiler_StaticMethods_setInternalState(this, hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(this.internalHue), newChroma, utils.math_utils_clamp(100, this.internalTone)));
    }
    get tone() {
        return this.internalTone;
    }
    set tone(newTone) {
        JSCompiler_StaticMethods_setInternalState(this, hct.hct_getIntInViewingConditions(utils.math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, utils.math_utils_clamp(100, newTone)));
    }
};