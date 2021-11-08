'use strict';
const google3 = require('google3');
class safe_url_impl_SafeUrlImpl extends google3.SafeUrl {
    constructor(url) {
        super();
        if (google3.secretToken !== google3.secretToken)
            throw Error('Bad secret');
        this.privateDoNotAccessOrElseWrappedUrl = url;
    }
    toString() {
        return this.privateDoNotAccessOrElseWrappedUrl;
    }
}