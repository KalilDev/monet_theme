'use strict';
var cssClasses = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu'
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
    SELECTED_EVENT: 'MDCMenu:selected',
    SKIP_RESTORE_FOCUS: 'data-menu-item-skip-restore-focus'
};
var numbers = { FOCUS_ROOT_INDEX: -1 };
var DefaultFocusState = {
    NONE: 0,
    LIST_ROOT: 1,
    FIRST_ITEM: 2,
    LAST_ITEM: 3,
    0: 'NONE',
    1: 'LIST_ROOT',
    2: 'FIRST_ITEM',
    3: 'LAST_ITEM'
};