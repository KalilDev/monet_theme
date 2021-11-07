'use strict';
const $m2dtextfield = require('../code.js');
const google3 = require('google3');
var TextFieldBase = class extends google3.FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCTextFieldFoundation;
        this.value = '';
        this.type = 'text';
        this.iconTrailing = this.icon = this.label = this.placeholder = '';
        this.required = this.disabled = !1;
        this.maxLength = this.minLength = -1;
        this.outlined = !1;
        this.helper = '';
        this.validateOnInitialRender = !1;
        this.validationMessage = '';
        this.autoValidate = !1;
        this.max = this.min = this.pattern = '';
        this.size = this.step = null;
        this.endAligned = this.charCounter = this.helperPersistent = !1;
        this.name = this.suffix = this.prefix = '';
        this.readOnly = !1;
        this.autocapitalize = '';
        this.outlineOpen = !1;
        this.outlineWidth = 0;
        this.isUiValid = !0;
        this.focused = !1;
        this._validity = $m2dtextfield.$n2dbase_createValidityObj();
        this.validityTransform = null;
    }
    get validity() {
        this._checkValidity(this.value);
        return this._validity;
    }
    get willValidate() {
        return this.formElement.willValidate;
    }
    get selectionStart() {
        return this.formElement.selectionStart;
    }
    get selectionEnd() {
        return this.formElement.selectionEnd;
    }
    focus() {
        const focusEvt = new CustomEvent('focus');
        this.formElement.dispatchEvent(focusEvt);
        this.formElement.focus();
    }
    blur() {
        const blurEvt = new CustomEvent('blur');
        this.formElement.dispatchEvent(blurEvt);
        this.formElement.blur();
    }
    select() {
        this.formElement.select();
    }
    setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
        this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    update(changedProperties) {
        changedProperties.has('autoValidate') && this.mdcFoundation && (this.mdcFoundation.validateOnValueChange = this.autoValidate);
        changedProperties.has('value') && 'string' !== typeof this.value && (this.value = `${ this.value }`);
        super.update(changedProperties);
    }
    setFormData(formData) {
        this.name && formData.append(this.name, this.value);
    }
    render() {
        const shouldRenderCharCounter = this.charCounter && -1 !== this.maxLength, shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
        var JSCompiler_temp_const = google3.classMap({
                'mdc-text-field--disabled': this.disabled,
                'mdc-text-field--no-label': !this.label,
                'mdc-text-field--filled': !this.outlined,
                'mdc-text-field--outlined': this.outlined,
                'mdc-text-field--with-leading-icon': this.icon,
                'mdc-text-field--with-trailing-icon': this.iconTrailing,
                'mdc-text-field--end-aligned': this.endAligned
            }), JSCompiler_temp_const$jscomp$0 = this.renderRipple(), JSCompiler_temp_const$jscomp$1 = this.outlined ? this.renderOutline() : this.renderLabel(), JSCompiler_temp_const$jscomp$2 = this.renderLeadingIcon(), JSCompiler_temp_const$jscomp$3 = this.prefix ? JSCompiler_StaticMethods_renderAffix(this.prefix) : '';
        const minOrUndef = -1 === this.minLength ? void 0 : this.minLength, maxOrUndef = -1 === this.maxLength ? void 0 : this.maxLength, autocapitalizeOrUndef = this.autocapitalize ? this.autocapitalize : void 0, showValidationMessage = this.validationMessage && !this.isUiValid;
        return google3.html`
      <label class="mdc-text-field ${ JSCompiler_temp_const }">
        ${ JSCompiler_temp_const$jscomp$0 }
        ${ JSCompiler_temp_const$jscomp$1 }
        ${ JSCompiler_temp_const$jscomp$2 }
        ${ JSCompiler_temp_const$jscomp$3 }
        ${ google3.html`
      <input
          aria-labelledby=${ google3.ifDefined(this.label ? 'label' : void 0) }
          aria-controls="${ google3.ifDefined(shouldRenderHelperText ? 'helper-text' : void 0) }"
          aria-describedby="${ google3.ifDefined(this.focused || this.helperPersistent || showValidationMessage ? 'helper-text' : void 0) }"
          class="mdc-text-field__input"
          type="${ this.type }"
          .value="${ google3.live(this.value) }"
          ?disabled="${ this.disabled }"
          placeholder="${ this.placeholder }"
          ?required="${ this.required }"
          ?readonly="${ this.readOnly }"
          minlength="${ google3.ifDefined(minOrUndef) }"
          maxlength="${ google3.ifDefined(maxOrUndef) }"
          pattern="${ google3.ifDefined(this.pattern ? this.pattern : void 0) }"
          min="${ google3.ifDefined('' === this.min ? void 0 : this.min) }"
          max="${ google3.ifDefined('' === this.max ? void 0 : this.max) }"
          step="${ google3.ifDefined(null === this.step ? void 0 : this.step) }"
          size="${ google3.ifDefined(null === this.size ? void 0 : this.size) }"
          name="${ google3.ifDefined('' === this.name ? void 0 : this.name) }"
          inputmode="${ google3.ifDefined(this.inputMode) }"
          autocapitalize="${ google3.ifDefined(autocapitalizeOrUndef) }"
          @input="${ this.handleInputChange }"
          @focus="${ this.onInputFocus }"
          @blur="${ this.onInputBlur }">` }
        ${ this.suffix ? JSCompiler_StaticMethods_renderAffix(this.suffix, !0) : '' }
        ${ this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : '' }
        ${ this.renderLineRipple() }
      </label>
      ${ this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) }
    `;
    }
    updated(changedProperties) {
        changedProperties.has('value') && void 0 !== changedProperties.get('value') && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity());
    }
    renderRipple() {
        return this.outlined ? '' : google3.html`
      <span class="mdc-text-field__ripple"></span>
    `;
    }
    renderOutline() {
        return this.outlined ? google3.html`
      <mwc-notched-outline
          .width=${ this.outlineWidth }
          .open=${ this.outlineOpen }
          class="mdc-notched-outline">
        ${ this.renderLabel() }
      </mwc-notched-outline>` : '';
    }
    renderLabel() {
        return this.label ? google3.html`
      <span
          .floatingLabelFoundation=${ google3.floatingLabel(this.label) }
          id="label">${ this.label }</span>
    ` : '';
    }
    renderLeadingIcon() {
        return this.icon ? this.renderIcon(this.icon) : '';
    }
    renderIcon(icon, isTrailingIcon = !1) {
        return google3.html`<i class="material-icons mdc-text-field__icon ${ google3.classMap({
            'mdc-text-field__icon--leading': !isTrailingIcon,
            'mdc-text-field__icon--trailing': isTrailingIcon
        }) }">${ icon }</i>`;
    }
    renderLineRipple() {
        return this.outlined ? '' : google3.html`
      <span .lineRippleFoundation=${ google3.lineRipple() }></span>
    `;
    }
    renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) {
        const showValidationMessage = this.validationMessage && !this.isUiValid, classes = {
                'mdc-text-field-helper-text--persistent': this.helperPersistent,
                'mdc-text-field-helper-text--validation-msg': showValidationMessage
            }, ariaHiddenOrUndef = this.focused || this.helperPersistent || showValidationMessage ? void 0 : 'true', helperText = showValidationMessage ? this.validationMessage : this.helper;
        if (shouldRenderHelperText) {
            var JSCompiler_temp_const = google3.ifDefined(ariaHiddenOrUndef), JSCompiler_temp_const$jscomp$0 = google3.classMap(classes);
            const length = Math.min(this.value.length, this.maxLength);
            var JSCompiler_temp = google3.html`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${ JSCompiler_temp_const }"
             class="mdc-text-field-helper-text ${ JSCompiler_temp_const$jscomp$0 }"
             >${ helperText }</div>
        ${ shouldRenderCharCounter ? google3.html`
      <span class="mdc-text-field-character-counter"
            >${ length } / ${ this.maxLength }</span>` : '' }
      </div>`;
        } else
            JSCompiler_temp = '';
        return JSCompiler_temp;
    }
    onInputFocus() {
        this.focused = !0;
    }
    onInputBlur() {
        this.focused = !1;
        this.reportValidity();
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
        this.mdcFoundation.setValid(isValid);
        return this.isUiValid = isValid;
    }
    _checkValidity(value) {
        let validity = $m2dtextfield.$n2dbase_createValidityObj(this.formElement.validity);
        if (this.validityTransform) {
            const customValidity = this.validityTransform(value, validity);
            validity = Object.assign(Object.assign({}, validity), customValidity);
            this.mdcFoundation.useNativeValidation = !1;
        } else
            this.mdcFoundation.useNativeValidation = !0;
        this._validity = validity;
        return this._validity.valid;
    }
    setCustomValidity(message) {
        this.validationMessage = message;
        this.formElement.setCustomValidity(message);
    }
    handleInputChange() {
        this.value = this.formElement.value;
    }
    createAdapter() {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, JSCompiler_StaticMethods_getRootAdapterMethods(this)), JSCompiler_StaticMethods_getInputAdapterMethods(this)), JSCompiler_StaticMethods_getLabelAdapterMethods(this)), JSCompiler_StaticMethods_getLineRippleAdapterMethods(this)), JSCompiler_StaticMethods_getOutlineAdapterMethods(this));
    }
    async getUpdateComplete() {
        var _a;
        const result = await super.getUpdateComplete();
        await (null === (_a = this.outlineElement) || void 0 === _a ? void 0 : _a.updateComplete);
        return result;
    }
    firstUpdated() {
        var _a$jscomp$0;
        super.firstUpdated();
        this.mdcFoundation.validateOnValueChange = this.autoValidate;
        this.validateOnInitialRender && this.reportValidity();
        null === (_a$jscomp$0 = this.outlineElement) || void 0 === _a$jscomp$0 ? void 0 : _a$jscomp$0.updateComplete.then(() => {
            var _a;
            this.outlineWidth = (null === (_a = this.labelElement) || void 0 === _a ? void 0 : _a.floatingLabelFoundation.getWidth()) || 0;
        });
    }
    async layout() {
        await this.updateComplete;
        const labelElement = this.labelElement;
        if (labelElement) {
            var shouldFloat = !!this.label && !!this.value;
            JSCompiler_StaticMethods_float(labelElement.floatingLabelFoundation, shouldFloat);
            if (this.outlined) {
                this.outlineOpen = shouldFloat;
                await this.updateComplete;
                var labelWidth = labelElement.floatingLabelFoundation.getWidth();
                this.outlineOpen && (this.outlineWidth = labelWidth, await this.updateComplete);
            }
        } else
            this.outlineOpen = !1;
    }
};