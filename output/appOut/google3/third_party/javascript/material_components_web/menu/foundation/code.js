'use strict';
const google3 = require('google3');
var MDCMenuFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCMenuFoundation.defaultAdapter), adapter));
        this.closeAnimationEndTimerId = 0;
        this.defaultFocusState = 1;
        this.selectedIndex = -1;
    }
    static get cssClasses() {
        return google3.cssClasses;
    }
    static get strings() {
        return google3.strings;
    }
    static get numbers() {
        return google3.numbers;
    }
    static get defaultAdapter() {
        return {
            addClassToElementAtIndex: () => {
            },
            removeClassFromElementAtIndex: () => {
            },
            addAttributeToElementAtIndex: () => {
            },
            removeAttributeFromElementAtIndex: () => {
            },
            getAttributeFromElementAtIndex: () => null,
            elementContainsClass: () => !1,
            closeSurface: () => {
            },
            getElementIndex: () => -1,
            notifySelected: () => {
            },
            getMenuItemCount: () => 0,
            focusItemAtIndex: () => {
            },
            focusListRoot: () => {
            },
            getSelectedSiblingOfItemAtIndex: () => -1,
            isSelectableItemAtIndex: () => !1
        };
    }
    destroy() {
        this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId);
        this.adapter.closeSurface();
    }
    handleKeydown(evt) {
        const keyCode = evt.keyCode;
        'Tab' !== evt.key && 9 !== keyCode || this.adapter.closeSurface(!0);
    }
    getSelectedIndex() {
        return this.selectedIndex;
    }
    setSelectedIndex(index) {
        const menuSize = this.adapter.getMenuItemCount();
        if (!(0 <= index && index < menuSize))
            throw Error('MDCMenuFoundation: No list item at specified index.');
        if (!this.adapter.isSelectableItemAtIndex(index))
            throw Error('MDCMenuFoundation: No selection group at specified index.');
        const prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
        0 <= prevSelectedIndex && (this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, google3.strings.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, google3.cssClasses.MENU_SELECTED_LIST_ITEM));
        this.adapter.addClassToElementAtIndex(index, google3.cssClasses.MENU_SELECTED_LIST_ITEM);
        this.adapter.addAttributeToElementAtIndex(index, google3.strings.ARIA_CHECKED_ATTR, 'true');
        this.selectedIndex = index;
    }
};