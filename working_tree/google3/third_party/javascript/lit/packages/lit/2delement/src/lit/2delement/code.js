'use strict';
const testing = require('../../../../../../../../../javascript/lit/testing/code.js');
const google3 = require('google3');
var LitElement = class extends google3.ReactiveElement {
    constructor() {
        super(...arguments);
        this.renderOptions = { host: this };
        this.__childPart = void 0;
    }
    createRenderRoot() {
        var _a, _b;
        const renderRoot = super.createRenderRoot();
        null !== (_a = (_b = this.renderOptions).renderBefore) && void 0 !== _a ? _a : _b.renderBefore = renderRoot.firstChild;
        return renderRoot;
    }
    update(changedProperties) {
        const value = this.render();
        super.update(changedProperties);
        this.__childPart = google3.render(value, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        null === (_a = this.__childPart) || void 0 === _a ? void 0 : JSCompiler_StaticMethods_setConnected(_a, !0);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        null === (_a = this.__childPart) || void 0 === _a ? void 0 : JSCompiler_StaticMethods_setConnected(_a, !1);
    }
    render() {
        return google3.noChange;
    }
    static notifyOnHotModuleReload(tagname) {
        const existingProps = new Set(Object.getOwnPropertyNames(this.prototype)), newProps = new Set(Object.getOwnPropertyNames((void 0).prototype));
        for (const prop of Object.getOwnPropertyNames((void 0).prototype))
            Object.defineProperty(this.prototype, prop, Object.getOwnPropertyDescriptor((void 0).prototype, prop));
        for (const existingProp of existingProps)
            newProps.has(existingProp) || delete this.prototype[existingProp];
        (void 0).finalize();
        for (const node$jscomp$0 of testing.shadow_piercer_shadowPiercingWalk(document))
            if (node$jscomp$0 instanceof HTMLElement && node$jscomp$0.tagName.toLowerCase() === tagname.toLowerCase()) {
                const myNode = node$jscomp$0, styles = myNode.constructor.elementStyles, renderRoot = myNode.renderRoot;
                if (styles && renderRoot instanceof ShadowRoot) {
                    if (google3.supportsAdoptingStyleSheets)
                        google3.adoptStyles(renderRoot, styles);
                    else {
                        const nodes = Array.from(renderRoot.children);
                        for (const node of nodes)
                            'style' === node.tagName.toLowerCase() && renderRoot.removeChild(node);
                        const lastChild = renderRoot.lastChild;
                        google3.adoptStyles(renderRoot, styles);
                        lastChild ? myNode.renderOptions.renderBefore = lastChild.nextSibling : delete myNode.renderOptions.renderBefore;
                    }
                    JSCompiler_StaticMethods_requestUpdate(myNode);
                }
            }
    }
};