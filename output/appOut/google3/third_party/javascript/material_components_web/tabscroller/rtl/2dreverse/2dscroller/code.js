'use strict';
const google3 = require('google3');
var MDCTabScrollerRTLReverse = class extends google3.MDCTabScrollerRTL {
    getScrollPositionRTL(translateX) {
        return Math.round(this.adapter.getScrollAreaScrollLeft() - translateX);
    }
    scrollToRTL(scrollX) {
        const clampedScrollLeft = this.clampScrollValue(scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: this.adapter.getScrollAreaScrollLeft() - clampedScrollLeft
        };
    }
    incrementScrollRTL(scrollX) {
        const currentScrollLeft = this.adapter.getScrollAreaScrollLeft(), clampedScrollLeft = this.clampScrollValue(currentScrollLeft + scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft
        };
    }
    getAnimatingScrollPosition(scrollX, translateX) {
        return scrollX + translateX;
    }
    calculateScrollEdges() {
        return {
            left: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth(),
            right: 0
        };
    }
    clampScrollValue(scrollX) {
        const edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
    }
};