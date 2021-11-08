'use strict';
const google3 = require('google3');
var TonalPalette = class {
    constructor(hue, chroma) {
        this.hue = hue;
        this.chroma = chroma;
        this.cache = new Map();
    }
    tone(tone) {
        let argb = this.cache.get(tone);
        void 0 === argb && (argb = new google3.HCT(this.hue, this.chroma, tone).toInt(), this.cache.set(tone, argb));
        return argb;
    }
};