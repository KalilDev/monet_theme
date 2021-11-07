'use strict';
const google3 = require('google3');
var Icon = class extends google3.LitElement {
    render() {
        return google3.html`<span><slot></slot></span>`;
    }
};