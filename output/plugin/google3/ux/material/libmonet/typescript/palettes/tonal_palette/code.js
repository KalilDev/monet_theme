'use strict';
const hct = require('../../hct/code.js');
const google3 = require('google3');
var TonalPalette = class {
    constructor(hue, chroma) {
        this.hue = hue;
        this.chroma = chroma;
        this.cache = new Map();
    }
    tone(tone) {
        let argb = this.cache.get(tone);
        if (void 0 === argb) {
            var JSCompiler_StaticMethods_toInt$self = new google3.HCT(this.hue, this.chroma, tone);
            argb = hct.hct_getInt(JSCompiler_StaticMethods_toInt$self.internalHue, JSCompiler_StaticMethods_toInt$self.internalChroma, JSCompiler_StaticMethods_toInt$self.internalTone);
            this.cache.set(tone, argb);
        }
        return argb;
    }
};