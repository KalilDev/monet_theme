'use strict';
const google3 = require('google3');
var AndroidExporter = class extends google3.ThemeExporter {
    constructor() {
        super(...arguments);
        this.themeName = 'AppTheme';
        this.lightBaseTheme = 'Theme.Material3.Light.NoActionBar';
        this.darkBaseTheme = 'Theme.Material3.Dark.NoActionBar';
        this.serializer = new XMLSerializer();
    }
    generate() {
        const rootElement = JSCompiler_StaticMethods_getDocumentRoot()[1], lightColors = JSCompiler_StaticMethods_generateColorSet(this, JSCompiler_StaticMethods_getDocumentRoot()[0], this.theme.light, { prefix: void 0 }), darkColors = JSCompiler_StaticMethods_generateColorSet(this, JSCompiler_StaticMethods_getDocumentRoot()[0], this.theme.dark, {
                isLight: !1,
                prefix: void 0
            });
        var doc = JSCompiler_StaticMethods_getDocumentRoot()[0];
        const list = [], colors = Object.assign({}, this.theme.source), colorsToExclude = [
                'neutral',
                'neutralVariant',
                'primary',
                'secondary',
                'tertiary'
            ];
        for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(colors)) {
            const key = key__tsickle_destructured_1, value = value__tsickle_destructured_2;
            if (key && value && !colorsToExclude.includes(key, 0)) {
                const colorElement = doc.createElement('color');
                colorElement.setAttribute('name', key);
                colorElement.appendChild(doc.createTextNode(value.toUpperCase()));
                list.push(colorElement);
            }
        }
        for (const node of lightColors)
            rootElement.appendChild(node);
        for (const node of darkColors)
            rootElement.appendChild(node);
        for (const node of list)
            rootElement.appendChild(node);
        return [
            {
                path: `${ this.name }/${ 'values/colors.xml' }`,
                content: this.serializer.serializeToString(rootElement).replace(/\n/g, '\n    '),
                mimeType: 'text/xml'
            },
            JSCompiler_StaticMethods_generateThemeXML(this, this.theme.light),
            JSCompiler_StaticMethods_generateThemeXML(this, this.theme.dark, {
                isLight: !1,
                path: 'values-night/themes.xml'
            })
        ];
    }
};