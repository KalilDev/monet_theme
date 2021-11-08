'use strict';
const javascript = require('third_party/javascript/code.js');
const goog = require('goog/code.js');
const $m2dassigned = require('google3/third_party/javascript/lit/packages/reactive/2delement/src/decorators/query/2dassigned/code.js');
const event = require('google3/third_party/javascript/lit/packages/reactive/2delement/src/decorators/event/code.js');
const query = require('google3/third_party/javascript/lit/packages/reactive/2delement/src/decorators/query/code.js');
const decorators = require('google3/third_party/javascript/lit/packages/reactive/2delement/src/decorators/code.js');
const security = require('security');
const html = require('goog/html/code.js');
const aria = require('google3/third_party/javascript/material_web_components/base/aria/code.js');
const tabbar = require('google3/third_party/javascript/material_components_web/tabbar/code.js');
const dom = require('google3/third_party/javascript/material_components_web/dom/code.js');
const reactive = require('google3/third_party/javascript/lit/packages/reactive/2delement/src/reactive/code.js');
const lit = require('google3/third_party/javascript/lit/packages/lit/2dhtml/src/lit/code.js');
const google3 = require('google3');
const base = require('google3/third_party/javascript/material_web_components/base/code.js');
const polyfill = require('google3/third_party/javascript/lit/packages/lit/2dhtml/src/polyfill/code.js');
const debug = require('goog/debug/code.js');
'use strict';
$jscomp$polyfill('Array.prototype.flat', function (orig) {
    return orig ? orig : function (depth) {
        depth = void 0 === depth ? 1 : depth;
        for (var flattened = [], i = 0; i < this.length; i++) {
            var element = this[i];
            if (Array.isArray(element) && 0 < depth) {
                var inner = Array.prototype.flat.call(element, depth - 1);
                flattened.push.apply(flattened, inner);
            } else
                flattened.push(element);
        }
        return flattened;
    };
});
'localName' in HTMLElement.prototype || (HTMLElement.prototype.__defineGetter__ ? HTMLElement.prototype.__defineGetter__('localName', function () {
    return this.tagName.toLowerCase();
}) : Object.defineProperty(HTMLElement.prototype, 'localName', {
    writable: !1,
    configurable: !1,
    enumerable: !1,
    get() {
        return this.tagName.toLowerCase();
    }
}));
try {
    Object.setPrototypeOf({}, null);
} catch (e) {
}
(() => {
    const testObj = {}, initialNames = Object.getOwnPropertyNames(testObj);
    new WeakMap().set(testObj, 123);
    return Object.getOwnPropertyNames(testObj).filter(x => !initialNames.includes(x));
})();
try {
    document.createEvent('CustomEvent');
} catch (_a) {
    window.CustomEvent = (inType, params) => {
        params = params || {};
        const e = document.createEvent('Event');
        e.initEvent(inType, !!params.bubbles, !!params.cancelable);
        e.detail = params.detail;
        return e;
    }, window.CustomEvent.prototype = window.Event.prototype;
}
goog$inherits(debug.Error_DebugError, Error);
debug.Error_DebugError.prototype.name = 'CustomError';
goog$inherits(goog$asserts$AssertionError, debug.Error_DebugError);
goog$asserts$AssertionError.prototype.name = 'AssertionError';
a: {
    const navigator = goog$global.navigator;
    if (navigator) {
        const userAgent = navigator.userAgent;
        if (userAgent) {
            JSCompiler_inline_result$jscomp$4 = userAgent;
            break a;
        }
    }
    JSCompiler_inline_result$jscomp$4 = '';
}
goog$reflect$sinkValue[' '] = goog$nullFunction;
try {
    new self.OffscreenCanvas(0, 0).getContext('2d');
} catch (ex) {
}
goog$string$Const.prototype.implementsGoogStringTypedString = !0;
goog$string$Const.prototype.getTypedStringValue = function () {
    return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
};
goog$string$Const.prototype.toString = function () {
    return 'Const{' + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + '}';
};
html.SafeScript_SafeScript.prototype.toString = function () {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
};
goog$html$TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
goog$html$TrustedResourceUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
};
goog$html$TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog$html$TrustedResourceUrl.prototype.getDirection = function () {
    return 1;
};
goog$html$TrustedResourceUrl.prototype.toString = function () {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + '';
};
goog$html$SafeUrl.prototype.implementsGoogStringTypedString = !0;
goog$html$SafeUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog$html$SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
goog$html$SafeUrl.prototype.getDirection = function () {
    return 1;
};
goog$html$SafeUrl.prototype.toString = function () {
    return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog$events$Event.prototype.stopPropagation = function () {
};
goog$events$Event.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
};
goog$inherits(goog$events$BrowserEvent, goog$events$Event);
goog$events$BrowserEvent.prototype.init = function (e$jscomp$0, opt_currentTarget) {
    var type = this.type = e$jscomp$0.type, relevantTouch = e$jscomp$0.changedTouches && e$jscomp$0.changedTouches.length ? e$jscomp$0.changedTouches[0] : null;
    this.target = e$jscomp$0.target || e$jscomp$0.srcElement;
    this.currentTarget = opt_currentTarget;
    var relatedTarget = e$jscomp$0.relatedTarget;
    if (relatedTarget) {
        if (goog$userAgent$GECKO) {
            a: {
                try {
                    goog$reflect$sinkValue(relatedTarget.nodeName);
                    var JSCompiler_inline_result = !0;
                    break a;
                } catch (e) {
                }
                JSCompiler_inline_result = !1;
            }
            JSCompiler_inline_result || (relatedTarget = null);
        }
    } else
        'mouseover' == type ? relatedTarget = e$jscomp$0.fromElement : 'mouseout' == type && (relatedTarget = e$jscomp$0.toElement);
    this.relatedTarget = relatedTarget;
    relevantTouch ? (this.clientX = void 0 !== relevantTouch.clientX ? relevantTouch.clientX : relevantTouch.pageX, this.clientY = void 0 !== relevantTouch.clientY ? relevantTouch.clientY : relevantTouch.pageY, this.screenX = relevantTouch.screenX || 0, this.screenY = relevantTouch.screenY || 0) : (this.offsetX = goog$userAgent$WEBKIT || void 0 !== e$jscomp$0.offsetX ? e$jscomp$0.offsetX : e$jscomp$0.layerX, this.offsetY = goog$userAgent$WEBKIT || void 0 !== e$jscomp$0.offsetY ? e$jscomp$0.offsetY : e$jscomp$0.layerY, this.clientX = void 0 !== e$jscomp$0.clientX ? e$jscomp$0.clientX : e$jscomp$0.pageX, this.clientY = void 0 !== e$jscomp$0.clientY ? e$jscomp$0.clientY : e$jscomp$0.pageY, this.screenX = e$jscomp$0.screenX || 0, this.screenY = e$jscomp$0.screenY || 0);
    this.button = e$jscomp$0.button;
    this.keyCode = e$jscomp$0.keyCode || 0;
    this.key = e$jscomp$0.key || '';
    this.charCode = e$jscomp$0.charCode || ('keypress' == type ? e$jscomp$0.keyCode : 0);
    this.ctrlKey = e$jscomp$0.ctrlKey;
    this.altKey = e$jscomp$0.altKey;
    this.shiftKey = e$jscomp$0.shiftKey;
    this.metaKey = e$jscomp$0.metaKey;
    this.pointerId = e$jscomp$0.pointerId || 0;
    this.pointerType = 'string' === typeof e$jscomp$0.pointerType ? e$jscomp$0.pointerType : goog$events$BrowserEvent$IE_POINTER_TYPE_MAP[e$jscomp$0.pointerType] || '';
    this.state = e$jscomp$0.state;
    this.event_ = e$jscomp$0;
    e$jscomp$0.defaultPrevented && goog$events$BrowserEvent.superClass_.preventDefault.call(this);
};
goog$events$BrowserEvent.prototype.stopPropagation = function () {
    goog$events$BrowserEvent.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0;
};
goog$events$BrowserEvent.prototype.preventDefault = function () {
    goog$events$BrowserEvent.superClass_.preventDefault.call(this);
    var be = this.event_;
    be.preventDefault ? be.preventDefault() : be.returnValue = !1;
};
goog$events$ListenerMap.prototype.add = function (type, listener, callOnce, opt_useCapture, opt_listenerScope) {
    var typeStr = type.toString(), listenerArray = this.listeners[typeStr];
    listenerArray || (listenerArray = this.listeners[typeStr] = [], this.typeCount_++);
    var index = goog$events$ListenerMap$findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);
    if (-1 < index) {
        var listenerObj = listenerArray[index];
        callOnce || (listenerObj.callOnce = !1);
    } else
        listenerObj = new goog$events$Listener(listener, this.src, typeStr, !!opt_useCapture, opt_listenerScope), listenerObj.callOnce = callOnce, listenerArray.push(listenerObj);
    return listenerObj;
};
goog$events$ListenerMap.prototype.remove = function (type, listener, opt_useCapture, opt_listenerScope) {
    var typeStr = type.toString();
    if (!(typeStr in this.listeners))
        return !1;
    var listenerArray = this.listeners[typeStr], index = goog$events$ListenerMap$findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);
    return -1 < index ? (JSCompiler_StaticMethods_markAsRemoved(listenerArray[index]), goog$asserts$assert(null != listenerArray.length), Array.prototype.splice.call(listenerArray, index, 1), 0 == listenerArray.length && (delete this.listeners[typeStr], this.typeCount_--), !0) : !1;
};
goog$events$ListenerMap.prototype.hasListener = function (opt_type, opt_capture) {
    var hasType = void 0 !== opt_type, typeStr = hasType ? opt_type.toString() : '', hasCapture = void 0 !== opt_capture;
    return goog.object_some(this.listeners, function (listenerArray) {
        for (var i = 0; i < listenerArray.length; ++i)
            if (!(hasType && listenerArray[i].type != typeStr || hasCapture && listenerArray[i].capture != opt_capture))
                return !0;
        return !1;
    });
};
parts$jscomp$inline_985[0] in cur$jscomp$inline_986 || 'undefined' == typeof cur$jscomp$inline_986.execScript || cur$jscomp$inline_986.execScript('var ' + parts$jscomp$inline_985[0]);
for (var part$jscomp$inline_987; parts$jscomp$inline_985.length && (part$jscomp$inline_987 = parts$jscomp$inline_985.shift());)
    parts$jscomp$inline_985.length || void 0 === security.SafeDownloader ? cur$jscomp$inline_986 = cur$jscomp$inline_986[part$jscomp$inline_987] && cur$jscomp$inline_986[part$jscomp$inline_987] !== Object.prototype[part$jscomp$inline_987] ? cur$jscomp$inline_986[part$jscomp$inline_987] : cur$jscomp$inline_986[part$jscomp$inline_987] = {} : cur$jscomp$inline_986[part$jscomp$inline_987] = security.SafeDownloader;
