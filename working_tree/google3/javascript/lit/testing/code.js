'use strict';
const testing = require('code.js');
function* shadow_piercer_shadowPiercingWalk(node) {
    yield node;
    if ('slot' === node.localName) {
        const slotNodes = node.assignedNodes({ flatten: !0 });
        for (let i = 0; i < slotNodes.length; i++)
            yield* testing.shadow_piercer_shadowPiercingWalk(slotNodes[i]);
    } else if ('content' === node.localName && 'getDistributedNodes' in node) {
        const contentNodes = node.getDistributedNodes();
        for (let i = 0; i < contentNodes.length; i++)
            yield* testing.shadow_piercer_shadowPiercingWalk(contentNodes[i]);
    }
    if (node.shadowRoot) {
        const shadowRootNodes = node.shadowRoot.childNodes;
        for (let i = 0; i < shadowRootNodes.length; i++)
            yield* testing.shadow_piercer_shadowPiercingWalk(shadowRootNodes[i]);
    } else if (node.childNodes)
        for (let i = 0; i < node.childNodes.length; i++)
            yield* testing.shadow_piercer_shadowPiercingWalk(node.childNodes[i]);
}