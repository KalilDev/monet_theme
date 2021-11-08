'use strict';
const html = require('code.js');
const SafeScript_CONSTRUCTOR_TOKEN_PRIVATE = {};
class SafeScript_SafeScript {
    constructor(value, token) {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = token === html.SafeScript_CONSTRUCTOR_TOKEN_PRIVATE ? value : '';
        this.implementsGoogStringTypedString = !0;
    }
    getTypedStringValue() {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
    }
}
const SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE = {};
class SafeStyle_SafeStyle {
    constructor(value, token) {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = token === html.SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE ? value : '';
        this.implementsGoogStringTypedString = !0;
    }
    getTypedStringValue() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    }
    toString() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_.toString();
    }
}
function SafeStyle_sanitizePropertyValue(value) {
    if (value instanceof goog$html$SafeUrl)
        return 'url("' + goog$html$SafeUrl$unwrap(value).replace(/</g, '%3c').replace(/[\\"]/g, '\\$&') + '")';
    const result = value instanceof goog$string$Const ? goog$string$Const$unwrap(value) : html.SafeStyle_sanitizePropertyValueString(String(value));
    if (/[{;}]/.test(result))
        throw new goog$asserts$AssertionError('Value does not allow [{;}], got: %s.', [result]);
    return result;
}
function SafeStyle_sanitizePropertyValueString(value) {
    const valueWithoutFunctions = value.replace(html.SafeStyle_FUNCTIONS_RE, '$1').replace(html.SafeStyle_FUNCTIONS_RE, '$1').replace(html.SafeStyle_URL_RE, 'url');
    if (html.SafeStyle_VALUE_RE.test(valueWithoutFunctions)) {
        if (html.SafeStyle_COMMENT_RE.test(value))
            return goog$asserts$fail(`String value disallows comments, got: ${ value }`), 'zClosurez';
        let outsideSingle = !0, outsideDouble = !0;
        for (let i = 0; i < value.length; i++) {
            const c = value.charAt(i);
            '\'' == c && outsideDouble ? outsideSingle = !outsideSingle : '"' == c && outsideSingle && (outsideDouble = !outsideDouble);
        }
        if (!outsideSingle || !outsideDouble)
            return goog$asserts$fail(`String value requires balanced quotes, got: ${ value }`), 'zClosurez';
        if (!html.SafeStyle_hasBalancedSquareBrackets(value))
            return goog$asserts$fail('String value requires balanced square brackets and one identifier per pair of brackets, got: ' + value), 'zClosurez';
    } else
        return goog$asserts$fail('String value allows only [-,."\'%_!#/ a-zA-Z0-9\\[\\]] and simple functions, got: ' + value), 'zClosurez';
    return html.SafeStyle_sanitizeUrl(value);
}
function SafeStyle_hasBalancedSquareBrackets(value) {
    let outside = !0;
    const tokenRe = /^[-_a-zA-Z0-9]$/;
    for (let i = 0; i < value.length; i++) {
        const c = value.charAt(i);
        if (']' == c) {
            if (outside)
                return !1;
            outside = !0;
        } else if ('[' == c) {
            if (!outside)
                return !1;
            outside = !1;
        } else if (!outside && !tokenRe.test(c))
            return !1;
    }
    return outside;
}
const SafeStyle_VALUE_RE = RegExp('^[-,."\'%_!#/ a-zA-Z0-9\\[\\]]+$');
const SafeStyle_URL_RE = RegExp('\\b(url\\([ \t\n]*)(\'[ -&(-\\[\\]-~]*\'|"[ !#-\\[\\]-~]*"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))', 'g');
const SafeStyle_FUNCTIONS_RE = RegExp('\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-z.%#\\[\\], ]+\\)', 'g');
const SafeStyle_COMMENT_RE = /\/\*/;
function SafeStyle_sanitizeUrl(value) {
    return value.replace(html.SafeStyle_URL_RE, (match$jscomp$0, before, url, after) => {
        let quote = '';
        url = url.replace(/^(['"])(.*)\1$/, (match, start, inside) => {
            quote = start;
            return inside;
        });
        const sanitized = (goog$html$SafeUrl$trySanitize(url) || goog$html$SafeUrl$INNOCUOUS_URL).getTypedStringValue();
        return before + quote + sanitized + quote + after;
    });
}
const SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE = {};
class SafeHtml_SafeHtml {
    constructor(value, dir, token) {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = token === html.SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE ? value : '';
        this.dir_ = dir;
        this.implementsGoogStringTypedString = this.implementsGoogI18nBidiDirectionalString = !0;
    }
    getDirection() {
        return this.dir_;
    }
    getTypedStringValue() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    }
    toString() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
    }
}
const SafeHtml_VALID_NAMES_IN_TAG = /^[a-zA-Z0-9-]+$/;
const SafeHtml_URL_ATTRIBUTES = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
};
const SafeHtml_NOT_ALLOWED_TAG_NAMES = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
};