'use strict';
const internals = require('../internals/code.js');
const google3 = require('google3');
function index_unwrapSafeUrl(url) {
    if (url instanceof google3.SafeUrl)
        if (url instanceof internals.safe_url_impl_SafeUrlImpl)
            var JSCompiler_temp = url.privateDoNotAccessOrElseWrappedUrl;
        else
            throw Error('Unexpected type when unwrapping SafeUrl');
    else
        JSCompiler_temp = goog$html$SafeUrl$unwrap(url);
    return JSCompiler_temp;
}