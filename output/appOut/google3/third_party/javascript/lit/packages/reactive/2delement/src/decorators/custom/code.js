'use strict';
const $n2delement_standardCustomElement = (tagName, descriptor) => ({
    kind: descriptor.kind,
    elements: descriptor.elements,
    finisher(clazz) {
        window.customElements.define(tagName, clazz);
    }
});