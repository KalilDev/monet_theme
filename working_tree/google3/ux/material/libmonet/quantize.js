const lab = require('./quantize/lab_point_provider.js')
const quantizer_wu = require('./quantize/quantizer_wu.js')
const quantizer = require('./quantize/quantizer.js')

exports = Object.assign({}, lab, quantizer_wu, quantizer)