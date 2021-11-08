'use strict';
const google3 = require('google3');
var MDCFloatingLabelFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCFloatingLabelFoundation.defaultAdapter), adapter));
        this.shakeAnimationEndHandler = () => {
            this.adapter.removeClass(google3.MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE);
        };
    }
    static get cssClasses() {
        return google3.cssClasses;
    }
    static get defaultAdapter() {
        return {
            addClass: () => {
            },
            removeClass: () => {
            },
            getWidth: () => 0,
            registerInteractionHandler: () => {
            },
            deregisterInteractionHandler: () => {
            }
        };
    }
    init() {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
    }
    destroy() {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
    }
    getWidth() {
        return this.adapter.getWidth();
    }
    setRequired(isRequired) {
        const LABEL_REQUIRED = google3.MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        isRequired ? this.adapter.addClass(LABEL_REQUIRED) : this.adapter.removeClass(LABEL_REQUIRED);
    }
};