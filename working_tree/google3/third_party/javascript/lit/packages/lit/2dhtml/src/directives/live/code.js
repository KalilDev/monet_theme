'use strict';
const directive = require('../../directive/code.js');
const google3 = require('google3');
var live = google3.directive(class extends google3.Directive {
    constructor(partInfo) {
        super();
        if (3 !== partInfo.type && 1 !== partInfo.type && 4 !== partInfo.type)
            throw Error('The `live` directive is not allowed on child or event bindings');
        if (void 0 !== partInfo.strings)
            throw Error('`live` bindings can only contain a single expression');
    }
    render(value) {
        return value;
    }
    update(part, [value__tsickle_destructured_1]) {
        if (value__tsickle_destructured_1 === google3.noChange || value__tsickle_destructured_1 === google3.nothing)
            return value__tsickle_destructured_1;
        const element = part.element, name = part.name;
        if (3 === part.type) {
            if (value__tsickle_destructured_1 === element[name])
                return google3.noChange;
        } else if (4 === part.type) {
            if (!!value__tsickle_destructured_1 === element.hasAttribute(name))
                return google3.noChange;
        } else if (1 === part.type && element.getAttribute(name) === String(value__tsickle_destructured_1))
            return google3.noChange;
        part._$committedValue = directive.$n2dhelpers_RESET_VALUE;
        return value__tsickle_destructured_1;
    }
});