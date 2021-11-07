'use strict';
const google3 = require('google3');
var MDCRippleFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCRippleFoundation.defaultAdapter), adapter));
        this.activationAnimationHasEnded = !1;
        this.fgDeactivationRemovalTimer = this.activationTimer = 0;
        this.fgScale = '0';
        this.frame = {
            width: 0,
            height: 0
        };
        this.maxRadius = this.layoutFrame = this.initialSize = 0;
        this.unboundedCoords = {
            left: 0,
            top: 0
        };
        this.activationState = JSCompiler_StaticMethods_defaultActivationState();
        this.activationTimerCallback = () => {
            this.activationAnimationHasEnded = !0;
            JSCompiler_StaticMethods_runDeactivationUXLogicIfReady(this);
        };
        this.activateHandler = e => {
            JSCompiler_StaticMethods_activateImpl(this, e);
        };
        this.deactivateHandler = () => {
            JSCompiler_StaticMethods_deactivateImpl(this);
        };
        this.focusHandler = () => {
            this.handleFocus();
        };
        this.blurHandler = () => {
            this.handleBlur();
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
            browserSupportsCssVars: () => !0,
            computeBoundingRect: () => ({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            }),
            containsEventTarget: () => !0,
            deregisterDocumentInteractionHandler: () => {
            },
            deregisterInteractionHandler: () => {
            },
            deregisterResizeHandler: () => {
            },
            getWindowPageOffset: () => ({
                x: 0,
                y: 0
            }),
            isSurfaceActive: () => !0,
            isSurfaceDisabled: () => !0,
            isUnbounded: () => !0,
            registerDocumentInteractionHandler: () => {
            },
            registerInteractionHandler: () => {
            },
            registerResizeHandler: () => {
            },
            removeClass: () => {
            },
            updateCssVariable: () => {
            }
        };
    }
    init() {
        JSCompiler_StaticMethods_registerRootHandlers(this);
        const ROOT = google3.MDCRippleFoundation.cssClasses.ROOT, UNBOUNDED = google3.MDCRippleFoundation.cssClasses.UNBOUNDED;
        requestAnimationFrame(() => {
            this.adapter.addClass(ROOT);
            this.adapter.isUnbounded() && (this.adapter.addClass(UNBOUNDED), this.layoutInternal());
        });
    }
    destroy() {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(google3.MDCRippleFoundation.cssClasses.FG_ACTIVATION));
        this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(google3.MDCRippleFoundation.cssClasses.FG_DEACTIVATION));
        const ROOT = google3.MDCRippleFoundation.cssClasses.ROOT, UNBOUNDED = google3.MDCRippleFoundation.cssClasses.UNBOUNDED;
        requestAnimationFrame(() => {
            this.adapter.removeClass(ROOT);
            this.adapter.removeClass(UNBOUNDED);
            JSCompiler_StaticMethods_removeCssVars(this);
        });
        JSCompiler_StaticMethods_deregisterRootHandlers(this);
        JSCompiler_StaticMethods_deregisterDeactivationHandlers(this);
    }
    activate(evt) {
        JSCompiler_StaticMethods_activateImpl(this, evt);
    }
    deactivate() {
        JSCompiler_StaticMethods_deactivateImpl(this);
    }
    layout() {
        this.layoutFrame && cancelAnimationFrame(this.layoutFrame);
        this.layoutFrame = requestAnimationFrame(() => {
            this.layoutInternal();
            this.layoutFrame = 0;
        });
    }
    handleFocus() {
        requestAnimationFrame(() => this.adapter.addClass(google3.MDCRippleFoundation.cssClasses.BG_FOCUSED));
    }
    handleBlur() {
        requestAnimationFrame(() => this.adapter.removeClass(google3.MDCRippleFoundation.cssClasses.BG_FOCUSED));
    }
    layoutInternal() {
        this.frame = this.adapter.computeBoundingRect();
        const maxDim = Math.max(this.frame.height, this.frame.width);
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : (() => Math.sqrt(Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)) + google3.MDCRippleFoundation.numbers.PADDING)();
        const initialSize = Math.floor(maxDim * google3.MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.initialSize = this.adapter.isUnbounded() && 0 !== initialSize % 2 ? initialSize - 1 : initialSize;
        this.fgScale = `${ this.maxRadius / this.initialSize }`;
        JSCompiler_StaticMethods_updateLayoutCssVars(this);
    }
};