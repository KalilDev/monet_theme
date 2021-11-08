'use strict';
const google3 = require('google3');
var MenuBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCMenuFoundation;
        this.anchor = this.listElement_ = null;
        this.wrapFocus = this.quick = this.open = !1;
        this.innerRole = 'menu';
        this.innerAriaLabel = null;
        this.corner = 'TOP_START';
        this.y = this.x = null;
        this.fullwidth = this.forceGroupSelection = this.fixed = this.activatable = this.multi = this.absolute = !1;
        this.menuCorner = 'START';
        this.stayOpenOnBodyClick = !1;
        this.defaultFocus = 'LIST_ROOT';
        this._listUpdateComplete = null;
    }
    get listElement() {
        this.listElement_ || (this.listElement_ = this.renderRoot.querySelector('mwc-list'));
        return this.listElement_;
    }
    get items() {
        const listElement = this.listElement;
        return listElement ? listElement.items : [];
    }
    get index() {
        const listElement = this.listElement;
        return listElement ? listElement.index : -1;
    }
    get selected() {
        const listElement = this.listElement;
        return listElement ? listElement.selected : null;
    }
    render() {
        return google3.html`
      <mwc-menu-surface
          ?hidden=${ !this.open }
          .anchor=${ this.anchor }
          .open=${ this.open }
          .quick=${ this.quick }
          .corner=${ this.corner }
          .x=${ this.x }
          .y=${ this.y }
          .absolute=${ this.absolute }
          .fixed=${ this.fixed }
          .fullwidth=${ this.fullwidth }
          .menuCorner=${ this.menuCorner }
          ?stayOpenOnBodyClick=${ this.stayOpenOnBodyClick }
          class="mdc-menu mdc-menu-surface"
          @closed=${ this.onClosed }
          @opened=${ this.onOpened }
          @keydown=${ this.onKeydown }>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${ this.innerAriaLabel }
          .innerRole=${ this.innerRole }
          .multi=${ this.multi }
          class="mdc-deprecated-list"
          .itemRoles=${ 'menu' === this.innerRole ? 'menuitem' : 'option' }
          .wrapFocus=${ this.wrapFocus }
          .activatable=${ this.activatable }
          @action=${ this.onAction }>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
    }
    createAdapter() {
        return {
            addClassToElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (listElement) {
                    var element = listElement.items[index];
                    element && ('mdc-menu-item--selected' === className ? this.forceGroupSelection && !element.selected && listElement.toggle(index, !0) : element.classList.add(className));
                }
            },
            removeClassFromElementAtIndex: (index, className) => {
                const listElement = this.listElement;
                if (listElement) {
                    var element = listElement.items[index];
                    element && ('mdc-menu-item--selected' === className ? element.selected && listElement.toggle(index, !1) : element.classList.remove(className));
                }
            },
            addAttributeToElementAtIndex: (index, attr, value) => {
                const listElement = this.listElement;
                if (listElement) {
                    var element = listElement.items[index];
                    element && element.setAttribute(attr, value);
                }
            },
            removeAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (listElement) {
                    var element = listElement.items[index];
                    element && element.removeAttribute(attr);
                }
            },
            getAttributeFromElementAtIndex: (index, attr) => {
                const listElement = this.listElement;
                if (!listElement)
                    return null;
                const element = listElement.items[index];
                return element ? element.getAttribute(attr) : null;
            },
            elementContainsClass: (element, className) => element.classList.contains(className),
            closeSurface: () => {
                this.open = !1;
            },
            getElementIndex: element => {
                const listElement = this.listElement;
                return listElement ? listElement.items.indexOf(element) : -1;
            },
            notifySelected: () => {
            },
            getMenuItemCount: () => {
                const listElement = this.listElement;
                return listElement ? listElement.items.length : 0;
            },
            focusItemAtIndex: index => {
                const listElement = this.listElement;
                if (listElement) {
                    var element = listElement.items[index];
                    element && element.focus();
                }
            },
            focusListRoot: () => {
                this.listElement && this.listElement.focus();
            },
            getSelectedSiblingOfItemAtIndex: index => {
                const listElement = this.listElement;
                if (!listElement)
                    return -1;
                const elementAtIndex = listElement.items[index];
                if (!elementAtIndex || !elementAtIndex.group)
                    return -1;
                for (let i = 0; i < listElement.items.length; i++) {
                    if (i === index)
                        continue;
                    const current = listElement.items[i];
                    if (current.selected && current.group === elementAtIndex.group)
                        return i;
                }
                return -1;
            },
            isSelectableItemAtIndex: index => {
                const listElement = this.listElement;
                if (!listElement)
                    return !1;
                const elementAtIndex = listElement.items[index];
                return elementAtIndex ? elementAtIndex.hasAttribute('group') : !1;
            }
        };
    }
    onKeydown(evt) {
        this.mdcFoundation && this.mdcFoundation.handleKeydown(evt);
    }
    onAction(evt) {
        const listElement = this.listElement;
        if (this.mdcFoundation && listElement) {
            const el = listElement.items[evt.detail.index];
            el && JSCompiler_StaticMethods_handleItemAction(this.mdcFoundation, el);
        }
    }
    onOpened() {
        this.open = !0;
        if (this.mdcFoundation) {
            var JSCompiler_StaticMethods_handleMenuSurfaceOpened$self = this.mdcFoundation;
            switch (JSCompiler_StaticMethods_handleMenuSurfaceOpened$self.defaultFocusState) {
            case 2:
                JSCompiler_StaticMethods_handleMenuSurfaceOpened$self.adapter.focusItemAtIndex(0);
                break;
            case 3:
                JSCompiler_StaticMethods_handleMenuSurfaceOpened$self.adapter.focusItemAtIndex(JSCompiler_StaticMethods_handleMenuSurfaceOpened$self.adapter.getMenuItemCount() - 1);
                break;
            case 0:
                break;
            default:
                JSCompiler_StaticMethods_handleMenuSurfaceOpened$self.adapter.focusListRoot();
            }
        }
    }
    onClosed() {
        this.open = !1;
    }
    async getUpdateComplete() {
        await this._listUpdateComplete;
        return await super.getUpdateComplete();
    }
    async firstUpdated() {
        super.firstUpdated();
        const listElement = this.listElement;
        listElement && (this._listUpdateComplete = listElement.updateComplete, await this._listUpdateComplete);
    }
    select(index) {
        const listElement = this.listElement;
        listElement && listElement.select(index);
    }
    close() {
        this.open = !1;
    }
    show() {
        this.open = !0;
    }
    getFocusedItemIndex() {
        const listElement = this.listElement;
        return listElement ? listElement.getFocusedItemIndex() : -1;
    }
    focusItemAtIndex(index) {
        const listElement = this.listElement;
        listElement && listElement.focusItemAtIndex(index);
    }
    layout(updateItems = !0) {
        const listElement = this.listElement;
        listElement && listElement.layout(updateItems);
    }
};