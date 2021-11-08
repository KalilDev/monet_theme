'use strict';
const security = require('code.js');
const goog = require('../goog/code.js');
const SafeScript_SafeScript = require('../goog/html/SafeScript_SafeScript/code.js');
const SafeHtml_SafeHtml = require('../goog/html/SafeHtml_SafeHtml/code.js');
var IframeSandbox = class {
    constructor() {
        this.port = this.iframe = null;
        this.deferredMessages = [];
    }
    load() {
        const iframeNonce = JSCompiler_StaticMethods_generateNonce_();
        this.iframe = security.IframeSandbox_createSandboxIframe_(iframeNonce);
        security.IframeSandbox_awaitDomReady_().then(() => {
            document.body.appendChild(this.iframe);
        });
        return security.IframeSandbox_iframeGetMessage_(this.iframe, iframeNonce).then(msg => {
            for (this.port = msg.ports[0]; 0 < this.deferredMessages.length;) {
                const deferred = this.deferredMessages.shift();
                this.port.postMessage(deferred.data, deferred.transferables);
            }
        });
    }
    exec(code, opt_args) {
        return new Promise((resolve, reject) => {
            const chan = new MessageChannel();
            chan.port1.onmessage = msg => {
                chan.port1.onmessage = null;
                const data = msg.data;
                null != data.error ? reject(new EvalError(data.error)) : resolve(data.result);
            };
            const args = null != opt_args ? opt_args : [], paramNames = [], values = [], transferables = [];
            for (const arg of args)
                paramNames.push(arg.name), values.push(arg.value), arg.transfer && transferables.push(arg.value);
            const data$jscomp$0 = {
                code,
                paramNames,
                values
            };
            this.port ? this.port.postMessage(data$jscomp$0, [
                chan.port2,
                ...transferables
            ]) : this.deferredMessages.push({
                data: data$jscomp$0,
                transferables: [
                    chan.port2,
                    ...transferables
                ]
            });
        });
    }
    dispose() {
        null != this.iframe && (document.body.removeChild(this.iframe), this.iframe = null);
    }
};
function IframeSandbox_iframeGetMessage_(ifr, nonce) {
    return new Promise(resolve => {
        const messageListener = msg => {
            msg.source === ifr.contentWindow && msg.data === nonce && (window.removeEventListener('message', messageListener), resolve(msg));
        };
        window.addEventListener('message', messageListener);
    });
}
function IframeSandbox_createSandboxIframe_(iframeNonce) {
    var doc$jscomp$0 = document;
    var name = 'IFRAME';
    'application/xhtml+xml' === doc$jscomp$0.contentType && (name = name.toLowerCase());
    var JSCompiler_inline_result = doc$jscomp$0.createElement(name);
    if (!JSCompiler_inline_result.sandbox)
        throw Error('iframe sandboxes not supported');
    JSCompiler_inline_result.sandbox.value = 'allow-scripts';
    JSCompiler_inline_result.sandbox.supports && JSCompiler_inline_result.sandbox.add && JSCompiler_inline_result.sandbox.supports('allow-downloads') && JSCompiler_inline_result.sandbox.add('allow-downloads');
    let url;
    const scriptString = goog$string$Const$unwrap(new goog$string$Const(goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, '/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar e=this||self,h=function(a){return a};var k;var l={},n=function(a,d){this.g=d===l?a:""},p=function(a){return a instanceof n&&a.constructor===n?a.g:"type_error:SafeScript"},q=function(a){if(void 0===k){var d=null;var b=e.trustedTypes;if(b&&b.createPolicy)try{d=b.createPolicy("goog#html",{createHTML:h,createScript:h,createScriptURL:h})}catch(c){e.console&&e.console.error(c.message)}k=d}a=(d=k)?d.createScript(a):a;return new n(a,l)};n.prototype.toString=function(){return this.g.toString()};/*\n\n SPDX-License-Identifier: Apache-2.0\n*/\nfunction r(a,d){a.textContent=p(d);var b;d=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var c=null===(b=d.querySelector)||void 0===b?void 0:b.call(d,"script[nonce]");(b=c?c.nonce||c.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};var t=function(a,d){for(var b=[],c=1;c<arguments.length;++c)b[c-1]=arguments[c];var m,f;"evalCspCompatiblyData"in window||(window.evalCspCompatiblyData={index:0});c=window.evalCspCompatiblyData.index++;window.evalCspCompatiblyData[c]={args:b,callback:function(g,u){m=g;f=u}};b=document.createElement("script");b.async=!1;b.setAttribute("data-index",c);c=q(\'"use strict";\\x0B(function(){var idx=parseInt((document.currentScript||Array.prototype.slice.call(document.querySelectorAll("head script[data-index]"),-1)[0]).getAttribute("data-index"),10),curEvalData=evalCspCompatiblyData[idx];delete evalCspCompatiblyData[idx];(function(){var callback=curEvalData.callback;try{callback(true,(\'+\np(a).toString()+"\\n));}catch(ex){callback(false, ex);}}).apply(this, curEvalData.args);})()");r(b,c);c=function(g){m=!1;f=g.error||g};window.addEventListener("error",c);document.head.appendChild(b);window.removeEventListener("error",c);document.head.removeChild(b);if(!m)throw f;return f};var v=document.getElementById("nonce"),w=v?v.value:(new URL(location.href)).searchParams.get("nonce");function x(){if(self.origin)return"null"==self.origin;if(""!=location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}\n(function(){if(!x())throw"sandboxing error";var a=new MessageChannel;a.port1.onmessage=function(d){try{var b=t.apply(null,[q("(function("+d.data.paramNames.join(", ")+") {\\n"+d.data.code+"\\n}).apply(null, arguments)")].concat(d.data.values));d.ports[0].postMessage({result:b})}catch(c){d.ports[0].postMessage({error:c.toString()})}};window.parent.postMessage(w,"*",[a.port2])})();\n'));
    var JSCompiler_inline_result$jscomp$0 = 0 === scriptString.length ? SafeScript_SafeScript.EMPTY : SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString);
    var JSCompiler_temp_const = SafeHtml_SafeHtml.concat, attributes = {
            type: 'hidden',
            id: 'nonce',
            value: iframeNonce
        };
    SafeHtml_SafeHtml.verifyTagName('input');
    var JSCompiler_inline_result$jscomp$1 = SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('input', attributes, void 0);
    var script = JSCompiler_inline_result$jscomp$0;
    a: {
        const doc = goog$global.document;
        if (doc.querySelector) {
            var el = doc.querySelector('script[nonce]');
            if (el) {
                const nonce = el.nonce || el.getAttribute('nonce');
                if (nonce && goog$dom$safe$NONCE_PATTERN_.test(nonce)) {
                    var JSCompiler_inline_result$jscomp$2 = nonce;
                    break a;
                }
            }
        }
        JSCompiler_inline_result$jscomp$2 = '';
    }
    var attributes$jscomp$0 = { nonce: JSCompiler_inline_result$jscomp$2 };
    for (let attr in attributes$jscomp$0)
        if (Object.prototype.hasOwnProperty.call(attributes$jscomp$0, attr)) {
            const attrLower = attr.toLowerCase();
            if ('language' == attrLower || 'src' == attrLower || 'text' == attrLower || 'type' == attrLower)
                throw Error(`Cannot set "${ attrLower }" attribute`);
        }
    let content = '';
    script = goog.array_concat(script);
    for (let i = 0; i < script.length; i++)
        content += SafeScript_SafeScript.unwrapTrustedScript(script[i]).toString();
    const htmlContent = SafeHtml_SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(content, 0);
    var JSCompiler_inline_result$jscomp$3 = SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('script', attributes$jscomp$0, htmlContent);
    var content$jscomp$0 = [
        JSCompiler_inline_result$jscomp$1,
        JSCompiler_inline_result$jscomp$3
    ];
    SafeHtml_SafeHtml.verifyTagName('body');
    var JSCompiler_inline_result$jscomp$4 = SafeHtml_SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse('body', {}, content$jscomp$0);
    const html = JSCompiler_temp_const(SafeHtml_SafeHtml.DOCTYPE_HTML, JSCompiler_inline_result$jscomp$4);
    var justification = new goog$string$Const(goog$string$Const$GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, 'data URL to be opened only in a sandbox'), url$jscomp$0 = 'data:text/html;charset=UTF-8;base64,' + btoa(SafeHtml_SafeHtml.unwrapTrustedHTML(html).toString());
    goog$asserts$assertString(goog$string$Const$unwrap(justification), 'must provide justification');
    goog$asserts$assert(!/^[\s\xa0]*$/.test(goog$string$Const$unwrap(justification)), 'must provide non-empty justification');
    const policy = goog$html$trustedtypes$getPolicyPrivateDoNotAccessOrElse();
    var value = policy ? policy.createScriptURL(url$jscomp$0) : url$jscomp$0;
    url = new goog$html$TrustedResourceUrl(value, goog$html$TrustedResourceUrl$CONSTRUCTOR_TOKEN_PRIVATE_);
    goog$dom$asserts$assertIsElementType_(JSCompiler_inline_result);
    JSCompiler_inline_result.srcdoc = SafeHtml_SafeHtml.unwrapTrustedHTML(html);
    goog$dom$asserts$assertIsElementType_(JSCompiler_inline_result);
    JSCompiler_inline_result.src = goog$html$TrustedResourceUrl$unwrapTrustedScriptURL(url).toString();
    JSCompiler_inline_result.style.cssText = 'height: 0; left: 0; position: absolute; top: 0; width: 0;';
    JSCompiler_inline_result.setAttribute('aria-hidden', 'true');
    return JSCompiler_inline_result;
}
function IframeSandbox_awaitDomReady_() {
    return new Promise(resolve => {
        'loading' != document.readyState ? resolve() : goog$events$listenOnce(document, 'DOMContentLoaded', () => {
            resolve();
        });
    });
}
var SafeDownloader = class SafeDownloader {
    static async download(data, filename, contentType = '') {
        let downloader = new SafeDownloader();
        try {
            await downloader.init(), await downloader.download(data, filename, contentType);
        } finally {
            await downloader.dispose();
        }
    }
    constructor() {
        this.sandbox = new security.IframeSandbox();
    }
    init() {
        return this.sandbox.load();
    }
    download(data, filename, contentType = '') {
        const blob = data instanceof Blob ? data : new Blob([data], { type: contentType });
        return navigator.msSaveOrOpenBlob ? (navigator.msSaveOrOpenBlob(blob, filename), security.SafeDownloader_timeout()) : this.sandbox.exec('var url=URL.createObjectURL(blob);var a=document.createElement("a");if(!("download" in a)){throw new Error("Downloading not supported on this browser");}a.href=url;a.download=filename;document.body.appendChild(a);a.click();setTimeout(function(){document.body.removeChild(a);URL.revokeObjectURL(url);},250);', [
            {
                name: 'blob',
                value: blob,
                transfer: !1
            },
            {
                name: 'filename',
                value: filename,
                transfer: !1
            }
        ]).then(() => security.SafeDownloader_timeout());
    }
    dispose() {
        this.sandbox.dispose();
    }
};
function SafeDownloader_timeout() {
    return new Promise(resolve => {
        setTimeout(resolve, 500);
    });
}