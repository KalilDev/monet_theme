'use strict';
const $m2dripple = require('../code.js');
const google3 = require('google3');
var lineRipple = google3.directive(class extends google3.Directive {
    constructor(partInfo) {
        super();
        this.foundation = this.previousPart = null;
        switch (partInfo.type) {
        case 1:
        case 3:
            break;
        default:
            throw Error('LineRipple only support attribute and property parts.');
        }
    }
    update(part) {
        if (this.previousPart !== part) {
            this.foundation && this.foundation.destroy();
            this.previousPart = part;
            const lineElement = part.element;
            lineElement.classList.add('mdc-line-ripple');
            this.foundation = new google3.MDCLineRippleFoundation($m2dripple.$n2ddirective_createAdapter(lineElement));
            this.foundation.init();
        }
        return this.render();
    }
    render() {
        return this.foundation;
    }
});