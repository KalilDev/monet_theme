'use strict';
const google3 = require('google3');
var MDCLineRippleFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCLineRippleFoundation.defaultAdapter), adapter));
        this.transitionEndHandler = evt => {
            this.handleTransitionEnd(evt);
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
            hasClass: () => !1,
            setStyle: () => {
            },
            registerEventHandler: () => {
            },
            deregisterEventHandler: () => {
            }
        };
    }
    init() {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
    }
    destroy() {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
    }
    activate() {
        this.adapter.removeClass(google3.cssClasses.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(google3.cssClasses.LINE_RIPPLE_ACTIVE);
    }
    setRippleCenter(xCoordinate) {
        this.adapter.setStyle('transform-origin', `${ xCoordinate }px center`);
    }
    deactivate() {
        this.adapter.addClass(google3.cssClasses.LINE_RIPPLE_DEACTIVATING);
    }
    handleTransitionEnd(evt) {
        const isDeactivating = this.adapter.hasClass(google3.cssClasses.LINE_RIPPLE_DEACTIVATING);
        'opacity' === evt.propertyName && isDeactivating && (this.adapter.removeClass(google3.cssClasses.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(google3.cssClasses.LINE_RIPPLE_DEACTIVATING));
    }
};