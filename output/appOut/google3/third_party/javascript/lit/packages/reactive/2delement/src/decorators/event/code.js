'use strict';
const google3 = require('google3');
function $n2doptions_eventOptions(options) {
    return google3.decorateProperty({
        finisher: (ctor, name) => {
            Object.assign(ctor.prototype[name], options);
        }
    });
}