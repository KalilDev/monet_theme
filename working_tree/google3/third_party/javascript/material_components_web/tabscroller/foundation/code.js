'use strict';
const google3 = require('google3');
var MDCTabScrollerFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCTabScrollerFoundation.defaultAdapter), adapter));
        this.isAnimating = !1;
    }
    static get cssClasses() {
        return google3.cssClasses;
    }
    static get strings() {
        return google3.strings;
    }
    static get defaultAdapter() {
        return {
            eventTargetMatchesSelector: () => !1,
            addClass: () => {
            },
            removeClass: () => {
            },
            addScrollAreaClass: () => {
            },
            setScrollAreaStyleProperty: () => {
            },
            setScrollContentStyleProperty: () => {
            },
            getScrollContentStyleValue: () => '',
            setScrollAreaScrollLeft: () => {
            },
            getScrollAreaScrollLeft: () => 0,
            getScrollContentOffsetWidth: () => 0,
            getScrollAreaOffsetWidth: () => 0,
            computeScrollAreaClientRect: () => ({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            }),
            computeScrollContentClientRect: () => ({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            }),
            computeHorizontalScrollbarHeight: () => 0
        };
    }
    init() {
        const horizontalScrollbarHeight = this.adapter.computeHorizontalScrollbarHeight();
        this.adapter.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.adapter.addScrollAreaClass(google3.MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    }
    getScrollPosition() {
        if (this.isRTL()) {
            const translateX = JSCompiler_StaticMethods_calculateCurrentTranslateX(this);
            return JSCompiler_StaticMethods_getRTLScroller(this).getScrollPositionRTL(translateX);
        }
        const currentTranslateX = JSCompiler_StaticMethods_calculateCurrentTranslateX(this);
        return this.adapter.getScrollAreaScrollLeft() - currentTranslateX;
    }
    handleTransitionEnd(evt) {
        const evtTarget = evt.target;
        this.isAnimating && this.adapter.eventTargetMatchesSelector(evtTarget, google3.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR) && (this.isAnimating = !1, this.adapter.removeClass(google3.MDCTabScrollerFoundation.cssClasses.ANIMATING));
    }
    incrementScroll(scrollXIncrement) {
        if (0 !== scrollXIncrement) {
            var JSCompiler_temp_const = this.animate;
            if (this.isRTL())
                var JSCompiler_inline_result = JSCompiler_StaticMethods_getRTLScroller(this).incrementScrollRTL(scrollXIncrement);
            else {
                var currentScrollX = this.getScrollPosition(), safeScrollX = this.clampScrollValue(scrollXIncrement + currentScrollX);
                JSCompiler_inline_result = {
                    finalScrollPosition: safeScrollX,
                    scrollDelta: safeScrollX - currentScrollX
                };
            }
            JSCompiler_temp_const.call(this, JSCompiler_inline_result);
        }
    }
    scrollTo(scrollX) {
        if (this.isRTL()) {
            const animation = JSCompiler_StaticMethods_getRTLScroller(this).scrollToRTL(scrollX);
            this.animate(animation);
        } else {
            const currentScrollX = this.getScrollPosition(), safeScrollX = this.clampScrollValue(scrollX);
            this.animate({
                finalScrollPosition: safeScrollX,
                scrollDelta: safeScrollX - currentScrollX
            });
        }
    }
    clampScrollValue(scrollX) {
        const edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    }
    calculateScrollEdges() {
        return {
            left: 0,
            right: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth()
        };
    }
    animate(animation) {
        0 !== animation.scrollDelta && (JSCompiler_StaticMethods_stopScrollAnimation(this), this.adapter.setScrollAreaScrollLeft(animation.finalScrollPosition), this.adapter.setScrollContentStyleProperty('transform', `translateX(${ animation.scrollDelta }px)`), this.adapter.computeScrollAreaClientRect(), requestAnimationFrame(() => {
            this.adapter.addClass(google3.MDCTabScrollerFoundation.cssClasses.ANIMATING);
            this.adapter.setScrollContentStyleProperty('transform', 'none');
        }), this.isAnimating = !0);
    }
    getAnimatingScrollPosition() {
        const currentTranslateX = JSCompiler_StaticMethods_calculateCurrentTranslateX(this), scrollLeft = this.adapter.getScrollAreaScrollLeft();
        return this.isRTL() ? JSCompiler_StaticMethods_getRTLScroller(this).getAnimatingScrollPosition(scrollLeft, currentTranslateX) : scrollLeft - currentTranslateX;
    }
    isRTL() {
        return 'rtl' === this.adapter.getScrollContentStyleValue('direction');
    }
};