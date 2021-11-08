'use strict';
const theme = require('../code.js');
const google3 = require('google3');
var MaterialThemeGenerator = class extends google3.LitElement {
    constructor() {
        super(...arguments);
        this.plugin = this.baseline = !1;
        this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.tabIndex = 0;
        this.showInfo = this.showAddTheme = this.showExport = !1;
        this.messenger = new google3.ThemeMessenger(this, this.plugin, {
            themeName: this.plugin ? void 0 : 'material-theme',
            onThemeUpdate: theme => theme.$n2dgenerator_updatePluginColors(theme, this.main, this.darkMode)
        });
    }
    firstUpdated() {
        this.plugin || JSCompiler_StaticMethods_randomImage(this);
    }
    render() {
        return theme.$n2dgenerator_renderThemeEditor(this, this.messenger);
    }
    setTheme(themeName, theme) {
        this.messenger.userThemesMap.set(themeName, theme);
        JSCompiler_StaticMethods_requestUpdate(this);
    }
    start(themeName) {
        var JSCompiler_StaticMethods_startWithTheme$self = this.messenger;
        JSCompiler_StaticMethods_startWithTheme$self.props.themeName = themeName;
        JSCompiler_StaticMethods_startWithTheme$self.refresh();
        const theme = this.messenger.userThemesMap.get(themeName);
        theme.$n2dgenerator_updatePluginColors(theme, this.main, this.darkMode);
    }
};