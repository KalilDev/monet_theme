'use strict';
const google3 = require('google3');
var MDCTabScrollerRTLDefault = class extends google3.MDCTabScrollerRTL {
    getScrollPositionRTL() {
        const currentScrollLeft = this.adapter.getScrollAreaScrollLeft(), {right} = this.calculateScrollEdges();
        return Math.round(right - currentScrollLeft);
    }
    scrollToRTL(scrollX) {
        const clampedScrollLeft = this.clampScrollValue(this.calculateScrollEdges().right - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - this.adapter.getScrollAreaScrollLeft()
        };
    }
    incrementScrollRTL(scrollX) {
        const currentScrollLeft = this.adapter.getScrollAreaScrollLeft(), clampedScrollLeft = this.clampScrollValue(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft
        };
    }
    getAnimatingScrollPosition(scrollX) {
        return scrollX;
    }
    calculateScrollEdges() {
        return {
            left: 0,
            right: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth()
        };
    }
    clampScrollValue(scrollX) {
        const edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    }
};