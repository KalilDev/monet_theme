'use strict';
const internals = require('../../../safevalues/internals/code.js');
const builders = require('../../../safevalues/builders/code.js');
const google3 = require('google3');
const html = require('../../../../../../goog/html/code.js');
const SafeStyle_SafeStyle = require('../../../../../../goog/html/SafeStyle_SafeStyle/code.js');
const SafeScript_SafeScript = require('../../../../../../goog/html/SafeScript_SafeScript/code.js');
const SafeHtml_SafeHtml = require('../../../../../../goog/html/SafeHtml_SafeHtml/code.js');
const compat = require('../../../safevalues/compat/code.js');
const closure = require('code.js');
function $n2dbridge_unwrapString(value) {
    return value && value.implementsGoogStringTypedString ? value.getTypedStringValue() : value;
}
const $n2dbridge_UNWRAPPERS = {
    CONSTANT: {
        isUnwrappable(value) {
            return value instanceof goog$string$Const;
        },
        unwrap: goog$string$Const$unwrap
    },
    JAVASCRIPT: {
        isUnwrappable(value) {
            return value instanceof html.SafeScript_SafeScript || !1;
        },
        unwrap: function (script) {
            return SafeScript_SafeScript.unwrapTrustedScript(script);
        }
    },
    HTML: {
        isUnwrappable(value) {
            return value instanceof html.SafeHtml_SafeHtml || !1;
        },
        unwrap: function (html) {
            return SafeHtml_SafeHtml.unwrapTrustedHTML(html);
        }
    },
    RESOURCE_URL: {
        isUnwrappable(value) {
            return value instanceof goog$html$TrustedResourceUrl || !1;
        },
        unwrap: function (url) {
            return goog$html$TrustedResourceUrl$unwrapTrustedScriptURL(url);
        }
    },
    STRING: {
        isUnwrappable(value) {
            return value instanceof Object;
        },
        unwrap: closure.$n2dbridge_unwrapString
    },
    STYLE: {
        isUnwrappable(value) {
            return value instanceof html.SafeStyle_SafeStyle || !1;
        },
        unwrap: function (style) {
            return SafeStyle_SafeStyle.unwrap(style);
        }
    },
    URL: {
        isUnwrappable(value) {
            return value instanceof goog$html$SafeUrl || value instanceof google3.SafeUrl;
        },
        unwrap: compat.index_unwrapSafeUrl
    }
};
function $n2dbridge_disallow(value, fallback) {
    return fallback;
}
const $n2dbridge_FILTERS = {
    CONSTANT: closure.$n2dbridge_disallow,
    JAVASCRIPT: closure.$n2dbridge_disallow,
    HTML: value => SafeHtml_SafeHtml.unwrapTrustedHTML(SafeHtml_SafeHtml.htmlEscape(value)),
    RESOURCE_URL: closure.$n2dbridge_disallow,
    STRING: String,
    STYLE: closure.$n2dbridge_disallow,
    URL: (value, fallback) => {
        a: {
            for (let i = 0; i < builders.safe_url_builders_DEFAULT_SCHEMES.length; ++i) {
                const scheme = builders.safe_url_builders_DEFAULT_SCHEMES[i];
                if (scheme instanceof builders.safe_url_builders_SchemeImpl && scheme.isValid(value)) {
                    var JSCompiler_inline_result = new internals.safe_url_impl_SafeUrlImpl(value);
                    break a;
                }
            }
            JSCompiler_inline_result = void 0;
        }
        const safeValue = JSCompiler_inline_result;
        return void 0 === safeValue ? fallback : safeValue.toString();
    }
};