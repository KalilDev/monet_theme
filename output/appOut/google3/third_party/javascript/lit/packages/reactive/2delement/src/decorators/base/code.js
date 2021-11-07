'use strict';
var decorateProperty = ({finisher, descriptor}) => (protoOrDescriptor, name) => {
    var _a;
    if (void 0 !== name) {
        const ctor = protoOrDescriptor.constructor;
        void 0 !== descriptor && Object.defineProperty(protoOrDescriptor, name, descriptor(name));
        null === finisher || void 0 === finisher ? void 0 : finisher(ctor, name);
    } else {
        const key = null !== (_a = protoOrDescriptor.originalKey) && void 0 !== _a ? _a : protoOrDescriptor.key, info = void 0 != descriptor ? {
                kind: 'method',
                placement: 'prototype',
                key,
                descriptor: descriptor(protoOrDescriptor.key)
            } : Object.assign(Object.assign({}, protoOrDescriptor), { key });
        void 0 != finisher && (info.finisher = function (ctor) {
            finisher(ctor, key);
        });
        return info;
    }
};