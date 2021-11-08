'use strict';
const hct = require('../hct.js');
exports = {
    TonalPalette: TonalPalette,
}
class TonalPalette {
    constructor(hue, chroma) {
        this.hue = hue;
        this.chroma = chroma;
        this.cache = new Map();
    }
    tone(tone) {
        let argb = putIfAbsent(this.cache, tone, _ => new hct.HCT(this.hue, this.chroma, tone).toInt());
        return argb;
    }
};

function putIfAbsent(map, key, create) {
    if (map.has(key)) {
        return map.get(key)
    }
    const val = create();
    map.set(key, val);
    return val;
}