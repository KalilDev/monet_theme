'use strict';
var observer = observer => (proto, propName) => {
    if (!proto.constructor._observers) {
        proto.constructor._observers = new Map();
        const userUpdated = proto.updated;
        proto.updated = function (changedProperties) {
            userUpdated.call(this, changedProperties);
            changedProperties.forEach((v, k) => {
                const observer = this.constructor._observers.get(k);
                void 0 !== observer && observer.call(this, this[k], v);
            });
        };
    } else if (!proto.constructor.hasOwnProperty('_observers')) {
        const observers = proto.constructor._observers;
        proto.constructor._observers = new Map();
        observers.forEach((v, k) => proto.constructor._observers.set(k, v));
    }
    proto.constructor._observers.set(propName, observer);
};