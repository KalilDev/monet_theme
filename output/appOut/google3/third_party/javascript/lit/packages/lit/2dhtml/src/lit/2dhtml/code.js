'use strict';
const lit = require('../code.js');
const google3 = require('google3');
var html = (strings, ...values) => ({
    ['_$litType$']: 1,
    strings,
    values
});
var svg = (strings, ...values) => ({
    ['_$litType$']: 2,
    strings,
    values
});
var noChange = Symbol.for('lit-noChange');
var nothing = Symbol.for('lit-nothing');
var render = (value, container, options) => {
    var _a, _b;
    const partOwnerNode = null !== (_a = null === options || void 0 === options ? void 0 : options.renderBefore) && void 0 !== _a ? _a : container;
    let part = partOwnerNode._$litPart$;
    if (void 0 === part) {
        const endNode = null !== (_b = null === options || void 0 === options ? void 0 : options.renderBefore) && void 0 !== _b ? _b : null;
        partOwnerNode._$litPart$ = part = new google3.ChildPart(container.insertBefore(lit.$n2dhtml_d.createComment(''), endNode), endNode, void 0, null !== options && void 0 !== options ? options : {});
    }
    part._$setValue(value);
    return part;
};
var Template = class {
    constructor({
        strings: strings$jscomp$0,
        ['_$litType$']: type
    }, options) {
        this.parts = [];
        let node, nodeIndex = 0, attrNameIndex = 0;
        const partCount = strings$jscomp$0.length - 1, parts = this.parts;
        const l = strings$jscomp$0.length - 1, attrNames = [];
        let html = 2 === type ? '<svg>' : '', rawTextEndRegex, regex = lit.$n2dhtml_textEndRegex;
        for (let i = 0; i < l; i++) {
            const s = strings$jscomp$0[i];
            let attrNameEndIndex = -1, attrName, lastIndex = 0, match;
            for (; lastIndex < s.length;) {
                regex.lastIndex = lastIndex;
                match = regex.exec(s);
                if (null === match)
                    break;
                lastIndex = regex.lastIndex;
                regex === lit.$n2dhtml_textEndRegex ? '!--' === match[1] ? regex = lit.$n2dhtml_commentEndRegex : void 0 !== match[1] ? regex = lit.$n2dhtml_comment2EndRegex : void 0 !== match[2] ? (lit.$n2dhtml_rawTextElement.test(match[2]) && (rawTextEndRegex = new RegExp(`</${ match[2] }`, 'g')), regex = lit.$n2dhtml_tagEndRegex) : void 0 !== match[3] && (regex = lit.$n2dhtml_tagEndRegex) : regex === lit.$n2dhtml_tagEndRegex ? '>' === match[0] ? (regex = null !== rawTextEndRegex && void 0 !== rawTextEndRegex ? rawTextEndRegex : lit.$n2dhtml_textEndRegex, attrNameEndIndex = -1) : void 0 === match[1] ? attrNameEndIndex = -2 : (attrNameEndIndex = regex.lastIndex - match[2].length, attrName = match[1], regex = void 0 === match[3] ? lit.$n2dhtml_tagEndRegex : '"' === match[3] ? lit.$n2dhtml_doubleQuoteAttrEndRegex : lit.$n2dhtml_singleQuoteAttrEndRegex) : regex === lit.$n2dhtml_doubleQuoteAttrEndRegex || regex === lit.$n2dhtml_singleQuoteAttrEndRegex ? regex = lit.$n2dhtml_tagEndRegex : regex === lit.$n2dhtml_commentEndRegex || regex === lit.$n2dhtml_comment2EndRegex ? regex = lit.$n2dhtml_textEndRegex : (regex = lit.$n2dhtml_tagEndRegex, rawTextEndRegex = void 0);
            }
            console.assert(-1 === attrNameEndIndex || regex === lit.$n2dhtml_tagEndRegex || regex === lit.$n2dhtml_singleQuoteAttrEndRegex || regex === lit.$n2dhtml_doubleQuoteAttrEndRegex, 'unexpected parse state B');
            const end = regex === lit.$n2dhtml_tagEndRegex && strings$jscomp$0[i + 1].startsWith('/>') ? ' ' : '';
            html += regex === lit.$n2dhtml_textEndRegex ? s + lit.$n2dhtml_nodeMarker : 0 <= attrNameEndIndex ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + '$lit$' + s.slice(attrNameEndIndex)) + lit.$n2dhtml_marker + end : s + lit.$n2dhtml_marker + (-2 === attrNameEndIndex ? (attrNames.push(void 0), i) : end);
        }
        const htmlResult = html + (strings$jscomp$0[l] || '<?>') + (2 === type ? '</svg>' : '');
        var JSCompiler_inline_result = [
            void 0 !== lit.$n2dhtml_policy ? lit.$n2dhtml_policy.createHTML(htmlResult) : htmlResult,
            attrNames
        ];
        const [html__tsickle_destructured_1, attrNames__tsickle_destructured_2] = JSCompiler_inline_result;
        this.el = google3.Template.createElement(html__tsickle_destructured_1, options);
        lit.$n2dhtml_walker.currentNode = this.el.content;
        if (2 === type) {
            const content = this.el.content, svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        for (; null !== (node = lit.$n2dhtml_walker.nextNode()) && parts.length < partCount;) {
            if (1 === node.nodeType) {
                if (node.hasAttributes()) {
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames())
                        if (name.endsWith('$lit$') || name.startsWith(lit.$n2dhtml_marker)) {
                            const realName = attrNames__tsickle_destructured_2[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (void 0 !== realName) {
                                const statics = node.getAttribute(realName.toLowerCase() + '$lit$').split(lit.$n2dhtml_marker), m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: 1,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: '.' === m[1] ? google3.PropertyPart : '?' === m[1] ? google3.BooleanAttributePart : '@' === m[1] ? google3.EventPart : google3.AttributePart
                                });
                            } else
                                parts.push({
                                    type: 6,
                                    index: nodeIndex
                                });
                        }
                    for (const name of attrsToRemove)
                        node.removeAttribute(name);
                }
                if (lit.$n2dhtml_rawTextElement.test(node.tagName)) {
                    const strings = node.textContent.split(lit.$n2dhtml_marker), lastIndex = strings.length - 1;
                    if (0 < lastIndex) {
                        node.textContent = lit.$n2dhtml_trustedTypes ? lit.$n2dhtml_trustedTypes.emptyScript : '';
                        for (let i = 0; i < lastIndex; i++)
                            node.append(strings[i], lit.$n2dhtml_d.createComment('')), lit.$n2dhtml_walker.nextNode(), parts.push({
                                type: 2,
                                index: ++nodeIndex
                            });
                        node.append(strings[lastIndex], lit.$n2dhtml_d.createComment(''));
                    }
                }
            } else if (8 === node.nodeType)
                if (node.data === lit.$n2dhtml_markerMatch)
                    parts.push({
                        type: 2,
                        index: nodeIndex
                    });
                else {
                    let i = -1;
                    for (; -1 !== (i = node.data.indexOf(lit.$n2dhtml_marker, i + 1));)
                        parts.push({
                            type: 7,
                            index: nodeIndex
                        }), i += lit.$n2dhtml_marker.length - 1;
                }
            nodeIndex++;
        }
    }
    static createElement(html) {
        const el = lit.$n2dhtml_d.createElement('template');
        el.innerHTML = html;
        return el;
    }
};
var ChildPart = class {
    constructor(startNode, endNode, parent, options) {
        this.type = 2;
        this.__isConnected = !0;
        this._$disconnectableChildren = void 0;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        this._textSanitizer = void 0;
    }
    get _$isConnected() {
        var _a, _b;
        return null !== (_b = null === (_a = this._$parent) || void 0 === _a ? void 0 : _a._$isConnected) && void 0 !== _b ? _b : this.__isConnected;
    }
    get parentNode() {
        return this._$startNode.parentNode;
    }
    _$setValue(value, directiveParent = this) {
        value = lit.$n2dhtml_resolveDirective(this, value, directiveParent);
        lit.$n2dhtml_isPrimitive(value) ? value === google3.nothing || null == value || '' === value ? (this._$committedValue !== google3.nothing && this._$clear(), this._$committedValue = google3.nothing) : value !== this._$committedValue && value !== google3.noChange && this._commitText(value) : void 0 !== value._$litType$ ? this._commitTemplateResult(value) : void 0 !== value.nodeType ? this._commitNode(value) : lit.$n2dhtml_isArray(value) || 'function' === typeof (null === value || void 0 === value ? void 0 : value[Symbol.iterator]) ? this._commitIterable(value) : this._commitText(value);
    }
    _insert(node, ref = this._$endNode) {
        return this._$startNode.parentNode.insertBefore(node, ref);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (lit.$n2dhtml_sanitizerFactoryInternal !== lit.$n2dhtml_noopSanitizer) {
                const parentNodeName = null === (_a = this._$startNode.parentNode) || void 0 === _a ? void 0 : _a.nodeName;
                if ('STYLE' === parentNodeName || 'SCRIPT' === parentNodeName)
                    throw Error('STYLE' === parentNodeName ? 'Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and accomplishing dynamicism by mutating the DOM rather than styles' : 'Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.');
            }
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        const node = this._$startNode.nextSibling;
        if (null !== node && 3 === node.nodeType && (null === this._$endNode ? null === node.nextSibling : node === this._$endNode.previousSibling))
            void 0 === this._textSanitizer && (this._textSanitizer = lit.$n2dhtml_sanitizerFactoryInternal(node, 'data', 'property')), value = this._textSanitizer(value), node.data = value;
        else {
            const textNode = document.createTextNode('');
            this._commitNode(textNode);
            void 0 === this._textSanitizer && (this._textSanitizer = lit.$n2dhtml_sanitizerFactoryInternal(textNode, 'data', 'property'));
            value = this._textSanitizer(value);
            textNode.data = value;
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        const {
                values,
                ['_$litType$']: type
            } = result, template = 'number' === typeof type ? this._$getTemplate(result) : (void 0 === type.el && (type.el = google3.Template.createElement(type.h, this.options)), type);
        if ((null === (_a = this._$committedValue) || void 0 === _a ? void 0 : _a._$template) === template)
            this._$committedValue._update(values);
        else {
            const instance = new lit.$n2dhtml_TemplateInstance(template, this), fragment = instance._clone(this.options);
            instance._update(values);
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    _$getTemplate(result) {
        let template = lit.$n2dhtml_templateCache.get(result.strings);
        void 0 === template && lit.$n2dhtml_templateCache.set(result.strings, template = new google3.Template(result));
        return template;
    }
    _commitIterable(value) {
        lit.$n2dhtml_isArray(this._$committedValue) || (this._$committedValue = [], this._$clear());
        const itemParts = this._$committedValue;
        let partIndex = 0, itemPart;
        for (const item of value)
            partIndex === itemParts.length ? itemParts.push(itemPart = new google3.ChildPart(this._insert(lit.$n2dhtml_d.createComment('')), this._insert(lit.$n2dhtml_d.createComment('')), this, this.options)) : itemPart = itemParts[partIndex], itemPart._$setValue(item), partIndex++;
        partIndex < itemParts.length && (this._$clear(itemPart && itemPart._$endNode.nextSibling, partIndex), itemParts.length = partIndex);
    }
    _$clear(start = this._$startNode.nextSibling, from) {
        var _a;
        for (null === (_a = this._$notifyConnectionChanged) || void 0 === _a ? void 0 : _a.call(this, !1, !0, from); start && start !== this._$endNode;) {
            const n = start.nextSibling;
            start.remove();
            start = n;
        }
    }
};
var AttributePart = class {
    constructor(element, name, strings, parent, options) {
        this.type = 1;
        this._$committedValue = google3.nothing;
        this._$disconnectableChildren = void 0;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        2 < strings.length || '' !== strings[0] || '' !== strings[1] ? (this._$committedValue = Array(strings.length - 1).fill(google3.nothing), this.strings = strings) : this._$committedValue = google3.nothing;
        this._sanitizer = void 0;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        let change = !1;
        if (void 0 === strings) {
            if (value = lit.$n2dhtml_resolveDirective(this, value, directiveParent, 0), change = !lit.$n2dhtml_isPrimitive(value) || value !== this._$committedValue && value !== google3.noChange)
                this._$committedValue = value;
        } else {
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++)
                v = lit.$n2dhtml_resolveDirective(this, values[valueIndex + i], directiveParent, i), v === google3.noChange && (v = this._$committedValue[i]), change || (change = !lit.$n2dhtml_isPrimitive(v) || v !== this._$committedValue[i]), v === google3.nothing ? value = google3.nothing : value !== google3.nothing && (value += (null !== v && void 0 !== v ? v : '') + strings[i + 1]), this._$committedValue[i] = v;
        }
        change && !noCommit && this._commitValue(value);
    }
    _commitValue(value) {
        value === google3.nothing ? this.element.removeAttribute(this.name) : (void 0 === this._sanitizer && (this._sanitizer = lit.$n2dhtml_sanitizerFactoryInternal(this.element, this.name, 'attribute')), value = this._sanitizer(null !== value && void 0 !== value ? value : ''), this.element.setAttribute(this.name, null !== value && void 0 !== value ? value : ''));
    }
};
var PropertyPart = class extends google3.AttributePart {
    constructor() {
        super(...arguments);
        this.type = 3;
    }
    _commitValue(value) {
        void 0 === this._sanitizer && (this._sanitizer = lit.$n2dhtml_sanitizerFactoryInternal(this.element, this.name, 'property'));
        value = this._sanitizer(value);
        this.element[this.name] = value === google3.nothing ? void 0 : value;
    }
};
var BooleanAttributePart = class extends google3.AttributePart {
    constructor() {
        super(...arguments);
        this.type = 4;
    }
    _commitValue(value) {
        value && value !== google3.nothing ? this.element.setAttribute(this.name, lit.$n2dhtml_emptyStringForBooleanAttribute) : this.element.removeAttribute(this.name);
    }
};
var EventPart = class extends google3.AttributePart {
    constructor() {
        super(...arguments);
        this.type = 5;
    }
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener = null !== (_a = lit.$n2dhtml_resolveDirective(this, newListener, directiveParent, 0)) && void 0 !== _a ? _a : google3.nothing;
        if (newListener !== google3.noChange) {
            var oldListener = this._$committedValue, shouldRemoveListener = newListener === google3.nothing && oldListener !== google3.nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive, shouldAddListener = newListener !== google3.nothing && (oldListener === google3.nothing || shouldRemoveListener);
            shouldRemoveListener && this.element.removeEventListener(this.name, this, oldListener);
            shouldAddListener && this.element.addEventListener(this.name, this, newListener);
            this._$committedValue = newListener;
        }
    }
    handleEvent(event) {
        var _a, _b;
        'function' === typeof this._$committedValue ? this._$committedValue.call(null !== (_b = null === (_a = this.options) || void 0 === _a ? void 0 : _a.host) && void 0 !== _b ? _b : this.element, event) : this._$committedValue.handleEvent(event);
    }
};
var ElementPart = class {
    constructor(element, parent, options) {
        this.element = element;
        this.type = 6;
        this._$disconnectableChildren = void 0;
        this._$parent = parent;
        this.options = options;
    }
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        lit.$n2dhtml_resolveDirective(this, value);
    }
};