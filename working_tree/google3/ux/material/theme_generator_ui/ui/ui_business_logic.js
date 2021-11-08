'use strict';
const src = require('../../../src/code.js');
const google3 = require('google3');

// The user is responsible for implementing decodeImageData
async function dynamic_handleImage(context, url, decodeImageData) {
    var _a;
    const seed = await theme.index_seedFromImage(url, decodeImageData);
    const theme = google3.ThemeAdapter.fromColor(seed, true);
    const oldImageUrl = null === (_a = context.theme) || void 0 === _a ? void 0 : _a.imageUrl;
    theme.props.imageUrl = url;
    context.updateTheme(theme);
    context.updateImage(url);
    if (!oldImageUrl)
        context.onAction();
}

function on_shuffle() {
    const color = src.utils_randomColor();
    console.log('shuffle', color);
    const adapter = google3.ThemeAdapter.fromColor(color, true);
    context.updateTheme(adapter);
}

function on_set_key_color(context, color) {
    if (!context.theme) {
        var theme = google3.ThemeAdapter.fromColor(color, true);
        context.updateTheme(theme);
    }
    let theme = context.theme;
    if (key === 'primary') {
        theme = google3.ThemeAdapter.fromColor(color, theme.is3p)
    } else {
        theme.setCustomColor(key, color);
    }
    context.updateTheme(theme);
}

function material_color_scheme_from_theme_adapter(adapter, darkMode) {
    var mc = darkMode ? adapter.dark : adapter.light;
    return {
        primary: mc.primary,
        on_primary: mc.onPrimary,
        primary_container: mc.primary,
        on_primary_container: mc.onPrimaryContainer,
        secondary: mc.secondary,
        on_secondary: mc.onSecondary,
        secondary_container: mc.secondary,
        on_secondary_container: mc.onSecondaryContainer,
        tertiary: mc.tertiary,
        on_tertiary: mc.onTertiary,
        tertiary_container: mc.tertiary,
        on_tertiary_container: mc.onTertiaryContainer,
        error: mc.error,
        on_error: mc.onError,
        error_container: mc.error,
        on_error_container: mc.onErrorContainer,
        background: mc.background,
        on_background: mc.onBackground,
        surface: mc.surface,
        on_surface: mc.onSurface,
        outline: mc.outline,
        surface_variant: mc.surfaceVariant,
        on_surface_variant: mc.onSurfaceVariant,
        inverse_surface: mc.inverseSurface,
        inverse_on_surface: mc.inverseOnSurface,
    };
}