'use strict';
const google3 = require('google3');
var MDCTabScrollerRTLNegative = class extends google3.MDCTabScrollerRTL {
    getScrollPositionRTL(translateX) {
        return Math.round(translateX - this.adapter.getScrollAreaScrollLeft());
    }
    scrollToRTL(scrollX) {
        const clampedScrollLeft = this.clampScrollValue(-scrollX);
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
    getAnimatingScrollPosition(scrollX, translateX) {
        return scrollX - translateX;
    }
    calculateScrollEdges() {
        return {
            left: this.adapter.getScrollAreaOffsetWidth() - this.adapter.getScrollContentOffsetWidth(),
            right: 0
        };
    }
    clampScrollValue(scrollX) {
        const edges = this.calculateScrollEdges();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
    }
};