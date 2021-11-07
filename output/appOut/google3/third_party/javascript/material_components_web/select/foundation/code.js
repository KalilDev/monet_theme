'use strict';
const dom = require('../../dom/code.js');
const google3 = require('google3');
var MDCSelectFoundation = class extends google3.MDCFoundation {
    constructor(adapter, foundationMap = {}) {
        super(Object.assign(Object.assign({}, google3.MDCSelectFoundation.defaultAdapter), adapter));
        this.isMenuOpen = this.disabled = !1;
        this.customValidity = this.useDefaultValidation = !0;
        this.lastSelectedIndex = google3.numbers.UNSET_INDEX;
        this.clickDebounceTimeout = 0;
        this.recentlyClicked = !1;
        this.leadingIcon = foundationMap.leadingIcon;
        this.helperText = foundationMap.helperText;
    }
    static get cssClasses() {
        return google3.cssClasses;
    }
    static get numbers() {
        return google3.numbers;
    }
    static get strings() {
        return google3.strings;
    }
    static get defaultAdapter() {
        return {
            addClass: () => {
            },
            removeClass: () => {
            },
            hasClass: () => !1,
            activateBottomLine: () => {
            },
            deactivateBottomLine: () => {
            },
            getSelectedIndex: () => -1,
            setSelectedIndex: () => {
            },
            hasLabel: () => !1,
            floatLabel: () => {
            },
            getLabelWidth: () => 0,
            setLabelRequired: () => {
            },
            hasOutline: () => !1,
            notchOutline: () => {
            },
            closeOutline: () => {
            },
            setRippleCenter: () => {
            },
            notifyChange: () => {
            },
            setSelectedText: () => {
            },
            isSelectAnchorFocused: () => !1,
            getSelectAnchorAttr: () => '',
            setSelectAnchorAttr: () => {
            },
            removeSelectAnchorAttr: () => {
            },
            addMenuClass: () => {
            },
            removeMenuClass: () => {
            },
            openMenu: () => {
            },
            closeMenu: () => {
            },
            getAnchorElement: () => null,
            setMenuAnchorElement: () => {
            },
            setMenuAnchorCorner: () => {
            },
            setMenuWrapFocus: () => {
            },
            focusMenuItemAtIndex: () => {
            },
            getMenuItemCount: () => 0,
            getMenuItemValues: () => [],
            getMenuItemTextAtIndex: () => '',
            isTypeaheadInProgress: () => !1,
            typeaheadMatchItem: () => -1
        };
    }
    getSelectedIndex() {
        return this.adapter.getSelectedIndex();
    }
    setSelectedIndex(index, closeMenu = !1, skipNotify = !1) {
        index >= this.adapter.getMenuItemCount() || (index === google3.numbers.UNSET_INDEX ? this.adapter.setSelectedText('') : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim()), this.adapter.setSelectedIndex(index), closeMenu && this.adapter.closeMenu(), skipNotify || this.lastSelectedIndex === index || JSCompiler_StaticMethods_handleChange(this), this.lastSelectedIndex = index);
    }
    setValue(value) {
        const index = this.adapter.getMenuItemValues().indexOf(value);
        this.setSelectedIndex(index, !1, !1);
    }
    getValue() {
        const index = this.adapter.getSelectedIndex(), menuItemValues = this.adapter.getMenuItemValues();
        return index !== google3.numbers.UNSET_INDEX ? menuItemValues[index] : '';
    }
    setDisabled(isDisabled) {
        (this.disabled = isDisabled) ? (this.adapter.addClass(google3.cssClasses.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(google3.cssClasses.DISABLED);
        this.leadingIcon && this.leadingIcon.setDisabled(this.disabled);
        this.disabled ? this.adapter.removeSelectAnchorAttr('tabindex') : this.adapter.setSelectAnchorAttr('tabindex', '0');
        this.adapter.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
    }
    openMenu() {
        this.adapter.addClass(google3.cssClasses.ACTIVATED);
        this.adapter.openMenu();
        this.isMenuOpen = !0;
        this.adapter.setSelectAnchorAttr('aria-expanded', 'true');
    }
    layout() {
        if (this.adapter.hasLabel()) {
            const optionHasValue = 0 < this.getValue().length, isFocused = this.adapter.hasClass(google3.cssClasses.FOCUSED), shouldFloatAndNotch = optionHasValue || isFocused, isRequired = this.adapter.hasClass(google3.cssClasses.REQUIRED);
            this.notchOutline(shouldFloatAndNotch);
            this.adapter.floatLabel(shouldFloatAndNotch);
            this.adapter.setLabelRequired(isRequired);
        }
    }
    layoutOptions() {
        const selectedIndex = this.adapter.getMenuItemValues().indexOf(this.getValue());
        this.setSelectedIndex(selectedIndex, !1, !0);
    }
    handleFocus() {
        this.adapter.addClass(google3.cssClasses.FOCUSED);
        this.layout();
        this.adapter.activateBottomLine();
    }
    handleBlur() {
        this.isMenuOpen || this.blur();
    }
    handleClick(normalizedX) {
        this.disabled || this.recentlyClicked || (JSCompiler_StaticMethods_setClickDebounceTimeout(this), this.isMenuOpen ? this.adapter.closeMenu() : (this.adapter.setRippleCenter(normalizedX), this.openMenu()));
    }
    handleKeydown(event) {
        if (!this.isMenuOpen && this.adapter.hasClass(google3.cssClasses.FOCUSED)) {
            var isEnter = 'Enter' === dom.keyboard_normalizeKey(event), isSpace = 'Spacebar' === dom.keyboard_normalizeKey(event), arrowUp = 'ArrowUp' === dom.keyboard_normalizeKey(event), arrowDown = 'ArrowDown' === dom.keyboard_normalizeKey(event);
            if (!event.ctrlKey && !event.metaKey && (!isSpace && event.key && 1 === event.key.length || isSpace && this.adapter.isTypeaheadInProgress())) {
                const typeaheadNextIndex = this.adapter.typeaheadMatchItem(isSpace ? ' ' : event.key, this.getSelectedIndex());
                0 <= typeaheadNextIndex && this.setSelectedIndex(typeaheadNextIndex);
                event.preventDefault();
            } else if (isEnter || isSpace || arrowUp || arrowDown)
                arrowUp && 0 < this.getSelectedIndex() ? this.setSelectedIndex(this.getSelectedIndex() - 1) : arrowDown && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), event.preventDefault();
        }
    }
    notchOutline(openNotch) {
        if (this.adapter.hasOutline()) {
            var isFocused = this.adapter.hasClass(google3.cssClasses.FOCUSED);
            openNotch ? this.adapter.notchOutline(this.adapter.getLabelWidth() * google3.numbers.LABEL_SCALE) : isFocused || this.adapter.closeOutline();
        }
    }
    setValid(isValid) {
        this.useDefaultValidation || (this.customValidity = isValid);
        this.adapter.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
        isValid ? this.adapter.removeClass(google3.cssClasses.INVALID) : this.adapter.addClass(google3.cssClasses.INVALID);
        JSCompiler_StaticMethods_syncHelperTextValidity(this, isValid);
    }
    isValid() {
        return this.useDefaultValidation && this.adapter.hasClass(google3.cssClasses.REQUIRED) && !this.adapter.hasClass(google3.cssClasses.DISABLED) ? this.getSelectedIndex() !== google3.numbers.UNSET_INDEX && (0 !== this.getSelectedIndex() || !!this.getValue()) : this.customValidity;
    }
    setRequired(isRequired) {
        isRequired ? this.adapter.addClass(google3.cssClasses.REQUIRED) : this.adapter.removeClass(google3.cssClasses.REQUIRED);
        this.adapter.setSelectAnchorAttr('aria-required', isRequired.toString());
        this.adapter.setLabelRequired(isRequired);
    }
    init() {
        this.adapter.getAnchorElement() && this.adapter.setMenuAnchorCorner(9);
        this.adapter.setMenuWrapFocus(!1);
        this.setDisabled(this.adapter.hasClass(google3.cssClasses.DISABLED));
        JSCompiler_StaticMethods_syncHelperTextValidity(this, !this.adapter.hasClass(google3.cssClasses.INVALID));
        this.layout();
        this.layoutOptions();
    }
    blur() {
        this.adapter.removeClass(google3.cssClasses.FOCUSED);
        this.layout();
        this.adapter.deactivateBottomLine();
        this.adapter.hasClass(google3.cssClasses.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
    }
};