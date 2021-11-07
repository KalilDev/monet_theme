'use strict';
const google3 = require('google3');
const reactive = require('../code.js');
var defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
        case Boolean:
            value = value ? '' : null;
            break;
        case Object:
        case Array:
            value = null == value ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
        case Boolean:
            fromValue = null !== value;
            break;
        case Number:
            fromValue = null === value ? null : Number(value);
            break;
        case Object:
        case Array:
            try {
                fromValue = JSON.parse(value);
            } catch (e) {
                fromValue = null;
            }
        }
        return fromValue;
    }
};
var notEqual = (value, old) => old !== value && (old === old || value === value);
var ReactiveElement = class extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        this.hasUpdated = this.isUpdatePending = !1;
        this.__reflectingProperty = null;
        this._initialize();
    }
    static get observedAttributes() {
        this.finalize();
        const attributes = [];
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            void 0 !== attr && (this.__attributeToPropertyMap.set(attr, p), attributes.push(attr));
        });
        return attributes;
    }
    static finalize() {
        if (this.hasOwnProperty('finalized'))
            return !1;
        this.finalized = !0;
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        this.elementProperties = new Map(superCtor.elementProperties);
        this.__attributeToPropertyMap = new Map();
        if (this.hasOwnProperty('properties')) {
            const props = this.properties, propKeys = [
                    ...Object.getOwnPropertyNames(props),
                    ...Object.getOwnPropertySymbols(props)
                ];
            for (const p of propKeys)
                JSCompiler_StaticMethods_createProperty(this, p, props[p]);
        }
        this.elementStyles = JSCompiler_StaticMethods_finalizeStyles(this.styles);
        [
            'initialize',
            '_getUpdateComplete'
        ].forEach(name => {
            void 0 !== this.prototype[name] && console.warn(`\`${ name }\` is implemented. It ` + 'has been removed from this version of ReactiveElement. See the changelog at https://github.com/lit/lit/blob/main/packages/reactive-element/CHANGELOG.md');
        });
        return !0;
    }
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return !1 === attribute ? void 0 : 'string' === typeof attribute ? attribute : 'string' === typeof name ? name.toLowerCase() : void 0;
    }
    _initialize() {
        var _a;
        this.__updatePromise = new Promise(res => this.enableUpdating = res);
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        JSCompiler_StaticMethods_requestUpdate(this);
        null === (_a = this.constructor._initializers) || void 0 === _a ? void 0 : _a.forEach(i => i(this));
    }
    __saveInstanceProperties() {
        this.__swizzledInstanceProperties ? (this.__instanceProperties = this.__swizzledInstanceProperties, this.__swizzledInstanceProperties = void 0) : this.constructor.elementProperties.forEach((_v, p) => {
            this.hasOwnProperty(p) && (this.__instanceProperties.set(p, this[p]), delete this[p]);
        });
    }
    createRenderRoot() {
        var _a;
        const renderRoot = null !== (_a = this.shadowRoot) && void 0 !== _a ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        google3.adoptStyles(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    connectedCallback() {
        var _a$jscomp$0;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot());
        this.enableUpdating(!0);
        null === (_a$jscomp$0 = this.__controllers) || void 0 === _a$jscomp$0 ? void 0 : _a$jscomp$0.forEach(c => {
            var _a;
            return null === (_a = c.hostConnected) || void 0 === _a ? void 0 : _a.call(c);
        });
    }
    enableUpdating() {
    }
    disconnectedCallback() {
        var _a$jscomp$0;
        null === (_a$jscomp$0 = this.__controllers) || void 0 === _a$jscomp$0 ? void 0 : _a$jscomp$0.forEach(c => {
            var _a;
            return null === (_a = c.hostDisconnected) || void 0 === _a ? void 0 : _a.call(c);
        });
    }
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = reactive.$n2delement_defaultPropertyDeclaration) {
        var _a, _b;
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (void 0 !== attr && !0 === options.reflect) {
            let attrValue = (null !== (_b = null === (_a = options.converter) || void 0 === _a ? void 0 : _a.toAttribute) && void 0 !== _b ? _b : google3.defaultConverter.toAttribute)(value, options.type);
            0 <= this.constructor.enabledWarnings.indexOf('migration') && void 0 === attrValue && console.warn('The attribute value for the ' + `${ name } property is undefined. The attribute will be ` + 'removed, but in the previous version of ReactiveElement, the attribute would not have changed.');
            this.__reflectingProperty = name;
            null == attrValue ? this.removeAttribute(attr) : ('' === attrValue && attr.startsWith('on') && reactive.$n2delement_trustedTypes && (attrValue = reactive.$n2delement_trustedTypes.emptyScript), this.setAttribute(attr, attrValue));
            this.__reflectingProperty = null;
        }
    }
    _$attributeToProperty(name, value) {
        var _a, _b, _c;
        const ctor = this.constructor, propName = ctor.__attributeToPropertyMap.get(name);
        if (void 0 !== propName && this.__reflectingProperty !== propName) {
            const options = ctor.elementProperties.get(propName) || reactive.$n2delement_defaultPropertyDeclaration, converter = options.converter, fromAttribute = null !== (_c = null !== (_b = null === (_a = converter) || void 0 === _a ? void 0 : _a.fromAttribute) && void 0 !== _b ? _b : 'function' === typeof converter ? converter : null) && void 0 !== _c ? _c : google3.defaultConverter.fromAttribute;
            this.__reflectingProperty = propName;
            this[propName] = fromAttribute(value, options.type);
            this.__reflectingProperty = null;
        }
    }
    async __enqueueUpdate() {
        this.isUpdatePending = !0;
        try {
            await this.__updatePromise;
        } catch (e) {
            this.squelchUpdateErrorsDuringLit2Migration || Promise.reject(e);
        }
        const result = JSCompiler_StaticMethods_performUpdate(this);
        null != result && await result;
        return !this.isUpdatePending;
    }
    _$didUpdate(changedProperties) {
        var _a$jscomp$0;
        null === (_a$jscomp$0 = this.__controllers) || void 0 === _a$jscomp$0 ? void 0 : _a$jscomp$0.forEach(c => {
            var _a;
            return null === (_a = c.hostUpdated) || void 0 === _a ? void 0 : _a.call(c);
        });
        this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated());
        this.updated(changedProperties);
        this.isUpdatePending && 0 <= this.constructor.enabledWarnings.indexOf('change-in-update') && console.warn('An update was requested (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.');
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this.__updatePromise;
    }
    update() {
        void 0 !== this.__reflectingProperties && (this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v)), this.__reflectingProperties = void 0);
        this.__markUpdated();
    }
    updated() {
    }
    firstUpdated() {
    }
};