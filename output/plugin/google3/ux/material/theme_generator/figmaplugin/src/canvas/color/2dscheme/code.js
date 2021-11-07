'use strict';
const $m2dscheme_boxSize = require('../2dscheme_boxSize/code.js');
const google3 = require('google3');
var ColorScheme = class extends google3.BaseScheme {
    addContent() {
        const prev = this.scene.lastRect.dy;
        JSCompiler_StaticMethods_addColorFamily(this, 'primary', this.scene.theme.primaryGroup);
        JSCompiler_StaticMethods_addColorFamily(this, 'secondary', this.scene.theme.secondaryGroup);
        JSCompiler_StaticMethods_addColorFamily(this, 'tertiary', this.scene.theme.tertiaryGroup);
        JSCompiler_StaticMethods_addColorFamily(this, 'error', this.scene.theme.errorGroup);
        JSCompiler_StaticMethods_addDivider(this);
        const theme = this.scene.theme;
        this.addColor({
            light: {
                label: 'Neutral99',
                value: theme.light.background,
                tokenPath: 'sys/light/background'
            },
            dark: {
                label: 'Neutral10',
                value: theme.dark.background,
                tokenPath: 'sys/dark/background'
            },
            label: 'Background',
            width: $m2dscheme_boxSize.width,
            height: $m2dscheme_boxSize.height
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'Neutral10',
                value: theme.light.onBackground,
                tokenPath: 'sys/light/on-background'
            },
            dark: {
                label: 'Neutral90',
                value: theme.dark.onBackground,
                tokenPath: 'sys/dark/on-background'
            },
            label: 'On Background',
            width: $m2dscheme_boxSize.width,
            height: $m2dscheme_boxSize.height
        });
        this.addColor({
            shift: 2,
            light: {
                label: 'Neutral99',
                value: theme.light.surface,
                tokenPath: 'sys/light/surface'
            },
            dark: {
                label: 'Neutral10',
                value: theme.dark.surface,
                tokenPath: 'sys/dark/surface'
            },
            label: 'Surface',
            width: $m2dscheme_boxSize.width,
            height: $m2dscheme_boxSize.height
        });
        this.addColor({
            shift: 3,
            light: {
                label: 'Neutral10',
                value: theme.light.onSurface,
                tokenPath: 'sys/light/on-surface'
            },
            dark: {
                label: 'Neutral80',
                value: theme.dark.onSurface,
                tokenPath: 'sys/dark/on-surface'
            },
            label: 'On Surface',
            width: $m2dscheme_boxSize.width,
            height: $m2dscheme_boxSize.height
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: 'Neutral-Variant90',
                value: theme.light.surfaceVariant,
                tokenPath: 'sys/light/surface-variant'
            },
            dark: {
                label: 'Neutral-Variant30',
                value: theme.dark.surfaceVariant,
                tokenPath: 'sys/dark/surface-variant'
            },
            label: 'Surface Variant',
            width: $m2dscheme_boxSize.width,
            height: 70
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'Neutral-Variant30',
                value: theme.light.onSurfaceVariant,
                tokenPath: 'sys/light/on-surface-variant'
            },
            dark: {
                label: 'Neutral-Variant80',
                value: theme.dark.onSurfaceVariant,
                tokenPath: 'sys/dark/on-surface-variant'
            },
            label: 'On Surface Variant',
            width: $m2dscheme_boxSize.width,
            height: 70
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'Neutral-Variant50',
                value: theme.light.outline,
                tokenPath: 'sys/light/outline'
            },
            dark: {
                label: 'Neutral-Variant60',
                value: theme.dark.outline,
                tokenPath: 'sys/dark/outline'
            },
            label: 'Outline',
            width: 2 * $m2dscheme_boxSize.width,
            height: 70
        });
        this.scene.lastRect.dy += 20;
        JSCompiler_StaticMethods_addDivider(this);
        for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(this.scene.theme.source)) {
            const key = key__tsickle_destructured_1, value = value__tsickle_destructured_2;
            if (!value)
                continue;
            if ('seed' === key || google3.KEY_COLORS.includes(key))
                continue;
            const tokenKey = key.toLowerCase(), semanticColor = JSCompiler_StaticMethods_semanticColor(value);
            JSCompiler_StaticMethods_addColorFamily(this, key, semanticColor.group, `read-only/${ tokenKey }`, key);
        }
        this.scene.lastRect.dx += 4 * $m2dscheme_boxSize.width;
        this.scene.lastRect.dx += 20;
        this.scene.lastRect.dx += 20;
        this.scene.lastRect.dy = prev;
    }
};