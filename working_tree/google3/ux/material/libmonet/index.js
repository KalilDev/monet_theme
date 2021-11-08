const hct = require('./hct/index.js')
const palette = require('./palettes/index.js')
const quantize = require('./quantize/index.js')
const score = require('./score/score.js')
const utils = require('./utils/utils.js')
const color_utils = require('./utils/color_utils.js')

exports = Object.assign({}, hct, palette, quantize, score, utils, color_utils)