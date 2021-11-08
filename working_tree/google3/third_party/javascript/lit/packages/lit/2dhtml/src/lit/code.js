'use strict';
const lit = require('code.js');
const google3 = require('google3');
var $n2dhtml__c;
var $n2dhtml__d;
var $n2dhtml__e;
var $n2dhtml__f;
const $n2dhtml_trustedTypes = window.trustedTypes;
const $n2dhtml_policy = lit.$n2dhtml_trustedTypes ? lit.$n2dhtml_trustedTypes.createPolicy('lit-html', { createHTML: s => s }) : void 0;
const $n2dhtml_identityFunction = value => value;
const $n2dhtml_noopSanitizer = () => lit.$n2dhtml_identityFunction;
const $n2dhtml_marker = `lit$${ String(Math.random()).slice(9) }$`;
const $n2dhtml_markerMatch = '?' + lit.$n2dhtml_marker;
const $n2dhtml_nodeMarker = `<${ lit.$n2dhtml_markerMatch }>`;
const $n2dhtml_d = document;
const $n2dhtml_isPrimitive = value => null === value || 'object' != typeof value && 'function' != typeof value || google3.isPolyfilledSymbol(value);
const $n2dhtml_isArray = Array.isArray;
const $n2dhtml_textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const $n2dhtml_commentEndRegex = /--\x3e/g;
const $n2dhtml_comment2EndRegex = />/g;
const $n2dhtml_tagEndRegex = RegExp('>|[ \t\n\f\r](?:([^\\s"\'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r"\'`<>=]|("|\')|))|$)', 'g');
const $n2dhtml_singleQuoteAttrEndRegex = /'/g;
const $n2dhtml_doubleQuoteAttrEndRegex = /"/g;
const $n2dhtml_rawTextElement = /^(?:script|style|textarea)$/i;
const $n2dhtml_templateCache = new WeakMap();
const $n2dhtml_walker = lit.$n2dhtml_d.createTreeWalker(lit.$n2dhtml_d, 129, null, !1);
let $n2dhtml_sanitizerFactoryInternal = google3.sanitizerFactory;
function $n2dhtml_resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    if (value === google3.noChange)
        return value;
    let currentDirective = void 0 !== attributeIndex ? null === (_a = parent.__directives) || void 0 === _a ? void 0 : _a[attributeIndex] : parent.__directive;
    const nextDirectiveConstructor = lit.$n2dhtml_isPrimitive(value) ? void 0 : value._$litDirective$;
    (null === currentDirective || void 0 === currentDirective ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor && (null === (_b = null === currentDirective || void 0 === currentDirective ? void 0 : currentDirective._$notifyDirectiveConnectionChanged) || void 0 === _b ? void 0 : _b.call(currentDirective, !1), void 0 === nextDirectiveConstructor ? currentDirective = void 0 : (currentDirective = new nextDirectiveConstructor(part), currentDirective._$initialize(part, parent, attributeIndex)), void 0 !== attributeIndex ? (null !== (_c = parent.__directives) && void 0 !== _c ? _c : parent.__directives = [])[attributeIndex] = currentDirective : parent.__directive = currentDirective);
    void 0 !== currentDirective && (value = lit.$n2dhtml_resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex));
    return value;
}
class $n2dhtml_TemplateInstance {
    constructor(template, parent) {
        this._parts = [];
        this._$disconnectableChildren = void 0;
        this._$template = template;
        this._$parent = parent;
    }
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _clone(options) {
        var _a;
        const {
                el: {content},
                parts
            } = this._$template, fragment = (null !== (_a = null === options || void 0 === options ? void 0 : options.creationScope) && void 0 !== _a ? _a : lit.$n2dhtml_d).importNode(content, !0);
        lit.$n2dhtml_walker.currentNode = fragment;
        let node = lit.$n2dhtml_walker.nextNode(), nodeIndex = 0, partIndex = 0, templatePart = parts[0];
        for (; void 0 !== templatePart;) {
            if (nodeIndex === templatePart.index) {
                let part;
                2 === templatePart.type ? part = new google3.ChildPart(node, node.nextSibling, this, options) : 1 === templatePart.type ? part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options) : 6 === templatePart.type && (part = new google3.ElementPart(node, this, options));
                this._parts.push(part);
                templatePart = parts[++partIndex];
            }
            nodeIndex !== (null === templatePart || void 0 === templatePart ? void 0 : templatePart.index) && (node = lit.$n2dhtml_walker.nextNode(), nodeIndex++);
        }
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._parts)
            void 0 !== part && (void 0 !== part.strings ? (part._$setValue(values, part, i), i += part.strings.length - 2) : part._$setValue(values[i])), i++;
    }
}
const $n2dhtml_emptyStringForBooleanAttribute = lit.$n2dhtml_trustedTypes ? lit.$n2dhtml_trustedTypes.emptyScript : '';