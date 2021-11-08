'use strict';
module.exports = {
    android_xmlifyProperty: android_xmlifyProperty,
    android_capitalize: android_capitalize,
}
function android_xmlifyProperty(name, options) {
    let prefix = void 0 !== (null === options || void 0 === options ? void 0 : options.prefix) ? null === options || void 0 === options ? void 0 : options.prefix : 'md_theme_';
    prefix += void 0 === (null === options || void 0 === options ? void 0 : options.isLight) || options.isLight ? 'light_' : 'dark_';
    return prefix + name;
}
function android_capitalize(value) {
    return void 0 === value || 0 === value.length ? '' : value[0].toUpperCase() + value.slice(1);
}