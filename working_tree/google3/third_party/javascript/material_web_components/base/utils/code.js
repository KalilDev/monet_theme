'use strict';
const google3 = require('google3');
var deepActiveElementPath = () => {
    let activeElement = window.document.activeElement;
    const path = [];
    if (!activeElement)
        return path;
    for (; activeElement;)
        if (path.push(activeElement), activeElement.shadowRoot)
            activeElement = activeElement.shadowRoot.activeElement;
        else
            break;
    return path;
};
var doesElementContainFocus = element => {
    const activePath = google3.deepActiveElementPath();
    if (!activePath.length)
        return !1;
    const deepActiveElement = activePath[activePath.length - 1], focusEv = new Event('check-if-focused', {
            bubbles: !0,
            composed: !0
        });
    let composedPath = [];
    const listener = ev => {
        composedPath = ev.composedPath();
    };
    document.body.addEventListener('check-if-focused', listener);
    deepActiveElement.dispatchEvent(focusEv);
    document.body.removeEventListener('check-if-focused', listener);
    return -1 !== composedPath.indexOf(element);
};