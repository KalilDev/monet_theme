'use strict';
const $n2ddirective_createAdapter = lineElement => ({
    addClass: className => lineElement.classList.add(className),
    removeClass: className => lineElement.classList.remove(className),
    hasClass: className => lineElement.classList.contains(className),
    setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
    registerEventHandler: (evtType, handler) => {
        lineElement.addEventListener(evtType, handler);
    },
    deregisterEventHandler: (evtType, handler) => {
        lineElement.removeEventListener(evtType, handler);
    }
});