'use strict';
const contracts = require('../../../html/contracts/code.js');
const contrib = require('../../../../../../javascript/typescript/contrib/code.js');
const $m2ddom = require('code.js');
const polymer_resin = require('../../code.js');
function $n2dproperties_getDomPropertyContract(element, propertyName) {
    var _a, _b;
    switch (propertyName) {
    case 'innerHTML':
        return 1 === $m2ddom.$n2dproperties_getContentType(element) ? 2 : null;
    case 'textContent':
        const contentType = $m2ddom.$n2dproperties_getContentType(element);
        return 1 === contentType || 6 === contentType ? 1 : null;
    default:
        return null !== (_b = null === (_a = $m2ddom.$n2dproperties_propertyAllowlist[element.localName]) || void 0 === _a ? void 0 : _a[propertyName]) && void 0 !== _b ? _b : null;
    }
}
function $n2dproperties_getContentType(element) {
    const elementName = element.localName, classification = polymer_resin.classifier_classifyElement(elementName, element.constructor);
    switch (classification) {
    case 0:
    case 1:
        return $m2ddom.$n2dproperties_contentTypeForElement(elementName, element);
    case 3:
    case 2:
        return 1;
    default:
        contrib.check_checkExhaustiveAllowing(classification, 'got an unknown element classification');
    }
}
function $n2dproperties_contentTypeForElement(elementName, element) {
    var JSCompiler_inline_result = Object.hasOwnProperty.call(contracts.contracts_ELEMENT_CONTENT_TYPES, elementName) ? contracts.contracts_ELEMENT_CONTENT_TYPES[elementName] : null;
    return null !== JSCompiler_inline_result ? JSCompiler_inline_result : Object.hasOwnProperty.call($m2ddom.$n2dproperties_SVG_CONTENT_TYPES, elementName) && element instanceof SVGElement ? $m2ddom.$n2dproperties_SVG_CONTENT_TYPES[elementName] : null;
}
const $n2dproperties_SVG_CONTENT_TYPES = { text: 1 };
const $n2dproperties_propertyAllowlist = {
    audio: {
        currentTime: 1,
        srcObject: 1
    },
    video: {
        currentTime: 1,
        srcObject: 1
    }
};