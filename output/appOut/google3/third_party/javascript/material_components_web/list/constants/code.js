'use strict';
const google3 = require('google3');
var deprecatedClassNameMap = {
    ['mdc-list-item--activated']: 'mdc-deprecated-list-item--activated',
    ['mdc-list-item']: 'mdc-deprecated-list-item',
    ['mdc-list-item--disabled']: 'mdc-deprecated-list-item--disabled',
    ['mdc-list-item--selected']: 'mdc-deprecated-list-item--selected',
    ['mdc-list-item__text']: 'mdc-deprecated-list-item__text',
    ['mdc-list-item__primary-text']: 'mdc-deprecated-list-item__primary-text',
    ['mdc-list']: 'mdc-deprecated-list'
};
var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .${ 'mdc-list-item' } button:not(:disabled),
    .${ 'mdc-list-item' } a,
    .${ google3.deprecatedClassNameMap['mdc-list-item'] } button:not(:disabled),
    .${ google3.deprecatedClassNameMap['mdc-list-item'] } a
  `,
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: `
    .${ 'mdc-list-item' } button:not(:disabled),
    .${ 'mdc-list-item' } a,
    .${ 'mdc-list-item' } input[type="radio"]:not(:disabled),
    .${ 'mdc-list-item' } input[type="checkbox"]:not(:disabled),
    .${ google3.deprecatedClassNameMap['mdc-list-item'] } button:not(:disabled),
    .${ google3.deprecatedClassNameMap['mdc-list-item'] } a,
    .${ google3.deprecatedClassNameMap['mdc-list-item'] } input[type="radio"]:not(:disabled),
    .${ google3.deprecatedClassNameMap['mdc-list-item'] } input[type="checkbox"]:not(:disabled)
  `,
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};