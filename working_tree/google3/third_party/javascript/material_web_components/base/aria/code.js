'use strict';
const reactive = require('../../../lit/packages/reactive/2delement/src/reactive/code.js');
const aria = require('code.js');
function $n2dproperty_tsDecorator(prototype, name, descriptor) {
    const constructor = prototype.constructor;
    if (!descriptor && (descriptor = JSCompiler_StaticMethods_getPropertyDescriptor(name, `__${ name }`), !descriptor))
        throw Error('@ariaProperty must be used after a @property decorator');
    const propDescriptor = descriptor;
    let attribute = '';
    if (!propDescriptor.set)
        throw Error(`@ariaProperty requires a setter for ${ name }`);
    if (prototype.dispatchWizEvent)
        return descriptor;
    const wrappedDescriptor = {
        configurable: !0,
        enumerable: !0,
        set(value) {
            if ('' === attribute) {
                const options = constructor.elementProperties.get(name) || reactive.$n2delement_defaultPropertyDeclaration;
                attribute = 'string' === typeof options.attribute ? options.attribute : name;
            }
            this.hasAttribute(attribute) && this.removeAttribute(attribute);
            propDescriptor.set.call(this, value);
        }
    };
    propDescriptor.get && (wrappedDescriptor.get = function () {
        return propDescriptor.get.call(this);
    });
    return wrappedDescriptor;
}
function $n2dproperty_ariaProperty(protoOrDescriptor, name, descriptor) {
    if (void 0 !== name)
        return aria.$n2dproperty_tsDecorator(protoOrDescriptor, name, descriptor);
    throw Error('@ariaProperty only supports TypeScript Decorators');
}