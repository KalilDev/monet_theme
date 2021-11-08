'use strict';
const dom = require('../../../../../material_components_web/dom/code.js');
const $m2ddialog = require('../code.js');
const base = require('../../../../base/code.js');
const google3 = require('google3');
var DialogBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.stacked = this.hideActions = !1;
        this.heading = '';
        this.escapeKeyAction = this.scrimClickAction = 'close';
        this.open = !1;
        this.defaultAction = 'close';
        this.actionAttribute = 'dialogAction';
        this.initialFocusAttribute = 'dialogInitialFocus';
        this.initialSupressDefaultPressSelector = '';
        this.mdcFoundationClass = google3.MDCDialogFoundation;
        this.boundHandleDocumentKeydown = this.boundHandleKeydown = this.boundHandleClick = null;
    }
    set suppressDefaultPressSelector(selector) {
        this.mdcFoundation ? this.mdcFoundation.suppressDefaultPressSelector = selector : this.initialSupressDefaultPressSelector = selector;
    }
    get suppressDefaultPressSelector() {
        return this.mdcFoundation ? this.mdcFoundation.suppressDefaultPressSelector : this.initialSupressDefaultPressSelector;
    }
    get primaryButton() {
        let assignedNodes = this.primarySlot.assignedNodes();
        assignedNodes = assignedNodes.filter(node => node instanceof HTMLElement);
        const button = assignedNodes[0];
        return button ? button : null;
    }
    getInitialFocusEl() {
        const lightDomQs = this.querySelector(`[${ this.initialFocusAttribute }]`);
        if (lightDomQs)
            return lightDomQs;
        const primaryNodes = this.primarySlot.assignedNodes({ flatten: !0 }), primaryFocusElement = JSCompiler_StaticMethods_searchNodeTreesForAttribute(primaryNodes, this.initialFocusAttribute);
        if (primaryFocusElement)
            return primaryFocusElement;
        const secondaryNodes = this.secondarySlot.assignedNodes({ flatten: !0 }), secondaryFocusElement = JSCompiler_StaticMethods_searchNodeTreesForAttribute(secondaryNodes, this.initialFocusAttribute);
        if (secondaryFocusElement)
            return secondaryFocusElement;
        const contentNodes = this.contentSlot.assignedNodes({ flatten: !0 });
        return JSCompiler_StaticMethods_searchNodeTreesForAttribute(contentNodes, this.initialFocusAttribute);
    }
    createAdapter() {
        return Object.assign(Object.assign({}, base.utils_addHasRemoveClass(this.mdcRoot)), {
            addBodyClass: () => document.body.style.overflow = 'hidden',
            removeBodyClass: () => document.body.style.overflow = '',
            areButtonsStacked: () => this.stacked,
            clickDefaultButton: () => {
                const primary = this.primaryButton;
                primary && primary.click();
            },
            eventTargetMatches: (target, selector) => target ? dom.ponyfill_matches(target, selector) : !1,
            getActionFromEvent: e => {
                if (!e.target)
                    return '';
                a: {
                    var element = e.target, selector = `[${ this.actionAttribute }]`;
                    if (element.closest)
                        var JSCompiler_inline_result = element.closest(selector);
                    else {
                        for (var el = element; el;) {
                            if (dom.ponyfill_matches(el, selector)) {
                                JSCompiler_inline_result = el;
                                break a;
                            }
                            el = el.parentElement;
                        }
                        JSCompiler_inline_result = null;
                    }
                }
                const element$jscomp$0 = JSCompiler_inline_result;
                return element$jscomp$0 && element$jscomp$0.getAttribute(this.actionAttribute);
            },
            getInitialFocusEl: () => this.getInitialFocusEl(),
            isContentScrollable: () => {
                const el = this.contentElement;
                return el ? el.scrollHeight > el.offsetHeight : !1;
            },
            notifyClosed: action => JSCompiler_StaticMethods_emitNotification(this, 'closed', action),
            notifyClosing: action => {
                this.closingDueToDisconnect || (this.open = !1);
                JSCompiler_StaticMethods_emitNotification(this, 'closing', action);
            },
            notifyOpened: () => JSCompiler_StaticMethods_emitNotification(this, 'opened'),
            notifyOpening: () => {
                this.open = !0;
                JSCompiler_StaticMethods_emitNotification(this, 'opening');
            },
            reverseButtons: () => {
            },
            releaseFocus: () => {
                $m2ddialog.$n2dbase_blockingElements.remove(this);
            },
            trapFocus: el => {
                this.isConnected && ($m2ddialog.$n2dbase_blockingElements.push(this), el && el.focus());
            },
            registerContentEventHandler: (evtType, handler) => {
                this.contentElement.addEventListener(evtType, handler);
            },
            deregisterContentEventHandler: (evtType, handler) => {
                this.contentElement.removeEventListener(evtType, handler);
            },
            isScrollableContentAtTop: () => {
                const el = this.contentElement;
                return el ? 0 === el.scrollTop : !1;
            },
            isScrollableContentAtBottom: () => {
                const el = this.contentElement;
                return el ? Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight : !1;
            },
            registerWindowEventHandler: (evtType, handler) => {
                window.addEventListener(evtType, handler, dom.events_applyPassive());
            },
            deregisterWindowEventHandler: (evtType, handler) => {
                window.removeEventListener(evtType, handler, dom.events_applyPassive());
            }
        });
    }
    render() {
        const classes = { [google3.cssClasses.STACKED]: this.stacked };
        let heading = google3.html``;
        this.heading && (heading = google3.html`
      <h2 id="title" class="mdc-dialog__title">${ this.heading }</h2>`);
        const actionsClasses = { 'mdc-dialog__actions': !this.hideActions };
        return google3.html`
    <div class="mdc-dialog ${ google3.classMap(classes) }"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${ heading }
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${ google3.classMap(actionsClasses) }">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
    }
    firstUpdated() {
        super.firstUpdated();
        this.mdcFoundation.autoStackButtons = !0;
        this.suppressDefaultPressSelector = this.initialSupressDefaultPressSelector ? this.initialSupressDefaultPressSelector : [
            this.suppressDefaultPressSelector,
            'mwc-textarea, mwc-menu mwc-list-item, mwc-select mwc-list-item'
        ].join(', ');
        this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation);
        this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation);
        this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
    }
    connectedCallback() {
        super.connectedCallback();
        this.open && this.mdcFoundation && !this.mdcFoundation.isOpen() && (JSCompiler_StaticMethods_setEventListeners(this), this.mdcFoundation.open());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.open && this.mdcFoundation && (JSCompiler_StaticMethods_removeEventListeners(this), this.closingDueToDisconnect = !0, this.mdcFoundation.close(this.currentAction || this.defaultAction), this.closingDueToDisconnect = !1, this.currentAction = void 0, $m2ddialog.$n2dbase_blockingElements.remove(this));
    }
    focus() {
        const initialFocusEl = this.getInitialFocusEl();
        initialFocusEl && initialFocusEl.focus();
    }
    blur() {
        if (this.shadowRoot) {
            var activeEl = this.shadowRoot.activeElement;
            if (activeEl)
                activeEl instanceof HTMLElement && activeEl.blur();
            else {
                const root = this.getRootNode(), activeEl = root instanceof Document ? root.activeElement : null;
                activeEl instanceof HTMLElement && activeEl.blur();
            }
        }
    }
    close() {
        this.open = !1;
    }
    show() {
        this.open = !0;
    }
};