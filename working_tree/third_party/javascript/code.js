'use strict';
const javascript = require('code.js');
const wicg_inert_slice = Array.prototype.slice;
const wicg_inert_matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
class wicg_inert_InertRoot {
    constructor(rootElement, inertManager) {
        this._inertManager = inertManager;
        this._rootElement = rootElement;
        this._managedNodes = new Set();
        this._savedAriaHidden = this._rootElement.hasAttribute('aria-hidden') ? this._rootElement.getAttribute('aria-hidden') : null;
        this._rootElement.setAttribute('aria-hidden', 'true');
        this._makeSubtreeUnfocusable(this._rootElement);
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, {
            attributes: !0,
            childList: !0,
            subtree: !0
        });
    }
    destructor() {
        this._observer.disconnect();
        this._rootElement && (null !== this._savedAriaHidden ? this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden) : this._rootElement.removeAttribute('aria-hidden'));
        this._managedNodes.forEach(function (inertNode) {
            this._unmanageNode(inertNode.node);
        }, this);
        this._inertManager = this._managedNodes = this._rootElement = this._observer = null;
    }
    get managedNodes() {
        return new Set(this._managedNodes);
    }
    _makeSubtreeUnfocusable(startNode) {
        javascript.wicg_inert_composedTreeWalk(startNode, node => this._visitNode(node));
        let activeElement = document.activeElement;
        if (!document.body.contains(startNode)) {
            let node = startNode, root = void 0;
            for (; node;) {
                if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    root = node;
                    break;
                }
                node = node.parentNode;
            }
            root && (activeElement = root.activeElement);
        }
        startNode.contains(activeElement) && (activeElement.blur(), activeElement === document.activeElement && document.body.focus());
    }
    _visitNode(node) {
        node.nodeType === Node.ELEMENT_NODE && (node !== this._rootElement && node.hasAttribute('inert') && this._adoptInertRoot(node), (javascript.wicg_inert_matches.call(node, 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable]') || node.hasAttribute('tabindex')) && this._manageNode(node));
    }
    _manageNode(node) {
        const inertNode = this._inertManager.register(node, this);
        this._managedNodes.add(inertNode);
    }
    _unmanageNode(node) {
        {
            var JSCompiler_StaticMethods_deregister$self = this._inertManager;
            const inertNode = JSCompiler_StaticMethods_deregister$self._managedNodes.get(node);
            if (inertNode) {
                var JSCompiler_StaticMethods_removeInertRoot$self = inertNode;
                JSCompiler_StaticMethods_removeInertRoot$self._throwIfDestroyed();
                JSCompiler_StaticMethods_removeInertRoot$self._inertRoots.delete(this);
                0 === JSCompiler_StaticMethods_removeInertRoot$self._inertRoots.size && JSCompiler_StaticMethods_removeInertRoot$self.destructor();
                inertNode.destroyed && JSCompiler_StaticMethods_deregister$self._managedNodes.delete(node);
                var JSCompiler_inline_result = inertNode;
            } else
                JSCompiler_inline_result = null;
        }
        const inertNode$jscomp$0 = JSCompiler_inline_result;
        inertNode$jscomp$0 && this._managedNodes.delete(inertNode$jscomp$0);
    }
    _unmanageSubtree(startNode) {
        javascript.wicg_inert_composedTreeWalk(startNode, node => this._unmanageNode(node));
    }
    _adoptInertRoot(node) {
        let inertSubroot = this._inertManager._inertRoots.get(node);
        inertSubroot || (JSCompiler_StaticMethods_setInert(this._inertManager, node, !0), inertSubroot = this._inertManager._inertRoots.get(node));
        inertSubroot.managedNodes.forEach(function (savedInertNode) {
            this._manageNode(savedInertNode.node);
        }, this);
    }
    _onMutation(records) {
        records.forEach(function (record) {
            const target = record.target;
            if ('childList' === record.type)
                javascript.wicg_inert_slice.call(record.addedNodes).forEach(function (node) {
                    this._makeSubtreeUnfocusable(node);
                }, this), javascript.wicg_inert_slice.call(record.removedNodes).forEach(function (node) {
                    this._unmanageSubtree(node);
                }, this);
            else if ('attributes' === record.type)
                if ('tabindex' === record.attributeName)
                    this._manageNode(target);
                else if (target !== this._rootElement && 'inert' === record.attributeName && target.hasAttribute('inert')) {
                    this._adoptInertRoot(target);
                    const inertSubroot = this._inertManager._inertRoots.get(target);
                    this._managedNodes.forEach(function (managedNode) {
                        target.contains(managedNode.node) && inertSubroot._manageNode(managedNode.node);
                    });
                }
        }, this);
    }
}
class wicg_inert_InertNode {
    constructor(node, inertRoot) {
        this._node = node;
        this._overrodeFocusMethod = !1;
        this._inertRoots = new Set([inertRoot]);
        this._savedTabIndex = null;
        this._destroyed = !1;
        JSCompiler_StaticMethods_ensureUntabbable(this);
    }
    destructor() {
        this._throwIfDestroyed();
        if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            const element = this._node;
            null !== this._savedTabIndex ? element.setAttribute('tabindex', this._savedTabIndex) : element.removeAttribute('tabindex');
            this._overrodeFocusMethod && delete element.focus;
        }
        this._inertRoots = this._node = null;
        this._destroyed = !0;
    }
    get destroyed() {
        return this._destroyed;
    }
    _throwIfDestroyed() {
        if (this.destroyed)
            throw Error('Trying to access destroyed InertNode');
    }
    get hasSavedTabIndex() {
        return null !== this._savedTabIndex;
    }
    get node() {
        this._throwIfDestroyed();
        return this._node;
    }
}
class wicg_inert_InertManager {
    constructor() {
        var document$jscomp$0 = document;
        if (!document$jscomp$0)
            throw Error('Missing required argument; InertManager needs to wrap a document.');
        this._document = document$jscomp$0;
        this._managedNodes = new Map();
        this._inertRoots = new Map();
        this._observer = new MutationObserver(this._watchForInert.bind(this));
        javascript.wicg_inert_addInertStyle(document$jscomp$0.head || document$jscomp$0.body || document$jscomp$0.documentElement);
        'loading' === document$jscomp$0.readyState ? document$jscomp$0.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    register(node, inertRoot) {
        let inertNode = this._managedNodes.get(node);
        if (void 0 !== inertNode) {
            var JSCompiler_StaticMethods_addInertRoot$self = inertNode;
            JSCompiler_StaticMethods_addInertRoot$self._throwIfDestroyed();
            JSCompiler_StaticMethods_addInertRoot$self._inertRoots.add(inertRoot);
        } else
            inertNode = new javascript.wicg_inert_InertNode(node, inertRoot);
        this._managedNodes.set(node, inertNode);
        return inertNode;
    }
    _onDocumentLoaded() {
        javascript.wicg_inert_slice.call(this._document.querySelectorAll('[inert]')).forEach(function (inertElement) {
            JSCompiler_StaticMethods_setInert(this, inertElement, !0);
        }, this);
        this._observer.observe(this._document.body, {
            attributes: !0,
            subtree: !0,
            childList: !0
        });
    }
    _watchForInert(records) {
        const _this = this;
        records.forEach(function (record) {
            switch (record.type) {
            case 'childList':
                javascript.wicg_inert_slice.call(record.addedNodes).forEach(function (node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        var inertElements = javascript.wicg_inert_slice.call(node.querySelectorAll('[inert]'));
                        javascript.wicg_inert_matches.call(node, '[inert]') && inertElements.unshift(node);
                        inertElements.forEach(function (inertElement) {
                            JSCompiler_StaticMethods_setInert(this, inertElement, !0);
                        }, _this);
                    }
                }, _this);
                break;
            case 'attributes':
                if ('inert' === record.attributeName) {
                    var target = record.target;
                    JSCompiler_StaticMethods_setInert(_this, target, target.hasAttribute('inert'));
                }
            }
        }, this);
    }
}
function wicg_inert_composedTreeWalk(node, callback, shadowRootAncestor) {
    if (node.nodeType == Node.ELEMENT_NODE) {
        callback && callback(node);
        const shadowRoot = node.shadowRoot;
        if (shadowRoot) {
            javascript.wicg_inert_composedTreeWalk(shadowRoot, callback, shadowRoot);
            return;
        }
        if ('content' == node.localName) {
            const distributedNodes = node.getDistributedNodes ? node.getDistributedNodes() : [];
            for (let i = 0; i < distributedNodes.length; i++)
                javascript.wicg_inert_composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
            return;
        }
        if ('slot' == node.localName) {
            const distributedNodes = node.assignedNodes ? node.assignedNodes({ flatten: !0 }) : [];
            for (let i = 0; i < distributedNodes.length; i++)
                javascript.wicg_inert_composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
            return;
        }
    }
    let child = node.firstChild;
    for (; null != child;)
        javascript.wicg_inert_composedTreeWalk(child, callback, shadowRootAncestor), child = child.nextSibling;
}
function wicg_inert_addInertStyle(node) {
    if (!node.querySelector('style#inert-style')) {
        var style = document.createElement('style');
        style.setAttribute('id', 'inert-style');
        style.textContent = '\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n';
        node.appendChild(style);
    }
}
const wicg_inert_inertManager = new javascript.wicg_inert_InertManager();