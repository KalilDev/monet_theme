'use strict';
const tabbar = require('../../../../../../material_components_web/tabbar/code.js');
const google3 = require('google3');
var TabBarBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCTabBarFoundation;
        this.activeIndex = 0;
        this._previousActiveIndex = -1;
    }
    _handleTabInteraction(e) {
        var JSCompiler_StaticMethods_handleTabInteraction$self = this.mdcFoundation;
        JSCompiler_StaticMethods_handleTabInteraction$self.adapter.setActiveTab(JSCompiler_StaticMethods_handleTabInteraction$self.adapter.getIndexOfTabById(e.detail.tabId));
    }
    _handleKeydown(e) {
        var JSCompiler_StaticMethods_handleKeyDown$self = this.mdcFoundation;
        var JSCompiler_inline_result = tabbar.foundation_ACCEPTABLE_KEYS.has(e.key) ? e.key : tabbar.foundation_KEYCODE_MAP.get(e.keyCode);
        if (void 0 !== JSCompiler_inline_result)
            if (JSCompiler_StaticMethods_isActivationKey(JSCompiler_inline_result) || e.preventDefault(), JSCompiler_StaticMethods_handleKeyDown$self.useAutomaticActivation) {
                if (!JSCompiler_StaticMethods_isActivationKey(JSCompiler_inline_result)) {
                    var index$jscomp$0 = JSCompiler_StaticMethods_determineTargetFromKey(JSCompiler_StaticMethods_handleKeyDown$self, JSCompiler_StaticMethods_handleKeyDown$self.adapter.getPreviousActiveTabIndex(), JSCompiler_inline_result);
                    JSCompiler_StaticMethods_handleKeyDown$self.adapter.setActiveTab(index$jscomp$0);
                    JSCompiler_StaticMethods_handleKeyDown$self.scrollIntoView(index$jscomp$0);
                }
            } else {
                const focusedTabIndex = JSCompiler_StaticMethods_handleKeyDown$self.adapter.getFocusedTabIndex();
                if (JSCompiler_StaticMethods_isActivationKey(JSCompiler_inline_result))
                    JSCompiler_StaticMethods_handleKeyDown$self.adapter.setActiveTab(focusedTabIndex);
                else {
                    const index = JSCompiler_StaticMethods_determineTargetFromKey(JSCompiler_StaticMethods_handleKeyDown$self, focusedTabIndex, JSCompiler_inline_result);
                    JSCompiler_StaticMethods_handleKeyDown$self.adapter.focusTabAtIndex(index);
                    JSCompiler_StaticMethods_handleKeyDown$self.scrollIntoView(index);
                }
            }
    }
    render() {
        return google3.html`
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${ this._handleTabInteraction }"
          @keydown="${ this._handleKeydown }">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `;
    }
    _getTabs() {
        return this.tabsSlot.assignedNodes({ flatten: !0 }).filter(e => e instanceof google3.TabBase);
    }
    _getTab(index) {
        return this._getTabs()[index];
    }
    createAdapter() {
        return {
            scrollTo: scrollX => {
                this.scrollerElement.mdcFoundation.scrollTo(scrollX);
            },
            incrementScroll: scrollXIncrement => {
                this.scrollerElement.mdcFoundation.incrementScroll(scrollXIncrement);
            },
            getScrollPosition: () => this.scrollerElement.getScrollPosition(),
            getScrollContentWidth: () => this.scrollerElement.getScrollContentWidth(),
            getOffsetWidth: () => this.mdcRoot.offsetWidth,
            isRTL: () => 'rtl' === window.getComputedStyle(this.mdcRoot).getPropertyValue('direction'),
            setActiveTab: index => JSCompiler_StaticMethods_activateTab(this.mdcFoundation, index),
            activateTabAtIndex: (index, clientRect) => {
                const tab = this._getTab(index);
                void 0 !== tab && tab.activate(clientRect);
                this._previousActiveIndex = index;
            },
            deactivateTabAtIndex: index => {
                const tab = this._getTab(index);
                void 0 !== tab && tab.deactivate();
            },
            focusTabAtIndex: index => {
                const tab = this._getTab(index);
                void 0 !== tab && tab.focus();
            },
            getTabIndicatorClientRectAtIndex: index => {
                const tab = this._getTab(index);
                return void 0 !== tab ? tab.tabIndicator.computeContentClientRect() : new DOMRect();
            },
            getTabDimensionsAtIndex: index => {
                const tab = this._getTab(index);
                return void 0 !== tab ? tab.computeDimensions() : {
                    rootLeft: 0,
                    rootRight: 0,
                    contentLeft: 0,
                    contentRight: 0
                };
            },
            getPreviousActiveTabIndex: () => this._previousActiveIndex,
            getFocusedTabIndex: () => {
                const tabElements = this._getTabs(), activeElement = this.getRootNode().activeElement;
                return tabElements.indexOf(activeElement);
            },
            getIndexOfTabById: id => {
                const tabElements = this._getTabs();
                for (let i = 0; i < tabElements.length; i++)
                    if (tabElements[i].id === id)
                        return i;
                return -1;
            },
            getTabListLength: () => this._getTabs().length,
            notifyTabActivated: index => {
                this.activeIndex = index;
                this.dispatchEvent(new CustomEvent(google3.MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT, {
                    detail: { index },
                    bubbles: !0,
                    cancelable: !0
                }));
            }
        };
    }
    firstUpdated() {
    }
    async getUpdateComplete() {
        const result = await super.getUpdateComplete();
        await this.scrollerElement.updateComplete;
        void 0 === this.mdcFoundation && JSCompiler_StaticMethods_createFoundation(this);
        return result;
    }
};