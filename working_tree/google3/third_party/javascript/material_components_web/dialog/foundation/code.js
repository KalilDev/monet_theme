'use strict';
const google3 = require('google3');
var MDCDialogFoundation = class extends google3.MDCFoundation {
    constructor(adapter) {
        super(Object.assign(Object.assign({}, google3.MDCDialogFoundation.defaultAdapter), adapter));
        this.isFullscreen = this.dialogOpen = !1;
        this.animationTimer = this.animationFrame = 0;
        this.scrimClickAction = this.escapeKeyAction = google3.strings.CLOSE_ACTION;
        this.autoStackButtons = !0;
        this.areButtonsStacked = !1;
        this.suppressDefaultPressSelector = google3.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR;
        this.animFrame = new google3.AnimationFrame();
        this.contentScrollHandler = () => {
            JSCompiler_StaticMethods_handleScrollEvent(this);
        };
        this.windowResizeHandler = () => {
            this.layout();
        };
        this.windowOrientationChangeHandler = () => {
            this.layout();
        };
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
            addBodyClass: () => {
            },
            addClass: () => {
            },
            areButtonsStacked: () => !1,
            clickDefaultButton: () => {
            },
            eventTargetMatches: () => !1,
            getActionFromEvent: () => '',
            getInitialFocusEl: () => null,
            hasClass: () => !1,
            isContentScrollable: () => !1,
            notifyClosed: () => {
            },
            notifyClosing: () => {
            },
            notifyOpened: () => {
            },
            notifyOpening: () => {
            },
            releaseFocus: () => {
            },
            removeBodyClass: () => {
            },
            removeClass: () => {
            },
            reverseButtons: () => {
            },
            trapFocus: () => {
            },
            registerContentEventHandler: () => {
            },
            deregisterContentEventHandler: () => {
            },
            isScrollableContentAtTop: () => !1,
            isScrollableContentAtBottom: () => !1,
            registerWindowEventHandler: () => {
            },
            deregisterWindowEventHandler: () => {
            }
        };
    }
    init() {
        this.adapter.hasClass(google3.cssClasses.STACKED) && (this.autoStackButtons = !1);
        this.isFullscreen = this.adapter.hasClass(google3.cssClasses.FULLSCREEN);
    }
    destroy() {
        this.animationTimer && (clearTimeout(this.animationTimer), JSCompiler_StaticMethods_handleAnimationTimerEnd(this));
        this.isFullscreen && this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        JSCompiler_StaticMethods_cancelAll(this.animFrame);
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
    }
    open(dialogOptions) {
        this.dialogOpen = !0;
        this.adapter.notifyOpening();
        this.adapter.addClass(google3.cssClasses.OPENING);
        this.isFullscreen && this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
        dialogOptions && dialogOptions.isAboveFullscreenDialog && this.adapter.addClass(google3.cssClasses.SCRIM_HIDDEN);
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        JSCompiler_StaticMethods_runNextAnimationFrame(this, () => {
            this.adapter.addClass(google3.cssClasses.OPEN);
            this.adapter.addBodyClass(google3.cssClasses.SCROLL_LOCK);
            this.layout();
            this.animationTimer = setTimeout(() => {
                JSCompiler_StaticMethods_handleAnimationTimerEnd(this);
                this.adapter.trapFocus(this.adapter.getInitialFocusEl());
                this.adapter.notifyOpened();
            }, google3.numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    }
    close(action = '') {
        this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(action), this.adapter.addClass(google3.cssClasses.CLOSING), this.adapter.removeClass(google3.cssClasses.OPEN), this.adapter.removeBodyClass(google3.cssClasses.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler), this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler), this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(() => {
            this.adapter.releaseFocus();
            JSCompiler_StaticMethods_handleAnimationTimerEnd(this);
            this.adapter.notifyClosed(action);
        }, google3.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }
    isOpen() {
        return this.dialogOpen;
    }
    layout() {
        this.animFrame.request('poll_layout_change', () => {
            this.layoutInternal();
        });
    }
    handleClick(evt) {
        if (this.adapter.eventTargetMatches(evt.target, google3.strings.SCRIM_SELECTOR) && '' !== this.scrimClickAction)
            this.close(this.scrimClickAction);
        else {
            const action = this.adapter.getActionFromEvent(evt);
            action && this.close(action);
        }
    }
    handleKeydown(evt) {
        const isEnter = 'Enter' === evt.key || 13 === evt.keyCode;
        if (isEnter && !this.adapter.getActionFromEvent(evt)) {
            var target = evt.composedPath ? evt.composedPath()[0] : evt.target, isDefault = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) : !0;
            isEnter && isDefault && this.adapter.clickDefaultButton();
        }
    }
    handleDocumentKeydown(evt) {
        'Escape' !== evt.key && 27 !== evt.keyCode || '' === this.escapeKeyAction || this.close(this.escapeKeyAction);
    }
    layoutInternal() {
        if (this.autoStackButtons) {
            this.adapter.removeClass(google3.cssClasses.STACKED);
            const areButtonsStacked = this.adapter.areButtonsStacked();
            areButtonsStacked && this.adapter.addClass(google3.cssClasses.STACKED);
            areButtonsStacked !== this.areButtonsStacked && (this.areButtonsStacked = areButtonsStacked);
        }
        this.adapter.removeClass(google3.cssClasses.SCROLLABLE);
        this.adapter.isContentScrollable() && (this.adapter.addClass(google3.cssClasses.SCROLLABLE), this.isFullscreen && (JSCompiler_StaticMethods_toggleScrollDividerHeader(this), JSCompiler_StaticMethods_toggleScrollDividerFooter(this)));
    }
};