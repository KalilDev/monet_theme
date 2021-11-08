'use strict';
const google3 = require('google3');
var MDCFadingTabIndicatorFoundation = class extends google3.MDCTabIndicatorFoundation {
    activate() {
        this.adapter.addClass(google3.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    }
    deactivate() {
        this.adapter.removeClass(google3.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    }
};