'use strict';
const utils = require('./utils.js');
const themeAdapter = require('./theme/index.js');

exports = {
    dsp_fileListToTextFiles: dsp_fileListToTextFiles,
    dsp_dspFilesToTheme: dsp_dspFilesToTheme,
    dsp_processToken: dsp_processToken,
    dsp_processFontToken: dsp_processFontToken,
}

async function dsp_fileListToTextFiles(files) {
    const result = [];
    if (!files || 0 === files.length)
        return result;
    for (const file of files) {
        const path = file.name, content = await utils.utils_readFileString(file);
        result.push({
            path,
            content
        });
    }
    return result;
}
function dsp_dspFilesToTheme(files) {
    var _a;
    console.log('files', files);
    const theme = themeAdapter.ThemeAdapter.default().save(), isValid = fileName => {
        for (const suffix of [
            'dsp.json',
            'tokens.json',
            'fonts.json',
            'components.json',
            'docs.json'
        ])
            if (fileName.endsWith(suffix))
                return !0;
        return !1;
    };
    for (const file of files) {
        if (!isValid(file.path))
            continue;
        const obj = JSON.parse(file.content);
        if (obj.entities)
            for (const token of obj.entities) {
                for (; null === (_a = token.value) || void 0 === _a ? 0 : _a.startsWith('{');) {
                    const target = obj.entities.find(n => `{${n.id}}` === token.value);
                    token.value = null === target || void 0 === target ? void 0 : target.value;
                }
                dsp_processToken(token, theme, files);
            }
    }
    console.log('parsed theme', theme);
    return themeAdapter.ThemeAdapter.fromTheme(theme);
}
function dsp_processToken(token, theme, files) {
    console.log('token', token.id, token.category_id);
    const parseTheme = section => {
        if (void 0 !== Object(theme)[section]) {
            const value = token.value, parts$jscomp$0 = token.id.split('.'), target = parts$jscomp$0[parts$jscomp$0.length - 2];
            if ('primary on-primary primary-container on-primary-container secondary on-secondary secondary-container on-secondary-container tertiary on-tertiary tertiary-container on-tertiary-container background on-background error on-error-container outline surface on-surface surface-variant on-surface-variant inverse-surface inverse-on-surface'.split(' ').includes(target)) {
                const parts = target.split('-').join(' ').split(' ');
                let output = parts[0];
                for (let i = 1; i < parts.length; i++) {
                    const part = parts[i];
                    output += part[0].toUpperCase() + part.substring(1);
                }
                Object(theme)[section][output] = `#${null === value || void 0 === value ? void 0 : value.substring(3)}`;
            }
        }
    };
    'sys.color.light' === (null === token || void 0 === token ? void 0 : token.category_id) ? parseTheme('light') : 'sys.color.dark' === (null === token || void 0 === token ? void 0 : token.category_id) ? parseTheme('dark') : token.id.startsWith('md.sys.typescale') && dsp_processFontToken(token, theme, files);
}
function dsp_processFontToken(token, theme, files) {
    var _a;
    const section = token.id.split('.').pop();
    if ('display1 display2 display3 headline1 headline2 headline3 headline4 headline5 headline6 subhead1 subhead2 button overline caption body1 body2'.split(' ').includes(section)) {
        const style = {};
        for (const item$jscomp$0 of null !== (_a = token.tokens) && void 0 !== _a ? _a : []) {
            const part = item$jscomp$0.id.split('.').pop();
            let value = item$jscomp$0.value;
            for (; value.startsWith('{');) {
                a: {
                    var target = value;
                    for (const file of files) {
                        const obj = JSON.parse(file.content);
                        if (obj.entities)
                            for (const item of obj.entities)
                                if (target === item.id.replace('{', '').replace('}', '')) {
                                    var JSCompiler_inline_result = item.id;
                                    break a;
                                }
                    }
                    JSCompiler_inline_result = null;
                }
                const file$jscomp$0 = JSCompiler_inline_result;
                if (!file$jscomp$0)
                    break;
                value = file$jscomp$0;
            }
            if ('font' === part) {
                const parts = value.split(' ');
                style.fontFamilyName = parts.slice(0, parts.length - 2).join(' ');
                style.fontFamilyStyle = parts.pop();
            } else
                'line-height' === part ? style.lineHeight = Number(value) : 'size' === part ? style.fontSize = Number(value) : 'tracking' === part && (style.letterSpacing = Number(value));
        }
        Object(theme.styles)[section] = style;
    }
}