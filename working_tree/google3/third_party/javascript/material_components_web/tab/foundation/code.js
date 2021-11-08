'use strict';
const google3 = require('google3');
var MDCTabFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCTabFoundation.defaultAdapter), adapter));
        this.focusOnActivate = !0;
    }
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
            hasClass: () => !1,
            setAttr: () => {
            },
            activateIndicator: () => {
            },
            deactivateIndicator: () => {
            },
            notifyInteracted: () => {
            },
            getOffsetLeft: () => 0,
            getOffsetWidth: () => 0,
            getContentOffsetLeft: () => 0,
            getContentOffsetWidth: () => 0,
            focus: () => {
            }
        };
    }
    handleClick() {
        this.adapter.notifyInteracted();
    }
    isActive() {
        return this.adapter.hasClass(google3.cssClasses.ACTIVE);
    }
    activate(previousIndicatorClientRect) {
        this.adapter.addClass(google3.cssClasses.ACTIVE);
        this.adapter.setAttr(google3.strings.ARIA_SELECTED, 'true');
        this.adapter.setAttr(google3.strings.TABINDEX, '0');
        this.adapter.activateIndicator(previousIndicatorClientRect);
        this.focusOnActivate && this.adapter.focus();
    }
    deactivate() {
        this.isActive() && (this.adapter.removeClass(google3.cssClasses.ACTIVE), this.adapter.setAttr(google3.strings.ARIA_SELECTED, 'false'), this.adapter.setAttr(google3.strings.TABINDEX, '-1'), this.adapter.deactivateIndicator());
    }
    computeDimensions() {
        const rootLeft = this.adapter.getOffsetLeft(), contentLeft = this.adapter.getContentOffsetLeft();
        return {
            contentLeft: rootLeft + contentLeft,
            contentRight: rootLeft + contentLeft + this.adapter.getContentOffsetWidth(),
            rootLeft,
            rootRight: rootLeft + this.adapter.getOffsetWidth()
        };
    }
};