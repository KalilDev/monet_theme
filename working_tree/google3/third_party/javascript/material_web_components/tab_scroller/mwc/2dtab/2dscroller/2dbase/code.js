'use strict';
const dom = require('../../../../../../material_components_web/dom/code.js');
const base = require('../../../../../base/code.js');
const google3 = require('google3');
var TabScrollerBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCTabScrollerFoundation;
        this._scrollbarHeight = -1;
    }
    _handleInteraction() {
        var JSCompiler_StaticMethods_handleInteraction$self = this.mdcFoundation;
        JSCompiler_StaticMethods_handleInteraction$self.isAnimating && JSCompiler_StaticMethods_stopScrollAnimation(JSCompiler_StaticMethods_handleInteraction$self);
    }
    _handleTransitionEnd(e) {
        this.mdcFoundation.handleTransitionEnd(e);
    }
    render() {
        return google3.html`
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${ this._handleInteraction }"
            @touchstart="${ this._handleInteraction }"
            @pointerdown="${ this._handleInteraction }"
            @mousedown="${ this._handleInteraction }"
            @keydown="${ this._handleInteraction }"
            @transitionend="${ this._handleTransitionEnd }">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, base.utils_addHasRemoveClass(this.mdcRoot)), {
            eventTargetMatchesSelector: (evtTarget, selector) => dom.ponyfill_matches(evtTarget, selector),
            addScrollAreaClass: className => this.scrollAreaElement.classList.add(className),
            setScrollAreaStyleProperty: (prop, value) => this.scrollAreaElement.style.setProperty(prop, value),
            setScrollContentStyleProperty: (prop, value) => this.scrollContentElement.style.setProperty(prop, value),
            getScrollContentStyleValue: propName => window.getComputedStyle(this.scrollContentElement).getPropertyValue(propName),
            setScrollAreaScrollLeft: scrollX => this.scrollAreaElement.scrollLeft = scrollX,
            getScrollAreaScrollLeft: () => this.scrollAreaElement.scrollLeft,
            getScrollContentOffsetWidth: () => this.scrollContentElement.offsetWidth,
            getScrollAreaOffsetWidth: () => this.scrollAreaElement.offsetWidth,
            computeScrollAreaClientRect: () => this.scrollAreaElement.getBoundingClientRect(),
            computeScrollContentClientRect: () => this.scrollContentElement.getBoundingClientRect(),
            computeHorizontalScrollbarHeight: () => {
                -1 === this._scrollbarHeight && (this.scrollAreaElement.style.overflowX = 'scroll', this._scrollbarHeight = this.scrollAreaElement.offsetHeight - this.scrollAreaElement.clientHeight, this.scrollAreaElement.style.overflowX = '');
                return this._scrollbarHeight;
            }
        });
    }
    getScrollPosition() {
        return this.mdcFoundation.getScrollPosition();
    }
    getScrollContentWidth() {
        return this.scrollContentElement.offsetWidth;
    }
};