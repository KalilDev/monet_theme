'use strict';
const google3 = require('google3');
var MDCMenuSurfaceFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCMenuSurfaceFoundation.defaultAdapter), adapter));
        this.isHorizontallyCenteredOnViewport = this.isFixedPosition = this.isHoistedElement = this.isQuickOpen = this.isSurfaceOpen = !1;
        this.animationRequestId = this.closeAnimationEndTimerId = this.openAnimationEndTimerId = this.openBottomBias = this.maxHeight = 0;
        this.originCorner = this.anchorCorner = 8;
        this.anchorMargin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        this.position = {
            x: 0,
            y: 0
        };
    }
    static get cssClasses() {
        return google3.cssClasses;
    }
    static get strings() {
        return google3.strings;
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
            hasClass: () => !1,
            hasAnchor: () => !1,
            isElementInContainer: () => !1,
            isFocused: () => !1,
            isRtl: () => !1,
            getInnerDimensions: () => ({
                height: 0,
                width: 0
            }),
            getAnchorDimensions: () => null,
            getWindowDimensions: () => ({
                height: 0,
                width: 0
            }),
            getBodyDimensions: () => ({
                height: 0,
                width: 0
            }),
            getWindowScroll: () => ({
                x: 0,
                y: 0
            }),
            setPosition: () => {
            },
            setMaxHeight: () => {
            },
            setTransformOrigin: () => {
            },
            saveFocus: () => {
            },
            restoreFocus: () => {
            },
            notifyClose: () => {
            },
            notifyOpen: () => {
            },
            notifyClosing: () => {
            }
        };
    }
    init() {
        const ROOT = google3.MDCMenuSurfaceFoundation.cssClasses.ROOT, OPEN = google3.MDCMenuSurfaceFoundation.cssClasses.OPEN;
        if (!this.adapter.hasClass(ROOT))
            throw Error(`${ ROOT } class required in root element.`);
        this.adapter.hasClass(OPEN) && (this.isSurfaceOpen = !0);
    }
    destroy() {
        clearTimeout(this.openAnimationEndTimerId);
        clearTimeout(this.closeAnimationEndTimerId);
        cancelAnimationFrame(this.animationRequestId);
    }
    setMaxHeight(maxHeight) {
        this.maxHeight = maxHeight;
    }
    isOpen() {
        return this.isSurfaceOpen;
    }
    open() {
        this.isSurfaceOpen || (this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(google3.MDCMenuSurfaceFoundation.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), JSCompiler_StaticMethods_autoposition(this), this.adapter.notifyOpen()) : (this.adapter.addClass(google3.MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(() => {
            this.dimensions = this.adapter.getInnerDimensions();
            JSCompiler_StaticMethods_autoposition(this);
            this.adapter.addClass(google3.MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.openAnimationEndTimerId = setTimeout(() => {
                this.openAnimationEndTimerId = 0;
                this.adapter.removeClass(google3.MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                this.adapter.notifyOpen();
            }, google3.numbers.TRANSITION_OPEN_DURATION);
        }), this.isSurfaceOpen = !0));
    }
    close(skipRestoreFocus = !1) {
        this.isSurfaceOpen && (this.adapter.notifyClosing(), this.isQuickOpen ? (this.isSurfaceOpen = !1, skipRestoreFocus || JSCompiler_StaticMethods_maybeRestoreFocus(this), this.adapter.removeClass(google3.MDCMenuSurfaceFoundation.cssClasses.OPEN), this.adapter.removeClass(google3.MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose()) : (this.adapter.addClass(google3.MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(() => {
            this.adapter.removeClass(google3.MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.adapter.removeClass(google3.MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            this.closeAnimationEndTimerId = setTimeout(() => {
                this.closeAnimationEndTimerId = 0;
                this.adapter.removeClass(google3.MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                this.adapter.notifyClose();
            }, google3.numbers.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, skipRestoreFocus || JSCompiler_StaticMethods_maybeRestoreFocus(this)));
    }
    handleKeydown(evt) {
        const keyCode = evt.keyCode;
        'Escape' !== evt.key && 27 !== keyCode || this.close();
    }
    isFinite(num) {
        return 'number' === typeof num && isFinite(num);
    }
};