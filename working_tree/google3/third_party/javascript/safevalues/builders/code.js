'use strict';
const internals = require('../internals/code.js');
const builders = require('code.js');
class safe_url_builders_SchemeImpl {
    constructor(isValid) {
        this.isValid = isValid;
    }
}
function safe_url_builders_simpleScheme(scheme) {
    return new builders.safe_url_builders_SchemeImpl(url => url.substr(0, scheme.length + 1).toLowerCase() === scheme + ':');
}
const safe_url_builders_DEFAULT_SCHEMES = [
    builders.safe_url_builders_simpleScheme('data'),
    builders.safe_url_builders_simpleScheme('http'),
    builders.safe_url_builders_simpleScheme('https'),
    builders.safe_url_builders_simpleScheme('mailto'),
    builders.safe_url_builders_simpleScheme('ftp'),
    new builders.safe_url_builders_SchemeImpl(url => /^[^:]*([/?#]|$)/.test(url))
];
function safe_url_builders_fromBlob(blob) {
    const match = blob.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
    if (2 !== (null === match || void 0 === match ? void 0 : match.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(match[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(match[1]) || /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(match[1])))
        throw Error(`unsafe blob MIME type: ${ blob.type }`);
    return new internals.safe_url_impl_SafeUrlImpl(URL.createObjectURL(blob));
}