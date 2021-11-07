'use strict';
const google3 = require('google3');
var defaultSize = {
    width: 216,
    height: 108
};
var BaseScheme = class extends google3.BaseScene {
    constructor(scene, label, section) {
        super(scene);
        this.scene = scene;
        this.label = label;
        this.section = section;
        this.nodes = [];
        this.addColor = options => {
            var _a, _b, _c, _d, _e, _f;
            const colorSection = options[this.section], tokenPath = colorSection.tokenPath, color = colorSection.value, units = null !== (_a = null === options || void 0 === options ? void 0 : options.units) && void 0 !== _a ? _a : 1, width = (null !== (_b = null === options || void 0 === options ? void 0 : options.width) && void 0 !== _b ? _b : google3.defaultSize.width) * units, height = null !== (_c = null === options || void 0 === options ? void 0 : options.height) && void 0 !== _c ? _c : google3.defaultSize.height, shiftAmount = (null !== (_d = null === options || void 0 === options ? void 0 : options.shift) && void 0 !== _d ? _d : 0) * width, config = {
                    dx: shiftAmount + this.scene.lastRect.dx,
                    dy: this.scene.lastRect.dy,
                    width,
                    height
                };
            0 !== shiftAmount && (this.scene.lastRect.dy -= height, config.dy -= height);
            JSCompiler_StaticMethods_addBox(this, Array.isArray(color) ? color : [{ value: color }], options.label, colorSection.label, config, tokenPath, {
                colors: (null === (_e = colorSection.onColor) || void 0 === _e ? 0 : _e.value) ? Array.isArray(colorSection.onColor.value) ? colorSection.onColor.value : [{ value: colorSection.onColor.value }] : void 0,
                tokenPath: null === (_f = colorSection.onColor) || void 0 === _f ? void 0 : _f.tokenPath
            });
            this.scene.lastRect.dy += height;
        };
    }
    get colors() {
        return 'light' === this.section ? this.scene.theme.light : this.scene.theme.dark;
    }
    create() {
        JSCompiler_StaticMethods_addSectionSpacing(this.scene);
        const label = JSCompiler_StaticMethods_createSectionLabel(this.scene, this.label);
        this.nodes.push(label);
        this.addContent();
        JSCompiler_StaticMethods_addGroup(this.scene, this.label, this.nodes);
    }
};