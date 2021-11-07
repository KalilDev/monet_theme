'use strict';
const utils = require('../../utils/code.js');
const hct = require('../code.js');
var HCT = class {
    constructor(internalHue, internalChroma, internalTone) {
        this.internalHue = internalHue;
        this.internalChroma = internalChroma;
        this.internalTone = internalTone;
        JSCompiler_StaticMethods_setInternalState(this, hct.hct_getInt(this.internalHue, this.internalChroma, this.internalTone));
    }
    get hue() {
        return this.internalHue;
    }
    set hue(newHue) {
        JSCompiler_StaticMethods_setInternalState(this, hct.hct_getInt(utils.math_utils_sanitizeDegrees(newHue), this.internalChroma, this.internalTone));
    }
    get chroma() {
        return this.internalChroma;
    }
    set chroma(newChroma) {
        JSCompiler_StaticMethods_setInternalState(this, hct.hct_getInt(this.internalHue, newChroma, this.internalTone));
    }
    get tone() {
        return this.internalTone;
    }
    set tone(newTone) {
        JSCompiler_StaticMethods_setInternalState(this, hct.hct_getInt(this.internalHue, this.internalChroma, newTone));
    }
};