(() => {
    const _blockingElements = Symbol(), _alreadyInertElements = Symbol(), _topElParents = Symbol(), _siblingsToRestore = Symbol(), _parentMO = Symbol(), _topChanged = Symbol(), _swapInertedSibling = Symbol(), _inertSiblings = Symbol(), _restoreInertedSiblings = Symbol(), _getParents = Symbol(), _getDistributedChildren = Symbol(), _isInertable = Symbol(), _handleMutations = Symbol();
    class BlockingElementsImpl {
        constructor() {
            this[_blockingElements] = [];
            this[_topElParents] = [];
            this[_alreadyInertElements] = new Set();
        }
        destructor() {
            this[_restoreInertedSiblings](this[_topElParents]);
            this[_blockingElements] = null;
            this[_topElParents] = null;
            this[_alreadyInertElements] = null;
        }
        get top() {
            const elems = this[_blockingElements];
            return elems[elems.length - 1] || null;
        }
        push(element) {
            element && element !== this.top && (this.remove(element), this[_topChanged](element), this[_blockingElements].push(element));
        }
        remove(element) {
            const i = this[_blockingElements].indexOf(element);
            if (-1 === i)
                return !1;
            this[_blockingElements].splice(i, 1);
            if (i === this[_blockingElements].length)
                this[_topChanged](this.top);
            return !0;
        }
        pop() {
            const top = this.top;
            top && this.remove(top);
            return top;
        }
        has(element) {
            return -1 !== this[_blockingElements].indexOf(element);
        }
        [_topChanged](newTop) {
            const toKeepInert = this[_alreadyInertElements], oldParents = this[_topElParents];
            if (newTop) {
                var newParents = this[_getParents](newTop);
                if (newParents[newParents.length - 1].parentNode !== document.body)
                    throw Error('Non-connected element cannot be a blocking element');
                this[_topElParents] = newParents;
                var toSkip = this[_getDistributedChildren](newTop);
                if (oldParents.length) {
                    for (var i = oldParents.length - 1, j = newParents.length - 1; 0 < i && 0 < j && oldParents[i] === newParents[j];)
                        i--, j--;
                    if (oldParents[i] !== newParents[j])
                        this[_swapInertedSibling](oldParents[i], newParents[j]);
                    0 < i && this[_restoreInertedSiblings](oldParents.slice(0, i));
                    0 < j && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
                } else
                    this[_inertSiblings](newParents, toSkip, toKeepInert);
            } else
                this[_restoreInertedSiblings](oldParents), toKeepInert.clear(), this[_topElParents] = [];
        }
        [_swapInertedSibling](oldInert, newInert) {
            const siblingsToRestore = oldInert[_siblingsToRestore];
            this[_isInertable](oldInert) && !oldInert.inert && (oldInert.inert = !0, siblingsToRestore.add(oldInert));
            siblingsToRestore.has(newInert) && (newInert.inert = !1, siblingsToRestore.delete(newInert));
            newInert[_parentMO] = oldInert[_parentMO];
            newInert[_siblingsToRestore] = siblingsToRestore;
            oldInert[_parentMO] = void 0;
            oldInert[_siblingsToRestore] = void 0;
        }
        [_restoreInertedSiblings](elements) {
            for (const element of elements) {
                element[_parentMO].disconnect();
                element[_parentMO] = void 0;
                const siblings = element[_siblingsToRestore];
                for (const sibling of siblings)
                    sibling.inert = !1;
                element[_siblingsToRestore] = void 0;
            }
        }
        [_inertSiblings](elements, toSkip, toKeepInert) {
            for (const element of elements) {
                const parent = element.parentNode, children = parent.children, inertedSiblings = new Set();
                for (let j = 0; j < children.length; j++) {
                    const sibling = children[j];
                    sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling) || (toKeepInert && sibling.inert ? toKeepInert.add(sibling) : (sibling.inert = !0, inertedSiblings.add(sibling)));
                }
                element[_siblingsToRestore] = inertedSiblings;
                const mo = new MutationObserver(this[_handleMutations].bind(this));
                element[_parentMO] = mo;
                let parentToObserve = parent;
                const maybeShadyRoot = parentToObserve;
                maybeShadyRoot.__shady && maybeShadyRoot.host && (parentToObserve = maybeShadyRoot.host);
                mo.observe(parentToObserve, { childList: !0 });
            }
        }
        [_handleMutations](mutations) {
            const parents = this[_topElParents], toKeepInert = this[_alreadyInertElements];
            for (const mutation of mutations) {
                const target = mutation.target.host || mutation.target, inertedChild = parents[(target === document.body ? parents.length : parents.indexOf(target)) - 1], inertedSiblings = inertedChild[_siblingsToRestore];
                for (let i = 0; i < mutation.removedNodes.length; i++) {
                    const sibling = mutation.removedNodes[i];
                    if (sibling === inertedChild) {
                        console.info('Detected removal of the top Blocking Element.');
                        this.pop();
                        return;
                    }
                    inertedSiblings.has(sibling) && (sibling.inert = !1, inertedSiblings.delete(sibling));
                }
                for (let i = 0; i < mutation.addedNodes.length; i++) {
                    const sibling = mutation.addedNodes[i];
                    this[_isInertable](sibling) && (toKeepInert && sibling.inert ? toKeepInert.add(sibling) : (sibling.inert = !0, inertedSiblings.add(sibling)));
                }
            }
        }
        [_isInertable](element) {
            return !1 === /^(style|template|script)$/.test(element.localName);
        }
        [_getParents](element) {
            const parents = [];
            let current = element;
            for (; current && current !== document.body;)
                if (current.nodeType === Node.ELEMENT_NODE && parents.push(current), current.assignedSlot) {
                    for (; current = current.assignedSlot;)
                        parents.push(current);
                    current = parents.pop();
                } else
                    current = current.parentNode || current.host;
            return parents;
        }
        [_getDistributedChildren](element) {
            const shadowRoot = element.shadowRoot;
            if (!shadowRoot)
                return null;
            const result = new Set();
            let i, j, nodes;
            const slots = shadowRoot.querySelectorAll('slot');
            if (slots.length && slots[0].assignedNodes)
                for (i = 0; i < slots.length; i++)
                    for (nodes = slots[i].assignedNodes({ flatten: !0 }), j = 0; j < nodes.length; j++)
                        nodes[j].nodeType === Node.ELEMENT_NODE && result.add(nodes[j]);
            return result;
        }
    }
    document.$blockingElements = new BlockingElementsImpl();
})();
(function () {
    if (google3.wasTranspiledToEs5 && !HTMLElement.es5Shimmed && void 0 !== window.Reflect && void 0 !== window.customElements && !window.customElements.polyfillWrapFlushCallback) {
        var BuiltInHTMLElement = HTMLElement;
        window.HTMLElement = function () {
            try {
                return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
            } catch (e) {
                throw /Illegal constructor/i.test(e.message) && (e.message += ` - Did you register ${ this.constructor.name || 'the class' } in the custom elements registry?`), e;
            }
        };
        HTMLElement.prototype = BuiltInHTMLElement.prototype;
        HTMLElement.prototype.constructor = HTMLElement;
        HTMLElement.es5Shimmed = !0;
        Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
    }
}());
null !== (polyfill.$n2dsupport__a = (polyfill.$n2dsupport__b = window).litHtmlPlatformSupport) && void 0 !== polyfill.$n2dsupport__a ? polyfill.$n2dsupport__a : polyfill.$n2dsupport__b.litHtmlPlatformSupport = (Template, ChildPart) => {
    const extraGlobals = window;
    if (void 0 !== extraGlobals.ShadyCSS && (!extraGlobals.ShadyCSS.nativeShadow || extraGlobals.ShadyCSS.ApplyShim)) {
        var wrap = node => node, needsPrepareStyles = name => void 0 !== name && !polyfill.$n2dsupport_styledScopes.has(name), cssForScope = name => {
                let scopeCss = polyfill.$n2dsupport_scopeCssStore.get(name);
                void 0 === scopeCss && polyfill.$n2dsupport_scopeCssStore.set(name, scopeCss = []);
                return scopeCss;
            }, prepareStyles = (name, template) => {
                const scopeCss = cssForScope(name), hasScopeCss = 0 !== scopeCss.length;
                if (hasScopeCss) {
                    const style = document.createElement('style');
                    style.textContent = scopeCss.join('\n');
                    template.content.appendChild(style);
                }
                polyfill.$n2dsupport_styledScopes.add(name);
                polyfill.$n2dsupport_scopeCssStore.delete(name);
                extraGlobals.ShadyCSS.prepareTemplateStyles(template, name);
                if (hasScopeCss && extraGlobals.ShadyCSS.nativeShadow) {
                    const style = template.content.querySelector('style');
                    null !== style && template.content.appendChild(style);
                }
            }, scopedTemplateCache = new Map(), originalCreateElement = Template.createElement;
        Template.createElement = function (html, options) {
            const element = originalCreateElement.call(Template, html, options), scope = null === options || void 0 === options ? void 0 : options.scope;
            void 0 !== scope && (extraGlobals.ShadyCSS.nativeShadow || extraGlobals.ShadyCSS.prepareTemplateDom(element, scope), needsPrepareStyles(scope) && cssForScope(scope).push(...Array.from(element.content.querySelectorAll('style')).map(style => {
                var _a;
                null === (_a = style.parentNode) || void 0 === _a ? void 0 : _a.removeChild(style);
                return style.textContent;
            })));
            return element;
        };
        var renderContainer = document.createDocumentFragment(), renderContainerMarker = document.createComment(''), childPartProto = ChildPart.prototype, setValue = childPartProto._$setValue;
        childPartProto._$setValue = function (value, directiveParent = this) {
            var _a, _b, _d;
            const container = wrap(this._$startNode).parentNode, scope = null === (_a = this.options) || void 0 === _a ? void 0 : _a.scope;
            if ((container instanceof ShadowRoot || container === (null === (_b = this.options) || void 0 === _b ? void 0 : _b.renderContainer)) && needsPrepareStyles(scope)) {
                const startNode = this._$startNode, endNode = this._$endNode;
                renderContainer.appendChild(renderContainerMarker);
                this._$startNode = renderContainerMarker;
                this._$endNode = null;
                setValue.call(this, value, directiveParent);
                const template = (null === value || void 0 === value ? 0 : value._$litType$) ? this._$committedValue._$template.el : document.createElement('template');
                prepareStyles(scope, template);
                renderContainer.removeChild(renderContainerMarker);
                if (null === (_d = extraGlobals.ShadyCSS) || void 0 === _d ? 0 : _d.nativeShadow) {
                    const style = template.content.querySelector('style');
                    null !== style && renderContainer.appendChild(style.cloneNode(!0));
                }
                container.insertBefore(renderContainer, endNode);
                this._$startNode = startNode;
                this._$endNode = endNode;
            } else
                setValue.call(this, value, directiveParent);
        };
        childPartProto._$getTemplate = function (result) {
            var _a;
            const scope = null === (_a = this.options) || void 0 === _a ? void 0 : _a.scope;
            let templateCache = scopedTemplateCache.get(scope);
            void 0 === templateCache && scopedTemplateCache.set(scope, templateCache = new Map());
            let template = templateCache.get(result.strings);
            void 0 === template && templateCache.set(result.strings, template = new Template(result, this.options));
            return template;
        };
    }
};
if (window.Symbol) {
    const s = Symbol();
    'symbol' !== typeof s && (polyfill.$n2dsupport_symbolKey = Object.keys(s)[0]);
}
if (polyfill.$n2dsupport_needsSymbolSupport && !window.Symbol.for) {
    const map = new Map();
    window.Symbol.for = key => {
        map.has(key) || map.set(key, Symbol(key));
        return map.get(key);
    };
}
null !== (polyfill.$n2dsupport__a = (polyfill.$n2dsupport__b = window).reactiveElementPlatformSupport) && void 0 !== polyfill.$n2dsupport__a ? polyfill.$n2dsupport__a : polyfill.$n2dsupport__b.reactiveElementPlatformSupport = opts => {
    const extraGlobals = window;
    if (void 0 !== extraGlobals.ShadyCSS && (!extraGlobals.ShadyCSS.nativeShadow || extraGlobals.ShadyCSS.ApplyShim)) {
        var elementProto = opts.ReactiveElement.prototype;
        extraGlobals.ShadyDOM && extraGlobals.ShadyDOM.inUse && !0 === extraGlobals.ShadyDOM.noPatch && extraGlobals.ShadyDOM.patchElementProto(elementProto);
        var createRenderRoot = elementProto.createRenderRoot;
        elementProto.createRenderRoot = function () {
            var _a, _b, _c;
            const name = this.localName;
            if (extraGlobals.ShadyCSS.nativeShadow)
                return createRenderRoot.call(this);
            if (!this.constructor.hasOwnProperty('__scoped')) {
                this.constructor.__scoped = !0;
                const css = this.constructor.elementStyles.map(v => v instanceof CSSStyleSheet ? Array.from(v.cssRules).reduce((a, r) => a + r.cssText, '') : v.cssText);
                null === (_b = null === (_a = extraGlobals.ShadyCSS) || void 0 === _a ? void 0 : _a.ScopingShim) || void 0 === _b ? void 0 : _b.prepareAdoptedCssText(css, name);
                void 0 === this.constructor._$handlesPrepareStyles && extraGlobals.ShadyCSS.prepareTemplateStyles(document.createElement('template'), name);
            }
            return null !== (_c = this.shadowRoot) && void 0 !== _c ? _c : this.attachShadow(this.constructor.shadowRootOptions);
        };
        var connectedCallback = elementProto.connectedCallback;
        elementProto.connectedCallback = function () {
            connectedCallback.call(this);
            this.hasUpdated && extraGlobals.ShadyCSS.styleElement(this);
        };
        var didUpdate = elementProto._$didUpdate;
        elementProto._$didUpdate = function (changedProperties) {
            this.hasUpdated || extraGlobals.ShadyCSS.styleElement(this);
            didUpdate.call(this, changedProperties);
        };
    }
};
null !== (polyfill.$n2dsupport__a = (polyfill.$n2dsupport__b = window).litElementPlatformSupport) && void 0 !== polyfill.$n2dsupport__a ? polyfill.$n2dsupport__a : polyfill.$n2dsupport__b.litElementPlatformSupport = opts => {
    const LitElement = opts.LitElement, extraGlobals = window;
    if (void 0 !== extraGlobals.ShadyCSS && (!extraGlobals.ShadyCSS.nativeShadow || extraGlobals.ShadyCSS.ApplyShim)) {
        LitElement._$handlesPrepareStyles = !0;
        var litElementProto = LitElement.prototype, createRenderRoot = litElementProto.createRenderRoot;
        litElementProto.createRenderRoot = function () {
            this.renderOptions.scope = this.localName;
            return createRenderRoot.call(this);
        };
    }
};
console.warn('lit-html is in dev mode. Not recommended for production!');
google3.render._testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    lit.$n2dhtml_sanitizerFactoryInternal = lit.$n2dhtml_noopSanitizer;
};
null === (lit.$n2dhtml__d = (lit.$n2dhtml__c = window).litHtmlPlatformSupport) || void 0 === lit.$n2dhtml__d ? void 0 : lit.$n2dhtml__d.call(lit.$n2dhtml__c, google3.Template, google3.ChildPart);
(null !== (lit.$n2dhtml__e = (lit.$n2dhtml__f = window).litHtmlVersions) && void 0 !== lit.$n2dhtml__e ? lit.$n2dhtml__e : lit.$n2dhtml__f.litHtmlVersions = []).push('2.0.0-rc.3');
console.warn('Running in dev mode. Do not use in production!');
(null === (reactive.$n2delement__a = window.ShadyDOM) || void 0 === reactive.$n2delement__a ? 0 : reactive.$n2delement__a.inUse) && void 0 === window.reactiveElementPlatformSupport && console.warn('Shadow DOM is being polyfilled via ShadyDOM but the `polyfill-support` module has not been loaded.');
google3.ReactiveElement.finalized = !0;
google3.ReactiveElement.elementProperties = new Map();
google3.ReactiveElement.elementStyles = [];
google3.ReactiveElement.shadowRootOptions = { mode: 'open' };
null === (reactive.$n2delement__c = (reactive.$n2delement__b = window).reactiveElementPlatformSupport) || void 0 === reactive.$n2delement__c ? void 0 : reactive.$n2delement__c.call(reactive.$n2delement__b, { ReactiveElement: google3.ReactiveElement });
google3.ReactiveElement.enabledWarnings = ['change-in-update'];
(null !== (reactive.$n2delement__d = (reactive.$n2delement__e = window).reactiveElementVersions) && void 0 !== reactive.$n2delement__d ? reactive.$n2delement__d : reactive.$n2delement__e.reactiveElementVersions = []).push('1.0.0-rc.2');
(null !== (lit.$n2delement__a = (lit.$n2delement__f = window).litElementVersions) && void 0 !== lit.$n2delement__a ? lit.$n2delement__a : lit.$n2delement__f.litElementVersions = []).push('3.0.0-rc.2');
google3.LitElement.finalized = !0;
google3.LitElement._$litElement$ = !0;
null === (lit.$n2delement__c = (lit.$n2delement__b = window).litElementHydrateSupport) || void 0 === lit.$n2delement__c ? void 0 : lit.$n2delement__c.call(lit.$n2delement__b, { LitElement: google3.LitElement });
null === (lit.$n2delement__e = (lit.$n2delement__d = window).litElementPlatformSupport) || void 0 === lit.$n2delement__e ? void 0 : lit.$n2delement__e.call(lit.$n2delement__d, { LitElement: google3.LitElement });
google3.LitElement.finalize = function () {
    if (!google3.ReactiveElement.finalize.call(this))
        return !1;
    const warnRemoved = (obj, name) => {
        void 0 !== obj[name] && console.warn(`\`${ name }\` is implemented. It ` + 'has been removed from this version of LitElement. ');
    };
    [
        'render',
        'getStyles'
    ].forEach(name => warnRemoved(this, name));
    ['adoptStyles'].forEach(name => warnRemoved(this.prototype, name));
    return !0;
};
dom.keyboard_normalizedKeys.add('Backspace');
dom.keyboard_normalizedKeys.add('Enter');
dom.keyboard_normalizedKeys.add('Spacebar');
dom.keyboard_normalizedKeys.add('PageUp');
dom.keyboard_normalizedKeys.add('PageDown');
dom.keyboard_normalizedKeys.add('End');
dom.keyboard_normalizedKeys.add('Home');
dom.keyboard_normalizedKeys.add('ArrowLeft');
dom.keyboard_normalizedKeys.add('ArrowUp');
dom.keyboard_normalizedKeys.add('ArrowRight');
dom.keyboard_normalizedKeys.add('ArrowDown');
dom.keyboard_normalizedKeys.add('Delete');
dom.keyboard_normalizedKeys.add('Escape');
dom.keyboard_normalizedKeys.add('Tab');
dom.keyboard_mappedKeyCodes.set(8, 'Backspace');
dom.keyboard_mappedKeyCodes.set(13, 'Enter');
dom.keyboard_mappedKeyCodes.set(32, 'Spacebar');
dom.keyboard_mappedKeyCodes.set(33, 'PageUp');
dom.keyboard_mappedKeyCodes.set(34, 'PageDown');
dom.keyboard_mappedKeyCodes.set(35, 'End');
dom.keyboard_mappedKeyCodes.set(36, 'Home');
dom.keyboard_mappedKeyCodes.set(37, 'ArrowLeft');
dom.keyboard_mappedKeyCodes.set(38, 'ArrowUp');
dom.keyboard_mappedKeyCodes.set(39, 'ArrowRight');
dom.keyboard_mappedKeyCodes.set(40, 'ArrowDown');
dom.keyboard_mappedKeyCodes.set(46, 'Delete');
dom.keyboard_mappedKeyCodes.set(27, 'Escape');
dom.keyboard_mappedKeyCodes.set(9, 'Tab');
dom.keyboard_navigationKeys.add('PageUp');
dom.keyboard_navigationKeys.add('PageDown');
dom.keyboard_navigationKeys.add('End');
dom.keyboard_navigationKeys.add('Home');
dom.keyboard_navigationKeys.add('ArrowLeft');
dom.keyboard_navigationKeys.add('ArrowUp');
dom.keyboard_navigationKeys.add('ArrowRight');
dom.keyboard_navigationKeys.add('ArrowDown');
tabbar.foundation_ACCEPTABLE_KEYS.add(google3.strings.ARROW_LEFT_KEY);
tabbar.foundation_ACCEPTABLE_KEYS.add(google3.strings.ARROW_RIGHT_KEY);
tabbar.foundation_ACCEPTABLE_KEYS.add(google3.strings.END_KEY);
tabbar.foundation_ACCEPTABLE_KEYS.add(google3.strings.HOME_KEY);
tabbar.foundation_ACCEPTABLE_KEYS.add(google3.strings.ENTER_KEY);
tabbar.foundation_ACCEPTABLE_KEYS.add(google3.strings.SPACE_KEY);
tabbar.foundation_KEYCODE_MAP.set(google3.numbers.ARROW_LEFT_KEYCODE, google3.strings.ARROW_LEFT_KEY);
tabbar.foundation_KEYCODE_MAP.set(google3.numbers.ARROW_RIGHT_KEYCODE, google3.strings.ARROW_RIGHT_KEY);
tabbar.foundation_KEYCODE_MAP.set(google3.numbers.END_KEYCODE, google3.strings.END_KEY);
tabbar.foundation_KEYCODE_MAP.set(google3.numbers.HOME_KEYCODE, google3.strings.HOME_KEY);
tabbar.foundation_KEYCODE_MAP.set(google3.numbers.ENTER_KEYCODE, google3.strings.ENTER_KEY);
tabbar.foundation_KEYCODE_MAP.set(google3.numbers.SPACE_KEYCODE, google3.strings.SPACE_KEY);
document.addEventListener('x', base.utils_fn, {
    get passive() {
        return !1;
    }
});
document.removeEventListener('x', base.utils_fn);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.FormElement.prototype, 'disabled', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing ? map$jscomp$3.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/icon/mwc-icon-host.css', google3.styles) : (existing.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.Icon.styles = [google3.styles];
google3.Icon = google3.__decorate([google3.customElement('mwc-icon')], google3.Icon);
google3.__decorate([
    decorators.query_query('.mdc-ripple-surface'),
    google3.__metadata('design:type', HTMLElement)
], google3.RippleBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'primary', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'accent', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'unbounded', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'disabled', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'activated', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'selected', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'internalUseStateLayerCustomProperties', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'hovering', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'bgFocused', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'fgActivation', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'fgDeactivation', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'fgScale', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'fgSize', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'translateStart', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'translateEnd', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'leftPos', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.RippleBase.prototype, 'topPos', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$1 ? map$jscomp$4.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/ripple/mwc-ripple.css', google3.styles) : (existing$jscomp$1.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.Ripple.styles = [google3.styles];
google3.Ripple = google3.__decorate([google3.customElement('mwc-ripple')], google3.Ripple);
google3.__decorate([
    aria.$n2dproperty_ariaProperty,
    decorators.property_property({
        type: String,
        attribute: 'aria-haspopup'
    }),
    google3.__metadata('design:type', String)
], google3.ButtonBase.prototype, 'ariaHasPopup', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'raised', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'unelevated', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'outlined', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'dense', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'disabled', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        attribute: 'trailingicon'
    }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'trailingIcon', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'fullwidth', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'icon', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'label', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'expandContent', void 0);
