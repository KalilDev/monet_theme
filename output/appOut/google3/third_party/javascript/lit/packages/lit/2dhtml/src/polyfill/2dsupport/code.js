'use strict';
const polyfill = require('../code.js');
var isPolyfilledSymbol = polyfill.$n2dsupport_needsSymbolSupport ? value => null != value && void 0 !== value[polyfill.$n2dsupport_symbolKey] : () => !1;