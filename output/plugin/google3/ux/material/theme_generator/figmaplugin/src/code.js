'use strict';
const utils = require('utils/code.js');
const google3 = require('google3');
const tokens = require('tokens/code.js');
const src = require('code.js');
async function commands_generateDefault(scene, standalone) {
    await tokens.theme_to_tokens_preloadFonts(scene.theme);
    new google3.ImageBackground(scene).create();
    src.commands_generateTonalPalettes(scene, !1);
    src.commands_generateScheme(scene, !1);
    src.commands_generateSurfaces(scene, !1);
    src.commands_generateTypography(scene, !1);
    standalone && (scene.groupName = scene.themeName);
}
function commands_generateScheme(scene, standalone) {
    new google3.ColorScheme(scene, 'Light', 'light').create();
    new google3.ColorScheme(scene, 'Dark', 'dark').create();
    standalone && (scene.groupName = 'Color Schemes');
}
function commands_generateSurfaces(scene, standalone) {
    new google3.MaterialSurfaces(scene, 'Light', 'light').create();
    new google3.MaterialSurfaces(scene, 'Dark', 'dark').create();
    standalone && (scene.groupName = 'Surfaces');
}
function commands_generateTonalPalettes(scene, standalone) {
    new google3.TonalPalettes(scene).create();
    standalone && (scene.groupName = 'Tonal Palettes');
}
function commands_generateTypography(scene, standalone) {
    new google3.Typography(scene).create();
    standalone && (scene.groupName = 'Typography');
}
async function commands_generateDefaultCanvas() {
    await src.commands_generateCanvas('Default', async scene => {
        await src.commands_generateDefault(scene, !1);
    });
}
async function commands_generateCanvas(label, cb) {
    console.log(`Generating ${ label } canvas...`);
    const {theme, themeName} = await utils.utils_updateLocalTheme();
    if (theme) {
        await tokens.theme_to_tokens_preloadFonts(theme);
        var scene = new google3.Scene(theme, themeName), JSCompiler__a;
        const parent = figma.currentPage, groupName = null !== (JSCompiler__a = scene.groupName) && void 0 !== JSCompiler__a ? JSCompiler__a : scene.themeName;
        let group;
        for (const item of parent.children)
            scene.clear && item.name === groupName && (group = item);
        group ? (scene.lastRect.dx = group.x, scene.lastRect.dy = group.y) : (scene.lastRect.dx = figma.viewport.center.x, scene.lastRect.dy = figma.viewport.center.y);
        await cb(scene);
        scene.create();
    }
}
let main_handler = void 0;
let main_pluginOpen = !1;
let main_every3Action = 0;
let main_timer = -1;
let main_themes = [];
let main_running = !1;
class main_Settings {
    constructor() {
        this.is3p = !0;
        this.name = 'material-theme';
        this.defaultSize = {
            height: 640,
            width: 366
        };
    }
    get defaultFont() {
        return {
            family: this.is3p ? 'Roboto' : 'Google Sans',
            style: 'Regular'
        };
    }
}
const main_settings = new src.main_Settings();
async function main_showPlugin() {
    var options = {
        width: src.main_settings.defaultSize.width,
        height: src.main_settings.defaultSize.height
    };
    src.main_pluginOpen = !0;
    figma.showUI(__html__, options);
    src.main_startTimer();
    await src.main_actionAfterLaunch();
}
function main_sendUiMessage(message) {
    console.log('send ui message', message.type, message);
    figma.ui.postMessage(message);
}
async function main_messageHandler(type, options) {
    var _a;
    const selection = null !== (_a = figma.currentPage.selection) && void 0 !== _a ? _a : [];
    src.main_cancelMessage();
    try {
        switch (type) {
        case 'generate-default':
            src.main_message('Generating default canvas...');
            await src.commands_generateCanvas('Default', async scene => {
                await src.commands_generateDefault(scene, !0);
            });
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'generate-android-schemes':
            src.main_message('Generating android scheme...');
            await src.commands_generateCanvas('Android', async scene => {
                new google3.AndroidScheme(scene, 'Light', 'light').create();
                new google3.AndroidScheme(scene, 'Dark', 'dark').create();
                scene.groupName = 'Android Color Schemes';
            });
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'generate-typography':
            src.main_message('Generating typography...');
            await src.commands_generateCanvas('Typography', async scene => {
                src.commands_generateTypography(scene, !0);
            });
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'generate-schemes':
            src.main_message('Generating color schemes...');
            await src.commands_generateCanvas('Scheme', async scene => {
                src.commands_generateScheme(scene, !0);
            });
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'generate-surfaces':
            src.main_message('Generating surfaces...');
            await src.commands_generateCanvas('Surface', async scene => {
                src.commands_generateSurfaces(scene, !0);
            });
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'generate-palettes':
            src.main_message('Generating tonal palettes...');
            await src.commands_generateCanvas('Palette', async scene => {
                src.commands_generateTonalPalettes(scene, !0);
            });
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'check-contrast':
            src.main_message('Checking contrast...');
            const lastTheme = await utils.utils_getLocalThemeName();
            await tokens.contrast_checkContrastForTokens(lastTheme);
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'generate':
            src.main_message('Generating default canvas...');
            await src.commands_generateDefaultCanvas();
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'change-image':
            const image = options.image, name = options.name;
            name && (src.main_message(`Updating theme image for ${ name }...`), tokens.utils_setImageForTheme(name, null !== image && void 0 !== image ? image : null), src.main_pluginOpen ? src.main_cancelMessage() : src.main_done());
            break;
        case 'change-theme':
            const theme = options.theme, name$jscomp$0 = options.name;
            theme && name$jscomp$0 && (src.main_message(`Updating theme tokens for ${ name$jscomp$0 }...`), await tokens.theme_to_tokens_themeToTokens(name$jscomp$0, theme), await tokens.contrast_checkContrastForTokens(name$jscomp$0), src.main_pluginOpen ? src.main_cancelMessage() : src.main_done());
            break;
        case 'change-name':
            const name$jscomp$1 = options.name;
            name$jscomp$1 && (src.main_message(`Setting default theme for ${ name$jscomp$1 }...`), await utils.utils_saveLocalThemeName(name$jscomp$1), src.main_pluginOpen ? src.main_cancelMessage() : src.main_done());
            break;
        case 'tokens-light':
            const name$jscomp$2 = options.name;
            name$jscomp$2 && (src.main_message(`Swapping to light tokens for ${ name$jscomp$2 }...`), tokens.swap_toggleTheme(name$jscomp$2, [...selection], 'light'), src.main_pluginOpen ? src.main_cancelMessage() : src.main_done());
            break;
        case 'tokens-dark':
            const name$jscomp$3 = options.name;
            src.main_message(`Swapping to dark tokens for ${ name$jscomp$3 }...`);
            tokens.swap_toggleTheme(name$jscomp$3, [...selection], 'dark');
            src.main_pluginOpen ? src.main_cancelMessage() : src.main_done();
            break;
        case 'tokens-link':
            const name$jscomp$4 = options.name;
            name$jscomp$4 && (src.main_message(`Swapping tokens for ${ name$jscomp$4 }...`), tokens.swap_linkTokens(name$jscomp$4, [...selection]), src.main_pluginOpen ? src.main_cancelMessage() : src.main_done());
            break;
        case 'open-plugin':
            src.main_pluginOpen = !0;
            await src.main_showPlugin();
            src.main_startTimer();
            break;
        case 'close-plugin':
            src.main_done();
        }
    } catch (error) {
        console.error('command error', type, error), src.main_done();
    }
}
function main_done() {
    clearInterval(src.main_timer);
    src.main_cancelMessage();
    src.main_pluginOpen = !1;
    figma.closePlugin();
}
function main_message(message) {
    src.main_handler = figma.notify(`${ message }`, { timeout: 100 });
}
function main_cancelMessage() {
    src.main_handler && (src.main_handler.cancel(), src.main_handler = void 0);
}
async function main_actionAfterLaunch() {
    src.main_themes = tokens.validate_getLocalThemeNames();
    if (0 !== src.main_themes.length) {
        for (const themeName of src.main_themes)
            await src.main_addThemeToPlugin(themeName);
        var lastTheme = await utils.utils_getLocalThemeName(), msg = {
                type: 'use-local-theme',
                name: src.main_themes.includes(lastTheme) ? lastTheme : src.main_themes[0]
            };
        src.main_sendUiMessage(msg);
        for (const theme of src.main_themes)
            await tokens.contrast_checkContrastForTokens(theme);
        await src.main_runOnChange();
    }
}
function main_startTimer() {
    -1 === src.main_timer && (src.main_timer = setInterval(() => src.main_runWhileOpen(), 3000));
}
async function main_runWhileOpen() {
    if (!src.main_running) {
        src.main_running = !0;
        try {
            src.main_every3Action += 1, await src.main_checkContrastForThemes(), 3 <= src.main_every3Action && (src.main_every3Action = 0, await src.main_runOnChange());
        } catch (error) {
            console.log('error', error);
        }
        src.main_running = !1;
    }
}
async function main_runOnChange() {
    const newThemes = tokens.validate_getLocalThemeNames(), missingThemes = newThemes.filter(theme => !src.main_themes.includes(theme)), deletedThemes = src.main_themes.filter(theme => !newThemes.includes(theme));
    for (const themeName of missingThemes)
        await src.main_addThemeToPlugin(themeName);
    for (const themeName of deletedThemes)
        await src.main_removeThemeFromPlugin(themeName);
    src.main_themes = newThemes;
    if (0 < missingThemes.length || 0 < deletedThemes.length)
        for (const themeName of src.main_themes)
            await tokens.migrate_migrateTheme(themeName);
}
async function main_addThemeToPlugin(themeName) {
    const theme = tokens.theme_from_tokens_themeFromTokens(themeName);
    if (theme) {
        console.log('adding', themeName, 'theme', theme);
        src.main_sendUiMessage({
            type: 'add-local-theme',
            theme,
            name: themeName
        });
        var imageBytes = await tokens.theme_from_tokens_imageForTheme(themeName);
        imageBytes && src.main_sendUiMessage({
            type: 'set-local-theme-image',
            image: imageBytes,
            name: themeName
        });
    }
}
async function main_removeThemeFromPlugin(themeName) {
    console.log('removing', themeName);
    src.main_sendUiMessage({
        type: 'remove-local-theme',
        name: themeName
    });
}
async function main_checkContrastForThemes() {
    if (0 !== src.main_themes.length)
        for (const theme of src.main_themes)
            await tokens.contrast_checkContrastForTokens(theme);
}