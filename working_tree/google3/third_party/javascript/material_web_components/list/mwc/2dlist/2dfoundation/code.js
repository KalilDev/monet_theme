'use strict';
const dom = require('../../../../../material_components_web/dom/code.js');
const $m2dlist = require('../code.js');
const google3 = require('google3');
var createSetFromIndex = index => {
    const entry = index === google3.numbers.UNSET_INDEX ? new Set() : index;
    return $m2dlist.$n2dfoundation_isIndexSet(entry) ? new Set(entry) : new Set([entry]);
};
var MDCListFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCListFoundation.defaultAdapter), adapter));
        this.wrapFocus_ = this.isMulti_ = !1;
        this.isVertical_ = !0;
        this.focusedItemIndex_ = this.selectedIndex_ = google3.numbers.UNSET_INDEX;
        this.useActivatedClass_ = !1;
        this.ariaCurrentAttrValue_ = null;
    }
    static get strings() {
        return google3.strings;
    }
    static get numbers() {
        return google3.numbers;
    }
    static get defaultAdapter() {
        return {
            focusItemAtIndex: () => {
            },
            getFocusedElementIndex: () => 0,
            getListItemCount: () => 0,
            isFocusInsideList: () => !1,
            isRootFocused: () => !1,
            notifyAction: () => {
            },
            notifySelected: () => {
            },
            getSelectedStateForElementIndex: () => !1,
            setDisabledStateForElementIndex: () => {
            },
            getDisabledStateForElementIndex: () => !1,
            setSelectedStateForElementIndex: () => {
            },
            setActivatedStateForElementIndex: () => {
            },
            setTabIndexForElementIndex: () => {
            },
            setAttributeForElementIndex: () => {
            },
            getAttributeForElementIndex: () => null
        };
    }
    getSelectedIndex() {
        return this.selectedIndex_;
    }
    setSelectedIndex(index) {
        JSCompiler_StaticMethods_isIndexValid_(this, index) && (this.isMulti_ ? JSCompiler_StaticMethods_setMultiSelectionAtIndex_(this, google3.createSetFromIndex(index)) : JSCompiler_StaticMethods_setSingleSelectionAtIndex_(this, index));
    }
    handleKeydown(event, isRootListItem, listItemIndex) {
        const isArrowLeft = 'ArrowLeft' === dom.keyboard_normalizeKey(event), isArrowUp = 'ArrowUp' === dom.keyboard_normalizeKey(event), isArrowRight = 'ArrowRight' === dom.keyboard_normalizeKey(event), isArrowDown = 'ArrowDown' === dom.keyboard_normalizeKey(event), isHome = 'Home' === dom.keyboard_normalizeKey(event), isEnd = 'End' === dom.keyboard_normalizeKey(event), isEnter = 'Enter' === dom.keyboard_normalizeKey(event), isSpace = 'Spacebar' === dom.keyboard_normalizeKey(event);
        if (this.adapter.isRootFocused())
            if (isArrowUp || isEnd)
                event.preventDefault(), JSCompiler_StaticMethods_focusLastElement(this);
            else {
                if (isArrowDown || isHome)
                    event.preventDefault(), JSCompiler_StaticMethods_focusFirstElement(this);
            }
        else {
            var currentIndex = this.adapter.getFocusedElementIndex();
            if (-1 === currentIndex && (currentIndex = listItemIndex, 0 > currentIndex))
                return;
            if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
                JSCompiler_StaticMethods_preventDefaultEvent(event);
                a: {
                    let nextIndex = currentIndex + 1;
                    if (nextIndex >= this.adapter.getListItemCount())
                        if (this.wrapFocus_)
                            nextIndex = 0;
                        else {
                            var nextIndex$jscomp$0 = currentIndex;
                            break a;
                        }
                    this.adapter.focusItemAtIndex(nextIndex);
                    nextIndex$jscomp$0 = nextIndex;
                }
            } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
                JSCompiler_StaticMethods_preventDefaultEvent(event);
                a: {
                    let prevIndex = currentIndex - 1;
                    if (0 > prevIndex)
                        if (this.wrapFocus_)
                            prevIndex = this.adapter.getListItemCount() - 1;
                        else {
                            nextIndex$jscomp$0 = currentIndex;
                            break a;
                        }
                    this.adapter.focusItemAtIndex(prevIndex);
                    nextIndex$jscomp$0 = prevIndex;
                }
            } else if (isHome)
                JSCompiler_StaticMethods_preventDefaultEvent(event), nextIndex$jscomp$0 = JSCompiler_StaticMethods_focusFirstElement(this);
            else if (isEnd)
                JSCompiler_StaticMethods_preventDefaultEvent(event), nextIndex$jscomp$0 = JSCompiler_StaticMethods_focusLastElement(this);
            else if ((isEnter || isSpace) && isRootListItem) {
                const target = event.target;
                if (target && 'A' === target.tagName && isEnter)
                    return;
                JSCompiler_StaticMethods_preventDefaultEvent(event);
                JSCompiler_StaticMethods_setSelectedIndexOnAction_(this, currentIndex, !0);
            }
            this.focusedItemIndex_ = currentIndex;
            void 0 !== nextIndex$jscomp$0 && (JSCompiler_StaticMethods_setTabindexAtIndex_(this, nextIndex$jscomp$0), this.focusedItemIndex_ = nextIndex$jscomp$0);
        }
    }
};