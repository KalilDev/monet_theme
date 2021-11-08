'use strict';
const decorators = require('code.js');
const google3 = require('google3');
const property_standardProperty = (options, element) => 'method' !== element.kind || !element.descriptor || 'value' in element.descriptor ? {
    kind: 'field',
    key: Symbol(),
    placement: 'own',
    descriptor: {},
    originalKey: element.key,
    initializer() {
        'function' === typeof element.initializer && (this[element.key] = element.initializer.call(this));
    },
    finisher(clazz) {
        JSCompiler_StaticMethods_createProperty(clazz, element.key, options);
    }
} : Object.assign(Object.assign({}, element), {
    finisher(clazz) {
        JSCompiler_StaticMethods_createProperty(clazz, element.key, options);
    }
});
function property_property(options) {
    return (protoOrDescriptor, name) => {
        if (void 0 !== name) {
            JSCompiler_StaticMethods_createProperty(protoOrDescriptor.constructor, name, options);
            var JSCompiler_temp = void 0;
        } else
            JSCompiler_temp = decorators.property_standardProperty(options, protoOrDescriptor);
        return JSCompiler_temp;
    };
}
function query_query(selector) {
    return google3.decorateProperty({
        descriptor: () => ({
            get() {
                var _a, _b;
                return null !== (_b = null === (_a = this.renderRoot) || void 0 === _a ? void 0 : _a.querySelector(selector)) && void 0 !== _b ? _b : null;
            },
            enumerable: !0,
            configurable: !0
        })
    });
}
function state_state() {
    return decorators.property_property(Object.assign(Object.assign({}, void 0), { state: !0 }));
}