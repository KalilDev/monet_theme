'use strict';
const google3 = require('google3');
var MDCTabIndicatorFoundation = class extends google3.MDCFoundation {
    static get cssClasses() {
        return google3.cssClasses;
    }
    static get strings() {
        return google3.strings;
    }
    static get defaultAdapter() {
        return {
            addClass: () => {
            },
            removeClass: () => {
            },
            computeContentClientRect: () => ({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            }),
            setContentStyleProperty: () => {
            }
        };
    }
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCTabIndicatorFoundation.defaultAdapter), adapter));
    }
    computeContentClientRect() {
        return this.adapter.computeContentClientRect();
    }
};