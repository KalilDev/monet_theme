'use strict';
const dom = require('code.js');
function events_applyPassive() {
    return dom.events_supportsPassiveOption(window) ? { passive: !0 } : !1;
}
function events_supportsPassiveOption(globalObj = window) {
    let passiveSupported = !1;
    try {
        const options = {
                get passive() {
                    passiveSupported = !0;
                    return !1;
                }
            }, handler = () => {
            };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    } catch (err) {
        passiveSupported = !1;
    }
    return passiveSupported;
}
const keyboard_normalizedKeys = new Set();
const keyboard_mappedKeyCodes = new Map();
const keyboard_navigationKeys = new Set();
function keyboard_normalizeKey(evt) {
    const key = evt.key;
    if (dom.keyboard_normalizedKeys.has(key))
        return key;
    const mappedKey = dom.keyboard_mappedKeyCodes.get(evt.keyCode);
    return mappedKey ? mappedKey : 'Unknown';
}
function ponyfill_matches(element, selector) {
    return (element.matches || element.webkitMatchesSelector || element.msMatchesSelector).call(element, selector);
}