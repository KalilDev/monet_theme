'use strict';
const array_indexOf = Array.prototype.indexOf ? function (arr, obj) {
    goog$asserts$assert(null != arr.length);
    return Array.prototype.indexOf.call(arr, obj, void 0);
} : function (arr, obj) {
    if ('string' === typeof arr)
        return 'string' !== typeof obj || 1 != obj.length ? -1 : arr.indexOf(obj, 0);
    for (let i = 0; i < arr.length; i++)
        if (i in arr && arr[i] === obj)
            return i;
    return -1;
};
function array_concat(var_args) {
    return Array.prototype.concat.apply([], arguments);
}
function object_some(obj, f) {
    for (const key in obj)
        if (f.call(void 0, obj[key], key, obj))
            return !0;
    return !1;
}