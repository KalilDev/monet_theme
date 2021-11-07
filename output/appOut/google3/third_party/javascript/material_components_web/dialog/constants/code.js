'use strict';
var cssClasses = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked',
    FULLSCREEN: 'mdc-dialog--fullscreen',
    SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
    SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
    SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
    SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
    SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
    SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden'
};
var strings = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DESTROY_ACTION: 'destroy',
    INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: 'textarea, .mdc-menu .mdc-list-item, .mdc-menu .mdc-deprecated-list-item',
    SURFACE_SELECTOR: '.mdc-dialog__surface'
};
var numbers = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150
};