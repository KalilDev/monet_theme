'use strict';
const theme = require('code.js');
const web = require('../ui/components/web/code.js');
const plugin = require('../ui/components/plugin/code.js');
function $n2dgenerator_updatePluginColors(theme, root, darkMode) {
    console.log('updatePluginColors', theme, darkMode);
    if (theme && root) {
        var s = root.style, mc = darkMode ? theme.dark : theme.light;
        s.setProperty('--md-sys-primary', mc.primary);
        s.setProperty('--md-sys-on-primary', mc.onPrimary);
        s.setProperty('--md-sys-primary-container', mc.primary);
        s.setProperty('--md-sys-on-primary-container', mc.onPrimaryContainer);
        s.setProperty('--md-sys-secondary', mc.secondary);
        s.setProperty('--md-sys-on-secondary', mc.onSecondary);
        s.setProperty('--md-sys-secondary-container', mc.secondary);
        s.setProperty('--md-sys-on-secondary-container', mc.onSecondaryContainer);
        s.setProperty('--md-sys-tertiary', mc.tertiary);
        s.setProperty('--md-sys-on-tertiary', mc.onTertiary);
        s.setProperty('--md-sys-tertiary-container', mc.tertiary);
        s.setProperty('--md-sys-on-tertiary-container', mc.onTertiaryContainer);
        s.setProperty('--md-sys-error', mc.error);
        s.setProperty('--md-sys-on-error', mc.onError);
        s.setProperty('--md-sys-error-container', mc.error);
        s.setProperty('--md-sys-on-error-container', mc.onErrorContainer);
        s.setProperty('--md-sys-background', mc.background);
        s.setProperty('--md-sys-on-background', mc.onBackground);
        s.setProperty('--md-sys-surface', mc.surface);
        s.setProperty('--md-sys-on-surface', mc.onSurface);
        s.setProperty('--md-sys-outline', mc.outline);
        s.setProperty('--md-sys-surface-variant', mc.surfaceVariant);
        s.setProperty('--md-sys-on-surface-variant', mc.onSurfaceVariant);
        s.setProperty('--md-sys-inverse-surface', mc.inverseSurface);
        s.setProperty('--md-sys-inverse-on-surface', mc.inverseOnSurface);
        theme.imageUrl ? s.setProperty('--md-background-image', `url(${ theme.imageUrl })`) : s.setProperty('--md-background-image', '');
    }
}
function $n2dgenerator_renderThemeEditor(elem, messenger) {
    const context = messenger.getContext(themeName => {
        console.log('themeId', themeName);
        if (themeName) {
            const theme = messenger.userThemesMap.get(themeName);
            theme && theme.$n2dgenerator_updatePluginColors(theme, elem.main, elem.darkMode);
        }
        JSCompiler_StaticMethods_requestUpdate(elem);
    });
    return elem.plugin ? plugin.index_renderPlugin(Object.assign(Object.assign({}, context), {
        activeIndex: elem.tabIndex,
        onTabChange: index => {
            elem.tabIndex = index;
        },
        userThemes: messenger.userThemes(),
        currentTheme: messenger.currentTheme(),
        showAddTheme: elem.showAddTheme,
        onShowNewThemeChange: visible => {
            elem.showAddTheme = visible;
        },
        onThemeSwitch: (oldTheme, newTheme) => {
            if (newTheme) {
                JSCompiler_StaticMethods_switchTheme(messenger, newTheme);
                const theme = messenger.userThemesMap.get(newTheme);
                theme && theme.$n2dgenerator_updatePluginColors(theme, elem.main, elem.darkMode);
                elem.tabIndex = (null === theme || void 0 === theme ? 0 : theme.props.imageUrl) ? 0 : 1;
            } else
                messenger.props.themeName = void 0;
            JSCompiler_StaticMethods_requestUpdate(elem);
        },
        onThemeCreate: (name, theme) => {
            messenger.setTheme(name, theme);
            messenger.props.themeName = name;
            messenger.notify('create-theme');
            theme.$n2dgenerator_updatePluginColors(theme, elem.main, elem.darkMode);
            elem.tabIndex = 0;
            JSCompiler_StaticMethods_requestUpdate(elem);
        },
        tokensAction: command => {
            switch (command) {
            case 'tokens-link':
                messenger.notify('theme-tokens-link');
                break;
            case 'tokens-light':
                messenger.notify('theme-tokens-light');
                break;
            case 'tokens-dark':
                messenger.notify('theme-tokens-dark');
            }
        }
    })) : web.index_renderWeb(Object.assign(Object.assign({}, context), {
        activeIndex: elem.tabIndex,
        onTabChange: index => {
            0 === index ? (elem.tabIndex = 0, JSCompiler_StaticMethods_randomImage(elem)) : (elem.tabIndex = 1, JSCompiler_StaticMethods_resetToBaseline(elem));
        },
        hideExport: 0 === elem.tabIndex,
        darkMode: elem.darkMode,
        onDarkModeChange: value => {
            elem.darkMode = value;
            const themeName = messenger.currentTheme(), theme = messenger.userThemesMap.get(themeName);
            console.log('theme', themeName, theme);
            theme && theme.$n2dgenerator_updatePluginColors(theme, elem.main, value);
            JSCompiler_StaticMethods_requestUpdate(elem);
        },
        showInfo: elem.showInfo,
        onShowInfoChanged: value => {
            elem.showInfo = value;
        }
    }));
}