'use strict';
const namealiases = require('code.js');
function namealiases_propertyToAttr(propName) {
    let propToAttr = namealiases.namealiases_propToAttrInternal;
    if (!propToAttr) {
        var obj = namealiases.namealiases_getAttrToProp();
        const transposed = {};
        for (const key in obj)
            transposed[obj[key]] = key;
        propToAttr = namealiases.namealiases_propToAttrInternal = transposed;
    }
    const attr = propToAttr[propName];
    return 'string' === typeof attr ? attr : String(propName).replace(/([A-Z])/g, '-$1').toLowerCase();
}
function namealiases_attrToProperty(attrName) {
    const canonAttrName = String(attrName).toLowerCase(), prop = namealiases.namealiases_getAttrToProp()[canonAttrName];
    return 'string' === typeof prop ? prop : goog$string$toCamelCase(canonAttrName);
}
function namealiases_specialPropertyNameWorstCase(name) {
    const lcname = name.toLowerCase(), prop = namealiases.namealiases_getAttrToProp()[lcname];
    return 'string' === typeof prop ? prop : null;
}
function namealiases_getAttrToProp() {
    if (!namealiases.namealiases_attrToPropInternal) {
        const buildingAttrToPropInternal = Object.assign({}, namealiases.namealiases_ODD_ATTR_TO_PROP);
        for (const name of namealiases.namealiases_NONCANON_PROPS)
            buildingAttrToPropInternal[name.toLowerCase()] = name;
        namealiases.namealiases_attrToPropInternal = buildingAttrToPropInternal;
    }
    return namealiases.namealiases_attrToPropInternal;
}
const namealiases_NONCANON_PROPS = 'aLink accessKey allowFullscreen bgColor cellPadding cellSpacing codeBase codeType contentEditable crossOrigin dateTime dirName formAction formEnctype formMethod formNoValidate formTarget frameBorder innerHTML innerText inputMode isMap longDesc marginHeight marginWidth maxLength mediaGroup minLength noHref noResize noShade noValidate noWrap nodeValue outerHTML outerText readOnly tabIndex textContent trueSpeed useMap vAlign vLink valueAsDate valueAsNumber valueType'.split(' ');
const namealiases_ODD_ATTR_TO_PROP = {
    accept_charset: 'acceptCharset',
    'char': 'ch',
    charoff: 'chOff',
    checked: 'defaultChecked',
    'class': 'className',
    'for': 'htmlFor',
    http_equiv: 'httpEquiv',
    muted: 'defaultMuted',
    selected: 'defaultSelected',
    value: 'defaultValue'
};
let namealiases_attrToPropInternal = null;
let namealiases_propToAttrInternal = null;