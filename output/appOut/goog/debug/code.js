'use strict';
const debug = require('code.js');
function Error_DebugError(msg) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, debug.Error_DebugError);
    else {
        const stack = Error().stack;
        stack && (this.stack = stack);
    }
    msg && (this.message = String(msg));
}