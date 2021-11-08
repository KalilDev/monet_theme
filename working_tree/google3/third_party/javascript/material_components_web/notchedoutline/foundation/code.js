'use strict';
const google3 = require('google3');
var MDCNotchedOutlineFoundation = class extends google3.MDCFoundation {
    static get strings() {
        return google3.strings;
    }
    static get cssClasses() {
        return google3.cssClasses;
    }
    static get numbers() {
        return google3.numbers;
    }
    static get defaultAdapter() {
        return {
            addClass: () => {
            },
            removeClass: () => {
            },
            setNotchWidthProperty: () => {
            },
            removeNotchWidthProperty: () => {
            }
        };
    }
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCNotchedOutlineFoundation.defaultAdapter), adapter));
    }
};