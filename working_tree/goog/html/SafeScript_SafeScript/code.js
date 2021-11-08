'use strict';
const html = require('../code.js');
const SafeScript_SafeScript = require('code.js');
var createSafeScriptSecurityPrivateDoNotAccessOrElse = function (script) {
    const policy = goog$html$trustedtypes$getPolicyPrivateDoNotAccessOrElse(), trustedScript = policy ? policy.createScript(script) : script;
    return new html.SafeScript_SafeScript(trustedScript, html.SafeScript_CONSTRUCTOR_TOKEN_PRIVATE);
};
var unwrapTrustedScript = function (safeScript) {
    if (safeScript instanceof html.SafeScript_SafeScript && safeScript.constructor === html.SafeScript_SafeScript)
        return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;
    goog$asserts$fail('expected object of type SafeScript, got \'' + safeScript + '\' of type ' + goog$typeOf(safeScript));
    return 'type_error:SafeScript';
};
var EMPTY = SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse('');