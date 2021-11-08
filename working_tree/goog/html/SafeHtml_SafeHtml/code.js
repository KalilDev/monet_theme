'use strict';
const SafeStyle_SafeStyle = require('../SafeStyle_SafeStyle/code.js');
const html = require('../code.js');
const SafeHtml_SafeHtml = require('code.js');
var unwrapTrustedHTML = function (safeHtml) {
    if (safeHtml instanceof html.SafeHtml_SafeHtml && safeHtml.constructor === html.SafeHtml_SafeHtml)
        return safeHtml.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    goog$asserts$fail(`expected object of type SafeHtml, got '${ safeHtml }' of type ` + goog$typeOf(safeHtml));
    return 'type_error:SafeHtml';
};
var htmlEscape = function (textOrHtml) {
    if (textOrHtml instanceof html.SafeHtml_SafeHtml)
        return textOrHtml;
    const textIsObject = 'object' == typeof textOrHtml;
    let dir = null;
    textIsObject && textOrHtml.implementsGoogI18nBidiDirectionalString && (dir = textOrHtml.getDirection());
    let textAsString;
    textAsString = textIsObject && textOrHtml.implementsGoogStringTypedString ? textOrHtml.getTypedStringValue() : String(textOrHtml);
    return SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog$string$internal$htmlEscape(textAsString), dir);
};
var createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (html, dir) {
    const policy = goog$html$trustedtypes$getPolicyPrivateDoNotAccessOrElse(), trustedHtml = policy ? policy.createHTML(html) : html;
    return new html.SafeHtml_SafeHtml(trustedHtml, dir, html.SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE);
};
var verifyTagName = function (tagName) {
    if (!html.SafeHtml_VALID_NAMES_IN_TAG.test(tagName))
        throw Error(`Invalid tag name <${ tagName }>.`);
    if (tagName.toUpperCase() in html.SafeHtml_NOT_ALLOWED_TAG_NAMES)
        throw Error(`Tag name <${ tagName }> is not allowed for SafeHtml.`);
};
var createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (tagName$jscomp$0, attributes, content) {
    let dir = null, result, result$jscomp$0 = '';
    if (attributes)
        for (let name$jscomp$0 in attributes)
            if (Object.prototype.hasOwnProperty.call(attributes, name$jscomp$0)) {
                if (!html.SafeHtml_VALID_NAMES_IN_TAG.test(name$jscomp$0))
                    throw Error(`Invalid attribute name "${ name$jscomp$0 }".`);
                const value$jscomp$0 = attributes[name$jscomp$0];
                if (null != value$jscomp$0) {
                    var JSCompiler_temp_const = result$jscomp$0, tagName = tagName$jscomp$0, name$jscomp$1 = name$jscomp$0, value$jscomp$1 = value$jscomp$0;
                    if (value$jscomp$1 instanceof goog$string$Const)
                        value$jscomp$1 = goog$string$Const$unwrap(value$jscomp$1);
                    else if ('style' == name$jscomp$1.toLowerCase()) {
                        var value$jscomp$2 = value$jscomp$1;
                        if (!goog$isObject(value$jscomp$2))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof value$jscomp$2 + ' given: ' + value$jscomp$2);
                        if (!(value$jscomp$2 instanceof html.SafeStyle_SafeStyle)) {
                            var map = value$jscomp$2;
                            let style = '';
                            for (let name in map)
                                if (Object.prototype.hasOwnProperty.call(map, name)) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(name))
                                        throw Error(`Name allows only [-_a-zA-Z0-9], got: ${ name }`);
                                    let value = map[name];
                                    null != value && (value = Array.isArray(value) ? value.map(html.SafeStyle_sanitizePropertyValue).join(' ') : html.SafeStyle_sanitizePropertyValue(value), style += `${ name }:${ value };`);
                                }
                            value$jscomp$2 = style ? new html.SafeStyle_SafeStyle(style, html.SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE) : SafeStyle_SafeStyle.EMPTY;
                        }
                        value$jscomp$1 = SafeStyle_SafeStyle.unwrap(value$jscomp$2);
                    } else {
                        if (/^on/i.test(name$jscomp$1))
                            throw Error(`Attribute "${ name$jscomp$1 }` + '" requires goog.string.Const value, "' + value$jscomp$1 + '" given.');
                        if (name$jscomp$1.toLowerCase() in html.SafeHtml_URL_ATTRIBUTES)
                            if (value$jscomp$1 instanceof goog$html$TrustedResourceUrl)
                                value$jscomp$1 = goog$html$TrustedResourceUrl$unwrapTrustedScriptURL(value$jscomp$1).toString();
                            else if (value$jscomp$1 instanceof goog$html$SafeUrl)
                                value$jscomp$1 = goog$html$SafeUrl$unwrap(value$jscomp$1);
                            else if ('string' === typeof value$jscomp$1)
                                value$jscomp$1 = (goog$html$SafeUrl$trySanitize(value$jscomp$1) || goog$html$SafeUrl$INNOCUOUS_URL).getTypedStringValue();
                            else
                                throw Error(`Attribute "${ name$jscomp$1 }" on tag "${ tagName }` + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + value$jscomp$1 + '" given.');
                    }
                    value$jscomp$1.implementsGoogStringTypedString && (value$jscomp$1 = value$jscomp$1.getTypedStringValue());
                    goog$asserts$assert('string' === typeof value$jscomp$1 || 'number' === typeof value$jscomp$1, 'String or number value expected, got ' + typeof value$jscomp$1 + ' with value: ' + value$jscomp$1);
                    var JSCompiler_inline_result = `${ name$jscomp$1 }="` + goog$string$internal$htmlEscape(String(value$jscomp$1)) + '"';
                    result$jscomp$0 = JSCompiler_temp_const + (' ' + JSCompiler_inline_result);
                }
            }
    result = `<${ tagName$jscomp$0 }` + result$jscomp$0;
    null == content ? content = [] : Array.isArray(content) || (content = [content]);
    if (!0 === goog$dom$tags$VOID_TAGS_[tagName$jscomp$0.toLowerCase()])
        goog$asserts$assert(!content.length, `Void tag <${ tagName$jscomp$0 }> does not allow content.`), result += '>';
    else {
        const html = SafeHtml_SafeHtml.concat(content);
        result += '>' + SafeHtml_SafeHtml.unwrapTrustedHTML(html).toString() + '</' + tagName$jscomp$0 + '>';
        dir = html.getDirection();
    }
    const dirAttribute = attributes && attributes.dir;
    dirAttribute && (dir = /^(ltr|rtl|auto)$/i.test(dirAttribute) ? 0 : null);
    return SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(result, dir);
};
var join = function (parts) {
    const separatorHtml = SafeHtml_SafeHtml.htmlEscape(SafeHtml_SafeHtml.EMPTY);
    let dir = separatorHtml.getDirection();
    const content = [], addArgument = argument => {
            if (Array.isArray(argument))
                argument.forEach(addArgument);
            else {
                const html = SafeHtml_SafeHtml.htmlEscape(argument);
                content.push(SafeHtml_SafeHtml.unwrapTrustedHTML(html).toString());
                const htmlDir = html.getDirection();
                0 == dir ? dir = htmlDir : 0 != htmlDir && dir != htmlDir && (dir = null);
            }
        };
    parts.forEach(addArgument);
    return SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content.join(SafeHtml_SafeHtml.unwrapTrustedHTML(separatorHtml).toString()), dir);
};
var concat = function (var_args) {
    return SafeHtml_SafeHtml.join(Array.prototype.slice.call(arguments));
};
var DOCTYPE_HTML = SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse('<!DOCTYPE html>', 0);
var EMPTY = new html.SafeHtml_SafeHtml(goog$global.trustedTypes && goog$global.trustedTypes.emptyHTML || '', 0, html.SafeHtml_CONSTRUCTOR_TOKEN_PRIVATE);