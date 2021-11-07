'use strict';
const exporters = require('../code.js');
const google3 = require('google3');
var ComposeExporter = class extends google3.ThemeExporter {
    constructor() {
        super(...arguments);
        this.themeName = 'AppTheme';
        this.typographyMapping = new Map([
            [
                'display2',
                'displayLarge'
            ],
            [
                'display3',
                'displayMedium'
            ],
            [
                'headline1',
                'displaySmall'
            ],
            [
                'headline2',
                'headlineLarge'
            ],
            [
                'headline3',
                'headlineMedium'
            ],
            [
                'headline4',
                'headlineSmall'
            ],
            [
                'headline5',
                'titleLarge'
            ],
            [
                'subhead1',
                'titleMedium'
            ],
            [
                'subhead2',
                'titleSmall'
            ],
            [
                'body1',
                'bodyLarge'
            ],
            [
                'body2',
                'bodyMedium'
            ],
            [
                'caption',
                'bodySmall'
            ],
            [
                'button',
                'labelLarge'
            ],
            [
                'overline',
                'labelMedium'
            ],
            [
                'labelSmall',
                'labelSmall'
            ]
        ]);
    }
    generate() {
        const lightColors = JSCompiler_StaticMethods_generateColors(this.theme.light, { isLight: !0 }), darkColors = JSCompiler_StaticMethods_generateColors(this.theme.dark, { isLight: !1 }), list = [], colors = Object.assign({}, this.theme.source), colorsToExclude = [
                'neutral',
                'neutralVariant',
                'primary',
                'secondary',
                'tertiary'
            ];
        for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(colors)) {
            const key = key__tsickle_destructured_1, value = value__tsickle_destructured_2;
            key && value && (colorsToExclude.includes(key, 0) || list.push(`val ${ key } = Color(0xFF${ exporters.android_capitalize(value).slice(1) })`));
        }
        var JSCompiler_inline_result = {
            path: `${ this.name }/ui/theme/Color.kt`,
            content: `${ 'package com.example.compose\nimport androidx.compose.ui.graphics.Color\n\n' }\n${ lightColors }\n\n${ darkColors }\n\n${ list.join('\n') }`,
            mimeType: 'text/plain'
        };
        const lightColorScheme = JSCompiler_StaticMethods_generateColorScheme(this.theme.light, { isLight: !0 }), darkColorScheme = JSCompiler_StaticMethods_generateColorScheme(this.theme.dark, { isLight: !1 });
        var JSCompiler_inline_result$jscomp$0 = {
            path: `${ this.name }/ui/theme/Theme.kt`,
            content: `${ 'package com.example.compose\n\nimport androidx.compose.foundation.isSystemInDarkTheme\nimport androidx.compose.material3.MaterialTheme\nimport androidx.compose.material3.lightColorScheme\nimport androidx.compose.material3.darkColorScheme\nimport androidx.compose.runtime.Composable\n' }\n ${ lightColorScheme } \n ${ darkColorScheme }` + ('\n' + `@Composable
fun ${ this.themeName }(
useDarkTheme: Boolean = isSystemInDarkTheme(),
content: @Composable() () -> Unit
) {
val colors = if (!useDarkTheme) {
  LightThemeColors
} else {
  DarkThemeColors
}

MaterialTheme(
  colorScheme = colors,
  typography = AppTypography,
  content = content
)
}`),
            mimeType: 'text/plain'
        };
        const typeStrings = [], membersToExclude$jscomp$0 = [''];
        typeStrings.push('package com.example.ui.theme\nimport androidx.compose.material3.Typography\nimport androidx.compose.ui.text.TextStyle\nimport androidx.compose.ui.text.font.Font\nimport androidx.compose.ui.text.font.FontFamily\nimport androidx.compose.ui.text.font.FontWeight\nimport androidx.compose.ui.unit.dp\nimport androidx.compose.ui.unit.sp\n//Replace with your font locations\nval Roboto = FontFamily.Default\n');
        typeStrings.push('val AppTypography = Typography(');
        const keys$jscomp$0 = Object.keys(this.theme.styles);
        for (const key$jscomp$0 of keys$jscomp$0)
            if (!membersToExclude$jscomp$0.includes(key$jscomp$0)) {
                const mappedID = this.typographyMapping.get(key$jscomp$0);
                if (void 0 !== mappedID) {
                    const value = Object(this.theme.styles)[key$jscomp$0];
                    typeStrings.push(`\t${ mappedID } = TextStyle(`);
                    var JSCompiler_temp_const = typeStrings, JSCompiler_temp_const$jscomp$0 = JSCompiler_temp_const.push, style = value;
                    const styleStrings = [], membersToExclude = [
                            'paragraphSpacing',
                            'paragraphIndent'
                        ], keys = Object.keys(style);
                    for (const key of keys)
                        membersToExclude.includes(key) || styleStrings.push(`\t\t${ JSCompiler_StaticMethods_processFontProperty(key, Object(style)[key]) },`);
                    JSCompiler_temp_const$jscomp$0.call(JSCompiler_temp_const, styleStrings.join('\n'));
                    typeStrings.push('\t),');
                }
            }
        typeStrings.push(')\n');
        return [
            JSCompiler_inline_result,
            JSCompiler_inline_result$jscomp$0,
            {
                path: `${ this.name }/ui/theme/Type.kt`,
                content: typeStrings.join('\n'),
                mimeType: 'text/plain'
            }
        ];
    }
};