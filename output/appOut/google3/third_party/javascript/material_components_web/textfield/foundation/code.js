'use strict';
const textfield = require('../code.js');
const google3 = require('google3');
var MDCTextFieldFoundation = class extends google3.MDCFoundation {
    constructor(adapter, foundationMap = {}) {
        super(Object.assign(Object.assign({}, google3.MDCTextFieldFoundation.defaultAdapter), adapter));
        this.receivedUserInput = this.isFocused = !1;
        this.validateOnValueChange = this.useNativeValidation = this.valid = !0;
        this.helperText = foundationMap.helperText;
        this.characterCounter = foundationMap.characterCounter;
        this.leadingIcon = foundationMap.leadingIcon;
        this.trailingIcon = foundationMap.trailingIcon;
        this.inputFocusHandler = () => {
            JSCompiler_StaticMethods_activateFocus(this);
        };
        this.inputBlurHandler = () => {
            this.isFocused = !1;
            this.adapter.deactivateLineRipple();
            const isValid = this.isValid();
            JSCompiler_StaticMethods_styleValidity(this, isValid);
            JSCompiler_StaticMethods_styleFocused(this, this.isFocused);
            this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), JSCompiler_StaticMethods_styleFloating(this, this.shouldFloat), this.adapter.shakeLabel(this.shouldShake));
            this.shouldFloat || (this.receivedUserInput = !1);
        };
        this.inputInputHandler = () => {
            this.receivedUserInput || JSCompiler_StaticMethods_activateFocus(this);
            JSCompiler_StaticMethods_setcharacterCounter(this, this.getValue().length);
        };
        this.setPointerXOffset = evt => {
            this.setTransformOrigin(evt);
        };
        this.textFieldInteractionHandler = () => {
            const nativeInput = this.adapter.getNativeInput();
            nativeInput && nativeInput.disabled || (this.receivedUserInput = !0);
        };
        this.validationAttributeChangeHandler = attributesList => {
            JSCompiler_StaticMethods_handleValidationAttributeChange(this, attributesList);
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
    get shouldAlwaysFloat() {
        return 0 <= google3.ALWAYS_FLOAT_TYPES.indexOf(this.getNativeInput().type);
    }
    get shouldFloat() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.getNativeInput().validity.badInput || !1;
    }
    get shouldShake() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
    }
    static get defaultAdapter() {
        return {
            addClass: () => {
            },
            removeClass: () => {
            },
            hasClass: () => !0,
            setInputAttr: () => {
            },
            removeInputAttr: () => {
            },
            registerTextFieldInteractionHandler: () => {
            },
            deregisterTextFieldInteractionHandler: () => {
            },
            registerInputInteractionHandler: () => {
            },
            deregisterInputInteractionHandler: () => {
            },
            registerValidationAttributeChangeHandler: () => new MutationObserver(() => {
            }),
            deregisterValidationAttributeChangeHandler: () => {
            },
            getNativeInput: () => null,
            isFocused: () => !1,
            activateLineRipple: () => {
            },
            deactivateLineRipple: () => {
            },
            setLineRippleTransformOrigin: () => {
            },
            shakeLabel: () => {
            },
            floatLabel: () => {
            },
            setLabelRequired: () => {
            },
            hasLabel: () => !1,
            getLabelWidth: () => 0,
            hasOutline: () => !1,
            notchOutline: () => {
            },
            closeOutline: () => {
            }
        };
    }
    init() {
        this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0);
        this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), JSCompiler_StaticMethods_styleFloating(this, !0));
        this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler('input', this.inputInputHandler);
        for (const evtType of textfield.foundation_POINTERDOWN_EVENTS)
            this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
        for (const evtType of textfield.foundation_INTERACTION_EVENTS)
            this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
        this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        JSCompiler_StaticMethods_setcharacterCounter(this, this.getValue().length);
    }
    destroy() {
        this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler);
        for (const evtType of textfield.foundation_POINTERDOWN_EVENTS)
            this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
        for (const evtType of textfield.foundation_INTERACTION_EVENTS)
            this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }
    notchOutline(openNotch) {
        this.adapter.hasOutline() && this.adapter.hasLabel() && (openNotch ? this.adapter.notchOutline(this.adapter.getLabelWidth() * google3.numbers.LABEL_SCALE) : this.adapter.closeOutline());
    }
    setTransformOrigin(evt) {
        if (!this.getNativeInput().disabled && !this.adapter.hasOutline()) {
            var touches = evt.touches, targetEvent = touches ? touches[0] : evt, targetClientRect = targetEvent.target.getBoundingClientRect();
            this.adapter.setLineRippleTransformOrigin(targetEvent.clientX - targetClientRect.left);
        }
    }
    getValue() {
        return this.getNativeInput().value;
    }
    setValue(value) {
        this.getValue() !== value && (this.getNativeInput().value = value);
        JSCompiler_StaticMethods_setcharacterCounter(this, value.length);
        if (this.validateOnValueChange) {
            const isValid = this.isValid();
            JSCompiler_StaticMethods_styleValidity(this, isValid);
        }
        this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), JSCompiler_StaticMethods_styleFloating(this, this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }
    isValid() {
        return this.useNativeValidation ? this.getNativeInput().validity.valid : this.valid;
    }
    setValid(isValid) {
        this.valid = isValid;
        JSCompiler_StaticMethods_styleValidity(this, isValid);
        const shouldShake = !isValid && !this.isFocused && !!this.getValue();
        this.adapter.hasLabel() && this.adapter.shakeLabel(shouldShake);
    }
    setDisabled(disabled) {
        this.getNativeInput().disabled = disabled;
        const DISABLED = google3.MDCTextFieldFoundation.cssClasses.DISABLED, INVALID = google3.MDCTextFieldFoundation.cssClasses.INVALID;
        disabled ? (this.adapter.addClass(DISABLED), this.adapter.removeClass(INVALID)) : this.adapter.removeClass(DISABLED);
        this.leadingIcon && this.leadingIcon.setDisabled(disabled);
        this.trailingIcon && this.trailingIcon.setDisabled(disabled);
    }
    getNativeInput() {
        return (this.adapter ? this.adapter.getNativeInput() : null) || {
            disabled: !1,
            maxLength: -1,
            required: !1,
            type: 'input',
            validity: {
                badInput: !1,
                valid: !0
            },
            value: ''
        };
    }
};