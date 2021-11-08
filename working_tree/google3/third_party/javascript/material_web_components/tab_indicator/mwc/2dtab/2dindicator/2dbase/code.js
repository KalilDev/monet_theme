'use strict';
const base = require('../../../../../base/code.js');
const google3 = require('google3');
var TabIndicatorBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.icon = '';
        this.fade = !1;
    }
    get mdcFoundationClass() {
        return this.fade ? google3.MDCFadingTabIndicatorFoundation : google3.MDCSlidingTabIndicatorFoundation;
    }
    render() {
        const contentClasses = {
            'mdc-tab-indicator__content--icon': this.icon,
            'material-icons': this.icon,
            'mdc-tab-indicator__content--underline': !this.icon
        };
        return google3.html`
      <span class="mdc-tab-indicator ${ google3.classMap({ 'mdc-tab-indicator--fade': this.fade }) }">
        <span class="mdc-tab-indicator__content ${ google3.classMap(contentClasses) }">${ this.icon }</span>
      </span>
      `;
    }
    updated(changedProperties) {
        changedProperties.has('fade') && JSCompiler_StaticMethods_createFoundation(this);
    }
    createAdapter() {
        return Object.assign(Object.assign({}, base.utils_addHasRemoveClass(this.mdcRoot)), {
            computeContentClientRect: () => this.contentElement.getBoundingClientRect(),
            setContentStyleProperty: (prop, value) => this.contentElement.style.setProperty(prop, value)
        });
    }
    computeContentClientRect() {
        return this.mdcFoundation.computeContentClientRect();
    }
    activate(previousIndicatorClientRect) {
        this.mdcFoundation.activate(previousIndicatorClientRect);
    }
    deactivate() {
        this.mdcFoundation.deactivate();
    }
};