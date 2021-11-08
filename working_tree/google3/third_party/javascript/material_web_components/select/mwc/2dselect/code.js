'use strict';
const google3 = require('google3');
const $n2dbase_createValidityObj = (customValidity = {}) => {
    const objectifiedCustomValidity = {};
    for (const propName in customValidity)
        objectifiedCustomValidity[propName] = customValidity[propName];
    return Object.assign({
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valid: !0,
        valueMissing: !1
    }, objectifiedCustomValidity);
};
var Select = class extends google3.SelectBase {
};