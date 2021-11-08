const hct = require('./hct.js')
const palette = require('./palettes.js')
const quantize = require('./quantize.js')
const score = require('./score.js')
const utils = require('./utils.js')

module.exports = Object.assign({}, hct, palette, quantize, score, utils)