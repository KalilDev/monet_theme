'use strict';
const dom = require('../../../../../material_components_web/dom/code.js');
const base = require('../../../../base/code.js');
const list = require('../../../../../material_components_web/list/code.js');
const $m2dselect = require('../code.js');
const google3 = require('google3');
var SelectBase = class extends google3.FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCSelectFoundation;
        this.outlined = this.disabled = !1;
        this.label = '';
        this.outlineOpen = !1;
        this.outlineWidth = 0;
        this.icon = this.selectedText = this.name = this.value = '';
        this.menuOpen = !1;
        this.helper = '';
        this.validateOnInitialRender = !1;
        this.validationMessage = '';
        this.naturalMenuWidth = this.required = !1;
        this.isUiValid = !0;
        this.fixedMenuPosition = !1;
        this.typeaheadState = {
            bufferClearTimeout: 0,
            currentFirstChar: '',
            sortedIndexCursor: 0,
            typeaheadBuffer: ''
        };
        this.sortedIndexByFirstChar = new Map();
        this.menuElement_ = null;
        this.listeners = [];
        this.onBodyClickBound = () => {
        };
        this._menuUpdateComplete = null;
        this.valueSetDirectly = !1;
        this.validityTransform = null;
        this._validity = $m2dselect.$n2dbase_createValidityObj();
    }
    get items() {
        this.menuElement_ || (this.menuElement_ = this.menuElement);
        return this.menuElement_ ? this.menuElement_.items : [];
    }
    get selected() {
        const menuElement = this.menuElement;
        return menuElement ? menuElement.selected : null;
    }
    get index() {
        const menuElement = this.menuElement;
        return menuElement ? menuElement.index : -1;
    }
    get shouldRenderHelperText() {
        return !!this.helper || !!this.validationMessage;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    render() {
        const menuClasses = { 'mdc-select__menu--invalid': !this.isUiValid }, labelledby = this.label ? 'label' : void 0, describedby = this.shouldRenderHelperText ? 'helper-text' : void 0;
        return google3.html`
      <div
          class="mdc-select ${ google3.classMap({
            'mdc-select--disabled': this.disabled,
            'mdc-select--no-label': !this.label,
            'mdc-select--filled': !this.outlined,
            'mdc-select--outlined': this.outlined,
            'mdc-select--with-leading-icon': !!this.icon,
            'mdc-select--required': this.required,
            'mdc-select--invalid': !this.isUiValid
        }) }">
        <input
            class="formElement"
            name="${ this.name }"
            .value="${ this.value }"
            hidden
            ?disabled="${ this.disabled }"
            ?required=${ this.required }>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${ this.menuOpen }
            aria-invalid=${ !this.isUiValid }
            aria-haspopup="listbox"
            aria-labelledby=${ google3.ifDefined(labelledby) }
            aria-required=${ this.required }
            aria-describedby=${ google3.ifDefined(describedby) }
            @click=${ this.onClick }
            @focus=${ this.onFocus }
            @blur=${ this.onBlur }
            @keydown=${ this.onKeydown }>
          ${ this.renderRipple() }
          ${ this.outlined ? this.renderOutline() : this.renderLabel() }
          ${ this.renderLeadingIcon() }
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${ this.selectedText }</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${ this.renderLineRipple() }
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${ google3.classMap(menuClasses) }"
            activatable
            .fullwidth=${ this.fixedMenuPosition ? !1 : !this.naturalMenuWidth }
            .open=${ this.menuOpen }
            .anchor=${ this.anchorElement }
            .fixed=${ this.fixedMenuPosition }
            @selected=${ this.onSelected }
            @opened=${ this.onOpened }
            @closed=${ this.onClosed }
            @items-updated=${ this.onItemsUpdated }
            @keydown=${ this.handleTypeahead }>
          <slot></slot>
        </mwc-menu>
      </div>
      ${ this.renderHelperText() }`;
    }
    renderRipple() {
        return this.outlined ? google3.nothing : google3.html`
      <span class="mdc-select__ripple"></span>
    `;
    }
    renderOutline() {
        return this.outlined ? google3.html`
      <mwc-notched-outline
          .width=${ this.outlineWidth }
          .open=${ this.outlineOpen }
          class="mdc-notched-outline">
        ${ this.renderLabel() }
      </mwc-notched-outline>` : google3.nothing;
    }
    renderLabel() {
        return this.label ? google3.html`
      <span
          .floatingLabelFoundation=${ google3.floatingLabel(this.label) }
          id="label">${ this.label }</span>
    ` : google3.nothing;
    }
    renderLeadingIcon() {
        return this.icon ? google3.html`<mwc-icon class="mdc-select__icon"><div>${ this.icon }</div></mwc-icon>` : google3.nothing;
    }
    renderLineRipple() {
        return this.outlined ? google3.nothing : google3.html`
      <span .lineRippleFoundation=${ google3.lineRipple() }></span>
    `;
    }
    renderHelperText() {
        if (!this.shouldRenderHelperText)
            return google3.nothing;
        const showValidationMessage = this.validationMessage && !this.isUiValid;
        return google3.html`
        <p
          class="mdc-select-helper-text ${ google3.classMap({ 'mdc-select-helper-text--validation-msg': showValidationMessage }) }"
          id="helper-text">${ showValidationMessage ? this.validationMessage : this.helper }</p>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, base.utils_addHasRemoveClass(this.mdcRoot)), {
            activateBottomLine: () => {
                this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
            },
            deactivateBottomLine: () => {
                this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
            },
            hasLabel: () => !!this.label,
            floatLabel: shouldFloat => {
                this.labelElement && JSCompiler_StaticMethods_float(this.labelElement.floatingLabelFoundation, shouldFloat);
            },
            getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0,
            setLabelRequired: isRequired => {
                this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(isRequired);
            },
            hasOutline: () => this.outlined,
            notchOutline: labelWidth => {
                this.outlineElement && !this.outlineOpen && (this.outlineWidth = labelWidth, this.outlineOpen = !0);
            },
            closeOutline: () => {
                this.outlineElement && (this.outlineOpen = !1);
            },
            setRippleCenter: normalizedX => {
                this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
            },
            notifyChange: async value => {
                if (this.valueSetDirectly || value !== this.value) {
                    this.valueSetDirectly = !1;
                    this.value = value;
                    await this.updateComplete;
                    var ev = new Event('change', { bubbles: !0 });
                    this.dispatchEvent(ev);
                }
            },
            setSelectedText: value => this.selectedText = value,
            isSelectAnchorFocused: () => {
                const selectAnchorElement = this.anchorElement;
                return selectAnchorElement ? selectAnchorElement.getRootNode().activeElement === selectAnchorElement : !1;
            },
            getSelectAnchorAttr: attr => {
                const selectAnchorElement = this.anchorElement;
                return selectAnchorElement ? selectAnchorElement.getAttribute(attr) : null;
            },
            setSelectAnchorAttr: (attr, value) => {
                const selectAnchorElement = this.anchorElement;
                selectAnchorElement && selectAnchorElement.setAttribute(attr, value);
            },
            removeSelectAnchorAttr: attr => {
                const selectAnchorElement = this.anchorElement;
                selectAnchorElement && selectAnchorElement.removeAttribute(attr);
            },
            openMenu: () => {
                this.menuOpen = !0;
            },
            closeMenu: () => {
                this.menuOpen = !1;
            },
            addMenuClass: () => {
            },
            removeMenuClass: () => {
            },
            getAnchorElement: () => this.anchorElement,
            setMenuAnchorElement: () => {
            },
            setMenuAnchorCorner: () => {
                const menuElement = this.menuElement;
                menuElement && (menuElement.corner = 'BOTTOM_START');
            },
            setMenuWrapFocus: wrapFocus => {
                const menuElement = this.menuElement;
                menuElement && (menuElement.wrapFocus = wrapFocus);
            },
            focusMenuItemAtIndex: index => {
                const menuElement = this.menuElement;
                if (menuElement) {
                    var element = menuElement.items[index];
                    element && element.focus();
                }
            },
            getMenuItemCount: () => {
                const menuElement = this.menuElement;
                return menuElement ? menuElement.items.length : 0;
            },
            getMenuItemValues: () => {
                const menuElement = this.menuElement;
                return menuElement ? menuElement.items.map(item => item.value) : [];
            },
            getMenuItemTextAtIndex: index => {
                const menuElement = this.menuElement;
                if (!menuElement)
                    return '';
                const element = menuElement.items[index];
                return element ? element.text : '';
            },
            getSelectedIndex: () => this.index,
            setSelectedIndex: () => {
            },
            isTypeaheadInProgress: () => 0 < this.typeaheadState.typeaheadBuffer.length,
            typeaheadMatchItem: (nextChar, startingIndex) => {
                if (!this.menuElement)
                    return -1;
                const opts = {
                        focusItemAtIndex: index => {
                            this.menuElement.focusItemAtIndex(index);
                        },
                        focusedItemIndex: startingIndex ? startingIndex : this.menuElement.getFocusedItemIndex(),
                        nextChar,
                        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                        skipFocus: !1,
                        isItemAtIndexDisabled: index => this.items[index].disabled
                    }, index$jscomp$0 = list.typeahead_matchItem(opts, this.typeaheadState);
                -1 !== index$jscomp$0 && this.select(index$jscomp$0);
                return index$jscomp$0;
            }
        });
    }
    checkValidity() {
        const isValid = this._checkValidity(this.value);
        if (!isValid) {
            const invalidEvent = new Event('invalid', {
                bubbles: !1,
                cancelable: !0
            });
            this.dispatchEvent(invalidEvent);
        }
        return isValid;
    }
    reportValidity() {
        const isValid = this.checkValidity();
        return this.isUiValid = isValid;
    }
    _checkValidity(value) {
        let validity = $m2dselect.$n2dbase_createValidityObj(this.formElement.validity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
        }
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    async getUpdateComplete() {
        await this._menuUpdateComplete;
        return await super.getUpdateComplete();
    }
    async firstUpdated() {
        const menuElement = this.menuElement;
        menuElement && (this._menuUpdateComplete = menuElement.updateComplete, await this._menuUpdateComplete);
        super.firstUpdated();
        this.mdcFoundation.isValid = () => !0;
        this.mdcFoundation.setValid = () => {
        };
        this.mdcFoundation.setDisabled(this.disabled);
        this.validateOnInitialRender && this.reportValidity();
        if (!this.selected) {
            !this.items.length && this.slotElement && this.slotElement.assignedNodes({ flatten: !0 }).length && (await new Promise(res => requestAnimationFrame(res)), await this.layout());
            const hasEmptyFirstOption = this.items.length && '' === this.items[0].value;
            if (!this.value && hasEmptyFirstOption) {
                this.select(0);
                return;
            }
            JSCompiler_StaticMethods_selectByValue(this, this.value);
        }
        this.sortedIndexByFirstChar = list.typeahead_initSortedIndex(this.items.length, index => this.items[index].text);
    }
    onItemsUpdated() {
        this.sortedIndexByFirstChar = list.typeahead_initSortedIndex(this.items.length, index => this.items[index].text);
    }
    select(index) {
        const menuElement = this.menuElement;
        menuElement && menuElement.select(index);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listener of this.listeners)
            listener.target.removeEventListener(listener.name, listener.cb);
    }
    focus() {
        const focusEvt = new CustomEvent('focus'), selectAnchorElement = this.anchorElement;
        selectAnchorElement && (selectAnchorElement.dispatchEvent(focusEvt), selectAnchorElement.focus());
    }
    blur() {
        const focusEvt = new CustomEvent('blur'), selectAnchorElement = this.anchorElement;
        selectAnchorElement && (selectAnchorElement.dispatchEvent(focusEvt), selectAnchorElement.blur());
    }
    onFocus() {
        this.mdcFoundation && this.mdcFoundation.handleFocus();
    }
    onBlur() {
        this.mdcFoundation && this.mdcFoundation.handleBlur();
        const menuElement = this.menuElement;
        menuElement && !menuElement.open && this.reportValidity();
    }
    onClick(evt) {
        if (this.mdcFoundation) {
            this.focus();
            const targetClientRect = evt.target.getBoundingClientRect();
            this.mdcFoundation.handleClick(('touches' in evt ? evt.touches[0].clientX : evt.clientX) - targetClientRect.left);
        }
    }
    onKeydown(evt) {
        const arrowUp = 'ArrowUp' === dom.keyboard_normalizeKey(evt), arrowDown = 'ArrowDown' === dom.keyboard_normalizeKey(evt);
        if (arrowDown || arrowUp) {
            const shouldSelectPrevItem = arrowDown && this.index < this.items.length - 1;
            arrowUp && 0 < this.index ? this.select(this.index - 1) : shouldSelectPrevItem && this.select(this.index + 1);
            evt.preventDefault();
            this.mdcFoundation.openMenu();
        } else
            this.mdcFoundation.handleKeydown(evt);
    }
    handleTypeahead(event) {
        if (this.menuElement) {
            var focusedItemIndex = this.menuElement.getFocusedItemIndex(), target = event.target.nodeType === Node.ELEMENT_NODE ? event.target : null;
            list.typeahead_handleKeydown({
                event,
                focusItemAtIndex: index => {
                    this.menuElement.focusItemAtIndex(index);
                },
                focusedItemIndex,
                isTargetListItem: target ? target.hasAttribute('mwc-list-item') : !1,
                sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                isItemAtIndexDisabled: index => this.items[index].disabled
            }, this.typeaheadState);
        }
    }
    async onSelected(event) {
        this.mdcFoundation || await this.updateComplete;
        this.mdcFoundation.setSelectedIndex(event.detail.index, !0);
        const item = this.items[event.detail.index];
        item && (this.value = item.value);
    }
    onOpened() {
        if (this.mdcFoundation) {
            this.menuOpen = !0;
            var JSCompiler_StaticMethods_handleMenuOpened$self = this.mdcFoundation;
            if (0 !== JSCompiler_StaticMethods_handleMenuOpened$self.adapter.getMenuItemValues().length) {
                var selectedIndex = JSCompiler_StaticMethods_handleMenuOpened$self.getSelectedIndex();
                JSCompiler_StaticMethods_handleMenuOpened$self.adapter.focusMenuItemAtIndex(0 <= selectedIndex ? selectedIndex : 0);
            }
        }
    }
    onClosed() {
        if (this.mdcFoundation) {
            this.menuOpen = !1;
            var JSCompiler_StaticMethods_handleMenuClosed$self = this.mdcFoundation;
            JSCompiler_StaticMethods_handleMenuClosed$self.adapter.removeClass(google3.cssClasses.ACTIVATED);
            JSCompiler_StaticMethods_handleMenuClosed$self.isMenuOpen = !1;
            JSCompiler_StaticMethods_handleMenuClosed$self.adapter.isSelectAnchorFocused() || JSCompiler_StaticMethods_handleMenuClosed$self.blur();
        }
    }
    setFormData(formData) {
        this.name && null !== this.selected && formData.append(this.name, this.value);
    }
    async layout(updateItems = !0) {
        this.mdcFoundation && this.mdcFoundation.layout();
        await this.updateComplete;
        const menuElement = this.menuElement;
        menuElement && menuElement.layout(updateItems);
        const labelElement = this.labelElement;
        if (labelElement) {
            var shouldFloat = !!this.label && !!this.value;
            JSCompiler_StaticMethods_float(labelElement.floatingLabelFoundation, shouldFloat);
            if (this.outlined) {
                this.outlineOpen = shouldFloat;
                await this.updateComplete;
                var labelWidth = labelElement.floatingLabelFoundation.getWidth();
                this.outlineOpen && (this.outlineWidth = labelWidth);
            }
        } else
            this.outlineOpen = !1;
    }
    async layoutOptions() {
        this.mdcFoundation && this.mdcFoundation.layoutOptions();
    }
};