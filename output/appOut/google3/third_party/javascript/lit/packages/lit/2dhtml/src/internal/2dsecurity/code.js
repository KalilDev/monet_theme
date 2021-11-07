'use strict';
const $m2ddom = require('../../../../../../../security/polymer_resin/allowed/2ddom/code.js');
const contracts = require('../../../../../../../security/html/contracts/code.js');
const namealiases = require('../../../../../../../security/html/namealiases/code.js');
const contrib = require('../../../../../../../../../javascript/typescript/contrib/code.js');
const closure = require('../../../../../../../security/polymer_resin/closure/code.js');
const configs = require('../../../../../../../security/polymer_resin/configs/code.js');
const google3 = require('google3');
const polymer_resin = require('../../../../../../../security/polymer_resin/code.js');
var sanitizerFactory = function (config) {
    function getUncustomizedProxy(element) {
        const elementName = element.localName;
        if (!element.getAttribute('is') && 2 === polymer_resin.classifier_classifyElement(elementName, element.constructor))
            return VANILLA_HTML_ELEMENT;
        let uncustomizedProxy = uncustomizedProxies[elementName];
        uncustomizedProxy || (uncustomizedProxy = uncustomizedProxies[elementName] = document.createElement(elementName));
        return uncustomizedProxy;
    }
    let reportHandler = config.reportHandler || void 0;
    const safeTypesBridge = config.safeTypesBridge || polymer_resin.sanitize_DEFAULT_SAFE_TYPES_BRIDGE;
    let allowedIdentifierPattern = /^$/;
    const configAllowedIdentifierPrefixes = config.allowedIdentifierPrefixes;
    if (configAllowedIdentifierPrefixes)
        for (const allowedPrefix of configAllowedIdentifierPrefixes)
            allowedIdentifierPattern = new RegExp(allowedIdentifierPattern.source + '|^' + String(allowedPrefix).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08'));
    void 0 === reportHandler && 'undefined' !== typeof console && (reportHandler = google3.CONSOLE_LOGGING_REPORT_HANDLER);
    reportHandler && reportHandler(!1, 'initResin', null);
    const valueHandlers = polymer_resin.sanitize_getValueHandlers(allowedIdentifierPattern, safeTypesBridge, reportHandler), uncustomizedProxies = {}, VANILLA_HTML_ELEMENT = document.createElement('polyresinuncustomized');
    return function (node, name$jscomp$0, type) {
        const nodeType = node.nodeType;
        if (nodeType !== Node.ELEMENT_NODE) {
            if (nodeType === Node.TEXT_NODE) {
                const parentElement = node.parentElement;
                let allowText = !parentElement;
                if (parentElement && parentElement.nodeType === Node.ELEMENT_NODE) {
                    const parentElementName = parentElement.localName, parentClassification = polymer_resin.classifier_classifyElement(parentElementName, parentElement.constructor);
                    switch (parentClassification) {
                    case 0:
                    case 1:
                        const contentType = $m2ddom.$n2dproperties_contentTypeForElement(parentElementName, parentElement);
                        allowText = 1 === contentType || 6 === contentType;
                        break;
                    case 3:
                    case 2:
                        allowText = !0;
                        break;
                    default:
                        contrib.check_checkExhaustiveAllowing(parentClassification, 'got an unknown element classification');
                    }
                }
                if (allowText)
                    return value => '' + safeTypesBridge(value, 'STRING', value);
            }
            return value => {
                if (!value && value !== document.all)
                    return value;
                reportHandler && reportHandler(!0, `Failed to sanitize ${ node.parentElement && node.parentElement.nodeName } #text node to value ${ value }`, node.parentElement);
                return polymer_resin.sanitize_INNOCUOUS_STRING;
            };
        }
        const elementName = node.localName, elementProxy = getUncustomizedProxy(node);
        let enforcedType = null;
        switch (type) {
        case 'attribute':
            if (namealiases.namealiases_attrToProperty(name$jscomp$0) in elementProxy)
                break;
            return value => value;
        case 'property':
            if (name$jscomp$0 in elementProxy) {
                enforcedType = $m2ddom.$n2dproperties_getDomPropertyContract(elementProxy, name$jscomp$0);
                break;
            }
            const worstCase = namealiases.namealiases_specialPropertyNameWorstCase(name$jscomp$0);
            if (worstCase && worstCase in elementProxy)
                break;
            return value => value;
        default:
            contrib.check_checkExhaustiveAllowing(type, 'got an unknown resin type, expected either \'property\' or \'attribute\'');
        }
        const attrName = 'attribute' === type ? name$jscomp$0.toLowerCase() : namealiases.namealiases_propertyToAttr(name$jscomp$0);
        enforcedType || (enforcedType = contracts.contracts_typeOfAttribute(elementName, attrName, name => {
            const value = node.getAttribute(name);
            return !value || /[\[\{]/.test(name) ? null : value;
        }));
        return value => {
            let safeValue = polymer_resin.sanitize_DID_NOT_UNWRAP, safeReplacement = null;
            if (!value && value !== document.all)
                return value;
            if (null != enforcedType) {
                const valueHandler = valueHandlers[enforcedType], safeType = valueHandler.safeType;
                safeReplacement = valueHandler.safeReplacement;
                safeType && (safeValue = safeTypesBridge(value, safeType, polymer_resin.sanitize_DID_NOT_UNWRAP));
                if (safeValue === polymer_resin.sanitize_DID_NOT_UNWRAP) {
                    if (valueHandler.filterString) {
                        const stringValue = String(safeTypesBridge(value, 'STRING', value));
                        safeValue = valueHandler.filterString(elementName, attrName, stringValue);
                    } else
                        valueHandler.filterRaw && (safeValue = valueHandler.filterRaw(elementName, attrName, value, node));
                    safeValue === safeReplacement && (safeValue = polymer_resin.sanitize_DID_NOT_UNWRAP);
                }
            }
            if (safeValue === polymer_resin.sanitize_DID_NOT_UNWRAP && (safeValue = safeReplacement || polymer_resin.sanitize_INNOCUOUS_STRING, reportHandler)) {
                const attrValue = void 0 !== value.getTypedStringValue ? value.getTypedStringValue() : value;
                reportHandler(!0, `Failed to sanitize attribute of <${ elementName }>: <${ elementName } ${ attrName }="${ attrValue }">`, node);
            }
            return safeValue;
        };
    };
}({
    allowedIdentifierPrefixes: [''],
    reportHandler: function (isDisallowedValue, message) {
        if (isDisallowedValue && configs.goog_log_config_logger) {
            var msg = message, level = goog$log$Level$WARNING, JSCompiler_temp;
            if (JSCompiler_temp = configs.goog_log_config_logger) {
                if (configs.goog_log_config_logger && level) {
                    var JSCompiler_temp_const = level.value;
                    var JSCompiler_inline_result = configs.goog_log_config_logger ? JSCompiler_StaticMethods_getEffectiveLevel(JSCompiler_StaticMethods_getLogRegistryEntry(goog$log$LogRegistry_$getInstance(), configs.goog_log_config_logger.getName())) : goog$log$Level$OFF;
                    var JSCompiler_temp$jscomp$0 = JSCompiler_temp_const >= JSCompiler_inline_result.value;
                } else
                    JSCompiler_temp$jscomp$0 = !1;
                JSCompiler_temp = JSCompiler_temp$jscomp$0;
            }
            if (JSCompiler_temp) {
                level = level || goog$log$Level$OFF;
                const loggerEntry = JSCompiler_StaticMethods_getLogRegistryEntry(goog$log$LogRegistry_$getInstance(), configs.goog_log_config_logger.getName());
                'function' === typeof msg && (msg = msg());
                goog$log$LogBuffer$instance_ || (goog$log$LogBuffer$instance_ = new goog$log$LogBuffer());
                var JSCompiler_inline_result$jscomp$0 = goog$log$LogBuffer$instance_;
                var level$jscomp$0 = level, msg$jscomp$0 = msg, loggerName = configs.goog_log_config_logger.getName();
                if (0 < JSCompiler_inline_result$jscomp$0.capacity_) {
                    var curIndex = (JSCompiler_inline_result$jscomp$0.curIndex_ + 1) % JSCompiler_inline_result$jscomp$0.capacity_;
                    JSCompiler_inline_result$jscomp$0.curIndex_ = curIndex;
                    if (JSCompiler_inline_result$jscomp$0.isFull_) {
                        const ret = JSCompiler_inline_result$jscomp$0.buffer_[curIndex];
                        ret.reset(level$jscomp$0, msg$jscomp$0, loggerName);
                        var JSCompiler_inline_result$jscomp$1 = ret;
                    } else
                        JSCompiler_inline_result$jscomp$0.isFull_ = curIndex == JSCompiler_inline_result$jscomp$0.capacity_ - 1, JSCompiler_inline_result$jscomp$1 = JSCompiler_inline_result$jscomp$0.buffer_[curIndex] = new goog$log$LogRecord(level$jscomp$0, msg$jscomp$0, loggerName);
                } else
                    JSCompiler_inline_result$jscomp$1 = new goog$log$LogRecord(level$jscomp$0, msg$jscomp$0, loggerName);
                JSCompiler_StaticMethods_publish(loggerEntry, JSCompiler_inline_result$jscomp$1);
            }
        }
    },
    safeTypesBridge: (value, expectedType, fallback) => {
        const unwrapper = closure.$n2dbridge_UNWRAPPERS[expectedType];
        if (unwrapper.isUnwrappable(value)) {
            const uw = unwrapper.unwrap(value, fallback);
            if (uw !== fallback)
                return uw;
        }
        return (0, closure.$n2dbridge_FILTERS[expectedType])(String(closure.$n2dbridge_unwrapString(value)), fallback);
    }
});