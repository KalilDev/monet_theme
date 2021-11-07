'use strict';
const base = require('../../../../../base/code.js');
const google3 = require('google3');
var MenuSurfaceBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCMenuSurfaceFoundation;
        this.fixed = this.fullwidth = this.absolute = !1;
        this.y = this.x = null;
        this.stayOpenOnBodyClick = this.open = this.quick = !1;
        this.previousMenuCorner = null;
        this.menuCorner = 'START';
        this.corner = 'TOP_START';
        this.styleTransformOrigin = this.styleMaxHeight = this.styleBottom = this.styleRight = this.styleLeft = this.styleTop = '';
        this.previouslyFocused = this.anchor = null;
        this.onBodyClickBound = () => {
        };
    }
    render() {
        const styles = {
            top: this.styleTop,
            left: this.styleLeft,
            right: this.styleRight,
            bottom: this.styleBottom,
            'max-height': this.styleMaxHeight,
            'transform-origin': this.styleTransformOrigin
        };
        return google3.html`
      <div
          class="mdc-menu-surface ${ google3.classMap({
            'mdc-menu-surface--fixed': this.fixed,
            'mdc-menu-surface--fullwidth': this.fullwidth
        }) }"
          style="${ google3.styleMap(styles) }"
          @keydown=${ this.onKeydown }
          @opened=${ this.registerBodyClick }
          @closed=${ this.deregisterBodyClick }>
        <slot></slot>
      </div>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, base.utils_addHasRemoveClass(this.mdcRoot)), {
            hasAnchor: () => !!this.anchor,
            notifyClose: () => {
                const ev = new CustomEvent('closed', {
                    bubbles: !0,
                    composed: !0
                });
                this.open = !1;
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyClosing: () => {
                const ev = new CustomEvent('closing', {
                    bubbles: !0,
                    composed: !0
                });
                this.mdcRoot.dispatchEvent(ev);
            },
            notifyOpen: () => {
                const ev = new CustomEvent('opened', {
                    bubbles: !0,
                    composed: !0
                });
                this.open = !0;
                this.mdcRoot.dispatchEvent(ev);
            },
            isElementInContainer: () => !1,
            isRtl: () => this.mdcRoot ? 'rtl' === getComputedStyle(this.mdcRoot).direction : !1,
            setTransformOrigin: origin => {
                this.mdcRoot && (this.styleTransformOrigin = origin);
            },
            isFocused: () => google3.doesElementContainFocus(this),
            saveFocus: () => {
                const activeElementPath = google3.deepActiveElementPath(), pathLength = activeElementPath.length;
                pathLength || (this.previouslyFocused = null);
                this.previouslyFocused = activeElementPath[pathLength - 1];
            },
            restoreFocus: () => {
                this.previouslyFocused && 'focus' in this.previouslyFocused && this.previouslyFocused.focus();
            },
            getInnerDimensions: () => {
                const mdcRoot = this.mdcRoot;
                return mdcRoot ? {
                    width: mdcRoot.offsetWidth,
                    height: mdcRoot.offsetHeight
                } : {
                    width: 0,
                    height: 0
                };
            },
            getAnchorDimensions: () => {
                const anchorElement = this.anchor;
                return anchorElement ? anchorElement.getBoundingClientRect() : null;
            },
            getBodyDimensions: () => ({
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }),
            getWindowDimensions: () => ({
                width: window.innerWidth,
                height: window.innerHeight
            }),
            getWindowScroll: () => ({
                x: window.pageXOffset,
                y: window.pageYOffset
            }),
            setPosition: position => {
                this.mdcRoot && (this.styleLeft = 'left' in position ? `${ position.left }px` : '', this.styleRight = 'right' in position ? `${ position.right }px` : '', this.styleTop = 'top' in position ? `${ position.top }px` : '', this.styleBottom = 'bottom' in position ? `${ position.bottom }px` : '');
            },
            setMaxHeight: async height => {
                this.mdcRoot && (this.styleMaxHeight = height, await this.updateComplete, this.styleMaxHeight = `var(--mdc-menu-max-height, ${ height })`);
            }
        });
    }
    onKeydown(evt) {
        this.mdcFoundation && this.mdcFoundation.handleKeydown(evt);
    }
    onBodyClick(evt) {
        this.stayOpenOnBodyClick || -1 === evt.composedPath().indexOf(this) && this.close();
    }
    registerBodyClick() {
        this.onBodyClickBound = this.onBodyClick.bind(this);
        document.body.addEventListener('click', this.onBodyClickBound, {
            passive: !0,
            capture: !0
        });
    }
    deregisterBodyClick() {
        document.body.removeEventListener('click', this.onBodyClickBound, { capture: !0 });
    }
    close() {
        this.open = !1;
    }
    show() {
        this.open = !0;
    }
};