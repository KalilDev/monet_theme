'use strict';
const form = require('../code.js');
const google3 = require('google3');
var FormElement = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.disabled = !1;
        this.containingForm = null;
        this.formDataListener = ev => {
            this.disabled || this.setFormData(ev.formData);
        };
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        a: {
            if (this.shadowRoot && !form.$n2delement_USING_SHADY_DOM) {
                var forms = this.getRootNode().querySelectorAll('form');
                for (const form of Array.from(forms))
                    if (form.contains(this)) {
                        var JSCompiler_inline_result = form;
                        break a;
                    }
            }
            JSCompiler_inline_result = null;
        }
        this.containingForm = JSCompiler_inline_result;
        null === (_a = this.containingForm) || void 0 === _a ? void 0 : _a.addEventListener('formdata', this.formDataListener);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        null === (_a = this.containingForm) || void 0 === _a ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
        this.containingForm = null;
    }
    click() {
        this.formElement && !this.disabled && (this.formElement.focus(), this.formElement.click());
    }
    firstUpdated() {
        super.firstUpdated();
        this.shadowRoot && this.mdcRoot.addEventListener('change', e => {
            this.dispatchEvent(new Event('change', e));
        });
    }
};