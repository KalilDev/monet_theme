'use strict';
const builders = require('../../../../../../third_party/javascript/safevalues/builders/code.js');
const drop = require('../../drop_zone/drop/code.js');
const src = require('../../../src/code.js');
const components = require('../code.js');
const theme = require('../../../src/theme/code.js');
const ui = require('../../code.js');
const web = require('code.js');
const google3 = require('google3');
function dynamic_img(name, description) {
    return {
        thumbnail: `assets/${ name }_thumb.webp`,
        wallpaper: `assets/${ name }_wallpaper.webp`,
        description
    };
}
function dynamic_webDynamic(context) {
    return google3.html`<div id="dynamic-tab" class="row">
    <div class="overview col">
      <section>
        <span class="headline3">Visualize dynamic color</span>
        <span class="subtitle1"
          >Select a wallpaper or add your own to see user generated color in
          action.</span
        >
        <div class="images row">
          ${ google3.IMAGES.map(img => {
        var _a;
        return google3.html`<img
              ?selected=${ img.wallpaper === (null === (_a = context.theme) || void 0 === _a ? void 0 : _a.imageUrl) }
              class="image"
              aria-label="${ img.description }"
              role="button"
              src="${ img.thumbnail }"
              tabindex="0"
              @click=${ () => web.dynamic_handleImage(context, img.wallpaper) }
            />`;
    }) }
        </div>
        <div
          aria-label="Shuffle source color"
          role="button"
          tabindex="0"
          class="shuffle"
          @click=${ () => {
        const color = src.utils_randomColor();
        console.log('shuffle', color);
        const adapter = google3.fromColor(color, !0);
        context.updateTheme(adapter);
    } }
        >
          ${ google3.shuffleSeedButton }
        </div>
      </section>
    </div>
    <div class="wallpaper">
      ${ ui.svgs_mockup() }
      <div
        role="button"
        aria-label="Add your wallpaper"
        tabindex="0"
        class="upload"
        @click=${ () => {
        drop.$n2dzone_uploadFile(async files => {
            if (0 < files.length) {
                const buffer = await src.utils_readFileBuffer(files[0]), src = builders.safe_url_builders_fromBlob(new Blob([buffer], { type: 'image/webp' })).toString();
                await web.dynamic_handleImage(context, src);
            }
        }, { accept: 'image/*' });
    } }
      >
        ${ google3.uploadImageButton }
      </div>
    </div>
  </div>`;
}
async function dynamic_handleImage(context, url) {
    var _a;
    const seed = await theme.index_seedFromImage(url), theme = google3.fromColor(seed, !0), oldImageUrl = null === (_a = context.theme) || void 0 === _a ? void 0 : _a.imageUrl;
    theme.props.imageUrl = url;
    context.updateTheme(theme);
    context.updateImage(url);
    if (!oldImageUrl)
        context.onAction();
}
function tabs_webTabs(context) {
    return google3.html`<div id="tabs" class="row equal center padded-h">
    ${ components.chip_button_chipButton({
        label: 'Dynamic',
        active: 0 === context.activeIndex,
        icon: 'auto_awesome',
        callback: () => {
            context.onTabChange(0);
        }
    }) }
    <div style="width: 15px"></div>
    ${ components.chip_button_chipButton({
        label: 'Custom',
        active: 1 === context.activeIndex,
        icon: 'palette',
        callback: () => {
            context.onTabChange(1);
        }
    }) }
  </div>`;
}
function app_bar_webAppBar(context) {
    return google3.html`<header class="row">
    <div id="app-bar-left" class="row">
      <div class="logo">${ google3.materialLogo }</div>
      <span class="title">Material Theme Builder</span>
    </div>
    <div id="app-bar-center" class="spacer">${ web.tabs_webTabs(context) }</div>
    <div id="app-bar-right">
      ${ context.hideExport ? google3.html`` : components.export_exportButton(context) }
      <mwc-icon-button
        aria-label="Switch to ${ context.darkMode ? 'Light' : 'Dark' } theme"
        icon="${ context.darkMode ? 'light_mode' : 'brightness_medium' }"
        @click=${ () => {
        context.onDarkModeChange(!context.darkMode);
    } }
      ></mwc-icon-button>
      <mwc-icon-button
        icon="info_outline"
        aria-label="More Info"
        @click=${ () => {
        context.onShowInfoChanged(!context.showInfo);
    } }
      ></mwc-icon-button>
    </div>
  </header>`;
}
function info_dialog_infoDialogTemplate(context) {
    return google3.html` <mwc-dialog
    ?open=${ context.showInfo }
    @closed=${ () => {
        context.onShowInfoChanged(!1);
    } }
  >
    <div class="info-dialog">
      <span class="headline1 title">Material Theme Builder</span>
      <span class="subtitle1 about"
        >Visualize dynamic color, build a custom theme, and export to code.
      </span>
      <img src="assets/info_image.png" />
      <span class="headline2 color">Migrate to Material Design 3</span>
      <span class="subtitle1 description"
        >With built-in code export, Material Theme Builder makes it easy migrate
        to the M3 color system and take advantage of dynamic color.</span
      >
      <div class="info-links">
        ${ web.info_dialog_link('Learn more about Material Theme Builder', 'https://material.io/material-theme-builder') }
        ${ web.info_dialog_link('Material Theme Builder for Figma', 'https://goo.gle/material-theme-builder-figma') }
      </div>
    </div>
  </mwc-dialog>`;
}
function info_dialog_link(label, url) {
    return google3.html`<a
    href="${ null !== url && void 0 !== url ? url : label }"
    rel="noopener noreferrer"
    target="_blank"
    >${ label }</a
  >`;
}
function static_buildKeyColors(context) {
    if (!context.theme)
        return google3.html``;
    const source = context.theme.source, colors = Object(source), defaultKeys = [
            'seed',
            'imageUrl',
            ...google3.KEY_COLORS
        ];
    Object.keys(colors).filter(e => !defaultKeys.includes(e)).sort();
    const buildColorInput = (key, value) => components.color_input_colorInput(src.utils_keyToLabel(key), null !== value && void 0 !== value ? value : '#FFFFFF', color => {
        if (!context.theme) {
            var theme = google3.fromColor(color, !0);
            context.updateTheme(theme);
        }
        let theme$jscomp$0 = context.theme;
        'primary' === key ? theme$jscomp$0 = google3.fromColor(color, theme$jscomp$0.is3p) : JSCompiler_StaticMethods_setCustomColor(theme$jscomp$0, key, color);
        context.updateTheme(theme$jscomp$0);
    });
    return google3.html` ${ buildColorInput('primary', source.primary) }
    <div class="row equal">
      ${ buildColorInput('secondary', source.secondary) }
      ${ buildColorInput('tertiary', source.tertiary) }
    </div>
    ${ buildColorInput('neutral', source.neutral) }`;
}
function static_buildScheme(colors$jscomp$0) {
    const colorBox = (label, color, onColor, is2x = !1) => {
            const div = document.createElement('div');
            div.className = 'color-item';
            is2x && div.classList.add('color-item-2x');
            color && (div.style.backgroundColor = color);
            const labelElem = document.createElement('span');
            labelElem.className = 'color-label';
            labelElem.innerText = label;
            onColor && (labelElem.style.color = onColor);
            div.appendChild(labelElem);
            return google3.html`${ div }`;
        }, colorFamily = (section, colors) => google3.html`<div class="color-family ${ section }">
      ${ colorBox(`${ section }`, colors.color, colors.onColor) }
      ${ colorBox(`on ${ section }`, colors.onColor, colors.color) }
      ${ colorBox(`${ section } container`, colors.colorContainer, colors.onColorContainer) }
      ${ colorBox(`on ${ section } container`, colors.onColorContainer, colors.colorContainer) }
    </div>`;
    return google3.html`<div class="color-scheme">
    ${ colorFamily('primary', {
        color: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.primary,
        onColor: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onPrimary,
        colorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.primaryContainer,
        onColorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onPrimaryContainer
    }) }
    ${ colorFamily('secondary', {
        color: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.secondary,
        onColor: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onSecondary,
        colorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.secondaryContainer,
        onColorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onSecondaryContainer
    }) }
    ${ colorFamily('tertiary', {
        color: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.tertiary,
        onColor: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onTertiary,
        colorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.tertiaryContainer,
        onColorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onTertiaryContainer
    }) }
    ${ colorFamily('error', {
        color: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.error,
        onColor: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onError,
        colorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.errorContainer,
        onColorContainer: null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onErrorContainer
    }) }
    <div class="color-family background">
      ${ colorBox('background', null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.background, null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onBackground) }
      ${ colorBox('on background', null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onBackground, null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.background) }
      ${ colorBox('surface', null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.surface, null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onSurface) }
      ${ colorBox('on surface', null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onSurface, null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.surface) }
    </div>
    <div class="color-family surface-variant">
      ${ colorBox('surface-variant', null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.surfaceVariant, null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onSurfaceVariant) }
      ${ colorBox('on surface-variant', null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.onSurfaceVariant, null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.surfaceVariant) }
      ${ colorBox('outline', null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.outline, null === colors$jscomp$0 || void 0 === colors$jscomp$0 ? void 0 : colors$jscomp$0.surface, !0) }
    </div>
  </div>`;
}
function index_renderWeb(context) {
    var JSCompiler_temp_const = web.app_bar_webAppBar(context);
    if (0 === context.activeIndex)
        var JSCompiler_temp = web.dynamic_webDynamic(context);
    else {
        var JSCompiler__a, JSCompiler__b;
        JSCompiler_temp = google3.html`<div id="custom-tab">
    <div class="source-colors">
      <div class="options">
        <span class="headline3">Key Colors</span>
        <span class="subtitle1"
          >Input one or more brand color to define your color scheme.
        </span>
        ${ web.static_buildKeyColors(context) }
      </div>
    </div>
    <div class="mockup">${ ui.svgs_mockup() }</div>
    <div class="preview">
      <div class="preview-content">
        <span class="headline2">Your Theme</span>
        <span class="subtitle1">Light Theme</span>
        ${ web.static_buildScheme(null === (JSCompiler__a = context.theme) || void 0 === JSCompiler__a ? void 0 : JSCompiler__a.light) }
        <span class="subtitle1">Dark Theme</span>
        ${ web.static_buildScheme(null === (JSCompiler__b = context.theme) || void 0 === JSCompiler__b ? void 0 : JSCompiler__b.dark) }
      </div>
    </div>
  </div>`;
    }
    return google3.html`<main id="web-ui" class="col">
    ${ JSCompiler_temp_const }${ JSCompiler_temp }
    ${ web.info_dialog_infoDialogTemplate(context) }
  </main>`;
}