import lab from './quantize/lab_point_provider.js'
import quantizer_wu from './quantize/quantizer_wu.js'
import quantizer from './quantize/quantizer.js'

export default Object.assign({}, lab, quantizer_wu, quantizer)