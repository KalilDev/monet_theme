'use strict';
const hct = require('./hct.js');
const cam16 = require('./cam16.js');
const viewingConditions = require('./viewing_conditions.js');

exports = Object.assign({}, hct, cam16, viewingConditions)