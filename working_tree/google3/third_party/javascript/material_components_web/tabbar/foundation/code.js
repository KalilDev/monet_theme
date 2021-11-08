'use strict';
const google3 = require('google3');
var MDCTabBarFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCTabBarFoundation.defaultAdapter), adapter));
        this.useAutomaticActivation = !1;
    }
    static get strings() {
        return google3.strings;
    }
    static get numbers() {
        return google3.numbers;
    }
    static get defaultAdapter() {
        return {
            scrollTo: () => {
            },
            incrementScroll: () => {
            },
            getScrollPosition: () => 0,
            getScrollContentWidth: () => 0,
            getOffsetWidth: () => 0,
            isRTL: () => !1,
            setActiveTab: () => {
            },
            activateTabAtIndex: () => {
            },
            deactivateTabAtIndex: () => {
            },
            focusTabAtIndex: () => {
            },
            getTabIndicatorClientRectAtIndex: () => ({
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            }),
            getTabDimensionsAtIndex: () => ({
                rootLeft: 0,
                rootRight: 0,
                contentLeft: 0,
                contentRight: 0
            }),
            getPreviousActiveTabIndex: () => -1,
            getFocusedTabIndex: () => -1,
            getIndexOfTabById: () => -1,
            getTabListLength: () => 0,
            notifyTabActivated: () => {
            }
        };
    }
    scrollIntoView(index) {
        if (0 <= index && index < this.adapter.getTabListLength())
            if (0 === index)
                this.adapter.scrollTo(0);
            else if (index === this.adapter.getTabListLength() - 1)
                this.adapter.scrollTo(this.adapter.getScrollContentWidth());
            else if (this.isRTL()) {
                const scrollPosition = this.adapter.getScrollPosition(), barWidth = this.adapter.getOffsetWidth(), tabDimensions = this.adapter.getTabDimensionsAtIndex(index), scrollWidth = this.adapter.getScrollContentWidth();
                const rootLeft = scrollWidth - tabDimensions.rootLeft - barWidth - scrollPosition, rootRight = scrollWidth - tabDimensions.rootRight - scrollPosition, rootDelta = rootLeft + rootRight;
                var JSCompiler_inline_result = 0 < rootLeft || 0 < rootDelta ? index + 1 : 0 > rootRight || 0 > rootDelta ? index - 1 : -1;
                if (0 <= JSCompiler_inline_result && JSCompiler_inline_result < this.adapter.getTabListLength()) {
                    var scrollPosition$jscomp$0 = scrollPosition, barWidth$jscomp$0 = barWidth, scrollContentWidth = scrollWidth;
                    const nextTabDimensions = this.adapter.getTabDimensionsAtIndex(JSCompiler_inline_result), leftIncrement = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition$jscomp$0 - barWidth$jscomp$0 + google3.numbers.EXTRA_SCROLL_AMOUNT;
                    this.adapter.incrementScroll(JSCompiler_inline_result > index ? Math.max(leftIncrement, 0) : Math.min(scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition$jscomp$0 - google3.numbers.EXTRA_SCROLL_AMOUNT, 0));
                }
            } else {
                const scrollPosition = this.adapter.getScrollPosition(), barWidth = this.adapter.getOffsetWidth(), tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
                const relativeRootLeft = tabDimensions.rootLeft - scrollPosition, relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth, relativeRootDelta = relativeRootLeft + relativeRootRight;
                var JSCompiler_inline_result$jscomp$0 = 0 > relativeRootLeft || 0 > relativeRootDelta ? index - 1 : 0 < relativeRootRight || 0 < relativeRootDelta ? index + 1 : -1;
                if (0 <= JSCompiler_inline_result$jscomp$0 && JSCompiler_inline_result$jscomp$0 < this.adapter.getTabListLength()) {
                    var scrollPosition$jscomp$1 = scrollPosition, barWidth$jscomp$1 = barWidth;
                    const nextTabDimensions = this.adapter.getTabDimensionsAtIndex(JSCompiler_inline_result$jscomp$0), leftIncrement = nextTabDimensions.contentRight - scrollPosition$jscomp$1 - google3.numbers.EXTRA_SCROLL_AMOUNT;
                    this.adapter.incrementScroll(JSCompiler_inline_result$jscomp$0 < index ? Math.min(leftIncrement, 0) : Math.max(nextTabDimensions.contentLeft - scrollPosition$jscomp$1 - barWidth$jscomp$1 + google3.numbers.EXTRA_SCROLL_AMOUNT, 0));
                }
            }
    }
    isRTL() {
        return this.adapter.isRTL();
    }
};