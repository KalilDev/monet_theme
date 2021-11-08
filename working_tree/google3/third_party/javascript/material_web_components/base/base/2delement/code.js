'use strict';
const google3 = require('google3');
var BaseElement = class extends google3.LitElement {
    click() {
        this.mdcRoot ? (this.mdcRoot.focus(), this.mdcRoot.click()) : super.click();
    }
    firstUpdated() {
        JSCompiler_StaticMethods_createFoundation(this);
    }
};