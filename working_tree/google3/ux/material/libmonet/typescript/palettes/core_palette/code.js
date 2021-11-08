'use strict';
const google3 = require('google3');
class CorePalette {
    constructor(argb) {
        const cam = google3.CAM16.fromIntInViewingConditions(argb);
        var JSCompiler_inline_result = new google3.HCT(cam.hue, cam.chroma, google3.lstarFromInt(argb));
        const hue = JSCompiler_inline_result.hue;
        this.a1 = new google3.TonalPalette(hue, Math.max(48, JSCompiler_inline_result.chroma));
        this.a2 = new google3.TonalPalette(hue, 16);
        this.a3 = new google3.TonalPalette(hue + 60, 24);
        this.n1 = new google3.TonalPalette(hue, 4);
        this.n2 = new google3.TonalPalette(hue, 8);
        this.error = new google3.TonalPalette(25, 84);
    }
};