'use strict';
const goog = require('goog/code.js');
const builders = require('google3/third_party/javascript/safevalues/builders/code.js');
const $m2dtextfield = require('google3/third_party/javascript/material_web_components/textfield/mwc/2dtextfield/code.js');
const utils = require('google3/ux/material/libmonet/typescript/utils/code.js');
const javascript = require('third_party/javascript/code.js');
const dom = require('google3/third_party/javascript/material_components_web/dom/code.js');
const theme = require('google3/ux/material/theme_generator/src/theme/code.js');
const exporters = require('google3/ux/material/theme_generator/src/exporters/code.js');
const src = require('google3/ux/material/theme_generator/src/code.js');
const base = require('google3/third_party/javascript/material_web_components/base/code.js');
const $m2dlist = require('google3/third_party/javascript/material_web_components/list/mwc/2dlist/code.js');
const debug = require('goog/debug/code.js');
const drop = require('google3/ux/material/theme_generator/ui/drop_zone/drop/code.js');
const quantize = require('google3/ux/material/libmonet/typescript/quantize/code.js');
const google3 = require('google3');
const userAgent = require('goog/labs/userAgent/code.js');
const ripple = require('google3/third_party/javascript/material_components_web/ripple/code.js');
const reactive = require('google3/third_party/javascript/lit/packages/reactive/2delement/src/reactive/code.js');
var $jscomp$defineProperty = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (target, property, descriptor) {
    if (target == Array.prototype || target == Object.prototype)
        return target;
    target[property] = descriptor.value;
    return target;
};
var $jscomp$getGlobal = function (passedInThis) {
    for (var possibleGlobals = [
        'object' == typeof globalThis && globalThis,
        passedInThis,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global
    ], i = 0; i < possibleGlobals.length; ++i) {
        var maybeGlobal = possibleGlobals[i];
        if (maybeGlobal && maybeGlobal.Math == Math)
            return maybeGlobal;
    }
    throw Error('Cannot find global object');
};
var $jscomp$global = $jscomp$getGlobal(this);
var $jscomp$polyfill = function (target, polyfill) {
    if (polyfill)
        a: {
            for (var obj = $jscomp$global, split = target.split('.'), i = 0; i < split.length - 1; i++) {
                var key = split[i];
                if (!(key in obj))
                    break a;
                obj = obj[key];
            }
            var property = split[split.length - 1], orig = obj[property], impl = polyfill(orig);
            impl != orig && null != impl && $jscomp$defineProperty(obj, property, {
                configurable: !0,
                writable: !0,
                value: impl
            });
        }
};
var goog$global = this || self;
var goog$nullFunction = function () {
};
var goog$typeOf = function (value) {
    var s = typeof value;
    return 'object' != s ? s : value ? Array.isArray(value) ? 'array' : s : 'null';
};
var goog$isObject = function (val) {
    var type = typeof val;
    return 'object' == type && null != val || 'function' == type;
};
var goog$inherits = function (childCtor, parentCtor) {
    function tempCtor() {
    }
    tempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new tempCtor();
    childCtor.prototype.constructor = childCtor;
    childCtor.base = function (me, methodName, var_args) {
        for (var args = Array(arguments.length - 2), i = 2; i < arguments.length; i++)
            args[i - 2] = arguments[i];
        return parentCtor.prototype[methodName].apply(me, args);
    };
};
var goog$identity_ = function (s) {
    return s;
};
var goog$asserts$AssertionError = function (messagePattern, messageArgs) {
    for (var splitParts = messagePattern.split('%s'), returnString = '', subLast = splitParts.length - 1, i = 0; i < subLast; i++)
        returnString += splitParts[i] + (i < messageArgs.length ? messageArgs[i] : '%s');
    debug.Error_DebugError.call(this, returnString + splitParts[subLast]);
};
var goog$asserts$doAssertFailure_ = function (defaultMessage, defaultArgs, givenMessage, givenArgs) {
    var message = 'Assertion failed';
    if (givenMessage) {
        message += ': ' + givenMessage;
        var args = givenArgs;
    } else
        defaultMessage && (message += ': ' + defaultMessage, args = defaultArgs);
    throw new goog$asserts$AssertionError('' + message, args || []);
};
var goog$asserts$assert = function (condition, opt_message, var_args) {
    condition || goog$asserts$doAssertFailure_('', null, opt_message, Array.prototype.slice.call(arguments, 2));
};
var goog$asserts$fail = function (opt_message, var_args) {
    throw new goog$asserts$AssertionError('Failure' + (opt_message ? ': ' + opt_message : ''), Array.prototype.slice.call(arguments, 1));
};
var goog$asserts$assertString = function (value, opt_message, var_args) {
    'string' !== typeof value && goog$asserts$doAssertFailure_('Expected string but got %s: %s.', [
        goog$typeOf(value),
        value
    ], opt_message, Array.prototype.slice.call(arguments, 2));
};
var goog$string$internal$htmlEscape = function (str) {
    if (!goog$string$internal$ALL_RE_.test(str))
        return str;
    -1 != str.indexOf('&') && (str = str.replace(goog$string$internal$AMP_RE_, '&amp;'));
    -1 != str.indexOf('<') && (str = str.replace(goog$string$internal$LT_RE_, '&lt;'));
    -1 != str.indexOf('>') && (str = str.replace(goog$string$internal$GT_RE_, '&gt;'));
    -1 != str.indexOf('"') && (str = str.replace(goog$string$internal$QUOT_RE_, '&quot;'));
    -1 != str.indexOf('\'') && (str = str.replace(goog$string$internal$SINGLE_QUOTE_RE_, '&#39;'));
    -1 != str.indexOf('\0') && (str = str.replace(goog$string$internal$NULL_RE_, '&#0;'));
    return str;
};
var goog$string$internal$AMP_RE_ = /&/g;
var goog$string$internal$LT_RE_ = /</g;
var goog$string$internal$GT_RE_ = />/g;
var goog$string$internal$QUOT_RE_ = /"/g;
var goog$string$internal$SINGLE_QUOTE_RE_ = /'/g;
var goog$string$internal$NULL_RE_ = /\x00/g;
var goog$string$internal$ALL_RE_ = /[\x00&<>"']/;
var JSCompiler_inline_result$jscomp$4;
var goog$reflect$sinkValue = function (x) {
    goog$reflect$sinkValue[' '](x);
    return x;
};
var goog$userAgent$GECKO = -1 != userAgent.util_userAgentInternal.indexOf('Gecko') && !(-1 != userAgent.util_userAgentInternal.toLowerCase().indexOf('webkit') && -1 == userAgent.util_userAgentInternal.indexOf('Edge')) && !(-1 != userAgent.util_userAgentInternal.indexOf('Trident') || -1 != userAgent.util_userAgentInternal.indexOf('MSIE')) && -1 == userAgent.util_userAgentInternal.indexOf('Edge');
var goog$userAgent$WEBKIT = -1 != userAgent.util_userAgentInternal.toLowerCase().indexOf('webkit') && -1 == userAgent.util_userAgentInternal.indexOf('Edge');
var goog$dom$asserts$assertIsElementType_ = function (o) {
    a: {
        try {
            var doc = o && o.ownerDocument, win = doc && (doc.defaultView || doc.parentWindow);
            win = win || goog$global;
            if (win.Element && win.Location) {
                var win$jscomp$0 = win;
                break a;
            }
        } catch (ex) {
        }
        win$jscomp$0 = null;
    }
    if (win$jscomp$0 && 'undefined' != typeof win$jscomp$0.HTMLIFrameElement && (!o || !(o instanceof win$jscomp$0.HTMLIFrameElement) && (o instanceof win$jscomp$0.Location || o instanceof win$jscomp$0.Element))) {
        if (goog$isObject(o))
            try {
                var JSCompiler_inline_result = o.constructor.displayName || o.constructor.name || Object.prototype.toString.call(o);
            } catch (e) {
                JSCompiler_inline_result = '<object could not be stringified>';
            }
        else
            JSCompiler_inline_result = void 0 === o ? 'undefined' : null === o ? 'null' : typeof o;
        goog$asserts$fail('Argument is not a %s (or a non-Element, non-Location mock); got: %s', 'HTMLIFrameElement', JSCompiler_inline_result);
    }
};
var goog$dom$tags$VOID_TAGS_ = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var goog$html$trustedtypes$cachedPolicy_;
var goog$html$trustedtypes$getPolicyPrivateDoNotAccessOrElse = function () {
    if (void 0 === goog$html$trustedtypes$cachedPolicy_) {
        var policy = null, policyFactory = goog$global.trustedTypes;
        if (policyFactory && policyFactory.createPolicy)
            try {
                policy = policyFactory.createPolicy('goog#html', {
                    createHTML: goog$identity_,
                    createScript: goog$identity_,
                    createScriptURL: goog$identity_
                });
            } catch (e) {
                goog$global.console && goog$global.console.error(e.message);
            }
        goog$html$trustedtypes$cachedPolicy_ = policy;
    }
    return goog$html$trustedtypes$cachedPolicy_;
};
var goog$string$Const = function (opt_token, opt_content) {
    this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = opt_token === goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && opt_content || '';
    this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog$string$Const$TYPE_MARKER_;
};
var goog$string$Const$unwrap = function (stringConst) {
    if (stringConst instanceof goog$string$Const && stringConst.constructor === goog$string$Const && stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog$string$Const$TYPE_MARKER_)
        return stringConst.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
    goog$asserts$fail('expected object of type Const, got \'' + stringConst + '\'');
    return 'type_error:Const';
};
var goog$string$Const$TYPE_MARKER_ = {};
var goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
var goog$html$TrustedResourceUrl = class {
    constructor(value, token) {
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = token === goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_ ? value : '';
    }
};
var goog$html$TrustedResourceUrl$unwrapTrustedScriptURL = function (trustedResourceUrl) {
    if (trustedResourceUrl instanceof goog$html$TrustedResourceUrl && trustedResourceUrl.constructor === goog$html$TrustedResourceUrl)
        return trustedResourceUrl.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
    goog$asserts$fail('expected object of type TrustedResourceUrl, got \'' + trustedResourceUrl + '\' of type ' + goog$typeOf(trustedResourceUrl));
    return 'type_error:TrustedResourceUrl';
};
var goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_ = {};
var goog$html$SafeUrl = class {
    constructor(value, token) {
        this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = token === goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_ ? value : '';
    }
};
var goog$html$SafeUrl$unwrap = function (safeUrl) {
    if (safeUrl instanceof goog$html$SafeUrl && safeUrl.constructor === goog$html$SafeUrl)
        return safeUrl.privateDoNotAccessOrElseSafeUrlWrappedValue_;
    goog$asserts$fail('expected object of type SafeUrl, got \'' + safeUrl + '\' of type ' + goog$typeOf(safeUrl));
    return 'type_error:SafeUrl';
};
var goog$html$SAFE_MIME_TYPE_PATTERN_ = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', 'i');
var goog$html$DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
var goog$html$SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
var goog$html$SafeUrl$trySanitize = function (url) {
    if (url instanceof goog$html$SafeUrl)
        return url;
    url = 'object' == typeof url && url.implementsGoogStringTypedString ? url.getTypedStringValue() : String(url);
    if (goog$html$SAFE_URL_PATTERN_.test(url))
        var JSCompiler_temp = new goog$html$SafeUrl(url, goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_);
    else {
        var dataUrl = String(url);
        var filteredDataUrl = dataUrl.replace(/(%0A|%0D)/g, ''), match = filteredDataUrl.match(goog$html$DATA_URL_PATTERN_);
        JSCompiler_temp = match && goog$html$SAFE_MIME_TYPE_PATTERN_.test(match[1]) ? new goog$html$SafeUrl(filteredDataUrl, goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_) : null;
    }
    return JSCompiler_temp;
};
var goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_ = {};
var goog$html$SafeUrl$INNOCUOUS_URL = new goog$html$SafeUrl('about:invalid#zClosurez', goog$html$SafeUrl$CONSTRUCTOR_TOKEN_PRIVATE_);
var goog$dom$safe$NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
var goog$string$toCamelCase = function (str) {
    return String(str).replace(/\-([a-z])/g, function (all, match) {
        return match.toUpperCase();
    });
};
var goog$debug$freezeInternal_ = Object.freeze || function (arg) {
    return arg;
};
var goog$events$Event = function (type, opt_target) {
    this.type = type;
    this.currentTarget = this.target = opt_target;
    this.defaultPrevented = !1;
};
var goog$events$BrowserFeature$PASSIVE_EVENTS = function () {
    if (!goog$global.addEventListener || !Object.defineProperty)
        return !1;
    var passive = !1, options = Object.defineProperty({}, 'passive', {
        get: function () {
            passive = !0;
        }
    });
    try {
        goog$global.addEventListener('test', goog$nullFunction, options), goog$global.removeEventListener('test', goog$nullFunction, options);
    } catch (e) {
    }
    return passive;
}();
var goog$events$BrowserEvent = function (opt_e, opt_currentTarget) {
    goog$events$Event.call(this, opt_e ? opt_e.type : '');
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = '';
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = '';
    this.event_ = null;
    opt_e && this.init(opt_e, opt_currentTarget);
};
var goog$events$BrowserEvent$IE_POINTER_TYPE_MAP = goog$debug$freezeInternal_({
    2: 'touch',
    3: 'pen',
    4: 'mouse'
});
var goog$events$Listenable$IMPLEMENTED_BY_PROP = 'closure_listenable_' + (1000000 * Math.random() | 0);
var goog$events$ListenableKey$counter_ = 0;
var goog$events$Listener = function (listener, src, type, capture, opt_handler) {
    this.listener = listener;
    this.proxy = null;
    this.src = src;
    this.type = type;
    this.capture = !!capture;
    this.handler = opt_handler;
    this.key = ++goog$events$ListenableKey$counter_;
    this.removed = this.callOnce = !1;
};
var JSCompiler_StaticMethods_markAsRemoved = function (JSCompiler_StaticMethods_markAsRemoved$self) {
    JSCompiler_StaticMethods_markAsRemoved$self.removed = !0;
    JSCompiler_StaticMethods_markAsRemoved$self.listener = null;
    JSCompiler_StaticMethods_markAsRemoved$self.proxy = null;
    JSCompiler_StaticMethods_markAsRemoved$self.src = null;
    JSCompiler_StaticMethods_markAsRemoved$self.handler = null;
};
var goog$events$ListenerMap = function (src) {
    this.src = src;
    this.listeners = {};
    this.typeCount_ = 0;
};
var goog$events$ListenerMap$findListenerIndex_ = function (listenerArray, listener, opt_useCapture, opt_listenerScope) {
    for (var i = 0; i < listenerArray.length; ++i) {
        var listenerObj = listenerArray[i];
        if (!listenerObj.removed && listenerObj.listener == listener && listenerObj.capture == !!opt_useCapture && listenerObj.handler == opt_listenerScope)
            return i;
    }
    return -1;
};
var goog$events$LISTENER_MAP_PROP_ = 'closure_lm_' + (1000000 * Math.random() | 0);
var goog$events$onStringMap_ = {};
var goog$events$listenerCountEstimate_ = 0;
var goog$events$getProxy = function () {
    const proxyCallbackFunction = goog$events$handleBrowserEvent_, f = function (eventObject) {
        return proxyCallbackFunction.call(f.src, f.listener, eventObject);
    };
    return f;
};
var goog$events$listenOnce = function (src, type, listener, opt_options$jscomp$0, opt_handler) {
    if (Array.isArray(type))
        for (var i = 0; i < type.length; i++)
            goog$events$listenOnce(src, type[i], listener, opt_options$jscomp$0, opt_handler);
    else if (listener = goog$events$wrapListener(listener), src && src[goog$events$Listenable$IMPLEMENTED_BY_PROP])
        src.listenOnce(type, listener, goog$isObject(opt_options$jscomp$0) ? !!opt_options$jscomp$0.capture : !!opt_options$jscomp$0, opt_handler);
    else {
        var opt_options = opt_options$jscomp$0;
        if (!type)
            throw Error('Invalid event type');
        var capture = goog$isObject(opt_options) ? !!opt_options.capture : !!opt_options, listenerMap = goog$events$getListenerMap_(src);
        listenerMap || (src[goog$events$LISTENER_MAP_PROP_] = listenerMap = new goog$events$ListenerMap(src));
        var listenerObj = listenerMap.add(type, listener, !0, capture, opt_handler);
        if (!listenerObj.proxy) {
            var proxy = goog$events$getProxy();
            listenerObj.proxy = proxy;
            proxy.src = src;
            proxy.listener = listenerObj;
            if (src.addEventListener)
                goog$events$BrowserFeature$PASSIVE_EVENTS || (opt_options = capture), void 0 === opt_options && (opt_options = !1), src.addEventListener(type.toString(), proxy, opt_options);
            else if (src.attachEvent)
                src.attachEvent(goog$events$getOnString_(type.toString()), proxy);
            else if (src.addListener && src.removeListener)
                goog$asserts$assert('change' === type, 'MediaQueryList only has a change event'), src.addListener(proxy);
            else
                throw Error('addEventListener and attachEvent are unavailable.');
            goog$events$listenerCountEstimate_++;
        }
    }
};
var goog$events$getOnString_ = function (type) {
    return type in goog$events$onStringMap_ ? goog$events$onStringMap_[type] : goog$events$onStringMap_[type] = 'on' + type;
};
var goog$events$handleBrowserEvent_ = function (listener, opt_evt) {
    if (listener.removed)
        var JSCompiler_temp = !0;
    else {
        var eventObject = new goog$events$BrowserEvent(opt_evt, this), listenerFn = listener.listener, listenerHandler = listener.handler || listener.src;
        if (listener.callOnce && 'number' !== typeof listener && listener && !listener.removed) {
            var src = listener.src;
            if (src && src[goog$events$Listenable$IMPLEMENTED_BY_PROP])
                src.unlistenByKey(listener);
            else {
                var type = listener.type, proxy = listener.proxy;
                src.removeEventListener ? src.removeEventListener(type, proxy, listener.capture) : src.detachEvent ? src.detachEvent(goog$events$getOnString_(type), proxy) : src.addListener && src.removeListener && src.removeListener(proxy);
                goog$events$listenerCountEstimate_--;
                var listenerMap = goog$events$getListenerMap_(src);
                if (listenerMap) {
                    var type$jscomp$0 = listener.type, JSCompiler_temp$jscomp$0;
                    if (JSCompiler_temp$jscomp$0 = type$jscomp$0 in listenerMap.listeners) {
                        var arr = listenerMap.listeners[type$jscomp$0];
                        const i = goog.array_indexOf(arr, listener);
                        let rv;
                        if (rv = 0 <= i) {
                            var i$jscomp$0 = i;
                            goog$asserts$assert(null != arr.length);
                            Array.prototype.splice.call(arr, i$jscomp$0, 1);
                        }
                        JSCompiler_temp$jscomp$0 = rv;
                    }
                    JSCompiler_temp$jscomp$0 && (JSCompiler_StaticMethods_markAsRemoved(listener), 0 == listenerMap.listeners[type$jscomp$0].length && (delete listenerMap.listeners[type$jscomp$0], listenerMap.typeCount_--));
                    0 == listenerMap.typeCount_ && (listenerMap.src = null, src[goog$events$LISTENER_MAP_PROP_] = null);
                } else
                    JSCompiler_StaticMethods_markAsRemoved(listener);
            }
        }
        JSCompiler_temp = listenerFn.call(listenerHandler, eventObject);
    }
    return JSCompiler_temp;
};
var goog$events$getListenerMap_ = function (src) {
    var listenerMap = src[goog$events$LISTENER_MAP_PROP_];
    return listenerMap instanceof goog$events$ListenerMap ? listenerMap : null;
};
var goog$events$LISTENER_WRAPPER_PROP_ = '__closure_events_fn_' + (1000000000 * Math.random() >>> 0);
var goog$events$wrapListener = function (listener) {
    goog$asserts$assert(listener, 'Listener can not be null.');
    if ('function' === typeof listener)
        return listener;
    goog$asserts$assert(listener.handleEvent, 'An object listener must have handleEvent method.');
    listener[goog$events$LISTENER_WRAPPER_PROP_] || (listener[goog$events$LISTENER_WRAPPER_PROP_] = function (e) {
        return listener.handleEvent(e);
    });
    return listener[goog$events$LISTENER_WRAPPER_PROP_];
};
var JSCompiler_StaticMethods_generateNonce_ = function () {
    const result = (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(16));
    return Array.prototype.join.call(result, '.');
};
var parts$jscomp$inline_985 = ['SafeDownloader'];
var cur$jscomp$inline_986 = goog$global;
var goog$log$Level = class {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    toString() {
        return this.name;
    }
};
var goog$log$Level$OFF = new goog$log$Level('OFF', Infinity);
var goog$log$Level$WARNING = new goog$log$Level('WARNING', 900);
var goog$log$Level$CONFIG = new goog$log$Level('CONFIG', 700);
var goog$log$LogBuffer = class {
    constructor() {
        this.capacity_ = 0;
        this.clear();
    }
    clear() {
        this.buffer_ = Array(this.capacity_);
        this.curIndex_ = -1;
        this.isFull_ = !1;
    }
};
var goog$log$LogBuffer$instance_;
var goog$log$LogRecord = class {
    constructor(level, msg, loggerName) {
        this.reset(level || goog$log$Level$OFF, msg, loggerName, void 0, void 0);
    }
    reset() {
    }
};
var JSCompiler_StaticMethods_getEffectiveLevel = function (JSCompiler_StaticMethods_getEffectiveLevel$self) {
    if (JSCompiler_StaticMethods_getEffectiveLevel$self.level)
        return JSCompiler_StaticMethods_getEffectiveLevel$self.level;
    if (JSCompiler_StaticMethods_getEffectiveLevel$self.parent)
        return JSCompiler_StaticMethods_getEffectiveLevel(JSCompiler_StaticMethods_getEffectiveLevel$self.parent);
    goog$asserts$fail('Root logger has no level set.');
    return goog$log$Level$OFF;
};
var JSCompiler_StaticMethods_publish = function (JSCompiler_StaticMethods_publish$self, logRecord) {
    let target = JSCompiler_StaticMethods_publish$self;
    for (; target;)
        target.handlers.forEach(handler => {
            handler(logRecord);
        }), target = target.parent;
};
var goog$log$LogRegistryEntry_ = class {
    constructor(name, parent = null) {
        this.level = null;
        this.handlers = [];
        this.parent = parent || null;
        this.children = [];
        this.logger = { getName: () => name };
    }
};
var JSCompiler_StaticMethods_getLogRegistryEntry = function (JSCompiler_StaticMethods_getLogRegistryEntry$self, name, level) {
    const entry = JSCompiler_StaticMethods_getLogRegistryEntry$self.entries[name];
    if (entry)
        return void 0 !== level && (entry.level = level), entry;
    const parentLogRegistryEntry = JSCompiler_StaticMethods_getLogRegistryEntry(JSCompiler_StaticMethods_getLogRegistryEntry$self, name.substr(0, name.lastIndexOf('.'))), logRegistryEntry = new goog$log$LogRegistryEntry_(name, parentLogRegistryEntry);
    JSCompiler_StaticMethods_getLogRegistryEntry$self.entries[name] = logRegistryEntry;
    parentLogRegistryEntry.children.push(logRegistryEntry);
    void 0 !== level && (logRegistryEntry.level = level);
    return logRegistryEntry;
};
var goog$log$LogRegistry_ = class {
    constructor() {
        this.entries = {};
        const rootLogRegistryEntry = new goog$log$LogRegistryEntry_('');
        rootLogRegistryEntry.level = goog$log$Level$CONFIG;
        this.entries[''] = rootLogRegistryEntry;
    }
};
var goog$log$LogRegistry_$instance_;
var goog$log$LogRegistry_$getInstance = function () {
    goog$log$LogRegistry_$instance_ || (goog$log$LogRegistry_$instance_ = new goog$log$LogRegistry_());
    return goog$log$LogRegistry_$instance_;
};
var JSCompiler_StaticMethods_setConnected = function (JSCompiler_StaticMethods_setConnected$self, isConnected) {
    var _a;
    if (void 0 === JSCompiler_StaticMethods_setConnected$self._$parent)
        JSCompiler_StaticMethods_setConnected$self.__isConnected = isConnected, null === (_a = JSCompiler_StaticMethods_setConnected$self._$notifyConnectionChanged) || void 0 === _a ? void 0 : _a.call(JSCompiler_StaticMethods_setConnected$self, isConnected);
    else
        throw Error('part.setConnected() may only be called on a RootPart returned from render().');
};
var JSCompiler_StaticMethods_getPropertyDescriptor = function (name, key, options) {
    return {
        get() {
            return this[key];
        },
        set(value) {
            const oldValue = this[name];
            this[key] = value;
            JSCompiler_StaticMethods_requestUpdate(this, name, oldValue, options);
        },
        configurable: !0,
        enumerable: !0
    };
};
var JSCompiler_StaticMethods_createProperty = function (JSCompiler_StaticMethods_createProperty$self, name, options = reactive.$n2delement_defaultPropertyDeclaration) {
    options.state && (options.attribute = !1);
    JSCompiler_StaticMethods_createProperty$self.finalize();
    JSCompiler_StaticMethods_createProperty$self.elementProperties.set(name, options);
    if (!options.noAccessor && !JSCompiler_StaticMethods_createProperty$self.prototype.hasOwnProperty(name)) {
        const descriptor = JSCompiler_StaticMethods_getPropertyDescriptor(name, 'symbol' === typeof name ? Symbol() : `__${name}`, options);
        void 0 !== descriptor && Object.defineProperty(JSCompiler_StaticMethods_createProperty$self.prototype, name, descriptor);
    }
};
var JSCompiler_StaticMethods_requestUpdate = function (JSCompiler_StaticMethods_requestUpdate$self, name, oldValue, options) {
    let shouldRequestUpdate = !0;
    void 0 !== name && (options = options || JSCompiler_StaticMethods_requestUpdate$self.constructor.elementProperties.get(name) || reactive.$n2delement_defaultPropertyDeclaration, (options.hasChanged || google3.notEqual)(JSCompiler_StaticMethods_requestUpdate$self[name], oldValue) ? (JSCompiler_StaticMethods_requestUpdate$self._$changedProperties.has(name) || JSCompiler_StaticMethods_requestUpdate$self._$changedProperties.set(name, oldValue), !0 === options.reflect && JSCompiler_StaticMethods_requestUpdate$self.__reflectingProperty !== name && (void 0 === JSCompiler_StaticMethods_requestUpdate$self.__reflectingProperties && (JSCompiler_StaticMethods_requestUpdate$self.__reflectingProperties = new Map()), JSCompiler_StaticMethods_requestUpdate$self.__reflectingProperties.set(name, options))) : shouldRequestUpdate = !1);
    !JSCompiler_StaticMethods_requestUpdate$self.isUpdatePending && shouldRequestUpdate && (JSCompiler_StaticMethods_requestUpdate$self.__updatePromise = JSCompiler_StaticMethods_requestUpdate$self.__enqueueUpdate());
};
var JSCompiler_StaticMethods_finalizeStyles = function (styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
        const set = new Set(styles.flat(Infinity).reverse());
        for (const s of set)
            elementStyles.unshift(google3.getCompatibleStyle(s));
    } else
        void 0 !== styles && elementStyles.push(google3.getCompatibleStyle(styles));
    return elementStyles;
};
var JSCompiler_StaticMethods_performUpdate = function (JSCompiler_StaticMethods_performUpdate$self) {
    var _a$jscomp$0;
    if (JSCompiler_StaticMethods_performUpdate$self.isUpdatePending) {
        if (!JSCompiler_StaticMethods_performUpdate$self.hasUpdated) {
            const shadowedProperties = [];
            JSCompiler_StaticMethods_performUpdate$self.constructor.elementProperties.forEach((_v, p) => {
                var _a;
                !JSCompiler_StaticMethods_performUpdate$self.hasOwnProperty(p) || (null === (_a = JSCompiler_StaticMethods_performUpdate$self.__instanceProperties) || void 0 === _a ? 0 : _a.has(p)) || shadowedProperties.push(p);
            });
            shadowedProperties.length && !JSCompiler_StaticMethods_performUpdate$self.__allowInstanceProperties && console.warn('The following properties will not trigger updates as expected because they are set using class fields: ' + `${shadowedProperties.join(', ')}. ` + 'Native class fields and some compiled output will overwrite accessors used for detecting changes. To fix this issue, either initialize properties in the constructor or adjust your compiler settings; for example, for TypeScript set `useDefineForClassFields: false` in your `tsconfig.json`.');
        }
        JSCompiler_StaticMethods_performUpdate$self.__instanceProperties && (JSCompiler_StaticMethods_performUpdate$self.__instanceProperties.forEach((v, p) => JSCompiler_StaticMethods_performUpdate$self[p] = v), JSCompiler_StaticMethods_performUpdate$self.__instanceProperties = void 0);
        var shouldUpdate = !1, changedProperties = JSCompiler_StaticMethods_performUpdate$self._$changedProperties;
        try {
            shouldUpdate = !0, null === (_a$jscomp$0 = JSCompiler_StaticMethods_performUpdate$self.__controllers) || void 0 === _a$jscomp$0 ? void 0 : _a$jscomp$0.forEach(c => {
                var _a;
                return null === (_a = c.hostUpdate) || void 0 === _a ? void 0 : _a.call(c);
            }), JSCompiler_StaticMethods_performUpdate$self.update(changedProperties);
        } catch (e) {
            throw shouldUpdate = !1, JSCompiler_StaticMethods_performUpdate$self.__markUpdated(), e;
        }
        shouldUpdate && JSCompiler_StaticMethods_performUpdate$self._$didUpdate(changedProperties);
    }
};
var JSCompiler_StaticMethods_cancelAll = function (JSCompiler_StaticMethods_cancelAll$self) {
    JSCompiler_StaticMethods_cancelAll$self.rafIDs.forEach((_, key) => {
        JSCompiler_StaticMethods_cancelAll$self.cancel(key);
    });
};
var JSCompiler_StaticMethods_handleScrollEvent = function (JSCompiler_StaticMethods_handleScrollEvent$self) {
    JSCompiler_StaticMethods_handleScrollEvent$self.animFrame.request('poll_scroll_position', () => {
        JSCompiler_StaticMethods_toggleScrollDividerHeader(JSCompiler_StaticMethods_handleScrollEvent$self);
        JSCompiler_StaticMethods_toggleScrollDividerFooter(JSCompiler_StaticMethods_handleScrollEvent$self);
    });
};
var JSCompiler_StaticMethods_handleAnimationTimerEnd = function (JSCompiler_StaticMethods_handleAnimationTimerEnd$self) {
    JSCompiler_StaticMethods_handleAnimationTimerEnd$self.animationTimer = 0;
    JSCompiler_StaticMethods_handleAnimationTimerEnd$self.adapter.removeClass(google3.cssClasses.OPENING);
    JSCompiler_StaticMethods_handleAnimationTimerEnd$self.adapter.removeClass(google3.cssClasses.CLOSING);
};
var JSCompiler_StaticMethods_runNextAnimationFrame = function (JSCompiler_StaticMethods_runNextAnimationFrame$self, callback) {
    cancelAnimationFrame(JSCompiler_StaticMethods_runNextAnimationFrame$self.animationFrame);
    JSCompiler_StaticMethods_runNextAnimationFrame$self.animationFrame = requestAnimationFrame(() => {
        JSCompiler_StaticMethods_runNextAnimationFrame$self.animationFrame = 0;
        clearTimeout(JSCompiler_StaticMethods_runNextAnimationFrame$self.animationTimer);
        JSCompiler_StaticMethods_runNextAnimationFrame$self.animationTimer = setTimeout(callback, 0);
    });
};
var JSCompiler_StaticMethods_toggleScrollDividerHeader = function (JSCompiler_StaticMethods_toggleScrollDividerHeader$self) {
    JSCompiler_StaticMethods_toggleScrollDividerHeader$self.adapter.isScrollableContentAtTop() ? JSCompiler_StaticMethods_toggleScrollDividerHeader$self.adapter.hasClass(google3.cssClasses.SCROLL_DIVIDER_HEADER) && JSCompiler_StaticMethods_toggleScrollDividerHeader$self.adapter.removeClass(google3.cssClasses.SCROLL_DIVIDER_HEADER) : JSCompiler_StaticMethods_toggleScrollDividerHeader$self.adapter.addClass(google3.cssClasses.SCROLL_DIVIDER_HEADER);
};
var JSCompiler_StaticMethods_toggleScrollDividerFooter = function (JSCompiler_StaticMethods_toggleScrollDividerFooter$self) {
    JSCompiler_StaticMethods_toggleScrollDividerFooter$self.adapter.isScrollableContentAtBottom() ? JSCompiler_StaticMethods_toggleScrollDividerFooter$self.adapter.hasClass(google3.cssClasses.SCROLL_DIVIDER_FOOTER) && JSCompiler_StaticMethods_toggleScrollDividerFooter$self.adapter.removeClass(google3.cssClasses.SCROLL_DIVIDER_FOOTER) : JSCompiler_StaticMethods_toggleScrollDividerFooter$self.adapter.addClass(google3.cssClasses.SCROLL_DIVIDER_FOOTER);
};
var JSCompiler_StaticMethods_float = function (JSCompiler_StaticMethods_float$self, shouldFloat) {
    const LABEL_FLOAT_ABOVE = google3.MDCFloatingLabelFoundation.cssClasses.LABEL_FLOAT_ABOVE, LABEL_SHAKE = google3.MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    shouldFloat ? JSCompiler_StaticMethods_float$self.adapter.addClass(LABEL_FLOAT_ABOVE) : (JSCompiler_StaticMethods_float$self.adapter.removeClass(LABEL_FLOAT_ABOVE), JSCompiler_StaticMethods_float$self.adapter.removeClass(LABEL_SHAKE));
};
var JSCompiler_StaticMethods_setAnchorMargin = function (JSCompiler_StaticMethods_setAnchorMargin$self, margin) {
    JSCompiler_StaticMethods_setAnchorMargin$self.anchorMargin.top = margin.top || 0;
    JSCompiler_StaticMethods_setAnchorMargin$self.anchorMargin.right = margin.right || 0;
    JSCompiler_StaticMethods_setAnchorMargin$self.anchorMargin.bottom = margin.bottom || 0;
    JSCompiler_StaticMethods_setAnchorMargin$self.anchorMargin.left = margin.left || 0;
};
var JSCompiler_StaticMethods_autoposition = function (JSCompiler_StaticMethods_autoposition$self) {
    let anchorRect = JSCompiler_StaticMethods_autoposition$self.adapter.getAnchorDimensions();
    const bodySize = JSCompiler_StaticMethods_autoposition$self.adapter.getBodyDimensions(), viewportSize$jscomp$0 = JSCompiler_StaticMethods_autoposition$self.adapter.getWindowDimensions(), windowScroll$jscomp$0 = JSCompiler_StaticMethods_autoposition$self.adapter.getWindowScroll();
    anchorRect || (anchorRect = {
        top: JSCompiler_StaticMethods_autoposition$self.position.y,
        right: JSCompiler_StaticMethods_autoposition$self.position.x,
        bottom: JSCompiler_StaticMethods_autoposition$self.position.y,
        left: JSCompiler_StaticMethods_autoposition$self.position.x,
        width: 0,
        height: 0
    });
    JSCompiler_StaticMethods_autoposition$self.measurements = {
        anchorSize: anchorRect,
        bodySize,
        surfaceSize: JSCompiler_StaticMethods_autoposition$self.dimensions,
        viewportDistance: {
            top: anchorRect.top,
            right: viewportSize$jscomp$0.width - anchorRect.right,
            bottom: viewportSize$jscomp$0.height - anchorRect.bottom,
            left: anchorRect.left
        },
        viewportSize: viewportSize$jscomp$0,
        windowScroll: windowScroll$jscomp$0
    };
    let corner = JSCompiler_StaticMethods_autoposition$self.originCorner;
    const viewportDistance$jscomp$0 = JSCompiler_StaticMethods_autoposition$self.measurements.viewportDistance, anchorSize$jscomp$0 = JSCompiler_StaticMethods_autoposition$self.measurements.anchorSize, surfaceSize$jscomp$0 = JSCompiler_StaticMethods_autoposition$self.measurements.surfaceSize, MARGIN_TO_EDGE = google3.MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
    let availableTop, availableBottom;
    JSCompiler_StaticMethods_autoposition$self.anchorCorner & 1 ? (availableTop = viewportDistance$jscomp$0.top - MARGIN_TO_EDGE + JSCompiler_StaticMethods_autoposition$self.anchorMargin.bottom, availableBottom = viewportDistance$jscomp$0.bottom - MARGIN_TO_EDGE - JSCompiler_StaticMethods_autoposition$self.anchorMargin.bottom) : (availableTop = viewportDistance$jscomp$0.top - MARGIN_TO_EDGE + JSCompiler_StaticMethods_autoposition$self.anchorMargin.top, availableBottom = viewportDistance$jscomp$0.bottom - MARGIN_TO_EDGE + anchorSize$jscomp$0.height - JSCompiler_StaticMethods_autoposition$self.anchorMargin.top);
    !(0 < availableBottom - surfaceSize$jscomp$0.height) && availableTop > availableBottom + JSCompiler_StaticMethods_autoposition$self.openBottomBias && (corner |= 1);
    const isRtl = JSCompiler_StaticMethods_autoposition$self.adapter.isRtl(), isFlipRtl = !!(JSCompiler_StaticMethods_autoposition$self.anchorCorner & 8), hasRightBit = !!(JSCompiler_StaticMethods_autoposition$self.anchorCorner & 4) || !!(corner & 4);
    let isAnchoredToRight;
    isAnchoredToRight = isRtl && isFlipRtl ? !hasRightBit : hasRightBit;
    let availableLeft, availableRight;
    isAnchoredToRight ? (availableLeft = viewportDistance$jscomp$0.left + anchorSize$jscomp$0.width + JSCompiler_StaticMethods_autoposition$self.anchorMargin.right, availableRight = viewportDistance$jscomp$0.right - JSCompiler_StaticMethods_autoposition$self.anchorMargin.right) : (availableLeft = viewportDistance$jscomp$0.left + JSCompiler_StaticMethods_autoposition$self.anchorMargin.left, availableRight = viewportDistance$jscomp$0.right + anchorSize$jscomp$0.width - JSCompiler_StaticMethods_autoposition$self.anchorMargin.left);
    const isAvailableLeft = 0 < availableLeft - surfaceSize$jscomp$0.width, isAvailableRight = 0 < availableRight - surfaceSize$jscomp$0.width, isOriginCornerAlignedToEnd = !!(corner & 8) && !!(corner & 4);
    if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd)
        corner ^= 4;
    else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight)
        corner |= 4;
    var JSCompiler_inline_result = corner;
    if (0 < JSCompiler_StaticMethods_autoposition$self.maxHeight)
        var JSCompiler_inline_result$jscomp$0 = JSCompiler_StaticMethods_autoposition$self.maxHeight;
    else {
        var viewportDistance$jscomp$1 = JSCompiler_StaticMethods_autoposition$self.measurements.viewportDistance, isBottomAnchored = !!(JSCompiler_StaticMethods_autoposition$self.anchorCorner & 1), MARGIN_TO_EDGE$jscomp$0 = google3.MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        if (JSCompiler_inline_result & 1) {
            var maxHeight = viewportDistance$jscomp$1.top + JSCompiler_StaticMethods_autoposition$self.anchorMargin.top - MARGIN_TO_EDGE$jscomp$0;
            isBottomAnchored || (maxHeight += JSCompiler_StaticMethods_autoposition$self.measurements.anchorSize.height);
        } else
            maxHeight = viewportDistance$jscomp$1.bottom - JSCompiler_StaticMethods_autoposition$self.anchorMargin.bottom + JSCompiler_StaticMethods_autoposition$self.measurements.anchorSize.height - MARGIN_TO_EDGE$jscomp$0, isBottomAnchored && (maxHeight -= JSCompiler_StaticMethods_autoposition$self.measurements.anchorSize.height);
        JSCompiler_inline_result$jscomp$0 = maxHeight;
    }
    const maxMenuSurfaceHeight = JSCompiler_inline_result$jscomp$0, verticalAlignment = JSCompiler_inline_result & 1 ? 'bottom' : 'top';
    let horizontalAlignment = JSCompiler_inline_result & 4 ? 'right' : 'left';
    {
        const anchorSize = JSCompiler_StaticMethods_autoposition$self.measurements.anchorSize, avoidHorizontalOverlap = !!(JSCompiler_StaticMethods_autoposition$self.anchorCorner & 4);
        if (JSCompiler_inline_result & 4) {
            const rightOffset = avoidHorizontalOverlap ? anchorSize.width - JSCompiler_StaticMethods_autoposition$self.anchorMargin.left : JSCompiler_StaticMethods_autoposition$self.anchorMargin.right;
            var JSCompiler_inline_result$jscomp$1 = JSCompiler_StaticMethods_autoposition$self.isHoistedElement || JSCompiler_StaticMethods_autoposition$self.isFixedPosition ? rightOffset - (JSCompiler_StaticMethods_autoposition$self.measurements.viewportSize.width - JSCompiler_StaticMethods_autoposition$self.measurements.bodySize.width) : rightOffset;
        } else
            JSCompiler_inline_result$jscomp$1 = avoidHorizontalOverlap ? anchorSize.width - JSCompiler_StaticMethods_autoposition$self.anchorMargin.right : JSCompiler_StaticMethods_autoposition$self.anchorMargin.left;
    }
    const anchorSize$jscomp$1 = JSCompiler_StaticMethods_autoposition$self.measurements.anchorSize, avoidVerticalOverlap = !!(JSCompiler_StaticMethods_autoposition$self.anchorCorner & 1), position = {
        [horizontalAlignment]: JSCompiler_inline_result$jscomp$1,
        [verticalAlignment]: JSCompiler_inline_result & 1 ? avoidVerticalOverlap ? anchorSize$jscomp$1.height - JSCompiler_StaticMethods_autoposition$self.anchorMargin.top : -JSCompiler_StaticMethods_autoposition$self.anchorMargin.bottom : avoidVerticalOverlap ? anchorSize$jscomp$1.height + JSCompiler_StaticMethods_autoposition$self.anchorMargin.bottom : JSCompiler_StaticMethods_autoposition$self.anchorMargin.top
    };
    JSCompiler_StaticMethods_autoposition$self.measurements.anchorSize.width / JSCompiler_StaticMethods_autoposition$self.measurements.surfaceSize.width > google3.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (horizontalAlignment = 'center');
    if (JSCompiler_StaticMethods_autoposition$self.isHoistedElement || JSCompiler_StaticMethods_autoposition$self.isFixedPosition) {
        const windowScroll = JSCompiler_StaticMethods_autoposition$self.measurements.windowScroll, viewportDistance = JSCompiler_StaticMethods_autoposition$self.measurements.viewportDistance, surfaceSize = JSCompiler_StaticMethods_autoposition$self.measurements.surfaceSize, viewportSize = JSCompiler_StaticMethods_autoposition$self.measurements.viewportSize, props = Object.keys(position);
        for (const prop of props) {
            let value = position[prop] || 0;
            !JSCompiler_StaticMethods_autoposition$self.isHorizontallyCenteredOnViewport || 'left' !== prop && 'right' !== prop ? (value += viewportDistance[prop], JSCompiler_StaticMethods_autoposition$self.isFixedPosition || (value = 'top' === prop ? value + windowScroll.y : 'bottom' === prop ? value - windowScroll.y : 'left' === prop ? value + windowScroll.x : value - windowScroll.x), position[prop] = value) : position[prop] = (viewportSize.width - surfaceSize.width) / 2;
        }
    }
    JSCompiler_StaticMethods_autoposition$self.adapter.setTransformOrigin(`${horizontalAlignment} ${verticalAlignment}`);
    JSCompiler_StaticMethods_autoposition$self.adapter.setPosition(position);
    JSCompiler_StaticMethods_autoposition$self.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
    JSCompiler_inline_result & 1 || JSCompiler_StaticMethods_autoposition$self.adapter.addClass(google3.MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
};
var JSCompiler_StaticMethods_maybeRestoreFocus = function (JSCompiler_StaticMethods_maybeRestoreFocus$self) {
    const isRootFocused = JSCompiler_StaticMethods_maybeRestoreFocus$self.adapter.isFocused(), childHasFocus = (JSCompiler_StaticMethods_maybeRestoreFocus$self.adapter.getOwnerDocument ? JSCompiler_StaticMethods_maybeRestoreFocus$self.adapter.getOwnerDocument() : document).activeElement && !1;
    (isRootFocused || childHasFocus) && setTimeout(() => {
        JSCompiler_StaticMethods_maybeRestoreFocus$self.adapter.restoreFocus();
    }, google3.numbers.TOUCH_EVENT_WAIT_MS);
};
var JSCompiler_StaticMethods_handleItemAction = function (JSCompiler_StaticMethods_handleItemAction$self, listItem) {
    const index = JSCompiler_StaticMethods_handleItemAction$self.adapter.getElementIndex(listItem);
    if (!(0 > index)) {
        JSCompiler_StaticMethods_handleItemAction$self.adapter.notifySelected({ index });
        var skipRestoreFocus = 'true' === JSCompiler_StaticMethods_handleItemAction$self.adapter.getAttributeFromElementAtIndex(index, google3.strings.SKIP_RESTORE_FOCUS);
        JSCompiler_StaticMethods_handleItemAction$self.adapter.closeSurface(skipRestoreFocus);
        JSCompiler_StaticMethods_handleItemAction$self.closeAnimationEndTimerId = setTimeout(() => {
            const recomputedIndex = JSCompiler_StaticMethods_handleItemAction$self.adapter.getElementIndex(listItem);
            0 <= recomputedIndex && JSCompiler_StaticMethods_handleItemAction$self.adapter.isSelectableItemAtIndex(recomputedIndex) && JSCompiler_StaticMethods_handleItemAction$self.setSelectedIndex(recomputedIndex);
        }, google3.MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    }
};
var JSCompiler_StaticMethods_defaultActivationState = function () {
    return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
    };
};
var JSCompiler_StaticMethods_runDeactivationUXLogicIfReady = function (JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self) {
    const FG_DEACTIVATION = google3.MDCRippleFoundation.cssClasses.FG_DEACTIVATION, isActivated = JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self.activationState.isActivated;
    !JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self.activationState.hasDeactivationUXRun && isActivated || !JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self.activationAnimationHasEnded || (JSCompiler_StaticMethods_rmBoundedActivationClasses(JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self), JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self.adapter.addClass(FG_DEACTIVATION), JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self.fgDeactivationRemovalTimer = setTimeout(() => {
        JSCompiler_StaticMethods_runDeactivationUXLogicIfReady$self.adapter.removeClass(FG_DEACTIVATION);
    }, google3.numbers.FG_DEACTIVATION_MS));
};
var JSCompiler_StaticMethods_activateImpl = function (JSCompiler_StaticMethods_activateImpl$self, evt) {
    if (!JSCompiler_StaticMethods_activateImpl$self.adapter.isSurfaceDisabled()) {
        var activationState = JSCompiler_StaticMethods_activateImpl$self.activationState;
        if (!activationState.isActivated) {
            var previousActivationEvent = JSCompiler_StaticMethods_activateImpl$self.previousActivationEvent;
            previousActivationEvent && void 0 !== evt && previousActivationEvent.type !== evt.type || (activationState.isActivated = !0, activationState.isProgrammatic = void 0 === evt, activationState.activationEvent = evt, activationState.wasActivatedByPointer = activationState.isProgrammatic ? !1 : void 0 !== evt && ('mousedown' === evt.type || 'touchstart' === evt.type || 'pointerdown' === evt.type), void 0 !== evt && 0 < ripple.foundation_activatedTargets.length && ripple.foundation_activatedTargets.some(() => !0) ? JSCompiler_StaticMethods_resetActivationState(JSCompiler_StaticMethods_activateImpl$self) : (void 0 !== evt && (ripple.foundation_activatedTargets.push(evt.target), JSCompiler_StaticMethods_registerDeactivationHandlers(JSCompiler_StaticMethods_activateImpl$self, evt)), activationState.wasElementMadeActive = void 0 !== evt && 'keydown' === evt.type ? JSCompiler_StaticMethods_activateImpl$self.adapter.isSurfaceActive() : !0, activationState.wasElementMadeActive && JSCompiler_StaticMethods_animateActivation(JSCompiler_StaticMethods_activateImpl$self), requestAnimationFrame(() => {
                ripple.foundation_activatedTargets = [];
                activationState.wasElementMadeActive || void 0 === evt || ' ' !== evt.key && 32 !== evt.keyCode || (activationState.wasElementMadeActive = void 0 !== evt && 'keydown' === evt.type ? JSCompiler_StaticMethods_activateImpl$self.adapter.isSurfaceActive() : !0, activationState.wasElementMadeActive && JSCompiler_StaticMethods_animateActivation(JSCompiler_StaticMethods_activateImpl$self));
                activationState.wasElementMadeActive || (JSCompiler_StaticMethods_activateImpl$self.activationState = JSCompiler_StaticMethods_defaultActivationState());
            })));
        }
    }
};
var JSCompiler_StaticMethods_deactivateImpl = function (JSCompiler_StaticMethods_deactivateImpl$self) {
    const activationState = JSCompiler_StaticMethods_deactivateImpl$self.activationState;
    if (activationState.isActivated) {
        var state = Object.assign({}, activationState);
        activationState.isProgrammatic ? (requestAnimationFrame(() => {
            JSCompiler_StaticMethods_animateDeactivation(JSCompiler_StaticMethods_deactivateImpl$self, state);
        }), JSCompiler_StaticMethods_resetActivationState(JSCompiler_StaticMethods_deactivateImpl$self)) : (JSCompiler_StaticMethods_deregisterDeactivationHandlers(JSCompiler_StaticMethods_deactivateImpl$self), requestAnimationFrame(() => {
            JSCompiler_StaticMethods_deactivateImpl$self.activationState.hasDeactivationUXRun = !0;
            JSCompiler_StaticMethods_animateDeactivation(JSCompiler_StaticMethods_deactivateImpl$self, state);
            JSCompiler_StaticMethods_resetActivationState(JSCompiler_StaticMethods_deactivateImpl$self);
        }));
    }
};
var JSCompiler_StaticMethods_registerRootHandlers = function (JSCompiler_StaticMethods_registerRootHandlers$self) {
    for (const evtType of ripple.foundation_ACTIVATION_EVENT_TYPES)
        JSCompiler_StaticMethods_registerRootHandlers$self.adapter.registerInteractionHandler(evtType, JSCompiler_StaticMethods_registerRootHandlers$self.activateHandler);
    JSCompiler_StaticMethods_registerRootHandlers$self.adapter.registerInteractionHandler('focus', JSCompiler_StaticMethods_registerRootHandlers$self.focusHandler);
    JSCompiler_StaticMethods_registerRootHandlers$self.adapter.registerInteractionHandler('blur', JSCompiler_StaticMethods_registerRootHandlers$self.blurHandler);
};
var JSCompiler_StaticMethods_removeCssVars = function (JSCompiler_StaticMethods_removeCssVars$self) {
    const rippleStrings = google3.MDCRippleFoundation.strings;
    Object.keys(rippleStrings).forEach(key => {
        0 === key.indexOf('VAR_') && JSCompiler_StaticMethods_removeCssVars$self.adapter.updateCssVariable(rippleStrings[key], null);
    });
};
var JSCompiler_StaticMethods_deregisterRootHandlers = function (JSCompiler_StaticMethods_deregisterRootHandlers$self) {
    for (const evtType of ripple.foundation_ACTIVATION_EVENT_TYPES)
        JSCompiler_StaticMethods_deregisterRootHandlers$self.adapter.deregisterInteractionHandler(evtType, JSCompiler_StaticMethods_deregisterRootHandlers$self.activateHandler);
    JSCompiler_StaticMethods_deregisterRootHandlers$self.adapter.deregisterInteractionHandler('focus', JSCompiler_StaticMethods_deregisterRootHandlers$self.focusHandler);
    JSCompiler_StaticMethods_deregisterRootHandlers$self.adapter.deregisterInteractionHandler('blur', JSCompiler_StaticMethods_deregisterRootHandlers$self.blurHandler);
};
var JSCompiler_StaticMethods_deregisterDeactivationHandlers = function (JSCompiler_StaticMethods_deregisterDeactivationHandlers$self) {
    JSCompiler_StaticMethods_deregisterDeactivationHandlers$self.adapter.deregisterInteractionHandler('keyup', JSCompiler_StaticMethods_deregisterDeactivationHandlers$self.deactivateHandler);
    for (const evtType of ripple.foundation_POINTER_DEACTIVATION_EVENT_TYPES);
};
var JSCompiler_StaticMethods_registerDeactivationHandlers = function (JSCompiler_StaticMethods_registerDeactivationHandlers$self, evt) {
    if ('keydown' === evt.type)
        JSCompiler_StaticMethods_registerDeactivationHandlers$self.adapter.registerInteractionHandler('keyup', JSCompiler_StaticMethods_registerDeactivationHandlers$self.deactivateHandler);
    else
        for (const evtType of ripple.foundation_POINTER_DEACTIVATION_EVENT_TYPES);
};
var JSCompiler_StaticMethods_resetActivationState = function (JSCompiler_StaticMethods_resetActivationState$self) {
    JSCompiler_StaticMethods_resetActivationState$self.previousActivationEvent = JSCompiler_StaticMethods_resetActivationState$self.activationState.activationEvent;
    JSCompiler_StaticMethods_resetActivationState$self.activationState = JSCompiler_StaticMethods_defaultActivationState();
    setTimeout(() => JSCompiler_StaticMethods_resetActivationState$self.previousActivationEvent = void 0, google3.MDCRippleFoundation.numbers.TAP_DELAY_MS);
};
var JSCompiler_StaticMethods_animateActivation = function (JSCompiler_StaticMethods_animateActivation$self) {
    const VAR_FG_TRANSLATE_START = google3.MDCRippleFoundation.strings.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = google3.MDCRippleFoundation.strings.VAR_FG_TRANSLATE_END, FG_DEACTIVATION = google3.MDCRippleFoundation.cssClasses.FG_DEACTIVATION, FG_ACTIVATION = google3.MDCRippleFoundation.cssClasses.FG_ACTIVATION, DEACTIVATION_TIMEOUT_MS = google3.MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    JSCompiler_StaticMethods_animateActivation$self.layoutInternal();
    let translateStart = '', translateEnd = '';
    if (!JSCompiler_StaticMethods_animateActivation$self.adapter.isUnbounded()) {
        const { startPoint, endPoint } = JSCompiler_StaticMethods_getFgTranslationCoordinates(JSCompiler_StaticMethods_animateActivation$self);
        translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }
    JSCompiler_StaticMethods_animateActivation$self.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    JSCompiler_StaticMethods_animateActivation$self.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(JSCompiler_StaticMethods_animateActivation$self.activationTimer);
    clearTimeout(JSCompiler_StaticMethods_animateActivation$self.fgDeactivationRemovalTimer);
    JSCompiler_StaticMethods_rmBoundedActivationClasses(JSCompiler_StaticMethods_animateActivation$self);
    JSCompiler_StaticMethods_animateActivation$self.adapter.removeClass(FG_DEACTIVATION);
    JSCompiler_StaticMethods_animateActivation$self.adapter.computeBoundingRect();
    JSCompiler_StaticMethods_animateActivation$self.adapter.addClass(FG_ACTIVATION);
    JSCompiler_StaticMethods_animateActivation$self.activationTimer = setTimeout(() => {
        JSCompiler_StaticMethods_animateActivation$self.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
};
var JSCompiler_StaticMethods_getFgTranslationCoordinates = function (JSCompiler_StaticMethods_getFgTranslationCoordinates$self) {
    const activationEvent = JSCompiler_StaticMethods_getFgTranslationCoordinates$self.activationState.activationEvent;
    let startPoint;
    if (JSCompiler_StaticMethods_getFgTranslationCoordinates$self.activationState.wasActivatedByPointer) {
        var pageOffset = JSCompiler_StaticMethods_getFgTranslationCoordinates$self.adapter.getWindowPageOffset(), clientRect = JSCompiler_StaticMethods_getFgTranslationCoordinates$self.adapter.computeBoundingRect();
        if (activationEvent) {
            var documentX = pageOffset.x + clientRect.left, documentY = pageOffset.y + clientRect.top;
            if ('touchstart' === activationEvent.type) {
                var normalizedX = activationEvent.changedTouches[0].pageX - documentX;
                var normalizedY = activationEvent.changedTouches[0].pageY - documentY;
            } else
                normalizedX = activationEvent.pageX - documentX, normalizedY = activationEvent.pageY - documentY;
            var JSCompiler_temp = {
                x: normalizedX,
                y: normalizedY
            };
        } else
            JSCompiler_temp = {
                x: 0,
                y: 0
            };
    } else
        JSCompiler_temp = {
            x: JSCompiler_StaticMethods_getFgTranslationCoordinates$self.frame.width / 2,
            y: JSCompiler_StaticMethods_getFgTranslationCoordinates$self.frame.height / 2
        };
    startPoint = JSCompiler_temp;
    startPoint = {
        x: startPoint.x - JSCompiler_StaticMethods_getFgTranslationCoordinates$self.initialSize / 2,
        y: startPoint.y - JSCompiler_StaticMethods_getFgTranslationCoordinates$self.initialSize / 2
    };
    return {
        startPoint,
        endPoint: {
            x: JSCompiler_StaticMethods_getFgTranslationCoordinates$self.frame.width / 2 - JSCompiler_StaticMethods_getFgTranslationCoordinates$self.initialSize / 2,
            y: JSCompiler_StaticMethods_getFgTranslationCoordinates$self.frame.height / 2 - JSCompiler_StaticMethods_getFgTranslationCoordinates$self.initialSize / 2
        }
    };
};
var JSCompiler_StaticMethods_rmBoundedActivationClasses = function (JSCompiler_StaticMethods_rmBoundedActivationClasses$self) {
    JSCompiler_StaticMethods_rmBoundedActivationClasses$self.adapter.removeClass(google3.MDCRippleFoundation.cssClasses.FG_ACTIVATION);
    JSCompiler_StaticMethods_rmBoundedActivationClasses$self.activationAnimationHasEnded = !1;
    JSCompiler_StaticMethods_rmBoundedActivationClasses$self.adapter.computeBoundingRect();
};
var JSCompiler_StaticMethods_animateDeactivation = function (JSCompiler_StaticMethods_animateDeactivation$self, { wasActivatedByPointer, wasElementMadeActive }) {
    (wasActivatedByPointer || wasElementMadeActive) && JSCompiler_StaticMethods_runDeactivationUXLogicIfReady(JSCompiler_StaticMethods_animateDeactivation$self);
};
var JSCompiler_StaticMethods_updateLayoutCssVars = function (JSCompiler_StaticMethods_updateLayoutCssVars$self) {
    const VAR_LEFT = google3.MDCRippleFoundation.strings.VAR_LEFT, VAR_TOP = google3.MDCRippleFoundation.strings.VAR_TOP, VAR_FG_SCALE = google3.MDCRippleFoundation.strings.VAR_FG_SCALE;
    JSCompiler_StaticMethods_updateLayoutCssVars$self.adapter.updateCssVariable(google3.MDCRippleFoundation.strings.VAR_FG_SIZE, `${JSCompiler_StaticMethods_updateLayoutCssVars$self.initialSize}px`);
    JSCompiler_StaticMethods_updateLayoutCssVars$self.adapter.updateCssVariable(VAR_FG_SCALE, JSCompiler_StaticMethods_updateLayoutCssVars$self.fgScale);
    JSCompiler_StaticMethods_updateLayoutCssVars$self.adapter.isUnbounded() && (JSCompiler_StaticMethods_updateLayoutCssVars$self.unboundedCoords = {
        left: Math.round(JSCompiler_StaticMethods_updateLayoutCssVars$self.frame.width / 2 - JSCompiler_StaticMethods_updateLayoutCssVars$self.initialSize / 2),
        top: Math.round(JSCompiler_StaticMethods_updateLayoutCssVars$self.frame.height / 2 - JSCompiler_StaticMethods_updateLayoutCssVars$self.initialSize / 2)
    }, JSCompiler_StaticMethods_updateLayoutCssVars$self.adapter.updateCssVariable(VAR_LEFT, `${JSCompiler_StaticMethods_updateLayoutCssVars$self.unboundedCoords.left}px`), JSCompiler_StaticMethods_updateLayoutCssVars$self.adapter.updateCssVariable(VAR_TOP, `${JSCompiler_StaticMethods_updateLayoutCssVars$self.unboundedCoords.top}px`));
};
var JSCompiler_StaticMethods_handleChange = function (JSCompiler_StaticMethods_handleChange$self) {
    JSCompiler_StaticMethods_handleChange$self.layout();
    JSCompiler_StaticMethods_handleChange$self.adapter.notifyChange(JSCompiler_StaticMethods_handleChange$self.getValue());
    JSCompiler_StaticMethods_handleChange$self.adapter.hasClass(google3.cssClasses.REQUIRED) && JSCompiler_StaticMethods_handleChange$self.useDefaultValidation && JSCompiler_StaticMethods_handleChange$self.setValid(JSCompiler_StaticMethods_handleChange$self.isValid());
};
var JSCompiler_StaticMethods_setClickDebounceTimeout = function (JSCompiler_StaticMethods_setClickDebounceTimeout$self) {
    clearTimeout(JSCompiler_StaticMethods_setClickDebounceTimeout$self.clickDebounceTimeout);
    JSCompiler_StaticMethods_setClickDebounceTimeout$self.clickDebounceTimeout = setTimeout(() => {
        JSCompiler_StaticMethods_setClickDebounceTimeout$self.recentlyClicked = !1;
    }, google3.numbers.CLICK_DEBOUNCE_TIMEOUT_MS);
    JSCompiler_StaticMethods_setClickDebounceTimeout$self.recentlyClicked = !0;
};
var JSCompiler_StaticMethods_syncHelperTextValidity = function (JSCompiler_StaticMethods_syncHelperTextValidity$self, isValid) {
    if (JSCompiler_StaticMethods_syncHelperTextValidity$self.helperText) {
        JSCompiler_StaticMethods_syncHelperTextValidity$self.helperText.setValidity(isValid);
        var helperTextVisible = JSCompiler_StaticMethods_syncHelperTextValidity$self.helperText.isVisible(), helperTextId = JSCompiler_StaticMethods_syncHelperTextValidity$self.helperText.getId();
        helperTextVisible && helperTextId ? JSCompiler_StaticMethods_syncHelperTextValidity$self.adapter.setSelectAnchorAttr(google3.strings.ARIA_DESCRIBEDBY, helperTextId) : JSCompiler_StaticMethods_syncHelperTextValidity$self.adapter.removeSelectAnchorAttr(google3.strings.ARIA_DESCRIBEDBY);
    }
};
var JSCompiler_StaticMethods_activateTab = function (JSCompiler_StaticMethods_activateTab$self, index) {
    const previousActiveIndex = JSCompiler_StaticMethods_activateTab$self.adapter.getPreviousActiveTabIndex();
    if (0 <= index && index < JSCompiler_StaticMethods_activateTab$self.adapter.getTabListLength() && index !== previousActiveIndex) {
        if (-1 !== previousActiveIndex) {
            JSCompiler_StaticMethods_activateTab$self.adapter.deactivateTabAtIndex(previousActiveIndex);
            var previousClientRect = JSCompiler_StaticMethods_activateTab$self.adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex);
        }
        JSCompiler_StaticMethods_activateTab$self.adapter.activateTabAtIndex(index, previousClientRect);
        JSCompiler_StaticMethods_activateTab$self.scrollIntoView(index);
        JSCompiler_StaticMethods_activateTab$self.adapter.notifyTabActivated(index);
    }
};
var JSCompiler_StaticMethods_isActivationKey = function (key) {
    return key === google3.strings.SPACE_KEY || key === google3.strings.ENTER_KEY;
};
var JSCompiler_StaticMethods_determineTargetFromKey = function (JSCompiler_StaticMethods_determineTargetFromKey$self, origin, key) {
    const isRTL = JSCompiler_StaticMethods_determineTargetFromKey$self.isRTL(), maxIndex = JSCompiler_StaticMethods_determineTargetFromKey$self.adapter.getTabListLength() - 1, shouldDecrement = key === google3.strings.ARROW_LEFT_KEY && !isRTL || key === google3.strings.ARROW_RIGHT_KEY && isRTL, shouldIncrement = key === google3.strings.ARROW_RIGHT_KEY && !isRTL || key === google3.strings.ARROW_LEFT_KEY && isRTL;
    let index = origin;
    index = key === google3.strings.END_KEY ? maxIndex : shouldDecrement ? index - 1 : shouldIncrement ? index + 1 : 0;
    0 > index ? index = maxIndex : index > maxIndex && (index = 0);
    return index;
};
var JSCompiler_StaticMethods_calculateCurrentTranslateX = function (JSCompiler_StaticMethods_calculateCurrentTranslateX$self) {
    const transformValue = JSCompiler_StaticMethods_calculateCurrentTranslateX$self.adapter.getScrollContentStyleValue('transform');
    if ('none' === transformValue)
        return 0;
    const match = /\((.+?)\)/.exec(transformValue);
    if (!match)
        return 0;
    const [, , , , tx__tsickle_destructured_5] = match[1].split(',');
    return parseFloat(tx__tsickle_destructured_5);
};
var JSCompiler_StaticMethods_stopScrollAnimation = function (JSCompiler_StaticMethods_stopScrollAnimation$self) {
    JSCompiler_StaticMethods_stopScrollAnimation$self.isAnimating = !1;
    const currentScrollPosition = JSCompiler_StaticMethods_stopScrollAnimation$self.getAnimatingScrollPosition();
    JSCompiler_StaticMethods_stopScrollAnimation$self.adapter.removeClass(google3.MDCTabScrollerFoundation.cssClasses.ANIMATING);
    JSCompiler_StaticMethods_stopScrollAnimation$self.adapter.setScrollContentStyleProperty('transform', 'translateX(0px)');
    JSCompiler_StaticMethods_stopScrollAnimation$self.adapter.setScrollAreaScrollLeft(currentScrollPosition);
};
var JSCompiler_StaticMethods_getRTLScroller = function (JSCompiler_StaticMethods_getRTLScroller$self) {
    if (!JSCompiler_StaticMethods_getRTLScroller$self.rtlScrollerInstance) {
        {
            const initialScrollLeft = JSCompiler_StaticMethods_getRTLScroller$self.adapter.getScrollAreaScrollLeft();
            JSCompiler_StaticMethods_getRTLScroller$self.adapter.setScrollAreaScrollLeft(initialScrollLeft - 1);
            const newScrollLeft = JSCompiler_StaticMethods_getRTLScroller$self.adapter.getScrollAreaScrollLeft();
            if (0 > newScrollLeft) {
                JSCompiler_StaticMethods_getRTLScroller$self.adapter.setScrollAreaScrollLeft(initialScrollLeft);
                var JSCompiler_inline_result = new google3.MDCTabScrollerRTLNegative(JSCompiler_StaticMethods_getRTLScroller$self.adapter);
            } else {
                var rootClientRect = JSCompiler_StaticMethods_getRTLScroller$self.adapter.computeScrollAreaClientRect(), contentClientRect = JSCompiler_StaticMethods_getRTLScroller$self.adapter.computeScrollContentClientRect(), rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
                JSCompiler_StaticMethods_getRTLScroller$self.adapter.setScrollAreaScrollLeft(initialScrollLeft);
                JSCompiler_inline_result = rightEdgeDelta === newScrollLeft ? new google3.MDCTabScrollerRTLReverse(JSCompiler_StaticMethods_getRTLScroller$self.adapter) : new google3.MDCTabScrollerRTLDefault(JSCompiler_StaticMethods_getRTLScroller$self.adapter);
            }
        }
        JSCompiler_StaticMethods_getRTLScroller$self.rtlScrollerInstance = JSCompiler_inline_result;
    }
    return JSCompiler_StaticMethods_getRTLScroller$self.rtlScrollerInstance;
};
var JSCompiler_StaticMethods_activateFocus = function (JSCompiler_StaticMethods_activateFocus$self) {
    JSCompiler_StaticMethods_activateFocus$self.isFocused = !0;
    JSCompiler_StaticMethods_styleFocused(JSCompiler_StaticMethods_activateFocus$self, JSCompiler_StaticMethods_activateFocus$self.isFocused);
    JSCompiler_StaticMethods_activateFocus$self.adapter.activateLineRipple();
    JSCompiler_StaticMethods_activateFocus$self.adapter.hasLabel() && (JSCompiler_StaticMethods_activateFocus$self.notchOutline(JSCompiler_StaticMethods_activateFocus$self.shouldFloat), JSCompiler_StaticMethods_activateFocus$self.adapter.floatLabel(JSCompiler_StaticMethods_activateFocus$self.shouldFloat), JSCompiler_StaticMethods_styleFloating(JSCompiler_StaticMethods_activateFocus$self, JSCompiler_StaticMethods_activateFocus$self.shouldFloat), JSCompiler_StaticMethods_activateFocus$self.adapter.shakeLabel(JSCompiler_StaticMethods_activateFocus$self.shouldShake));
    !JSCompiler_StaticMethods_activateFocus$self.helperText || !JSCompiler_StaticMethods_activateFocus$self.helperText.isPersistent() && JSCompiler_StaticMethods_activateFocus$self.helperText.isValidation() && JSCompiler_StaticMethods_activateFocus$self.valid || JSCompiler_StaticMethods_activateFocus$self.helperText.showToScreenReader();
};
var JSCompiler_StaticMethods_handleValidationAttributeChange = function (JSCompiler_StaticMethods_handleValidationAttributeChange$self, attributesList) {
    attributesList.some(attributeName => -1 < google3.VALIDATION_ATTR_WHITELIST.indexOf(attributeName) ? (JSCompiler_StaticMethods_styleValidity(JSCompiler_StaticMethods_handleValidationAttributeChange$self, !0), JSCompiler_StaticMethods_handleValidationAttributeChange$self.adapter.setLabelRequired(JSCompiler_StaticMethods_handleValidationAttributeChange$self.getNativeInput().required), !0) : !1);
    -1 < attributesList.indexOf('maxlength') && JSCompiler_StaticMethods_setcharacterCounter(JSCompiler_StaticMethods_handleValidationAttributeChange$self, JSCompiler_StaticMethods_handleValidationAttributeChange$self.getValue().length);
};
var JSCompiler_StaticMethods_styleFloating = function (JSCompiler_StaticMethods_styleFloating$self, isFloating) {
    const LABEL_FLOATING = google3.MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;
    isFloating ? JSCompiler_StaticMethods_styleFloating$self.adapter.addClass(LABEL_FLOATING) : JSCompiler_StaticMethods_styleFloating$self.adapter.removeClass(LABEL_FLOATING);
};
var JSCompiler_StaticMethods_setcharacterCounter = function (JSCompiler_StaticMethods_setcharacterCounter$self, currentLength) {
    if (JSCompiler_StaticMethods_setcharacterCounter$self.characterCounter) {
        var maxLength = JSCompiler_StaticMethods_setcharacterCounter$self.getNativeInput().maxLength;
        if (-1 === maxLength)
            throw Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        JSCompiler_StaticMethods_setcharacterCounter$self.characterCounter.setCounterValue(currentLength, maxLength);
    }
};
var JSCompiler_StaticMethods_styleValidity = function (JSCompiler_StaticMethods_styleValidity$self, isValid) {
    const INVALID = google3.MDCTextFieldFoundation.cssClasses.INVALID;
    isValid ? JSCompiler_StaticMethods_styleValidity$self.adapter.removeClass(INVALID) : JSCompiler_StaticMethods_styleValidity$self.adapter.addClass(INVALID);
    JSCompiler_StaticMethods_styleValidity$self.helperText && (JSCompiler_StaticMethods_styleValidity$self.helperText.setValidity(isValid), JSCompiler_StaticMethods_styleValidity$self.helperText.isValidation() && (JSCompiler_StaticMethods_styleValidity$self.helperText.isVisible(), JSCompiler_StaticMethods_styleValidity$self.helperText.getId()));
};
var JSCompiler_StaticMethods_styleFocused = function (JSCompiler_StaticMethods_styleFocused$self, isFocused) {
    const FOCUSED = google3.MDCTextFieldFoundation.cssClasses.FOCUSED;
    isFocused ? JSCompiler_StaticMethods_styleFocused$self.adapter.addClass(FOCUSED) : JSCompiler_StaticMethods_styleFocused$self.adapter.removeClass(FOCUSED);
};
var JSCompiler_StaticMethods_createFoundation = function (JSCompiler_StaticMethods_createFoundation$self) {
    void 0 !== JSCompiler_StaticMethods_createFoundation$self.mdcFoundation && JSCompiler_StaticMethods_createFoundation$self.mdcFoundation.destroy();
    JSCompiler_StaticMethods_createFoundation$self.mdcFoundationClass && (JSCompiler_StaticMethods_createFoundation$self.mdcFoundation = new JSCompiler_StaticMethods_createFoundation$self.mdcFoundationClass(JSCompiler_StaticMethods_createFoundation$self.createAdapter()), JSCompiler_StaticMethods_createFoundation$self.mdcFoundation.init());
};
const map$jscomp$3 = window.__litStyleMap;
const existing = map$jscomp$3.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/icon/mwc-icon-host.css');
var JSCompiler_StaticMethods_waitForFoundation = function (JSCompiler_StaticMethods_waitForFoundation$self, fn) {
    JSCompiler_StaticMethods_waitForFoundation$self.mdcFoundation ? fn() : JSCompiler_StaticMethods_waitForFoundation$self.updateComplete.then(fn);
};
const map$jscomp$4 = window.__litStyleMap;
const existing$jscomp$1 = map$jscomp$4.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/ripple/mwc-ripple.css');
const map$jscomp$5 = window.__litStyleMap;
const existing$jscomp$2 = map$jscomp$5.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/button/styles.css');
var JSCompiler_StaticMethods_ensureUntabbable = function (JSCompiler_StaticMethods_ensureUntabbable$self) {
    if (JSCompiler_StaticMethods_ensureUntabbable$self.node.nodeType === Node.ELEMENT_NODE) {
        var element = JSCompiler_StaticMethods_ensureUntabbable$self.node;
        javascript.wicg_inert_matches.call(element, 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable]') ? -1 === element.tabIndex && JSCompiler_StaticMethods_ensureUntabbable$self.hasSavedTabIndex || (element.hasAttribute('tabindex') && (JSCompiler_StaticMethods_ensureUntabbable$self._savedTabIndex = element.tabIndex), element.setAttribute('tabindex', '-1'), element.nodeType === Node.ELEMENT_NODE && (element.focus = function () {
        }, JSCompiler_StaticMethods_ensureUntabbable$self._overrodeFocusMethod = !0)) : element.hasAttribute('tabindex') && (JSCompiler_StaticMethods_ensureUntabbable$self._savedTabIndex = element.tabIndex, element.removeAttribute('tabindex'));
    }
};
var JSCompiler_StaticMethods_setInert = function (JSCompiler_StaticMethods_setInert$self, root, inert) {
    if (inert) {
        if (!JSCompiler_StaticMethods_setInert$self._inertRoots.has(root)) {
            var inertRoot = new javascript.wicg_inert_InertRoot(root, JSCompiler_StaticMethods_setInert$self);
            root.setAttribute('inert', '');
            JSCompiler_StaticMethods_setInert$self._inertRoots.set(root, inertRoot);
            if (!JSCompiler_StaticMethods_setInert$self._document.body.contains(root)) {
                let parent = root.parentNode;
                for (; parent;)
                    11 === parent.nodeType && javascript.wicg_inert_addInertStyle(parent), parent = parent.parentNode;
            }
        }
    } else
        JSCompiler_StaticMethods_setInert$self._inertRoots.has(root) && (JSCompiler_StaticMethods_setInert$self._inertRoots.get(root).destructor(), JSCompiler_StaticMethods_setInert$self._inertRoots.delete(root), root.removeAttribute('inert'));
};
var JSCompiler_StaticMethods_emitNotification = function (JSCompiler_StaticMethods_emitNotification$self, name, action) {
    const ev = new CustomEvent(name, { detail: action ? { action } : {} });
    JSCompiler_StaticMethods_emitNotification$self.dispatchEvent(ev);
};
var JSCompiler_StaticMethods_searchNodeTreesForAttribute = function (nodes, attribute) {
    for (const node of nodes)
        if (node instanceof HTMLElement) {
            if (node.hasAttribute(attribute))
                return node;
            const selection = node.querySelector(`[${attribute}]`);
            if (selection)
                return selection;
        }
    return null;
};
var JSCompiler_StaticMethods_setEventListeners = function (JSCompiler_StaticMethods_setEventListeners$self) {
    JSCompiler_StaticMethods_setEventListeners$self.boundHandleClick && JSCompiler_StaticMethods_setEventListeners$self.mdcRoot.addEventListener('click', JSCompiler_StaticMethods_setEventListeners$self.boundHandleClick);
    JSCompiler_StaticMethods_setEventListeners$self.boundHandleKeydown && JSCompiler_StaticMethods_setEventListeners$self.mdcRoot.addEventListener('keydown', JSCompiler_StaticMethods_setEventListeners$self.boundHandleKeydown, dom.events_applyPassive());
    JSCompiler_StaticMethods_setEventListeners$self.boundHandleDocumentKeydown && document.addEventListener('keydown', JSCompiler_StaticMethods_setEventListeners$self.boundHandleDocumentKeydown, dom.events_applyPassive());
};
var JSCompiler_StaticMethods_removeEventListeners = function (JSCompiler_StaticMethods_removeEventListeners$self) {
    JSCompiler_StaticMethods_removeEventListeners$self.boundHandleClick && JSCompiler_StaticMethods_removeEventListeners$self.mdcRoot.removeEventListener('click', JSCompiler_StaticMethods_removeEventListeners$self.boundHandleClick);
    JSCompiler_StaticMethods_removeEventListeners$self.boundHandleKeydown && JSCompiler_StaticMethods_removeEventListeners$self.mdcRoot.removeEventListener('keydown', JSCompiler_StaticMethods_removeEventListeners$self.boundHandleKeydown);
    JSCompiler_StaticMethods_removeEventListeners$self.boundHandleDocumentKeydown && document.removeEventListener('keydown', JSCompiler_StaticMethods_removeEventListeners$self.boundHandleDocumentKeydown);
};
const map$jscomp$6 = window.__litStyleMap;
const existing$jscomp$3 = map$jscomp$6.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/dialog/mwc-dialog.css');
const map$jscomp$7 = window.__litStyleMap;
const existing$jscomp$4 = map$jscomp$7.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/icon_button/mwc-icon-button.css');
var JSCompiler_StaticMethods_setMulti = function (JSCompiler_StaticMethods_setMulti$self, value) {
    JSCompiler_StaticMethods_setMulti$self.isMulti_ = value;
    const currentIndex = JSCompiler_StaticMethods_setMulti$self.selectedIndex_;
    value ? $m2dlist.$n2dfoundation_isIndexSet(currentIndex) || (JSCompiler_StaticMethods_setMulti$self.selectedIndex_ = currentIndex === google3.numbers.UNSET_INDEX ? new Set() : new Set([currentIndex])) : $m2dlist.$n2dfoundation_isIndexSet(currentIndex) && (JSCompiler_StaticMethods_setMulti$self.selectedIndex_ = currentIndex.size ? Array.from(currentIndex).sort($m2dlist.$n2dfoundation_integerSort)[0] : google3.numbers.UNSET_INDEX);
};
var JSCompiler_StaticMethods_isIndexValid_ = function (JSCompiler_StaticMethods_isIndexValid_$self, index) {
    if (index instanceof Set) {
        if (!JSCompiler_StaticMethods_isIndexValid_$self.isMulti_)
            throw Error('MDCListFoundation: Array of index is only supported for checkbox based list');
        if (0 === index.size)
            return !0;
        let isOneInRange = !1;
        for (const entry of index)
            if (isOneInRange = JSCompiler_StaticMethods_isIndexInRange_(JSCompiler_StaticMethods_isIndexValid_$self, entry))
                break;
        return isOneInRange;
    }
    if ('number' === typeof index) {
        if (JSCompiler_StaticMethods_isIndexValid_$self.isMulti_)
            throw Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
        return index === google3.numbers.UNSET_INDEX || JSCompiler_StaticMethods_isIndexInRange_(JSCompiler_StaticMethods_isIndexValid_$self, index);
    }
    return !1;
};
var JSCompiler_StaticMethods_setMultiSelectionAtIndex_ = function (JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self, newIndex, isInteraction = !0) {
    const oldArr = Array.from(google3.createSetFromIndex(JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.selectedIndex_)), newArr = Array.from(newIndex), diff = {
        added: [],
        removed: []
    }, oldSorted = oldArr.sort($m2dlist.$n2dfoundation_integerSort), newSorted = newArr.sort($m2dlist.$n2dfoundation_integerSort);
    let i = 0, j = 0;
    for (; i < oldSorted.length || j < newSorted.length;) {
        const oldVal = oldSorted[i], newVal = newSorted[j];
        oldVal === newVal ? (i++, j++) : void 0 !== oldVal && (void 0 === newVal || oldVal < newVal) ? (diff.removed.push(oldVal), i++) : void 0 !== newVal && (void 0 === oldVal || newVal < oldVal) && (diff.added.push(newVal), j++);
    }
    if (diff.removed.length || diff.added.length) {
        for (const removed of diff.removed)
            isInteraction && JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.adapter.setSelectedStateForElementIndex(removed, !1), JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.useActivatedClass_ && JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.adapter.setActivatedStateForElementIndex(removed, !1);
        for (const added of diff.added)
            isInteraction && JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.adapter.setSelectedStateForElementIndex(added, !0), JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.useActivatedClass_ && JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.adapter.setActivatedStateForElementIndex(added, !0);
        JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.selectedIndex_ = newIndex;
        JSCompiler_StaticMethods_setMultiSelectionAtIndex_$self.adapter.notifySelected(newIndex, diff);
    }
};
var JSCompiler_StaticMethods_setSingleSelectionAtIndex_ = function (JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self, index, isInteraction = !0) {
    if (JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_ !== index) {
        JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_ !== google3.numbers.UNSET_INDEX && (JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.setSelectedStateForElementIndex(JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_, !1), JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.useActivatedClass_ && JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.setActivatedStateForElementIndex(JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_, !1));
        isInteraction && JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.setSelectedStateForElementIndex(index, !0);
        JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.useActivatedClass_ && JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.setActivatedStateForElementIndex(index, !0);
        JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_ === google3.numbers.UNSET_INDEX && (JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.ariaCurrentAttrValue_ = JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.getAttributeForElementIndex(index, google3.strings.ARIA_CURRENT));
        const isAriaCurrent = null !== JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.ariaCurrentAttrValue_, ariaAttribute = isAriaCurrent ? google3.strings.ARIA_CURRENT : google3.strings.ARIA_SELECTED;
        JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_ !== google3.numbers.UNSET_INDEX && JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.setAttributeForElementIndex(JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_, ariaAttribute, 'false');
        JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.setAttributeForElementIndex(index, ariaAttribute, isAriaCurrent ? JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.ariaCurrentAttrValue_ : 'true');
        JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.selectedIndex_ = index;
        JSCompiler_StaticMethods_setSingleSelectionAtIndex_$self.adapter.notifySelected(index);
    }
};
var JSCompiler_StaticMethods_handleFocusOut = function (JSCompiler_StaticMethods_handleFocusOut$self, listItemIndex) {
    0 <= listItemIndex && JSCompiler_StaticMethods_handleFocusOut$self.adapter.setTabIndexForElementIndex(listItemIndex, -1);
    setTimeout(() => {
        if (!JSCompiler_StaticMethods_handleFocusOut$self.adapter.isFocusInsideList()) {
            let targetIndex = 0;
            'number' === typeof JSCompiler_StaticMethods_handleFocusOut$self.selectedIndex_ && JSCompiler_StaticMethods_handleFocusOut$self.selectedIndex_ !== google3.numbers.UNSET_INDEX ? targetIndex = JSCompiler_StaticMethods_handleFocusOut$self.selectedIndex_ : $m2dlist.$n2dfoundation_isIndexSet(JSCompiler_StaticMethods_handleFocusOut$self.selectedIndex_) && 0 < JSCompiler_StaticMethods_handleFocusOut$self.selectedIndex_.size && (targetIndex = Math.min(...JSCompiler_StaticMethods_handleFocusOut$self.selectedIndex_));
            JSCompiler_StaticMethods_setTabindexAtIndex_(JSCompiler_StaticMethods_handleFocusOut$self, targetIndex);
        }
    }, 0);
};
var JSCompiler_StaticMethods_focusLastElement = function (JSCompiler_StaticMethods_focusLastElement$self) {
    const lastIndex = JSCompiler_StaticMethods_focusLastElement$self.adapter.getListItemCount() - 1;
    JSCompiler_StaticMethods_focusLastElement$self.adapter.focusItemAtIndex(lastIndex);
    return lastIndex;
};
var JSCompiler_StaticMethods_focusFirstElement = function (JSCompiler_StaticMethods_focusFirstElement$self) {
    JSCompiler_StaticMethods_focusFirstElement$self.adapter.focusItemAtIndex(0);
    return 0;
};
var JSCompiler_StaticMethods_preventDefaultEvent = function (evt) {
    -1 === $m2dlist.$n2dfoundation_ELEMENTS_KEY_ALLOWED_IN.indexOf(`${evt.target.tagName}`.toLowerCase()) && evt.preventDefault();
};
var JSCompiler_StaticMethods_setSelectedIndexOnAction_ = function (JSCompiler_StaticMethods_setSelectedIndexOnAction_$self, index, isInteraction, force) {
    if (!JSCompiler_StaticMethods_setSelectedIndexOnAction_$self.adapter.getDisabledStateForElementIndex(index)) {
        var checkedIndex = index;
        JSCompiler_StaticMethods_setSelectedIndexOnAction_$self.isMulti_ && (checkedIndex = new Set([index]));
        JSCompiler_StaticMethods_isIndexValid_(JSCompiler_StaticMethods_setSelectedIndexOnAction_$self, checkedIndex) && (JSCompiler_StaticMethods_setSelectedIndexOnAction_$self.isMulti_ ? JSCompiler_StaticMethods_toggleMultiAtIndex(JSCompiler_StaticMethods_setSelectedIndexOnAction_$self, index, force, isInteraction) : isInteraction || force ? JSCompiler_StaticMethods_setSingleSelectionAtIndex_(JSCompiler_StaticMethods_setSelectedIndexOnAction_$self, index, isInteraction) : JSCompiler_StaticMethods_setSelectedIndexOnAction_$self.selectedIndex_ === index && JSCompiler_StaticMethods_setSingleSelectionAtIndex_(JSCompiler_StaticMethods_setSelectedIndexOnAction_$self, google3.numbers.UNSET_INDEX), isInteraction && JSCompiler_StaticMethods_setSelectedIndexOnAction_$self.adapter.notifyAction(index));
    }
};
var JSCompiler_StaticMethods_setTabindexAtIndex_ = function (JSCompiler_StaticMethods_setTabindexAtIndex_$self, index) {
    JSCompiler_StaticMethods_setTabindexAtIndex_$self.focusedItemIndex_ === google3.numbers.UNSET_INDEX && 0 !== index ? JSCompiler_StaticMethods_setTabindexAtIndex_$self.adapter.setTabIndexForElementIndex(0, -1) : 0 <= JSCompiler_StaticMethods_setTabindexAtIndex_$self.focusedItemIndex_ && JSCompiler_StaticMethods_setTabindexAtIndex_$self.focusedItemIndex_ !== index && JSCompiler_StaticMethods_setTabindexAtIndex_$self.adapter.setTabIndexForElementIndex(JSCompiler_StaticMethods_setTabindexAtIndex_$self.focusedItemIndex_, -1);
    JSCompiler_StaticMethods_setTabindexAtIndex_$self.adapter.setTabIndexForElementIndex(index, 0);
};
var JSCompiler_StaticMethods_isIndexInRange_ = function (JSCompiler_StaticMethods_isIndexInRange_$self, index) {
    const listSize = JSCompiler_StaticMethods_isIndexInRange_$self.adapter.getListItemCount();
    return 0 <= index && index < listSize;
};
var JSCompiler_StaticMethods_toggleMultiAtIndex = function (JSCompiler_StaticMethods_toggleMultiAtIndex$self, index, force, isInteraction = !0) {
    const newSet = google3.createSetFromIndex(JSCompiler_StaticMethods_toggleMultiAtIndex$self.selectedIndex_);
    (void 0 === force ? !JSCompiler_StaticMethods_toggleMultiAtIndex$self.adapter.getSelectedStateForElementIndex(index) : force) ? newSet.add(index) : newSet.delete(index);
    JSCompiler_StaticMethods_setMultiSelectionAtIndex_(JSCompiler_StaticMethods_toggleMultiAtIndex$self, newSet, isInteraction);
};
var JSCompiler_StaticMethods_onDown = function (JSCompiler_StaticMethods_onDown$self, upName, evt) {
    const onUp = () => {
        window.removeEventListener(upName, onUp);
        JSCompiler_StaticMethods_onDown$self.rippleHandlers.endPress();
    };
    window.addEventListener(upName, onUp);
    JSCompiler_StaticMethods_onDown$self.rippleHandlers.startPress(evt);
};
var JSCompiler_StaticMethods_fireRequestSelected = function (JSCompiler_StaticMethods_fireRequestSelected$self, selected, source) {
    if (!JSCompiler_StaticMethods_fireRequestSelected$self.noninteractive) {
        var customEv = new CustomEvent('request-selected', {
            bubbles: !0,
            composed: !0,
            detail: {
                source,
                selected
            }
        });
        JSCompiler_StaticMethods_fireRequestSelected$self.dispatchEvent(customEv);
    }
};
const map$jscomp$8 = window.__litStyleMap;
const existing$jscomp$5 = map$jscomp$8.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/list/mwc-list-item.css');
var JSCompiler_StaticMethods_updateItems = function (JSCompiler_StaticMethods_updateItems$self) {
    var _a;
    const nodes = null !== (_a = JSCompiler_StaticMethods_updateItems$self.assignedElements) && void 0 !== _a ? _a : [], listItems = [];
    for (const node of nodes)
        node.hasAttribute('mwc-list-item') && (listItems.push(node), node._managingList = JSCompiler_StaticMethods_updateItems$self), node.hasAttribute('divider') && !node.hasAttribute('role') && node.setAttribute('role', 'separator');
    JSCompiler_StaticMethods_updateItems$self.items_ = listItems;
    const selectedIndices = new Set();
    JSCompiler_StaticMethods_updateItems$self.items_.forEach((item, index) => {
        JSCompiler_StaticMethods_updateItems$self.itemRoles ? item.setAttribute('role', JSCompiler_StaticMethods_updateItems$self.itemRoles) : item.removeAttribute('role');
        item.selected && selectedIndices.add(index);
    });
    if (JSCompiler_StaticMethods_updateItems$self.multi)
        JSCompiler_StaticMethods_updateItems$self.select(selectedIndices);
    else {
        const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
        JSCompiler_StaticMethods_updateItems$self.select(index);
    }
    const itemsUpdatedEv = new Event('items-updated', {
        bubbles: !0,
        composed: !0
    });
    JSCompiler_StaticMethods_updateItems$self.dispatchEvent(itemsUpdatedEv);
};
var JSCompiler_StaticMethods_getIndexOfTarget = function (JSCompiler_StaticMethods_getIndexOfTarget$self, evt) {
    const elements = JSCompiler_StaticMethods_getIndexOfTarget$self.items, path = evt.composedPath();
    for (const pathItem of path) {
        let index = -1;
        pathItem.nodeType === Node.ELEMENT_NODE && pathItem.hasAttribute('mwc-list-item') && (index = elements.indexOf(pathItem));
        if (-1 !== index)
            return index;
    }
    return -1;
};
const map$jscomp$9 = window.__litStyleMap;
const existing$jscomp$6 = map$jscomp$9.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/list/mwc-list.css');
const map$jscomp$10 = window.__litStyleMap;
const existing$jscomp$7 = map$jscomp$10.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/menu/mwc-menu-surface.css');
const map$jscomp$11 = window.__litStyleMap;
const existing$jscomp$8 = map$jscomp$11.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/menu/mwc-menu.css');
const map$jscomp$12 = window.__litStyleMap;
const existing$jscomp$9 = map$jscomp$12.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/notched_outline/mwc-notched-outline.css');
var JSCompiler_StaticMethods_selectByValue = function (JSCompiler_StaticMethods_selectByValue$self, value) {
    let indexToSelect = -1;
    for (let i = 0; i < JSCompiler_StaticMethods_selectByValue$self.items.length; i++)
        if (JSCompiler_StaticMethods_selectByValue$self.items[i].value === value) {
            indexToSelect = i;
            break;
        }
    JSCompiler_StaticMethods_selectByValue$self.valueSetDirectly = !0;
    JSCompiler_StaticMethods_selectByValue$self.select(indexToSelect);
    JSCompiler_StaticMethods_handleChange(JSCompiler_StaticMethods_selectByValue$self.mdcFoundation);
};
const map$jscomp$13 = window.__litStyleMap;
const existing$jscomp$10 = map$jscomp$13.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/select/mwc-select.css');
const map$jscomp$14 = window.__litStyleMap;
const existing$jscomp$11 = map$jscomp$14.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab_indicator/mwc-tab-indicator.css');
var JSCompiler_StaticMethods_renderIndicator = function (JSCompiler_StaticMethods_renderIndicator$self) {
    return google3.html`<mwc-tab-indicator
        .icon="${JSCompiler_StaticMethods_renderIndicator$self.indicatorIcon}"
        .fade="${JSCompiler_StaticMethods_renderIndicator$self.isFadingIndicator}"></mwc-tab-indicator>`;
};
const map$jscomp$15 = window.__litStyleMap;
const existing$jscomp$12 = map$jscomp$15.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab/mwc-tab.css');
const map$jscomp$16 = window.__litStyleMap;
const existing$jscomp$13 = map$jscomp$16.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab_scroller/mwc-tab-scroller.css');
const map$jscomp$17 = window.__litStyleMap;
const existing$jscomp$14 = map$jscomp$17.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/tab_bar/mwc-tab-bar.css');
var JSCompiler_StaticMethods_renderAffix = function (content, isSuffix = !1) {
    return google3.html`<span class="mdc-text-field__affix ${google3.classMap({
        'mdc-text-field__affix--prefix': !isSuffix,
        'mdc-text-field__affix--suffix': isSuffix
    })}">
        ${content}</span>`;
};
var JSCompiler_StaticMethods_getRootAdapterMethods = function (JSCompiler_StaticMethods_getRootAdapterMethods$self) {
    return Object.assign({
        registerTextFieldInteractionHandler: (evtType, handler) => JSCompiler_StaticMethods_getRootAdapterMethods$self.addEventListener(evtType, handler),
        deregisterTextFieldInteractionHandler: (evtType, handler) => JSCompiler_StaticMethods_getRootAdapterMethods$self.removeEventListener(evtType, handler),
        registerValidationAttributeChangeHandler: handler => {
            const getAttributesList = mutationsList => mutationsList.map(mutation => mutation.attributeName).filter(attributeName => attributeName), observer = new MutationObserver(mutationsList => {
                handler(getAttributesList(mutationsList));
            });
            observer.observe(JSCompiler_StaticMethods_getRootAdapterMethods$self.formElement, { attributes: !0 });
            return observer;
        },
        deregisterValidationAttributeChangeHandler: observer => observer.disconnect()
    }, base.utils_addHasRemoveClass(JSCompiler_StaticMethods_getRootAdapterMethods$self.mdcRoot));
};
var JSCompiler_StaticMethods_getInputAdapterMethods = function (JSCompiler_StaticMethods_getInputAdapterMethods$self) {
    return {
        getNativeInput: () => JSCompiler_StaticMethods_getInputAdapterMethods$self.formElement,
        setInputAttr: () => {
        },
        removeInputAttr: () => {
        },
        isFocused: () => JSCompiler_StaticMethods_getInputAdapterMethods$self.shadowRoot ? JSCompiler_StaticMethods_getInputAdapterMethods$self.shadowRoot.activeElement === JSCompiler_StaticMethods_getInputAdapterMethods$self.formElement : !1,
        registerInputInteractionHandler: (evtType, handler) => JSCompiler_StaticMethods_getInputAdapterMethods$self.formElement.addEventListener(evtType, handler, { passive: evtType in $m2dtextfield.$n2dbase_passiveEvents }),
        deregisterInputInteractionHandler: (evtType, handler) => JSCompiler_StaticMethods_getInputAdapterMethods$self.formElement.removeEventListener(evtType, handler)
    };
};
var JSCompiler_StaticMethods_getLabelAdapterMethods = function (JSCompiler_StaticMethods_getLabelAdapterMethods$self) {
    return {
        floatLabel: shouldFloat => JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement && JSCompiler_StaticMethods_float(JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement.floatingLabelFoundation, shouldFloat),
        getLabelWidth: () => JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement ? JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement.floatingLabelFoundation.getWidth() : 0,
        hasLabel: () => !!JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement,
        shakeLabel: shouldShake => {
            var JSCompiler_temp;
            if (JSCompiler_temp = JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement) {
                var JSCompiler_StaticMethods_shake$self = JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement.floatingLabelFoundation;
                const LABEL_SHAKE = google3.MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                shouldShake ? JSCompiler_StaticMethods_shake$self.adapter.addClass(LABEL_SHAKE) : JSCompiler_StaticMethods_shake$self.adapter.removeClass(LABEL_SHAKE);
                JSCompiler_temp = void 0;
            }
            return JSCompiler_temp;
        },
        setLabelRequired: isRequired => {
            JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement && JSCompiler_StaticMethods_getLabelAdapterMethods$self.labelElement.floatingLabelFoundation.setRequired(isRequired);
        }
    };
};
var JSCompiler_StaticMethods_getLineRippleAdapterMethods = function (JSCompiler_StaticMethods_getLineRippleAdapterMethods$self) {
    return {
        activateLineRipple: () => {
            JSCompiler_StaticMethods_getLineRippleAdapterMethods$self.lineRippleElement && JSCompiler_StaticMethods_getLineRippleAdapterMethods$self.lineRippleElement.lineRippleFoundation.activate();
        },
        deactivateLineRipple: () => {
            JSCompiler_StaticMethods_getLineRippleAdapterMethods$self.lineRippleElement && JSCompiler_StaticMethods_getLineRippleAdapterMethods$self.lineRippleElement.lineRippleFoundation.deactivate();
        },
        setLineRippleTransformOrigin: normalizedX => {
            JSCompiler_StaticMethods_getLineRippleAdapterMethods$self.lineRippleElement && JSCompiler_StaticMethods_getLineRippleAdapterMethods$self.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
        }
    };
};
var JSCompiler_StaticMethods_getOutlineAdapterMethods = function (JSCompiler_StaticMethods_getOutlineAdapterMethods$self) {
    return {
        closeOutline: () => JSCompiler_StaticMethods_getOutlineAdapterMethods$self.outlineElement && (JSCompiler_StaticMethods_getOutlineAdapterMethods$self.outlineOpen = !1),
        hasOutline: () => !!JSCompiler_StaticMethods_getOutlineAdapterMethods$self.outlineElement,
        notchOutline: labelWidth => {
            JSCompiler_StaticMethods_getOutlineAdapterMethods$self.outlineElement && !JSCompiler_StaticMethods_getOutlineAdapterMethods$self.outlineOpen && (JSCompiler_StaticMethods_getOutlineAdapterMethods$self.outlineWidth = labelWidth, JSCompiler_StaticMethods_getOutlineAdapterMethods$self.outlineOpen = !0);
        }
    };
};
const map$jscomp$18 = window.__litStyleMap;
const existing$jscomp$15 = map$jscomp$18.get('blaze-out/k8-fastbuild/bin/third_party/javascript/material_web_components/textfield/mwc-textfield.css');
var JSCompiler_StaticMethods_viewed = function (JSCompiler_StaticMethods_viewed$self) {
    JSCompiler_StaticMethods_viewed$self.viewed()
};
var JSCompiler_StaticMethods_setInternalState = function (JSCompiler_StaticMethods_setInternalState$self, argb) {
    return JSCompiler_StaticMethods_setInternalState$self(argb);
};
var JSCompiler_StaticMethods_getIndex = function (r, g, b) {
    return google3.QuantizerWu.getIndex(r, g, b)
};
var JSCompiler_StaticMethods_setCustomColor = function (JSCompiler_StaticMethods_setCustomColor$self, key, value) {
    return JSCompiler_StaticMethods_setCustomColor$self.setCustomColor(key, value)
};
var JSCompiler_StaticMethods_getColorGroup = function (JSCompiler_StaticMethods_getColorGroup$self, key, tones) {
    return JSCompiler_StaticMethods_getColorGroup$self.getColorGroup(key, tones);
};
const map$jscomp$20 = window.__litStyleMap;
const existing$jscomp$16 = map$jscomp$20.get('ux/material/theme_generator/theme-generator.css');
const map$jscomp$21 = window.__litStyleMap;
const existing$jscomp$17 = map$jscomp$21.get('ux/material/theme_generator/theme.css');
const map$jscomp$22 = window.__litStyleMap;
const existing$jscomp$18 = map$jscomp$22.get('ux/material/theme_generator/ui/drop_zone/drop-zone.css');
var JSCompiler_StaticMethods_handleFiles = async function (JSCompiler_StaticMethods_handleFiles$self, files) {
    if (files && 0 < files.length)
        if (JSCompiler_StaticMethods_handleFiles$self.multiple)
            JSCompiler_StaticMethods_handleFiles$self.dispatchEvent(new CustomEvent('files', { detail: files }));
        else {
            const file = files[0], buffer = await src.utils_readFileBuffer(file);
            JSCompiler_StaticMethods_handleFiles$self.file = builders.safe_url_builders_fromBlob(new Blob([buffer], { type: file.type })).toString();
            JSCompiler_StaticMethods_handleFiles$self.updateImage();
            JSCompiler_StaticMethods_handleFiles$self.dispatchEvent(new CustomEvent('file', { detail: JSCompiler_StaticMethods_handleFiles$self.file }));
            JSCompiler_StaticMethods_handleFiles$self.dispatchEvent(new CustomEvent('buffer', { detail: buffer }));
        }
};
var JSCompiler_StaticMethods_requestFile = function (JSCompiler_StaticMethods_requestFile$self) {
    JSCompiler_StaticMethods_requestFile$self.dispatchEvent(new CustomEvent('requestfile', {
        bubbles: !0,
        cancelable: !0,
        detail: { accept: JSCompiler_StaticMethods_requestFile$self.accept }
    }));
    drop.$n2dzone_uploadFile(files => JSCompiler_StaticMethods_handleFiles(JSCompiler_StaticMethods_requestFile$self, files), {
        accept: JSCompiler_StaticMethods_requestFile$self.accept,
        multiple: JSCompiler_StaticMethods_requestFile$self.multiple
    });
};
var JSCompiler_StaticMethods_switchTheme = function (JSCompiler_StaticMethods_switchTheme$self, themeName) {
    themeName ? (JSCompiler_StaticMethods_switchTheme$self.props.themeName = themeName, JSCompiler_StaticMethods_switchTheme$self.notify('switch-theme')) : JSCompiler_StaticMethods_switchTheme$self.props.themeName = themeName;
};
var JSCompiler_StaticMethods_randomImage = async function (JSCompiler_StaticMethods_randomImage$self) {
    if (JSCompiler_StaticMethods_randomImage$self.baseline)
        JSCompiler_StaticMethods_resetToBaseline(JSCompiler_StaticMethods_randomImage$self);
    else {
        const image = google3.IMAGES[Math.floor(Math.random() * google3.IMAGES.length)], seed = await theme.index_seedFromImage(image.wallpaper), theme = google3.ThemeAdapter.fromColor(seed, !0);
        theme.props.imageUrl = image.wallpaper;
        JSCompiler_StaticMethods_randomImage$self.setTheme('material-theme', theme);
        JSCompiler_StaticMethods_randomImage$self.start('material-theme');
    }
};
var JSCompiler_StaticMethods_resetToBaseline = function (JSCompiler_StaticMethods_resetToBaseline$self) {
    const theme = google3.ThemeAdapter.default(!0);
    JSCompiler_StaticMethods_resetToBaseline$self.setTheme('material-theme', theme);
    JSCompiler_StaticMethods_resetToBaseline$self.start('material-theme');
};