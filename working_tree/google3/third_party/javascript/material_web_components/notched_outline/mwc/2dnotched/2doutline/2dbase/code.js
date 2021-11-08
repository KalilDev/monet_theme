'use strict';
const google3 = require('google3');
var NotchedOutlineBase = class extends google3.BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = google3.MDCNotchedOutlineFoundation;
        this.width = 0;
        this.open = !1;
    }
    createAdapter() {
        return {
            addClass: className => this.mdcRoot.classList.add(className),
            removeClass: className => this.mdcRoot.classList.remove(className),
            setNotchWidthProperty: width => this.notchElement.style.setProperty('width', `${ width }px`),
            removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width')
        };
    }
    render() {
        var width = this.width;
        if (this.mdcFoundation)
            if (this.open && void 0 !== width) {
                var JSCompiler_StaticMethods_notch$self = this.mdcFoundation, notchWidth = width;
                const OUTLINE_NOTCHED = google3.MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                0 < notchWidth && (notchWidth += google3.numbers.NOTCH_ELEMENT_PADDING);
                JSCompiler_StaticMethods_notch$self.adapter.setNotchWidthProperty(notchWidth);
                JSCompiler_StaticMethods_notch$self.adapter.addClass(OUTLINE_NOTCHED);
            } else {
                var JSCompiler_StaticMethods_closeNotch$self = this.mdcFoundation;
                JSCompiler_StaticMethods_closeNotch$self.adapter.removeClass(google3.MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED);
                JSCompiler_StaticMethods_closeNotch$self.adapter.removeNotchWidthProperty();
            }
        const classes = google3.classMap({ 'mdc-notched-outline--notched': this.open });
        return google3.html`
      <span class="mdc-notched-outline ${ classes }">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
    }
};