google3.__decorate([
    decorators.query_query('#button'),
    google3.__metadata('design:type', HTMLElement)
], google3.ButtonBase.prototype, 'buttonElement', void 0);
google3.__decorate([
    query.$n2dasync_queryAsync(),
    google3.__metadata('design:type', Promise)
], google3.ButtonBase.prototype, 'ripple', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.ButtonBase.prototype, 'shouldRenderRipple', void 0);
google3.__decorate([
    event.$n2doptions_eventOptions({ passive: !0 }),
    google3.__metadata('design:type', Function),
    google3.__metadata('design:paramtypes', [Event]),
    google3.__metadata('design:returntype', void 0)
], google3.ButtonBase.prototype, 'handleRippleActivate', null);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$2 ? map$jscomp$5.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/button/styles.css', google3.styles) : (existing$jscomp$2.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.Button.styles = [google3.styles];
google3.Button = google3.__decorate([google3.customElement('mwc-button')], google3.Button);
Element.prototype.hasOwnProperty('inert') || Object.defineProperty(Element.prototype, 'inert', {
    enumerable: !0,
    get: function () {
        return this.hasAttribute('inert');
    },
    set: function (inert) {
        JSCompiler_StaticMethods_setInert(javascript.wicg_inert_inertManager, this, inert);
    }
});
google3.__decorate([
    decorators.query_query('.mdc-dialog'),
    google3.__metadata('design:type', HTMLDivElement)
], google3.DialogBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('slot[name="primaryAction"]'),
    google3.__metadata('design:type', HTMLElement)
], google3.DialogBase.prototype, 'primarySlot', void 0);
google3.__decorate([
    decorators.query_query('slot[name="secondaryAction"]'),
    google3.__metadata('design:type', HTMLElement)
], google3.DialogBase.prototype, 'secondarySlot', void 0);
google3.__decorate([
    decorators.query_query('#contentSlot'),
    google3.__metadata('design:type', HTMLElement)
], google3.DialogBase.prototype, 'contentSlot', void 0);
google3.__decorate([
    decorators.query_query('.mdc-dialog__content'),
    google3.__metadata('design:type', HTMLDivElement)
], google3.DialogBase.prototype, 'contentElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-container'),
    google3.__metadata('design:type', HTMLDivElement)
], google3.DialogBase.prototype, 'conatinerElement', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'hideActions', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function () {
        this.mdcFoundation.layout();
    }),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'stacked', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'heading', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (newAction) {
        this.mdcFoundation.scrimClickAction = newAction;
    }),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'scrimClickAction', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (newAction) {
        this.mdcFoundation.escapeKeyAction = newAction;
    }),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'escapeKeyAction', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.observer(function (isOpen) {
        this.mdcFoundation && this.isConnected && (isOpen ? (JSCompiler_StaticMethods_setEventListeners(this), this.mdcFoundation.open()) : (JSCompiler_StaticMethods_removeEventListeners(this), this.mdcFoundation.close(this.currentAction || this.defaultAction), this.currentAction = void 0));
    }),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'open', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'defaultAction', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'actionAttribute', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.DialogBase.prototype, 'initialFocusAttribute', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$3 ? map$jscomp$6.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/dialog/mwc-dialog.css', google3.styles) : (existing$jscomp$3.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.Dialog.styles = [google3.styles];
