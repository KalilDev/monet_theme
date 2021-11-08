'use strict';
var ThemeExporter = class {
    constructor(theme, name) {
        this.theme = theme;
        this.name = name;
    }
    download() {
        JSCompiler_StaticMethods_downloadZip(this);
    }
};