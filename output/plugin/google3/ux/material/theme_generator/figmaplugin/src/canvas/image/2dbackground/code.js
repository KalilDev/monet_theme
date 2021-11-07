'use strict';
const utils = require('../../../utils/code.js');
const image = require('../code.js');
const tokens = require('../../../tokens/code.js');
var ImageBackground = class {
    constructor(scene) {
        this.scene = scene;
    }
    create() {
        const style = tokens.utils_findColorToken(this.scene.themeName, 'source/Image');
        if (style) {
            var JSCompiler_StaticMethods_addSectionLabel$self = this.scene;
            const label = JSCompiler_StaticMethods_createSectionLabel(JSCompiler_StaticMethods_addSectionLabel$self, 'Wallpaper');
            JSCompiler_StaticMethods_addSectionLabel$self.add(label);
            var options = Object.assign(Object.assign({}, this.scene.lastRect), image.2dbackground_defaultSize), node = utils.utils_createRect(Object.assign(Object.assign({}, options), { borderRadius: 12 }));
            style && (node.fillStyleId = style.id);
            this.scene.add(node);
            this.scene.lastRect.dx += image.2dbackground_defaultSize.width;
            this.scene.lastRect.dx += 80;
        }
    }
};