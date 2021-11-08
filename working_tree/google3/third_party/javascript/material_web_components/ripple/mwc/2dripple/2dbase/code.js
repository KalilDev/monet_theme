'use strict';
const dom = require('../../../../../material_components_web/dom/code.js');
const google3 = require('google3');
var RippleBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.fgDeactivation = this.fgActivation = this.bgFocused = this.hovering = this.internalUseStateLayerCustomProperties = this.selected = this.activated = this.disabled = this.unbounded = this.accent = this.primary = !1;
        this.topPos = this.leftPos = this.translateEnd = this.translateStart = this.fgSize = this.fgScale = '';
        this.mdcFoundationClass = google3.MDCRippleFoundation;
    }
    get isActive() {
        return dom.ponyfill_matches(this.parentElement || this, ':active');
    }
    createAdapter() {
        return {
            browserSupportsCssVars: () => !0,
            isUnbounded: () => this.unbounded,
            isSurfaceActive: () => this.isActive,
            isSurfaceDisabled: () => this.disabled,
            addClass: className => {
                switch (className) {
                case 'mdc-ripple-upgraded--background-focused':
                    this.bgFocused = !0;
                    break;
                case 'mdc-ripple-upgraded--foreground-activation':
                    this.fgActivation = !0;
                    break;
                case 'mdc-ripple-upgraded--foreground-deactivation':
                    this.fgDeactivation = !0;
                }
            },
            removeClass: className => {
                switch (className) {
                case 'mdc-ripple-upgraded--background-focused':
                    this.bgFocused = !1;
                    break;
                case 'mdc-ripple-upgraded--foreground-activation':
                    this.fgActivation = !1;
                    break;
                case 'mdc-ripple-upgraded--foreground-deactivation':
                    this.fgDeactivation = !1;
                }
            },
            containsEventTarget: () => !0,
            registerInteractionHandler: () => {
            },
            deregisterInteractionHandler: () => {
            },
            registerDocumentInteractionHandler: () => {
            },
            deregisterDocumentInteractionHandler: () => {
            },
            registerResizeHandler: () => {
            },
            deregisterResizeHandler: () => {
            },
            updateCssVariable: (varName, value) => {
                switch (varName) {
                case '--mdc-ripple-fg-scale':
                    this.fgScale = value;
                    break;
                case '--mdc-ripple-fg-size':
                    this.fgSize = value;
                    break;
                case '--mdc-ripple-fg-translate-end':
                    this.translateEnd = value;
                    break;
                case '--mdc-ripple-fg-translate-start':
                    this.translateStart = value;
                    break;
                case '--mdc-ripple-left':
                    this.leftPos = value;
                    break;
                case '--mdc-ripple-top':
                    this.topPos = value;
                }
            },
            computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
            getWindowPageOffset: () => ({
                x: window.pageXOffset,
                y: window.pageYOffset
            })
        };
    }
    startPress(ev) {
        JSCompiler_StaticMethods_waitForFoundation(this, () => {
            this.mdcFoundation.activate(ev);
        });
    }
    endPress() {
        JSCompiler_StaticMethods_waitForFoundation(this, () => {
            this.mdcFoundation.deactivate();
        });
    }
    startFocus() {
        JSCompiler_StaticMethods_waitForFoundation(this, () => {
            this.mdcFoundation.handleFocus();
        });
    }
    endFocus() {
        JSCompiler_StaticMethods_waitForFoundation(this, () => {
            this.mdcFoundation.handleBlur();
        });
    }
    startHover() {
        this.hovering = !0;
    }
    endHover() {
        this.hovering = !1;
    }
    update(changedProperties) {
        changedProperties.has('disabled') && this.disabled && this.endHover();
        super.update(changedProperties);
    }
    render() {
        return google3.html`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ google3.classMap({
            'mdc-ripple-surface--accent': this.accent,
            'mdc-ripple-surface--primary--activated': this.activated && (this.primary || !this.accent),
            'mdc-ripple-surface--accent--activated': this.accent && this.activated,
            'mdc-ripple-surface--primary--selected': this.selected && (this.primary || !this.accent),
            'mdc-ripple-surface--accent--selected': this.accent && this.selected,
            'mdc-ripple-surface--disabled': this.disabled,
            'mdc-ripple-surface--hover': this.hovering,
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--selected': this.selected,
            'mdc-ripple-upgraded--background-focused': this.bgFocused,
            'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
            'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
            'mdc-ripple-upgraded--unbounded': this.unbounded,
            'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties
        }) }"
          style="${ google3.styleMap({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos
        }) }"></div>`;
    }
};