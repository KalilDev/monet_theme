'use strict';
const contracts = require('../html/contracts/code.js');
const polymer_resin = require('code.js');
const classifier_docRegisteredElements = {};
const classifier_VALID_CUSTOM_ELEMENT_NAME_REGEX = RegExp('^(?!(?:annotation-xml|color-profile|font-face|font-face(?:-(?:src|uri|format|name))?|missing-glyph)$)[a-z][a-z.0-9_\xB7À-ÖØ-öø-ͽ‌‍‿-⁀\u2070-\u218FⰀ-\u2FEF\u3001-\uDFFF豈-\uFDCFﷰ-\uFFFD]*-[\\-a-z.0-9_\xB7À-ÖØ-öø-ͽ‌‍‿-⁀\u2070-\u218FⰀ-\u2FEF\u3001-\uDFFF豈-\uFDCFﷰ-\uFFFD]*$');
function classifier_classifyElement(name, ctor) {
    const customElementsRegistry = window.customElements;
    return customElementsRegistry && customElementsRegistry.get(name) || !0 === polymer_resin.classifier_docRegisteredElements[name] ? 2 : 'HTMLUnknownElement' === ctor.name ? 1 : 'HTMLElement' === ctor.name && polymer_resin.classifier_VALID_CUSTOM_ELEMENT_NAME_REGEX.test(name) ? 3 : 0;
}
const sanitize_SRCSET_IMG_CANDIDATE_RE = /(?!,)([^\t\n\f\r ]+)(?:[\t\n\f\r ]+([.0-9+\-]+[a-z]?))?/gi;
const sanitize_ASCII_SPACES_RE = /[\t\n\f\r ]+/;
const sanitize_SRCSET_METACHARS_RE = /[\t\n\f\r ,]+/g;
function sanitize_parseImageCandidate(str) {
    const match = str.split(polymer_resin.sanitize_ASCII_SPACES_RE, 2);
    return match ? {
        url: match[0],
        metadata: match[1]
    } : null;
}
function sanitize_unparseImageCandidate(imageCandidate) {
    let imageCandidateString = String(imageCandidate.url).replace(polymer_resin.sanitize_SRCSET_METACHARS_RE, encodeURIComponent);
    const metadata = imageCandidate.metadata;
    if (metadata) {
        polymer_resin.sanitize_SRCSET_METACHARS_RE.lastIndex = 0;
        if (polymer_resin.sanitize_SRCSET_METACHARS_RE.test(metadata))
            return null;
        imageCandidateString += ' ' + metadata;
    }
    return imageCandidateString;
}
const sanitize_DEFAULT_SAFE_TYPES_BRIDGE = (value, type, fallback) => fallback;
const sanitize_DID_NOT_UNWRAP = {};
function sanitize_getValueHandlers(allowedIdentifierPattern, safeTypesBridge, reportHandler) {
    const valueHandlers = [
        ,
        {
            filterRaw(elementName, attributeName, initialValue) {
                return initialValue;
            },
            filterString: void 0,
            safeReplacement: void 0,
            safeType: void 0
        },
        {
            filterRaw: void 0,
            filterString: void 0,
            safeReplacement: void 0,
            safeType: 'HTML'
        }
    ];
    valueHandlers[3] = {
        filterRaw: void 0,
        filterString: void 0,
        safeReplacement: polymer_resin.sanitize_INNOCUOUS_URL,
        safeType: 'URL'
    };
    valueHandlers[4] = {
        filterRaw: void 0,
        filterString: void 0,
        safeReplacement: polymer_resin.sanitize_INNOCUOUS_URL,
        safeType: 'RESOURCE_URL'
    };
    valueHandlers[5] = {
        filterRaw: void 0,
        filterString: void 0,
        safeReplacement: polymer_resin.sanitize_INNOCUOUS_STRING,
        safeType: 'STYLE'
    };
    valueHandlers[7] = {
        filterRaw: void 0,
        filterString: void 0,
        safeReplacement: polymer_resin.sanitize_INNOCUOUS_SCRIPT,
        safeType: 'JAVASCRIPT'
    };
    valueHandlers[8] = {
        filterRaw: void 0,
        filterString(elementName, attributeName, stringValue) {
            const lowerValue = String(stringValue).toLowerCase();
            a: {
                let valueSetIndex = null, attrToValueSetIndex = contracts.contracts_ENUM_VALUE_SET_BY_ATTR[elementName];
                attrToValueSetIndex && (valueSetIndex = attrToValueSetIndex[attributeName]);
                if ('number' !== typeof valueSetIndex && ((attrToValueSetIndex = contracts.contracts_ENUM_VALUE_SET_BY_ATTR['*']) && (valueSetIndex = attrToValueSetIndex[attributeName]), 'number' !== typeof valueSetIndex)) {
                    var JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = !0 === contracts.contracts_ENUM_VALUE_SETS[valueSetIndex][String(lowerValue).toLowerCase()];
            }
            return JSCompiler_inline_result ? lowerValue : polymer_resin.sanitize_INNOCUOUS_STRING;
        },
        safeReplacement: polymer_resin.sanitize_INNOCUOUS_STRING,
        safeType: void 0
    };
    valueHandlers[9] = {
        filterRaw: void 0,
        filterString: void 0,
        safeReplacement: polymer_resin.sanitize_INNOCUOUS_STRING,
        safeType: 'CONSTANT'
    };
    valueHandlers[10] = {
        filterRaw: void 0,
        filterString(elementName, attributeName, stringValue) {
            return allowedIdentifierPattern.test(stringValue) ? stringValue : polymer_resin.sanitize_INNOCUOUS_STRING;
        },
        safeReplacement: polymer_resin.sanitize_INNOCUOUS_STRING,
        safeType: 'CONSTANT'
    };
    valueHandlers[11] = {
        filterRaw(elementName, attributeName, initialValue, element) {
            let value;
            if ('string' === typeof initialValue) {
                const imageCandidateStrings = initialValue.match(polymer_resin.sanitize_SRCSET_IMG_CANDIDATE_RE);
                value = imageCandidateStrings ? imageCandidateStrings.map(polymer_resin.sanitize_parseImageCandidate).filter(Boolean) : [];
            } else if (Array.isArray(initialValue))
                value = initialValue;
            else
                return polymer_resin.sanitize_INNOCUOUS_URL;
            var x = value;
            const safe = [], problems = [], sentinel = {};
            if (Array.isArray(x))
                for (let i = 0, n = x.length; i < n; ++i) {
                    const imageCandidate = x[i], url = imageCandidate && imageCandidate.url;
                    if (url) {
                        const safeUrl = safeTypesBridge(url, 'URL', sentinel);
                        if (safeUrl) {
                            const foundSafeValue = safeUrl !== sentinel;
                            (foundSafeValue ? safe : problems).push({
                                url: foundSafeValue ? safeUrl : url,
                                metadata: imageCandidate.metadata
                            });
                        }
                    }
                }
            else
                problems.push(x);
            const problems$jscomp$0 = problems.length ? JSON.stringify(problems) : null;
            let safeValue = polymer_resin.sanitize_DID_NOT_UNWRAP;
            if (safe.length) {
                if (!Array.isArray(safe))
                    throw Error();
                safeValue = safe.map(polymer_resin.sanitize_unparseImageCandidate).filter(Boolean).join(' , ') || polymer_resin.sanitize_DID_NOT_UNWRAP;
            }
            problems$jscomp$0 && reportHandler && reportHandler(!0, `Failed to sanitize attribute value of <${ elementName }>: <${ elementName } ${ attributeName }="${ initialValue }">: ${ problems$jscomp$0 }`, element);
            return safeValue === polymer_resin.sanitize_DID_NOT_UNWRAP ? polymer_resin.sanitize_INNOCUOUS_URL : safeValue;
        },
        filterString: void 0,
        safeReplacement: void 0,
        safeType: void 0
    };
    return valueHandlers;
}