const lab = require('./lab_point_provider.js')
const quantizer_wu = require('./quantizer_wu.js')
const quantizer = require('./quantizer.js')

exports = Object.assign({}, lab, quantizer_wu, quantizer)