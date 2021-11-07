'use strict';
const $m2dpalettes_boxSize = require('../2dpalettes_boxSize/code.js');
const google3 = require('google3');
var TonalPalettes = class extends google3.BaseScene {
    constructor() {
        super(...arguments);
        this.size = {
            width: 61 * google3.LUMINANCE_STEPS.length,
            height: $m2dpalettes_boxSize.height
        };
    }
    create() {
        console.log('creating tonal palettes');
        const prev = this.scene.lastRect.dy, label = JSCompiler_StaticMethods_createSectionLabel(this.scene, 'Tonal Palettes');
        this.nodes.push(label);
        const tonalRows = {
                primary: this.scene.theme.primaryGroup,
                secondary: this.scene.theme.secondaryGroup,
                tertiary: this.scene.theme.tertiaryGroup,
                error: this.scene.theme.errorGroup,
                neutral: this.scene.theme.neutralGroup,
                'neutral-variant': this.scene.theme.neutralVariantGroup
            }, keyColors = {
                primary: this.scene.theme.primaryValue,
                secondary: this.scene.theme.secondaryValue,
                tertiary: this.scene.theme.tertiaryValue,
                error: this.scene.theme.errorValue,
                neutral: this.scene.theme.neutralValue,
                'neutral-variant': this.scene.theme.neutralVariantValue
            }, keys = Object.keys(tonalRows), prevDx = this.scene.lastRect.dx;
        for (let k = 0; k < keys.length; k++) {
            const key = keys[k], map = Object(tonalRows)[key];
            this.scene.lastRect.dx = prevDx;
            JSCompiler_StaticMethods_addRowLabel(this, key);
            this.scene.lastRect.dx += 120;
            this.scene.lastRect.dx += 20;
            JSCompiler_StaticMethods_addKeyColor(this, key, Object(keyColors)[key]);
            this.scene.lastRect.dx += 81;
            JSCompiler_StaticMethods_addTonalRow(this, key, map, `ref/${ key }`);
            this.scene.lastRect.dy += 20;
            'error' === key && JSCompiler_StaticMethods_addDivider(this);
        }
        JSCompiler_StaticMethods_addDivider(this);
        for (const [key__tsickle_destructured_1, value__tsickle_destructured_2] of Object.entries(this.scene.theme.source)) {
            const key = key__tsickle_destructured_1, value = value__tsickle_destructured_2;
            if (!value)
                continue;
            if ('seed' === key || google3.KEY_COLORS.includes(key))
                continue;
            this.scene.lastRect.dx = prevDx;
            JSCompiler_StaticMethods_addRowLabel(this, key);
            this.scene.lastRect.dx += 120;
            this.scene.lastRect.dx += 20;
            JSCompiler_StaticMethods_addKeyColor(this, key, value);
            this.scene.lastRect.dx += 81;
            const map = JSCompiler_StaticMethods_semanticColor(value).group, tokenKey = key.toLowerCase();
            JSCompiler_StaticMethods_addTonalRow(this, tokenKey, map, `read-only/${ tokenKey }/group`);
            this.scene.lastRect.dy += 20;
        }
        JSCompiler_StaticMethods_addGroup(this.scene, 'Tonal Palettes', this.nodes);
        this.scene.lastRect.dy = prev;
        this.scene.lastRect.dx += 61 * google3.LUMINANCE_STEPS.length;
        this.scene.lastRect.dx += 61;
        this.scene.lastRect.dx += 20;
    }
};