'use strict';
const google3 = require('google3');
var styleMap = google3.directive(class extends google3.Directive {
    constructor(partInfo) {
        var _a;
        super();
        if (1 !== partInfo.type || 'style' !== partInfo.name || 2 < (null === (_a = partInfo.strings) || void 0 === _a ? void 0 : _a.length))
            throw Error('The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.');
    }
    render(styleInfo) {
        return Object.keys(styleInfo).reduce((style, prop) => {
            const value = styleInfo[prop];
            if (null == value)
                return style;
            prop = prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase();
            return style + `${ prop }:${ value };`;
        }, '');
    }
    update(part, [styleInfo__tsickle_destructured_1]) {
        const style = part.element.style;
        void 0 === this._previousStyleProperties && (this._previousStyleProperties = new Set());
        this._previousStyleProperties.forEach(name => {
            null == styleInfo__tsickle_destructured_1[name] && (this._previousStyleProperties.delete(name), name.includes('-') ? style.removeProperty(name) : style[name] = '');
        });
        for (const name in styleInfo__tsickle_destructured_1) {
            const value = styleInfo__tsickle_destructured_1[name];
            null != value && (this._previousStyleProperties.add(name), name.includes('-') ? style.setProperty(name, value) : style[name] = value);
        }
        return google3.noChange;
    }
});