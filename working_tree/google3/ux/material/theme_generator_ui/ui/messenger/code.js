'use strict';
var ThemeMessenger = class {
    constructor(host, isPlugin, props) {
        this.host = host;
        this.isPlugin = isPlugin;
        this.props = props;
        this.userThemesMap = new Map();
        this.showExport = false;
        var JSCompiler_StaticMethods_addController$self = this.host, JSCompiler__a, JSCompiler__b;
        (null !== (JSCompiler__a = JSCompiler_StaticMethods_addController$self.__controllers) && void 0 !== JSCompiler__a ? JSCompiler__a : JSCompiler_StaticMethods_addController$self.__controllers = []).push(this);
        void 0 !== JSCompiler_StaticMethods_addController$self.renderRoot && JSCompiler_StaticMethods_addController$self.isConnected && (null === (JSCompiler__b = this.hostConnected) || void 0 === JSCompiler__b ? void 0 : JSCompiler__b.call(this));
    }
    hostConnected() {
        this.elem = this.host.shadowRoot;
    }
    hostDisconnected() {
    }
    refresh() {
        JSCompiler_StaticMethods_requestUpdate(this.host);
    }
    generate() {
        this.notify('generate');
    }
    theme() {
        const themeName = this.currentTheme();
        if (themeName)
            return this.userThemesMap.get(themeName);
    }
    currentTheme() {
        return this.isPlugin ? this.props.themeName : 'material-theme';
    }
    userThemes() {
        return Array.from(this.userThemesMap.keys());
    }
    setTheme(themeName, theme) {
        this.userThemesMap.set(themeName, theme);
        this.notify('change-theme');
    }
    notify(type) {
        const theme = this.theme(), materialTheme = null === theme || void 0 === theme ? void 0 : theme.save(), msg = {
            themeName: this.currentTheme(),
            theme: materialTheme,
            is3p: true,
            imageUrl: null === theme || void 0 === theme ? void 0 : theme.imageUrl
        };
        this.elem.dispatchEvent(new CustomEvent(type, {
            detail: msg,
            bubbles: true,
            cancelable: true
        }));
        window.dispatchEvent(new CustomEvent(type, {
            detail: msg,
            bubbles: true,
            cancelable: true
        }));
        console.log('notify', type, msg);
    }
    getContext(update) {
        return {
            root: this.elem,
            theme: this.theme(),
            themeName: this.currentTheme(),
            themeMap: this.userThemesMap,
            isPlugin: this.isPlugin,
            updateImage: value => {
                const themeName = this.currentTheme();
                if (themeName) {
                    var theme = this.userThemesMap.get(themeName);
                    theme && (theme.props.imageUrl = value, this.setTheme(themeName, theme), this.notify('change-image'));
                }
                update(this.currentTheme());
            },
            updateName: value => {
                JSCompiler_StaticMethods_switchTheme(this, value);
                update(this.currentTheme());
            },
            updateTheme: value => {
                const themeName = this.currentTheme();
                themeName && (this.setTheme(themeName, value), this.notify('change-theme'), this.props.onThemeUpdate(value));
                update(this.currentTheme());
            },
            onAction: () => {
                this.generate();
            },
            showExport: this.showExport,
            onExportChange: value => {
                this.showExport = value;
                this.refresh();
            }
        };
    }
};