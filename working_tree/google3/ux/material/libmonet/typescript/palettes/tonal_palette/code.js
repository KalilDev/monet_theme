'use strict';
const google3 = require('google3');
class TonalPalette {
    constructor(hue, chroma) {
        this.hue = hue;
        this.chroma = chroma;
        this.cache = new Map();
    }
    tone(tone) {
        let argb = google3.putIfAbsent(this.cache, tone, _ => new google3.HCT(this.hue, this.chroma, tone).toInt());
        return argb;
    }
};