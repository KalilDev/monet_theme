'use strict';
const $m2dlabel = require('code.js');
const google3 = require('google3');
const $n2ddirective_createAdapter = labelElement => ({
    addClass: className => labelElement.classList.add(className),
    removeClass: className => labelElement.classList.remove(className),
    getWidth: () => labelElement.scrollWidth,
    registerInteractionHandler: (evtType, handler) => {
        labelElement.addEventListener(evtType, handler);
    },
    deregisterInteractionHandler: (evtType, handler) => {
        labelElement.removeEventListener(evtType, handler);
    }
});
class $n2ddirective_FloatingLabelDirective extends google3.Directive {
    constructor(partInfo) {
        super();
        this.previousPart = this.foundation = null;
        switch (partInfo.type) {
        case 1:
        case 3:
            break;
        default:
            throw Error('FloatingLabel directive only support attribute and property parts');
        }
    }
    update(part, [label__tsickle_destructured_1]) {
        if (part !== this.previousPart) {
            this.foundation && this.foundation.destroy();
            this.previousPart = part;
            const labelElement = part.element;
            labelElement.classList.add('mdc-floating-label');
            this.foundation = new google3.MDCFloatingLabelFoundation($m2dlabel.$n2ddirective_createAdapter(labelElement));
            this.foundation.init();
        }
        return this.render(label__tsickle_destructured_1);
    }
    render() {
        return this.foundation;
    }
}