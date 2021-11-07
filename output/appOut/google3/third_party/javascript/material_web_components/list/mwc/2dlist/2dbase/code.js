'use strict';
const $m2dlist = require('../code.js');
const google3 = require('google3');
var ListBase = class extends google3.BaseElement {
    constructor() {
        super();
        this.mdcAdapter = null;
        this.mdcFoundationClass = google3.MDCListFoundation;
        this.wrapFocus = this.multi = this.activatable = !1;
        this.innerAriaLabel = this.innerRole = this.itemRoles = null;
        this.rootTabbable = !1;
        this.previousTabindex = null;
        this.noninteractive = !1;
        this.itemsReadyResolver = () => {
        };
        this.itemsReady = Promise.resolve([]);
        this.items_ = [];
        const debouncedFunction = $m2dlist.$n2dbase_debounceLayout(this.layout.bind(this));
        this.debouncedLayout = (updateItems = !0) => {
            $m2dlist.$n2dbase_clearAndCreateItemsReadyPromise.call(this);
            debouncedFunction(updateItems);
        };
    }
    async getUpdateComplete() {
        const result = await super.getUpdateComplete();
        await this.itemsReady;
        return result;
    }
    get items() {
        return this.items_;
    }
    get selected() {
        const index = this.index;
        if (!$m2dlist.$n2dfoundation_isIndexSet(index))
            return -1 === index ? null : this.items[index];
        const selected = [];
        for (const entry of index)
            selected.push(this.items[entry]);
        return selected;
    }
    get index() {
        return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
    }
    render() {
        var JSCompiler__a;
        const nodes = null !== (JSCompiler__a = this.assignedElements) && void 0 !== JSCompiler__a ? JSCompiler__a : [];
        return google3.html`
      <!-- @ts-ignore -->
      <ul
          tabindex=${ this.rootTabbable ? '0' : '-1' }
          role="${ google3.ifDefined(null === this.innerRole ? void 0 : this.innerRole) }"
          aria-label="${ google3.ifDefined(null === this.innerAriaLabel ? void 0 : this.innerAriaLabel) }"
          class="mdc-deprecated-list"
          @keydown=${ this.onKeydown }
          @focusin=${ this.onFocusIn }
          @focusout=${ this.onFocusOut }
          @request-selected=${ this.onRequestSelected }
          @list-item-rendered=${ this.onListItemConnected }>
        <slot></slot>
        ${ void 0 !== this.emptyMessage && 0 === nodes.length ? google3.html`
        <mwc-list-item noninteractive>${ this.emptyMessage }</mwc-list-item>
      ` : null }
      </ul>
    `;
    }
    firstUpdated() {
        super.firstUpdated();
        this.items.length || (JSCompiler_StaticMethods_setMulti(this.mdcFoundation, this.multi), this.layout());
    }
    onFocusIn(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = JSCompiler_StaticMethods_getIndexOfTarget(this, evt);
            0 <= index && this.mdcFoundation.adapter.setTabIndexForElementIndex(index, 0);
        }
    }
    onFocusOut(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = JSCompiler_StaticMethods_getIndexOfTarget(this, evt);
            JSCompiler_StaticMethods_handleFocusOut(this.mdcFoundation, index);
        }
    }
    onKeydown(evt) {
        if (this.mdcFoundation && this.mdcRoot) {
            const index = JSCompiler_StaticMethods_getIndexOfTarget(this, evt);
            this.mdcFoundation.handleKeydown(evt, evt.target.hasAttribute('mwc-list-item'), index);
        }
    }
    onRequestSelected(evt) {
        if (this.mdcFoundation) {
            let index = JSCompiler_StaticMethods_getIndexOfTarget(this, evt);
            if (-1 === index && (this.layout(), index = JSCompiler_StaticMethods_getIndexOfTarget(this, evt), -1 === index))
                return;
            if (!this.items[index].disabled) {
                var JSCompiler_StaticMethods_handleSingleSelection$self = this.mdcFoundation, index$jscomp$0 = index;
                index$jscomp$0 !== google3.numbers.UNSET_INDEX && (JSCompiler_StaticMethods_setSelectedIndexOnAction_(JSCompiler_StaticMethods_handleSingleSelection$self, index$jscomp$0, 'interaction' === evt.detail.source, evt.detail.selected), JSCompiler_StaticMethods_setTabindexAtIndex_(JSCompiler_StaticMethods_handleSingleSelection$self, index$jscomp$0), JSCompiler_StaticMethods_handleSingleSelection$self.focusedItemIndex_ = index$jscomp$0);
                evt.stopPropagation();
            }
        }
    }
    createAdapter() {
        return this.mdcAdapter = {
            getListItemCount: () => this.mdcRoot ? this.items.length : 0,
            getFocusedElementIndex: this.getFocusedItemIndex,
            getAttributeForElementIndex: (index, attr) => {
                if (!this.mdcRoot)
                    return '';
                const element = this.items[index];
                return element ? element.getAttribute(attr) : '';
            },
            setAttributeForElementIndex: (index, attr, val) => {
                if (this.mdcRoot) {
                    var element = this.items[index];
                    element && element.setAttribute(attr, val);
                }
            },
            focusItemAtIndex: index => {
                const element = this.items[index];
                element && element.focus();
            },
            setTabIndexForElementIndex: (index, value) => {
                const item = this.items[index];
                item && (item.tabindex = value);
            },
            notifyAction: index => {
                const init = {
                    bubbles: !0,
                    composed: !0
                };
                init.detail = { index };
                const ev = new CustomEvent('action', init);
                this.dispatchEvent(ev);
            },
            notifySelected: (index, diff) => {
                const init = {
                    bubbles: !0,
                    composed: !0
                };
                init.detail = {
                    index,
                    diff
                };
                const ev = new CustomEvent('selected', init);
                this.dispatchEvent(ev);
            },
            isFocusInsideList: () => google3.doesElementContainFocus(this),
            isRootFocused: () => {
                const mdcRoot = this.mdcRoot;
                return mdcRoot.getRootNode().activeElement === mdcRoot;
            },
            setDisabledStateForElementIndex: (index, value) => {
                const item = this.items[index];
                item && (item.disabled = value);
            },
            getDisabledStateForElementIndex: index => {
                const item = this.items[index];
                return item ? item.disabled : !1;
            },
            setSelectedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                item && (item.selected = value);
            },
            getSelectedStateForElementIndex: index => {
                const item = this.items[index];
                return item ? item.selected : !1;
            },
            setActivatedStateForElementIndex: (index, value) => {
                const item = this.items[index];
                item && (item.activated = value);
            }
        };
    }
    select(index) {
        this.mdcFoundation && this.mdcFoundation.setSelectedIndex(index);
    }
    toggle(index, force) {
        this.multi && JSCompiler_StaticMethods_toggleMultiAtIndex(this.mdcFoundation, index, force);
    }
    onListItemConnected(e) {
        this.layout(-1 === this.items.indexOf(e.target));
    }
    layout(updateItems = !0) {
        updateItems && JSCompiler_StaticMethods_updateItems(this);
        const first = this.items[0];
        for (const item of this.items)
            item.tabindex = -1;
        first && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = first) : first.tabindex = 0);
        this.itemsReadyResolver();
    }
    getFocusedItemIndex() {
        if (!this.mdcRoot || !this.items.length)
            return -1;
        const activeElementPath = google3.deepActiveElementPath();
        if (!activeElementPath.length)
            return -1;
        for (let i = activeElementPath.length - 1; 0 <= i; i--) {
            const activeItem = activeElementPath[i];
            if (activeItem.hasAttribute('mwc-list-item'))
                return this.items.indexOf(activeItem);
        }
        return -1;
    }
    focusItemAtIndex(index) {
        for (const item of this.items)
            if (0 === item.tabindex) {
                item.tabindex = -1;
                break;
            }
        this.items[index].tabindex = 0;
        this.items[index].focus();
    }
    focus() {
        const root = this.mdcRoot;
        root && root.focus();
    }
    blur() {
        const root = this.mdcRoot;
        root && root.blur();
    }
};