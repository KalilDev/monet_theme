'use strict';
const list = require('../code.js');
var preventDefaultEvent = evt => {
    const target = evt.target;
    target && -1 === list.events_ELEMENTS_KEY_ALLOWED_IN.indexOf(`${ target.tagName }`.toLowerCase()) && evt.preventDefault();
};