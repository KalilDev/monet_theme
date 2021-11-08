'use strict';
const google3 = require('google3');
const $n2dfoundation_integerSort = (a, b) => a - b;
const $n2dfoundation_ELEMENTS_KEY_ALLOWED_IN = [
    'input',
    'button',
    'textarea',
    'select'
];
function $n2dfoundation_isIndexSet(selectedIndex) {
    return selectedIndex instanceof Set;
}
function $n2dbase_debounceLayout(callback) {
    let timeoutId;
    return function (updateItems = !0) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(updateItems);
        }, 50);
    };
}
function $n2dbase_clearAndCreateItemsReadyPromise() {
    const oldResolver = this.itemsReadyResolver;
    this.itemsReady = new Promise(res => this.itemsReadyResolver = res);
    oldResolver();
}
var List = class extends google3.ListBase {
};