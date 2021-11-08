'use strict';
const utils = require('./theme/utils.js');
const base = require('./theme/base.js');
const defaults = require('./theme/defaults.js');
const b1p = require('./theme/baseline_1p.js');
const b3p = require('./theme/baseline_3p.js');
const adapter = require('./theme/adapter.js');

exports = Object.assign({}, adapter, base, b1p, b3p, defaults, utils)
