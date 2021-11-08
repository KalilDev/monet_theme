'use strict';
const $n2dhelpers_RESET_VALUE = {};
var directive = c => (...values) => ({
    ['_$litDirective$']: c,
    values
});
var Directive = class {
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
};