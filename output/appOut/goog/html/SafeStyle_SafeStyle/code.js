'use strict';
const html = require('../code.js');
var unwrap = function (safeStyle) {
    if (safeStyle instanceof html.SafeStyle_SafeStyle && safeStyle.constructor === html.SafeStyle_SafeStyle)
        return safeStyle.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    goog$asserts$fail(`expected object of type SafeStyle, got '${ safeStyle }` + '\' of type ' + goog$typeOf(safeStyle));
    return 'type_error:SafeStyle';
};
var EMPTY = new html.SafeStyle_SafeStyle('', html.SafeStyle_CONSTRUCTOR_TOKEN_PRIVATE);