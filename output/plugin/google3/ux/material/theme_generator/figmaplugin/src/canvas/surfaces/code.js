'use strict';
const surfaces_boxSize = require('../surfaces_boxSize/code.js');
const google3 = require('google3');
var MaterialSurfaces = class extends google3.BaseScheme {
    addContent() {
        const prev = this.scene.lastRect.dy, theme = this.scene.theme, lightSurfaces = theme.lightSurfaces, darkSurfaces = theme.darkSurfaces;
        this.addColor({
            light: {
                label: '',
                value: theme.light.surface,
                tokenPath: 'sys/light/surface'
            },
            dark: {
                label: '',
                value: theme.dark.surface,
                tokenPath: 'sys/dark/surface'
            },
            label: 'Surface',
            width: surfaces_boxSize.width,
            height: surfaces_boxSize.height
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: '+ 5% Primary',
                value: lightSurfaces.surface1,
                tokenPath: 'read-only/light/surface1'
            },
            dark: {
                label: '+ 5% Primary',
                value: darkSurfaces.surface1,
                tokenPath: 'read-only/dark/surface1'
            },
            label: 'Surface at +1',
            width: surfaces_boxSize.width,
            height: surfaces_boxSize.height
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: '+ 8% Primary',
                value: lightSurfaces.surface2,
                tokenPath: 'read-only/light/surface2'
            },
            dark: {
                label: '+ 8% Primary',
                value: darkSurfaces.surface2,
                tokenPath: 'read-only/dark/surface2'
            },
            label: 'Surface at +2',
            width: surfaces_boxSize.width,
            height: surfaces_boxSize.height
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: '+ 11% Primary',
                value: lightSurfaces.surface3,
                tokenPath: 'read-only/light/surface3'
            },
            dark: {
                label: '+ 11% Primary',
                value: darkSurfaces.surface3,
                tokenPath: 'read-only/dark/surface3'
            },
            label: 'Surface at +3',
            width: surfaces_boxSize.width,
            height: surfaces_boxSize.height
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: '+ 12% Primary',
                value: lightSurfaces.surface4,
                tokenPath: 'read-only/light/surface4'
            },
            dark: {
                label: '+ 12% Primary',
                value: darkSurfaces.surface4,
                tokenPath: 'read-only/dark/surface4'
            },
            label: 'Surface at +4',
            width: surfaces_boxSize.width,
            height: surfaces_boxSize.height
        });
        this.scene.lastRect.dy += 20;
        this.addColor({
            light: {
                label: '+ 14% Primary',
                value: lightSurfaces.surface5,
                tokenPath: 'read-only/light/surface5'
            },
            dark: {
                label: '+ 14% Primary',
                value: darkSurfaces.surface5,
                tokenPath: 'read-only/dark/surface5'
            },
            label: 'Surface at +5',
            width: surfaces_boxSize.width,
            height: surfaces_boxSize.height
        });
        this.scene.lastRect.dx += surfaces_boxSize.width;
        this.scene.lastRect.dx += 20;
        this.scene.lastRect.dx += 20;
        this.scene.lastRect.dy = prev;
    }
};