google3.Dialog = google3.__decorate([google3.customElement('mwc-dialog')], google3.Dialog);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.IconButtonBase.prototype, 'disabled', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.IconButtonBase.prototype, 'icon', void 0);
google3.__decorate([
    aria.$n2dproperty_ariaProperty,
    decorators.property_property({
        type: String,
        attribute: 'aria-label'
    }),
    google3.__metadata('design:type', String)
], google3.IconButtonBase.prototype, 'ariaLabel', void 0);
google3.__decorate([
    aria.$n2dproperty_ariaProperty,
    decorators.property_property({
        type: String,
        attribute: 'aria-haspopup'
    }),
    google3.__metadata('design:type', String)
], google3.IconButtonBase.prototype, 'ariaHasPopup', void 0);
google3.__decorate([
    decorators.query_query('button'),
    google3.__metadata('design:type', HTMLElement)
], google3.IconButtonBase.prototype, 'buttonElement', void 0);
google3.__decorate([
    query.$n2dasync_queryAsync(),
    google3.__metadata('design:type', Promise)
], google3.IconButtonBase.prototype, 'ripple', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.IconButtonBase.prototype, 'shouldRenderRipple', void 0);
google3.__decorate([
    event.$n2doptions_eventOptions({ passive: !0 }),
    google3.__metadata('design:type', Function),
    google3.__metadata('design:paramtypes', [Event]),
    google3.__metadata('design:returntype', void 0)
], google3.IconButtonBase.prototype, 'handleRippleMouseDown', null);
google3.__decorate([
    event.$n2doptions_eventOptions({ passive: !0 }),
    google3.__metadata('design:type', Function),
    google3.__metadata('design:paramtypes', [Event]),
    google3.__metadata('design:returntype', void 0)
], google3.IconButtonBase.prototype, 'handleRippleTouchStart', null);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$4 ? map$jscomp$7.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/icon_button/mwc-icon-button.css', google3.styles) : (existing$jscomp$4.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.IconButton.styles = [google3.styles];
google3.IconButton = google3.__decorate([google3.customElement('mwc-icon-button')], google3.IconButton);
google3.__decorate([
    decorators.query_query('slot'),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'slotElement', void 0);
google3.__decorate([
    query.$n2dasync_queryAsync(),
    google3.__metadata('design:type', Promise)
], google3.ListItemBase.prototype, 'ripple', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'value', void 0);
google3.__decorate([
    decorators.property_property({
        type: String,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'group', void 0);
google3.__decorate([
    decorators.property_property({
        type: Number,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'tabindex', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.observer(function (value) {
        value ? this.setAttribute('aria-disabled', 'true') : this.setAttribute('aria-disabled', 'false');
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'disabled', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'twoline', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'activated', void 0);
google3.__decorate([
    decorators.property_property({
        type: String,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'graphic', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'multipleGraphics', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'hasMeta', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.observer(function (value) {
        value ? (this.removeAttribute('aria-checked'), this.removeAttribute('mwc-list-item'), this.activated = this.selected = !1, this.tabIndex = -1) : this.setAttribute('mwc-list-item', '');
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'noninteractive', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.observer(function (value) {
        const role = this.getAttribute('role'), isAriaSelectable = 'gridcell' === role || 'option' === role || 'row' === role || 'tab' === role;
        isAriaSelectable && value ? this.setAttribute('aria-selected', 'true') : isAriaSelectable && this.setAttribute('aria-selected', 'false');
        this._firstChanged ? this._firstChanged = !1 : this._skipPropRequest || JSCompiler_StaticMethods_fireRequestSelected(this, value, 'property');
    }),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'selected', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, 'shouldRenderRipple', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.ListItemBase.prototype, '_managingList', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$5 ? map$jscomp$8.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/list/mwc-list-item.css', google3.styles) : (existing$jscomp$5.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.ListItem.styles = [google3.styles];
google3.ListItem = google3.__decorate([google3.customElement('mwc-list-item')], google3.ListItem);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'emptyMessage', void 0);
google3.__decorate([
    decorators.query_query('.mdc-deprecated-list'),
    google3.__metadata('design:type', HTMLElement)
], google3.ListBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    $m2dassigned.$n2dnodes_queryAssignedNodes('*'),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'assignedElements', void 0);
google3.__decorate([
    $m2dassigned.$n2dnodes_queryAssignedNodes('[tabindex="0"]'),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'tabbableElements', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function (value) {
        this.mdcFoundation && (this.mdcFoundation.useActivatedClass_ = value);
    }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'activatable', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function (newValue, oldValue) {
        this.mdcFoundation && JSCompiler_StaticMethods_setMulti(this.mdcFoundation, newValue);
        void 0 !== oldValue && this.layout();
    }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'multi', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function (value) {
        this.mdcFoundation && (this.mdcFoundation.wrapFocus_ = value);
    }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'wrapFocus', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (_newValue, oldValue) {
        void 0 !== oldValue && JSCompiler_StaticMethods_updateItems(this);
    }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'itemRoles', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'innerRole', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'innerAriaLabel', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'rootTabbable', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.observer(function (value) {
        var _a, _b;
        if (value) {
            const tabbable = null !== (_b = null === (_a = this.tabbableElements) || void 0 === _a ? void 0 : _a[0]) && void 0 !== _b ? _b : null;
            (this.previousTabindex = tabbable) && tabbable.setAttribute('tabindex', '-1');
        } else
            !value && this.previousTabindex && (this.previousTabindex.setAttribute('tabindex', '0'), this.previousTabindex = null);
    }),
    google3.__metadata('design:type', Object)
], google3.ListBase.prototype, 'noninteractive', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$6 ? map$jscomp$9.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/list/mwc-list.css', google3.styles) : (existing$jscomp$6.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.List.styles = [google3.styles];
google3.List = google3.__decorate([google3.customElement('mwc-list')], google3.List);
google3.__decorate([
    decorators.query_query('.mdc-menu-surface'),
    google3.__metadata('design:type', HTMLDivElement)
], google3.MenuSurfaceBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('slot'),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'slotElement', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function (isAbsolute) {
        this.mdcFoundation && !this.fixed && (this.mdcFoundation.isHoistedElement = isAbsolute);
    }),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'absolute', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'fullwidth', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function (isFixed) {
        this.mdcFoundation && !this.absolute && (this.mdcFoundation.isFixedPosition = isFixed);
    }),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'fixed', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.observer(function (value) {
        if (this.mdcFoundation && null !== this.y && null !== value) {
            var JSCompiler_StaticMethods_setAbsolutePosition$self = this.mdcFoundation, y = this.y;
            JSCompiler_StaticMethods_setAbsolutePosition$self.position.x = JSCompiler_StaticMethods_setAbsolutePosition$self.isFinite(value) ? value : 0;
            JSCompiler_StaticMethods_setAbsolutePosition$self.position.y = JSCompiler_StaticMethods_setAbsolutePosition$self.isFinite(y) ? y : 0;
            JSCompiler_StaticMethods_setAnchorMargin(this.mdcFoundation, {
                left: value,
                top: this.y,
                right: -value,
                bottom: this.y
            });
        }
    }),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'x', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.observer(function (value) {
        if (this.mdcFoundation && null !== this.x && null !== value) {
            var JSCompiler_StaticMethods_setAbsolutePosition$self = this.mdcFoundation, x = this.x;
            JSCompiler_StaticMethods_setAbsolutePosition$self.position.x = JSCompiler_StaticMethods_setAbsolutePosition$self.isFinite(x) ? x : 0;
            JSCompiler_StaticMethods_setAbsolutePosition$self.position.y = JSCompiler_StaticMethods_setAbsolutePosition$self.isFinite(value) ? value : 0;
            JSCompiler_StaticMethods_setAnchorMargin(this.mdcFoundation, {
                left: this.x,
                top: value,
                right: -this.x,
                bottom: value
            });
        }
    }),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'y', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function (value) {
        this.mdcFoundation && (this.mdcFoundation.isQuickOpen = value);
    }),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'quick', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.observer(function (isOpen, wasOpen) {
        this.mdcFoundation && (isOpen ? this.mdcFoundation.open() : void 0 !== wasOpen && this.mdcFoundation.close());
    }),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'open', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Boolean)
], google3.MenuSurfaceBase.prototype, 'stayOpenOnBodyClick', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.observer(function (value) {
        this.mdcFoundation && (this.mdcFoundation.anchorCorner = value);
    }),
    google3.__metadata('design:type', Number)
], google3.MenuSurfaceBase.prototype, 'bitwiseCorner', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (value) {
        if (this.mdcFoundation) {
            const isFirstTimeSet = null === this.previousMenuCorner, cornerChanged = !isFirstTimeSet && value !== this.previousMenuCorner, initiallySetToEnd = isFirstTimeSet && 'END' === value;
            if (('START' === value || 'END' === value) && (cornerChanged || initiallySetToEnd)) {
                var JSCompiler_StaticMethods_flipCornerHorizontally$self = this.mdcFoundation;
                JSCompiler_StaticMethods_flipCornerHorizontally$self.originCorner ^= 4;
                this.previousMenuCorner = value;
            }
        }
    }),
    google3.__metadata('design:type', String)
], google3.MenuSurfaceBase.prototype, 'menuCorner', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function () {
    }),
    google3.__metadata('design:type', String)
], google3.MenuSurfaceBase.prototype, 'corner', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'styleTop', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'styleLeft', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'styleRight', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'styleBottom', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'styleMaxHeight', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MenuSurfaceBase.prototype, 'styleTransformOrigin', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$7 ? map$jscomp$10.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/menu/mwc-menu-surface.css', google3.styles) : (existing$jscomp$7.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.MenuSurface.styles = [google3.styles];
google3.MenuSurface = google3.__decorate([google3.customElement('mwc-menu-surface')], google3.MenuSurface);
google3.__decorate([
    decorators.query_query('.mdc-menu'),
    google3.__metadata('design:type', google3.MenuSurface)
], google3.MenuBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('slot'),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'slotElement', void 0);
google3.__decorate([
    decorators.property_property({ type: Object }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'anchor', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'open', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'quick', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'wrapFocus', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', String)
], google3.MenuBase.prototype, 'innerRole', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'innerAriaLabel', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', String)
], google3.MenuBase.prototype, 'corner', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'x', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'y', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'absolute', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'multi', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'activatable', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'fixed', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'forceGroupSelection', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MenuBase.prototype, 'fullwidth', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', String)
], google3.MenuBase.prototype, 'menuCorner', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Boolean)
], google3.MenuBase.prototype, 'stayOpenOnBodyClick', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (value) {
        this.mdcFoundation && (this.mdcFoundation.defaultFocusState = google3.DefaultFocusState[value]);
    }),
    google3.__metadata('design:type', String)
], google3.MenuBase.prototype, 'defaultFocus', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$8 ? map$jscomp$11.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/menu/mwc-menu.css', google3.styles) : (existing$jscomp$8.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.Menu.styles = [google3.styles];
google3.Menu = google3.__decorate([google3.customElement('mwc-menu')], google3.Menu);
google3.__decorate([
    decorators.query_query('.mdc-notched-outline'),
    google3.__metadata('design:type', HTMLElement)
], google3.NotchedOutlineBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.__metadata('design:type', Object)
], google3.NotchedOutlineBase.prototype, 'width', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.NotchedOutlineBase.prototype, 'open', void 0);
google3.__decorate([
    decorators.query_query('.mdc-notched-outline__notch'),
    google3.__metadata('design:type', HTMLDivElement)
], google3.NotchedOutlineBase.prototype, 'notchElement', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$9 ? map$jscomp$12.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/notched_outline/mwc-notched-outline.css', google3.styles) : (existing$jscomp$9.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.NotchedOutline.styles = [google3.styles];
google3.NotchedOutline = google3.__decorate([google3.customElement('mwc-notched-outline')], google3.NotchedOutline);
google3.__decorate([
    decorators.query_query('.mdc-select'),
    google3.__metadata('design:type', HTMLElement)
], google3.SelectBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('.formElement'),
    google3.__metadata('design:type', HTMLInputElement)
], google3.SelectBase.prototype, 'formElement', void 0);
google3.__decorate([
    decorators.query_query('slot'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'slotElement', void 0);
google3.__decorate([
    decorators.query_query('select'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'nativeSelectElement', void 0);
google3.__decorate([
    decorators.query_query('input'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'nativeInputElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-line-ripple'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'lineRippleElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-floating-label'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'labelElement', void 0);
google3.__decorate([
    decorators.query_query('mwc-notched-outline'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'outlineElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-menu'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'menuElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-select__anchor'),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'anchorElement', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        attribute: 'disabled',
        reflect: !0
    }),
    google3.observer(function (value) {
        this.mdcFoundation && this.mdcFoundation.setDisabled(value);
    }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'disabled', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.observer(function (_newVal, oldVal) {
        void 0 !== oldVal && this.outlined !== oldVal && this.layout(!1);
    }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'outlined', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (_newVal, oldVal) {
        void 0 !== oldVal && this.label !== oldVal && this.layout(!1);
    }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'label', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'outlineOpen', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'outlineWidth', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (value) {
        if (this.mdcFoundation) {
            const valueSetByUser = this.selected && this.selected.value !== value;
            (null === this.selected && value || valueSetByUser) && JSCompiler_StaticMethods_selectByValue(this, value);
            this.reportValidity();
        }
    }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'value', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'name', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'selectedText', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'icon', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'menuOpen', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'helper', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'validateOnInitialRender', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'validationMessage', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'required', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'naturalMenuWidth', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'isUiValid', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.SelectBase.prototype, 'fixedMenuPosition', void 0);
google3.__decorate([
    event.$n2doptions_eventOptions({ capture: !0 }),
    google3.__metadata('design:type', Function),
    google3.__metadata('design:paramtypes', [KeyboardEvent]),
    google3.__metadata('design:returntype', void 0)
], google3.SelectBase.prototype, 'handleTypeahead', null);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$10 ? map$jscomp$13.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/select/mwc-select.css', google3.styles) : (existing$jscomp$10.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.Select.styles = [google3.styles];
google3.Select = google3.__decorate([google3.customElement('mwc-select')], google3.Select);
google3.__decorate([
    decorators.query_query('.mdc-tab-indicator'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabIndicatorBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('.mdc-tab-indicator__content'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabIndicatorBase.prototype, 'contentElement', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.TabIndicatorBase.prototype, 'icon', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TabIndicatorBase.prototype, 'fade', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$11 ? map$jscomp$14.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab_indicator/mwc-tab-indicator.css', google3.styles) : (existing$jscomp$11.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.TabIndicator.styles = [google3.styles];
google3.TabIndicator = google3.__decorate([google3.customElement('mwc-tab-indicator')], google3.TabIndicator);
google3.__decorate([
    decorators.query_query('.mdc-tab'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('mwc-tab-indicator'),
    google3.__metadata('design:type', google3.TabIndicator)
], google3.TabBase.prototype, 'tabIndicator', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'label', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'icon', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'hasImageIcon', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'isFadingIndicator', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'minWidth', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'isMinWidthIndicator', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0,
        attribute: 'active'
    }),
    google3.__metadata('design:type', Boolean),
    google3.__metadata('design:paramtypes', [])
], google3.TabBase.prototype, 'active', null);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'indicatorIcon', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'stacked', void 0);
google3.__decorate([
    google3.observer(async function (value) {
        await this.updateComplete;
        this.mdcFoundation.focusOnActivate = value;
    }),
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'focusOnActivate', void 0);
google3.__decorate([
    decorators.query_query('.mdc-tab__content'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabBase.prototype, '_contentElement', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'shouldRenderRipple', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.TabBase.prototype, 'useStateLayerCustomProperties', void 0);
google3.__decorate([
    query.$n2dasync_queryAsync(),
    google3.__metadata('design:type', Promise)
], google3.TabBase.prototype, 'ripple', void 0);
google3.__decorate([
    event.$n2doptions_eventOptions({ passive: !0 }),
    google3.__metadata('design:type', Function),
    google3.__metadata('design:paramtypes', [Event]),
    google3.__metadata('design:returntype', void 0)
], google3.TabBase.prototype, 'handleRippleTouchStart', null);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$12 ? map$jscomp$15.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab/mwc-tab.css', google3.styles) : (existing$jscomp$12.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.Tab.styles = [google3.styles];
google3.Tab = google3.__decorate([google3.customElement('mwc-tab')], google3.Tab);
google3.__decorate([
    decorators.query_query('.mdc-tab-scroller'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabScrollerBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('.mdc-tab-scroller__scroll-area'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabScrollerBase.prototype, 'scrollAreaElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-tab-scroller__scroll-content'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabScrollerBase.prototype, 'scrollContentElement', void 0);
google3.__decorate([
    event.$n2doptions_eventOptions({ passive: !0 }),
    google3.__metadata('design:type', Function),
    google3.__metadata('design:paramtypes', []),
    google3.__metadata('design:returntype', void 0)
], google3.TabScrollerBase.prototype, '_handleInteraction', null);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$13 ? map$jscomp$16.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab_scroller/mwc-tab-scroller.css', google3.styles) : (existing$jscomp$13.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.TabScroller.styles = [google3.styles];
google3.TabScroller = google3.__decorate([google3.customElement('mwc-tab-scroller')], google3.TabScroller);
google3.__decorate([
    decorators.query_query('.mdc-tab-bar'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabBarBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('mwc-tab-scroller'),
    google3.__metadata('design:type', google3.TabScroller)
], google3.TabBarBase.prototype, 'scrollerElement', void 0);
google3.__decorate([
    decorators.query_query('slot'),
    google3.__metadata('design:type', HTMLElement)
], google3.TabBarBase.prototype, 'tabsSlot', void 0);
google3.__decorate([
    google3.observer(async function () {
        await this.updateComplete;
        this.activeIndex !== this._previousActiveIndex && JSCompiler_StaticMethods_activateTab(this.mdcFoundation, this.activeIndex);
    }),
    decorators.property_property({ type: Number }),
    google3.__metadata('design:type', Object)
], google3.TabBarBase.prototype, 'activeIndex', void 0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$14 ? map$jscomp$17.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab_bar/mwc-tab-bar.css', google3.styles) : (existing$jscomp$14.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.TabBar.styles = [google3.styles];
google3.TabBar = google3.__decorate([google3.customElement('mwc-tab-bar')], google3.TabBar);
google3.__decorate([
    decorators.query_query('.mdc-text-field'),
    google3.__metadata('design:type', HTMLElement)
], google3.TextFieldBase.prototype, 'mdcRoot', void 0);
google3.__decorate([
    decorators.query_query('input'),
    google3.__metadata('design:type', HTMLInputElement)
], google3.TextFieldBase.prototype, 'formElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-floating-label'),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'labelElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-line-ripple'),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'lineRippleElement', void 0);
google3.__decorate([
    decorators.query_query('mwc-notched-outline'),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'outlineElement', void 0);
google3.__decorate([
    decorators.query_query('.mdc-notched-outline__notch'),
    google3.__metadata('design:type', HTMLElement)
], google3.TextFieldBase.prototype, 'notchElement', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'value', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', String)
], google3.TextFieldBase.prototype, 'type', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'placeholder', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.observer(function (_newVal, oldVal) {
        void 0 !== oldVal && this.label !== oldVal && this.layout();
    }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'label', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'icon', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'iconTrailing', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'disabled', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'required', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'minLength', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'maxLength', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.observer(function (_newVal, oldVal) {
        void 0 !== oldVal && this.outlined !== oldVal && this.layout();
    }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'outlined', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'helper', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'validateOnInitialRender', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'validationMessage', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'autoValidate', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'pattern', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'min', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'max', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'step', void 0);
google3.__decorate([
    decorators.property_property({ type: Number }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'size', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'helperPersistent', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'charCounter', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'endAligned', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'prefix', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'suffix', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'name', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', String)
], google3.TextFieldBase.prototype, 'inputMode', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'readOnly', void 0);
google3.__decorate([
    decorators.property_property({ type: String }),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'autocapitalize', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'outlineOpen', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'outlineWidth', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'isUiValid', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.TextFieldBase.prototype, 'focused', void 0);
google3.__decorate([
    event.$n2doptions_eventOptions({ passive: !0 }),
    google3.__metadata('design:type', Function),
    google3.__metadata('design:paramtypes', []),
    google3.__metadata('design:returntype', void 0)
], google3.TextFieldBase.prototype, 'handleInputChange', null);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$15 ? map$jscomp$18.set('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/textfield/mwc-textfield.css', google3.styles) : (existing$jscomp$15.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.TextField.styles = [google3.styles];
google3.TextField = google3.__decorate([google3.customElement('mwc-textfield')], google3.TextField);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$16 ? map$jscomp$20.set('ux/material/theme_generator/theme-generator.css', google3.styles) : (existing$jscomp$16.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$17 ? map$jscomp$21.set('ux/material/theme_generator/theme.css', google3.styles) : (existing$jscomp$17.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
window.__litStyleMap = window.__litStyleMap || new Map();
void 0 === existing$jscomp$18 ? map$jscomp$22.set('ux/material/theme_generator/ui/drop_zone/drop-zone.css', google3.styles) : (existing$jscomp$18.notifyOnHotModuleReload(google3.styles), window.hotReloadHandled = !0);
google3.DropZone.styles = [google3.styles];
google3.__decorate([
    decorators.query_query('#drop-zone'),
    google3.__metadata('design:type', HTMLElement)
], google3.DropZone.prototype, 'root', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', String)
], google3.DropZone.prototype, 'file', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', String)
], google3.DropZone.prototype, 'label', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', String)
], google3.DropZone.prototype, 'buttonText', void 0);
google3.__decorate([
    decorators.property_property(),
    google3.__metadata('design:type', String)
], google3.DropZone.prototype, 'accept', void 0);
google3.__decorate([
    decorators.property_property({
        type: Boolean,
        reflect: !0
    }),
    google3.__metadata('design:type', Object)
], google3.DropZone.prototype, 'multiple', void 0);
google3.DropZone = google3.__decorate([google3.customElement('drop-zone')], google3.DropZone);
google3.MaterialThemeGenerator.styles = [
    google3.styles,
    google3.styles,
    google3.pluginStyles,
    google3.webStyles
];
google3.__decorate([
    decorators.query_query('main'),
    google3.__metadata('design:type', HTMLElement)
], google3.MaterialThemeGenerator.prototype, 'main', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MaterialThemeGenerator.prototype, 'baseline', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MaterialThemeGenerator.prototype, 'plugin', void 0);
google3.__decorate([
    decorators.property_property({ type: Boolean }),
    google3.__metadata('design:type', Object)
], google3.MaterialThemeGenerator.prototype, 'darkMode', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MaterialThemeGenerator.prototype, 'tabIndex', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MaterialThemeGenerator.prototype, 'showExport', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MaterialThemeGenerator.prototype, 'showAddTheme', void 0);
google3.__decorate([
    decorators.state_state(),
    google3.__metadata('design:type', Object)
], google3.MaterialThemeGenerator.prototype, 'showInfo', void 0);
google3.MaterialThemeGenerator = google3.__decorate([google3.customElement('theme-generator')], google3.MaterialThemeGenerator);