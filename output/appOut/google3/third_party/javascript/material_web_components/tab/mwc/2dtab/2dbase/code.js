'use strict';
const $m2dtab = require('../code.js');
const base = require('../../../../base/code.js');
const google3 = require('google3');
var TabBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCTabFoundation;
        this.icon = this.label = '';
        this.isMinWidthIndicator = this.minWidth = this.isFadingIndicator = this.hasImageIcon = !1;
        this.indicatorIcon = '';
        this.stacked = !1;
        this.focusOnActivate = !0;
        this.useStateLayerCustomProperties = this.shouldRenderRipple = this.initFocus = this._active = !1;
        this.rippleHandlers = new google3.RippleHandlers(() => {
            this.shouldRenderRipple = !0;
            this.ripple.then(v => v);
            return this.ripple;
        });
    }
    get active() {
        return this._active;
    }
    connectedCallback() {
        this.dir = document.dir;
        super.connectedCallback();
    }
    firstUpdated() {
        super.firstUpdated();
        this.id = this.id || `mdc-tab-${ ++$m2dtab.$n2dbase_tabIdCounter }`;
    }
    render() {
        const classes = {
            'mdc-tab--min-width': this.minWidth,
            'mdc-tab--stacked': this.stacked
        };
        let iconTemplate = google3.html``;
        if (this.hasImageIcon || this.icon)
            iconTemplate = google3.html`
        <span class="mdc-tab__icon material-icons"><slot name="icon">${ this.icon }</slot></span>`;
        let labelTemplate = google3.html``;
        this.label && (labelTemplate = google3.html`
        <span class="mdc-tab__text-label">${ this.label }</span>`);
        return google3.html`
      <button
        @click="${ this.handleClick }"
        class="mdc-tab ${ google3.classMap(classes) }"
        role="tab"
        aria-selected="false"
        tabindex="-1"
        @focus="${ this.focus }"
        @blur="${ this.handleBlur }"
        @mousedown="${ this.handleRippleMouseDown }"
        @mouseenter="${ this.handleRippleMouseEnter }"
        @mouseleave="${ this.handleRippleMouseLeave }"
        @touchstart="${ this.handleRippleTouchStart }"
        @touchend="${ this.handleRippleDeactivate }"
        @touchcancel="${ this.handleRippleDeactivate }">
        <span class="mdc-tab__content">
          ${ iconTemplate }
          ${ labelTemplate }
          ${ this.isMinWidthIndicator ? JSCompiler_StaticMethods_renderIndicator(this) : '' }
        </span>
        ${ this.isMinWidthIndicator ? '' : JSCompiler_StaticMethods_renderIndicator(this) }
        ${ this.renderRipple() }
      </button>`;
    }
    renderRipple() {
        return this.shouldRenderRipple ? google3.html`<mwc-ripple primary
        .internalUseStateLayerCustomProperties="${ this.useStateLayerCustomProperties }"></mwc-ripple>` : '';
    }
    createAdapter() {
        return Object.assign(Object.assign({}, base.utils_addHasRemoveClass(this.mdcRoot)), {
            setAttr: (attr, value) => this.mdcRoot.setAttribute(attr, value),
            activateIndicator: async previousIndicatorClientRect => {
                await this.tabIndicator.updateComplete;
                this.tabIndicator.activate(previousIndicatorClientRect);
            },
            deactivateIndicator: async () => {
                await this.tabIndicator.updateComplete;
                this.tabIndicator.deactivate();
            },
            notifyInteracted: () => this.dispatchEvent(new CustomEvent(google3.MDCTabFoundation.strings.INTERACTED_EVENT, {
                detail: { tabId: this.id },
                bubbles: !0,
                composed: !0,
                cancelable: !0
            })),
            getOffsetLeft: () => this.offsetLeft,
            getOffsetWidth: () => this.mdcRoot.offsetWidth,
            getContentOffsetLeft: () => this._contentElement.offsetLeft,
            getContentOffsetWidth: () => this._contentElement.offsetWidth,
            focus: () => {
                this.initFocus ? this.initFocus = !1 : this.mdcRoot.focus();
            }
        });
    }
    activate(clientRect) {
        clientRect || (this.initFocus = !0);
        this.mdcFoundation ? (this.mdcFoundation.activate(clientRect), this.setActive(this.mdcFoundation.isActive())) : this.updateComplete.then(() => {
            this.mdcFoundation.activate(clientRect);
            this.setActive(this.mdcFoundation.isActive());
        });
    }
    deactivate() {
        this.mdcFoundation.deactivate();
        this.setActive(this.mdcFoundation.isActive());
    }
    setActive(newValue) {
        const oldValue = this.active;
        oldValue !== newValue && (this._active = newValue, JSCompiler_StaticMethods_requestUpdate(this, 'active', oldValue));
    }
    computeDimensions() {
        return this.mdcFoundation.computeDimensions();
    }
    focus() {
        this.mdcRoot.focus();
        this.handleFocus();
    }
    handleClick() {
        this.handleFocus();
        this.mdcFoundation.handleClick();
    }
    handleFocus() {
        this.handleRippleFocus();
    }
    handleBlur() {
        this.handleRippleBlur();
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
};