'use strict';
const custom = require('../code.js');
var customElement = tagName => classOrDescriptor => {
    if ('function' === typeof classOrDescriptor) {
        window.customElements.define(tagName, classOrDescriptor);
        var JSCompiler_temp = classOrDescriptor;
    } else
        JSCompiler_temp = custom.$n2delement_standardCustomElement(tagName, classOrDescriptor);
    return JSCompiler_temp;
};