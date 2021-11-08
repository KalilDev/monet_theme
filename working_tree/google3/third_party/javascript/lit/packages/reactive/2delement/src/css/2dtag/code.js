'use strict';
const css = require('../code.js');
const google3 = require('google3');
var supportsAdoptingStyleSheets = window.ShadowRoot && (void 0 === css.$n2dtag_extraGlobals.ShadyCSS || css.$n2dtag_extraGlobals.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var CSSResult = class {
    constructor(cssText) {
        this._$cssResult$ = !0;
        if (css.$n2dtag_constructionToken !== css.$n2dtag_constructionToken)
            throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        this.cssText = cssText;
    }
    get styleSheet() {
        let styleSheet = css.$n2dtag_styleSheetCache.get(this.cssText);
        google3.supportsAdoptingStyleSheets && void 0 === styleSheet && (css.$n2dtag_styleSheetCache.set(this.cssText, styleSheet = new CSSStyleSheet()), styleSheet.replaceSync(this.cssText));
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
    notifyOnHotModuleReload(newVal) {
        const sheet = this.styleSheet;
        sheet && (this.cssText = newVal.cssText, sheet.replaceSync(newVal.cssText));
    }
};
var css = (strings, ...values) => {
    const cssText = 1 === strings.length ? strings[0] : values.reduce((acc, v, idx) => {
        if (!0 === v._$cssResult$)
            var JSCompiler_inline_result = v.cssText;
        else if ('number' === typeof v)
            JSCompiler_inline_result = v;
        else
            throw Error('Value passed to \'css\' function must be a \'css\' function result: ' + `${ v }. Use 'unsafeCSS' to pass non-literal values, but take care ` + 'to ensure page security.');
        return acc + JSCompiler_inline_result + strings[idx + 1];
    }, strings[0]);
    return new google3.CSSResult(cssText);
};
var adoptStyles = (renderRoot, styles) => {
    google3.supportsAdoptingStyleSheets ? renderRoot.adoptedStyleSheets = styles.map(s => s instanceof CSSStyleSheet ? s : s.styleSheet) : styles.forEach(s => {
        const style = document.createElement('style');
        style.textContent = s.cssText;
        renderRoot.appendChild(style);
    });
};
var getCompatibleStyle = google3.supportsAdoptingStyleSheets ? s => s : s => {
    if (s instanceof CSSStyleSheet) {
        let cssText = '';
        for (const rule of s.cssRules)
            cssText += rule.cssText;
        var JSCompiler_temp = new google3.CSSResult('string' === typeof cssText ? cssText : String(cssText));
    } else
        JSCompiler_temp = s;
    return JSCompiler_temp;
};