'use strict';
const google3 = require('google3');
const $m2dassigned = require('code.js');
const $n2dnodes_ElementProto = Element.prototype;
const $n2dnodes_legacyMatches = $m2dassigned.$n2dnodes_ElementProto.msMatchesSelector || $m2dassigned.$n2dnodes_ElementProto.webkitMatchesSelector;
function $n2dnodes_queryAssignedNodes(selector = '') {
    return google3.decorateProperty({
        descriptor: () => ({
            get() {
                var _a, _b;
                let nodes = null === (_b = null === (_a = this.renderRoot) || void 0 === _a ? void 0 : _a.querySelector('slot:not([name])')) || void 0 === _b ? void 0 : _b.assignedNodes({ flatten: !0 });
                nodes && selector && (nodes = nodes.filter(node => node.nodeType === Node.ELEMENT_NODE && (node.matches ? node.matches(selector) : $m2dassigned.$n2dnodes_legacyMatches.call(node, selector))));
                return nodes;
            },
            enumerable: !0,
            configurable: !0
        })
    });
}