'use strict';
const google3 = require('google3');
var IconButtonBase = class extends google3.LitElement {
    constructor() {
        super(...arguments);
        this.disabled = !1;
        this.icon = '';
        this.shouldRenderRipple = !1;
        this.rippleHandlers = new google3.RippleHandlers(() => {
            this.shouldRenderRipple = !0;
            return this.ripple;
        });
    }
    renderRipple() {
        return this.shouldRenderRipple ? google3.html`
            <mwc-ripple
                .disabled="${ this.disabled }"
                unbounded>
            </mwc-ripple>` : '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        buttonElement && (this.rippleHandlers.startFocus(), buttonElement.focus());
    }
    blur() {
        const buttonElement = this.buttonElement;
        buttonElement && (this.rippleHandlers.endFocus(), buttonElement.blur());
    }
    render() {
        return google3.html`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${ this.ariaLabel || this.icon }"
        aria-haspopup="${ google3.ifDefined(this.ariaHasPopup) }"
        ?disabled="${ this.disabled }"
        @focus="${ this.handleRippleFocus }"
        @blur="${ this.handleRippleBlur }"
        @mousedown="${ this.handleRippleMouseDown }"
        @mouseenter="${ this.handleRippleMouseEnter }"
        @mouseleave="${ this.handleRippleMouseLeave }"
        @touchstart="${ this.handleRippleTouchStart }"
        @touchend="${ this.handleRippleDeactivate }"
        @touchcancel="${ this.handleRippleDeactivate }"
    >${ this.renderRipple() }
    <i class="material-icons">${ this.icon }</i>
    <span
      ><slot></slot
    ></span>
  </button>`;
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