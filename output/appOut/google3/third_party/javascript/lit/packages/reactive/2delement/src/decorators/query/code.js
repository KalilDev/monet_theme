'use strict';
const google3 = require('google3');
function $n2dasync_queryAsync() {
    return google3.decorateProperty({
        descriptor: () => ({
            async get() {
                var _a;
                await this.updateComplete;
                return null === (_a = this.renderRoot) || void 0 === _a ? void 0 : _a.querySelector('mwc-ripple');
            },
            enumerable: !0,
            configurable: !0
        })
    });
}