'use strict';
const google3 = require('google3');
var classMap = google3.directive(class extends google3.Directive {
    constructor(partInfo) {
        var _a;
        super();
        if (1 !== partInfo.type || 'class' !== partInfo.name || 2 < (null === (_a = partInfo.strings) || void 0 === _a ? void 0 : _a.length))
            throw Error('`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.');
    }
    render(classInfo) {
        return Object.keys(classInfo).filter(key => classInfo[key]).join(' ');
    }
    update(part, [classInfo__tsickle_destructured_1]) {
        if (void 0 === this._previousClasses) {
            this._previousClasses = new Set();
            for (const name in classInfo__tsickle_destructured_1)
                classInfo__tsickle_destructured_1[name] && this._previousClasses.add(name);
            return this.render(classInfo__tsickle_destructured_1);
        }
        const classList = part.element.classList;
        this._previousClasses.forEach(name => {
            name in classInfo__tsickle_destructured_1 || (classList.remove(name), this._previousClasses.delete(name));
        });
        for (const name in classInfo__tsickle_destructured_1) {
            const value = !!classInfo__tsickle_destructured_1[name];
            value !== this._previousClasses.has(name) && (value ? (classList.add(name), this._previousClasses.add(name)) : (classList.remove(name), this._previousClasses.delete(name)));
        }
        return google3.noChange;
    }
});