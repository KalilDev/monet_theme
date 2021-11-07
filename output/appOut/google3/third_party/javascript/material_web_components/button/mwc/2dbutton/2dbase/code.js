'use strict';
const google3 = require('google3');
var ButtonBase = class extends google3.LitElement {
    constructor() {
        super(...arguments);
        this.fullwidth = this.trailingIcon = this.disabled = this.dense = this.outlined = this.unelevated = this.raised = !1;
        this.label = this.icon = '';
        this.shouldRenderRipple = this.expandContent = !1;
        this.rippleHandlers = new google3.RippleHandlers(() => {
            this.shouldRenderRipple = !0;
            return this.ripple;
        });
    }
    renderRipple() {
        const filled = this.raised || this.unelevated;
        return this.shouldRenderRipple ? google3.html`<mwc-ripple class="ripple" .primary="${ !filled }" .disabled="${ this.disabled }"></mwc-ripple>` : '';
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
        return google3.html`
      <button
          id="button"
          class="mdc-button ${ google3.classMap({
            'mdc-button--raised': this.raised,
            'mdc-button--unelevated': this.unelevated,
            'mdc-button--outlined': this.outlined,
            'mdc-button--dense': this.dense
        }) }"
          ?disabled="${ this.disabled }"
          aria-label="${ this.label || this.icon }"
          aria-haspopup="${ google3.ifDefined(this.ariaHasPopup) }"
          @focus="${ this.handleRippleFocus }"
          @blur="${ this.handleRippleBlur }"
          @mousedown="${ this.handleRippleActivate }"
          @mouseenter="${ this.handleRippleMouseEnter }"
          @mouseleave="${ this.handleRippleMouseLeave }"
          @touchstart="${ this.handleRippleActivate }"
          @touchend="${ this.handleRippleDeactivate }"
          @touchcancel="${ this.handleRippleDeactivate }">
        ${ google3.html`` }
        ${ this.renderRipple() }
        <span class="leading-icon">
          <slot name="icon">
            ${ this.icon && !this.trailingIcon ? this.renderIcon() : '' }
          </slot>
        </span>
        <span class="mdc-button__label">${ this.label }</span>
        <span class="slot-container ${ google3.classMap({ flex: this.expandContent }) }">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${ this.icon && this.trailingIcon ? this.renderIcon() : '' }
          </slot>
        </span>
      </button>`;
    }
    renderIcon() {
        return google3.html`
    <mwc-icon class="mdc-button__icon">
      ${ this.icon }
    </mwc-icon>`;
    }
    handleRippleActivate(evt) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(evt);
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