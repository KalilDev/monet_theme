'use strict';
const hct = require('./hct/hct.js');
const cam16 = require('./hct/cam16.js');
const viewingConditions = require('./hct/viewing_conditions.js');

exports = Object.assign({}, hct, cam16, viewingConditions)