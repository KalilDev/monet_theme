'use strict';
const utils = require('../utils/color_utils/code.js');
const hct = require('../hct.js')
const tonalPalette = require('./tonal_palette.js')

module.exports = {
    CorePalette: CorePalette,
}
class CorePalette {
    constructor(argb) {
        const cam = hct.CAM16.fromIntInViewingConditions(argb);
        var JSCompiler_inline_result = new hct.HCT(cam.hue, cam.chroma, utils.lstarFromInt(argb));
        const hue = JSCompiler_inline_result.hue;
        this.a1 = new tonalPalette.TonalPalette(hue, Math.max(48, JSCompiler_inline_result.chroma));
        this.a2 = new tonalPalette.TonalPalette(hue, 16);
        this.a3 = new tonalPalette.TonalPalette(hue + 60, 24);
        this.n1 = new tonalPalette.TonalPalette(hue, 4);
        this.n2 = new tonalPalette.TonalPalette(hue, 8);
        this.error = new tonalPalette.TonalPalette(25, 84);
    }
};