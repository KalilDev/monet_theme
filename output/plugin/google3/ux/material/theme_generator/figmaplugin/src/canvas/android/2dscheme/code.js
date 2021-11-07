'use strict';
const google3 = require('google3');
var AndroidScheme = class extends google3.BaseScheme {
    addContent() {
        const prev = this.scene.lastRect.dy;
        JSCompiler_StaticMethods_addGroupLabel(this, 'Color System');
        const theme = this.scene.theme;
        this.addColor({
            light: {
                label: 'P-90',
                value: theme.androidLight.colorAccentPrimary,
                tokenPath: 'android/light/color-accent-primary'
            },
            dark: {
                label: 'P-90',
                value: theme.androidDark.colorAccentPrimary,
                tokenPath: 'android/dark/color-accent-primary'
            },
            label: 'colorAccentPrimary'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'P-40',
                value: theme.androidLight.colorAccentPrimaryVariant,
                tokenPath: 'android/light/color-accent-primary-variant'
            },
            dark: {
                label: 'P-70',
                value: theme.androidDark.colorAccentPrimaryVariant,
                tokenPath: 'android/dark/color-accent-primary-variant'
            },
            label: 'colorAccentPrimaryVariant'
        });
        this.addColor({
            light: {
                label: 'P-10',
                value: theme.androidLight.textColorPrimary,
                tokenPath: 'android/light/text-color-primary'
            },
            dark: {
                label: 'N-95',
                value: theme.androidDark.textColorPrimary,
                tokenPath: 'android/dark/text-color-primary'
            },
            label: 'textColorPrimary'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'N-95',
                value: theme.androidLight.textColorPrimaryInverse,
                tokenPath: 'android/light/text-color-primary-inverse'
            },
            dark: {
                label: 'P-10',
                value: theme.androidDark.textColorPrimaryInverse,
                tokenPath: 'android/dark/text-color-primary-inverse'
            },
            label: 'textColorPrimaryInverse'
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: 'S-90',
                value: theme.androidLight.colorAccentSecondary,
                tokenPath: 'android/light/color-accent-secondary'
            },
            dark: {
                label: 'S-90',
                value: theme.androidDark.colorAccentSecondary,
                tokenPath: 'android/dark/color-accent-secondary'
            },
            label: 'colorAccentSecondary'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'S-40',
                value: theme.androidLight.colorAccentSecondaryVariant,
                tokenPath: 'android/light/color-accent-secondary-variant'
            },
            dark: {
                label: 'S-70',
                value: theme.androidDark.colorAccentSecondaryVariant,
                tokenPath: 'android/dark/color-accent-secondary-variant'
            },
            label: 'colorAccentSecondaryVariant'
        });
        this.addColor({
            light: {
                label: 'NV-30',
                value: theme.androidLight.textColorSecondary,
                tokenPath: 'android/light/text-color-secondary'
            },
            dark: {
                label: 'NV-80',
                value: theme.androidDark.textColorSecondary,
                tokenPath: 'android/dark/text-color-secondary'
            },
            label: 'textColorSecondary'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'NV-80',
                value: theme.androidLight.textColorSecondaryInverse,
                tokenPath: 'android/light/text-color-secondary-inverse'
            },
            dark: {
                label: 'NV-30',
                value: theme.androidDark.textColorSecondaryInverse,
                tokenPath: 'android/dark/text-color-secondary-inverse'
            },
            label: 'textColorSecondaryInverse'
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: 'T-90',
                value: theme.androidLight.colorAccentTertiary,
                tokenPath: 'android/light/color-accent-tertiary'
            },
            dark: {
                label: 'T-90',
                value: theme.androidDark.colorAccentTertiary,
                tokenPath: 'android/dark/color-accent-tertiary'
            },
            label: 'colorTertiary'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'T-40',
                value: theme.androidLight.colorAccentTertiaryVariant,
                tokenPath: 'android/light/color-accent-tertiary-variant'
            },
            dark: {
                label: 'T-70',
                value: theme.androidDark.colorAccentTertiaryVariant,
                tokenPath: 'android/dark/color-accent-tertiary-variant'
            },
            label: 'colorTertiaryVariant'
        });
        this.addColor({
            light: {
                label: 'NV-50',
                value: theme.androidLight.textColorTertiary,
                tokenPath: 'android/light/text-color-tertiary'
            },
            dark: {
                label: 'NV-60',
                value: theme.androidDark.textColorTertiary,
                tokenPath: 'android/dark/text-color-tertiary'
            },
            label: 'textColorTertiary'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'N-60',
                value: theme.androidLight.textColorTertiaryInverse,
                tokenPath: 'android/light/text-color-tertiary-inverse'
            },
            dark: {
                label: 'N-50',
                value: theme.androidDark.textColorTertiaryInverse,
                tokenPath: 'android/dark/text-color-tertiary-inverse'
            },
            label: 'textColorTertiaryInverse'
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: 'N-95',
                value: theme.androidLight.colorBackground,
                tokenPath: 'android/light/color-background'
            },
            dark: {
                label: 'N-10',
                value: theme.androidDark.colorBackground,
                tokenPath: 'android/dark/color-background'
            },
            label: 'colorBackground'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'N-98',
                value: theme.androidLight.colorBackgroundFloating,
                tokenPath: 'android/light/color-background-floating'
            },
            dark: {
                label: 'N-10',
                value: theme.androidDark.colorBackgroundFloating,
                tokenPath: 'android/dark/color-background-floating'
            },
            label: 'colorBackgroundFloating'
        });
        this.addColor({
            light: {
                label: 'N-98',
                value: theme.androidLight.colorSurface,
                tokenPath: 'android/light/color-surface'
            },
            dark: {
                label: 'N-20',
                value: theme.androidDark.colorSurface,
                tokenPath: 'android/dark/color-surface'
            },
            label: 'colorSurface'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'NV-90',
                value: theme.androidLight.colorSurfaceVariant,
                tokenPath: 'android/light/color-surface-variant'
            },
            dark: {
                label: 'NV-30',
                value: theme.androidDark.colorSurfaceVariant,
                tokenPath: 'android/dark/color-surface-variant'
            },
            label: 'colorSurfaceVariant'
        });
        this.addColor({
            light: {
                label: 'N-35',
                value: theme.androidLight.colorSurfaceHighlight,
                tokenPath: 'android/light/color-surface-highlight'
            },
            dark: {
                label: 'N-100',
                value: theme.androidDark.colorSurfaceHighlight,
                tokenPath: 'android/dark/color-surface-highlight'
            },
            label: 'colorSurfaceHighlight'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'N-90',
                value: theme.androidLight.surfaceHeader,
                tokenPath: 'android/light/surface-header'
            },
            dark: {
                label: 'N-30',
                value: theme.androidDark.surfaceHeader,
                tokenPath: 'android/dark/surface-header'
            },
            label: 'surfaceHeader'
        });
        this.scene.lastRect.dy += 60;
        JSCompiler_StaticMethods_addGroupLabel(this, 'UX Tokens');
        this.addColor({
            light: {
                label: 'N-0',
                value: theme.androidLight.underSurface,
                tokenPath: 'android/light/under-surface'
            },
            dark: {
                label: 'N-0',
                value: theme.androidDark.underSurface,
                tokenPath: 'android/dark/under-surface'
            },
            label: 'underSurface'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'N-20',
                value: theme.androidLight.offState,
                tokenPath: 'android/light/off-state'
            },
            dark: {
                label: 'N-20',
                value: theme.androidDark.offState,
                tokenPath: 'android/dark/off-state'
            },
            label: 'offState'
        });
        this.addColor({
            units: 2,
            light: {
                label: 'S-95',
                value: theme.androidLight.accentSurface,
                tokenPath: 'android/light/accent-surface'
            },
            dark: {
                label: 'S-95',
                value: theme.androidDark.accentSurface,
                tokenPath: 'android/dark/accent-surface'
            },
            label: 'accentSurface'
        });
        this.addColor({
            light: {
                label: 'N-10',
                value: theme.androidLight.textPrimaryOnAccent,
                tokenPath: 'android/light/text-primary-on-accent'
            },
            dark: {
                label: 'N-10',
                value: theme.androidDark.textPrimaryOnAccent,
                tokenPath: 'android/dark/text-primary-on-accent'
            },
            label: 'textPrimaryOnAccent'
        });
        this.addColor({
            shift: 1,
            light: {
                label: 'NV-30',
                value: theme.androidLight.textSecondaryOnAccent,
                tokenPath: 'android/light/text-secondary-on-accent'
            },
            dark: {
                label: 'NV-30',
                value: theme.androidDark.textSecondaryOnAccent,
                tokenPath: 'android/dark/text-secondary-on-accent'
            },
            label: 'textSecondaryOnAccent'
        });
        this.addColor({
            units: 2,
            light: {
                label: 'N-80',
                value: theme.androidLight.scrim,
                tokenPath: 'android/light/scrim'
            },
            dark: {
                label: 'N-80',
                value: theme.androidDark.scrim,
                tokenPath: 'android/dark/scrim'
            },
            label: 'scrim'
        });
        this.addColor({
            units: 2,
            light: {
                label: 'N-25',
                value: theme.androidLight.volumeBackground,
                tokenPath: 'android/light/volume-background'
            },
            dark: {
                label: 'N-25',
                value: theme.androidDark.volumeBackground,
                tokenPath: 'android/dark/volume-background'
            },
            label: 'volumeBackground'
        });
        this.scene.lastRect.dx += 2 * google3.defaultSize.width;
        this.scene.lastRect.dy = prev;
    }
};