'use strict';
const google3 = require('google3');
var ListItemBase = class extends google3.LitElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.group = null;
        this.tabindex = -1;
        this.activated = this.twoline = this.disabled = !1;
        this.graphic = null;
        this.shouldRenderRipple = this.selected = this.noninteractive = this.hasMeta = this.multipleGraphics = !1;
        this._managingList = null;
        this._firstChanged = !0;
        this._skipPropRequest = !1;
        this.rippleHandlers = new google3.RippleHandlers(() => {
            this.shouldRenderRipple = !0;
            return this.ripple;
        });
        this.listeners = [
            {
                target: this,
                eventNames: ['click'],
                cb: () => {
                    this.onClick();
                }
            },
            {
                target: this,
                eventNames: ['mouseenter'],
                cb: this.rippleHandlers.startHover
            },
            {
                target: this,
                eventNames: ['mouseleave'],
                cb: this.rippleHandlers.endHover
            },
            {
                target: this,
                eventNames: ['focus'],
                cb: this.rippleHandlers.startFocus
            },
            {
                target: this,
                eventNames: ['blur'],
                cb: this.rippleHandlers.endFocus
            },
            {
                target: this,
                eventNames: [
                    'mousedown',
                    'touchstart'
                ],
                cb: e => {
                    JSCompiler_StaticMethods_onDown(this, 'mousedown' === e.type ? 'mouseup' : 'touchend', e);
                }
            }
        ];
    }
    get text() {
        const textContent = this.textContent;
        return textContent ? textContent.trim() : '';
    }
    render() {
        const text = google3.html`
      <span class="mdc-deprecated-list-item__text">
        ${ this.twoline ? google3.html`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    ` : google3.html`<slot></slot>` }
      </span>`;
        return google3.html`
      ${ this.renderRipple() }
      ${ this.graphic ? google3.html`
      <span class="mdc-deprecated-list-item__graphic material-icons ${ google3.classMap({ multi: this.multipleGraphics }) }">
        <slot name="graphic"></slot>
      </span>` : google3.html`` }
      ${ text }
      ${ this.hasMeta ? google3.html`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>` : google3.html`` }`;
    }
    renderRipple() {
        return this.shouldRenderRipple ? google3.html`
      <mwc-ripple
        .activated=${ this.activated }>
      </mwc-ripple>` : this.activated ? google3.html`<div class="fake-activated-ripple"></div>` : '';
    }
    onClick() {
        JSCompiler_StaticMethods_fireRequestSelected(this, !this.selected, 'interaction');
    }
    connectedCallback() {
        super.connectedCallback();
        this.noninteractive || this.setAttribute('mwc-list-item', '');
        for (const listener of this.listeners)
            for (const eventName of listener.eventNames)
                listener.target.addEventListener(eventName, listener.cb, { passive: !0 });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners)
            for (const eventName of listener.eventNames)
                listener.target.removeEventListener(eventName, listener.cb);
        this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
    }
    firstUpdated() {
        const ev = new Event('list-item-rendered', {
            bubbles: !0,
            composed: !0
        });
        this.dispatchEvent(ev);
    }
};