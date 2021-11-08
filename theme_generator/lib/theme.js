'use strict';
import utils from './theme/utils.js';
import base from './theme/base.js';
import defaults from './theme/defaults.js';
import b1p from './theme/baseline_1p.js';
import b3p from './theme/baseline_3p.js';
import adapter from './theme/adapter.js';

export default Object.assign({}, adapter, base, b1p, b3p, defaults, utils)
