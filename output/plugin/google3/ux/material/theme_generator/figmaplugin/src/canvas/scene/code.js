'use strict';
var BaseScene = class {
    constructor(scene) {
        this.scene = scene;
        this.nodes = [];
    }
};
var Scene = class {
    constructor(theme, themeName) {
        this.theme = theme;
        this.themeName = themeName;
        this.clear = !0;
        this.nodes = [];
        this.lastRect = {
            width: 0,
            height: 0,
            dx: 0,
            dy: 0
        };
    }
    add(node, index = this.nodes.length) {
        this.nodes.splice(index, 0, node);
    }
    remove(index) {
        this.nodes.splice(index, 1);
    }
    create() {
        JSCompiler_StaticMethods_createNodes(this);
    }
};