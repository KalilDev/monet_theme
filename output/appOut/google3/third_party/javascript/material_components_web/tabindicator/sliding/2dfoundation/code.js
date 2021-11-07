'use strict';
const google3 = require('google3');
var MDCSlidingTabIndicatorFoundation = class extends google3.MDCTabIndicatorFoundation {
    activate(previousIndicatorClientRect) {
        if (previousIndicatorClientRect) {
            var currentClientRect = this.computeContentClientRect(), widthDelta = previousIndicatorClientRect.width / currentClientRect.width, xPosition = previousIndicatorClientRect.left - currentClientRect.left;
            this.adapter.addClass(google3.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
            this.adapter.setContentStyleProperty('transform', `translateX(${ xPosition }px) scaleX(${ widthDelta })`);
            this.computeContentClientRect();
            this.adapter.removeClass(google3.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
            this.adapter.addClass(google3.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
            this.adapter.setContentStyleProperty('transform', '');
        } else
            this.adapter.addClass(google3.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    }
    deactivate() {
        this.adapter.removeClass(google3.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    }
};