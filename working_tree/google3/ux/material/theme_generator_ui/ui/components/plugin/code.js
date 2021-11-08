'use strict';
const importers = require('../../../src/importers.js');
const src = require('../../../src/utils.js');
const theme = require('../../../src/theme/utils.js');
const plugin = require('code.js');
const components = require('../code.js');
const google3 = require('google3');
function get_started_pluginGetStarted(context) {
  return google3.html`
    <div id="no-theme">
      <div id="plugin-welcome">${google3.pluginWelcome}</div>
      <div class="no-theme">
        <div class="col plugin-welcome">
          <div>
            <h2 class="display3">Material Theme Builder</h2>
            <span class="headline6"
              >Visualize dynamic color, build a custom theme, and export to
              code.
            </span>
          </div>
          <div>
            <div
              class="welcome-logo"
              @click=${() => {
      const theme = google3.ThemeAdapter.default(true);
      context.onThemeCreate('material-theme', theme);
    }}
            >
              ${google3.getStartedButton}
            </div>
            <span class="caption"
              >Get started will create styles as \u2018material-theme.\u2019 Use Material
              Design kit components or connect these styles to your designs to
              start visualizing themes.</span
            >
          </div>
        </div>
        <div id="more-info" class="row">
          <a
            class="overline"
            href="https://material.io/"
            target="_blank"
            rel="noopener noreferrer"
            >Material.io</a
          >
          <a
            class="overline"
            href="https://www.figma.com/community/file/778763161265841481"
            target="_blank"
            rel="noopener noreferrer"
            >Design Kit</a
          >
        </div>
      </div>
    </div>
  `;
}
function theme_add_pluginAddTheme(context) {
  return google3.html`<div id="new-theme" class="col">
    <div class="new-theme col">
      <div>
        <div class="info-header col">
          <h4 class="headline4">Add a new theme</h4>
        </div>
        <div id="theme-name-edit">
          <mwc-textfield outlined label="Theme name" required></mwc-textfield>
        </div>
      </div>
      <div id="theme-save" class="col">
        <mwc-button
          raised
          label="Add Theme"
          @click=${() => {
      const themeNameInput = context.root.querySelector('mwc-textfield'), themeName = themeNameInput.value;
      if (0 === themeName.length)
        themeNameInput.setCustomValidity('Name cannot be empty');
      else if (themeName.includes('/'))
        themeNameInput.setCustomValidity('Name cannot include /');
      else {
        const theme = google3.ThemeAdapter.default(true);
        context.onThemeCreate(themeName, theme);
        context.onShowNewThemeChange(false);
      }
    }}
        ></mwc-button>
        <mwc-button
          label="Cancel"
          @click=${() => {
      context.onShowNewThemeChange(false);
    }}
        ></mwc-button>
      </div>
    </div>
  </div>`;
}
function bottom_bar_pluginBottomBar(context) {
  return google3.html`<div id="bottom-bar" class="row">
    ${components.export_exportButton(context)}
    <div class="spacer"></div>
    <div class="row center">
      <div class="col center icon">
        <mwc-icon-button
          class="toggle"
          icon="dark_mode"
          @click=${() => {
      context.tokensAction('tokens-dark');
    }}
        ></mwc-icon-button>
      </div>
      <div class="col center icon">
        <mwc-icon-button
          class="toggle"
          icon="light_mode"
          @click=${() => {
      context.tokensAction('tokens-light');
    }}
        ></mwc-icon-button>
      </div>
      <div class="col center">
        <mwc-button
          class="cta"
          raised
          icon="auto_fix_high"
          label="Swap"
          @click=${() => {
      context.tokensAction('tokens-link');
    }}
        ></mwc-button>
      </div>
    </div>
  </div>`;
}
function dynamic_pluginDynamic(context) {
  var _a, _b;
  return google3.html`<div id="plugin-dynamic-tab" class="col">
    <span class="tip overline"
      >Tip: Select something that is using Material Design styles and upload
      image. This will update your colors.</span
    >
    ${plugin.dynamic_renderImagePreview(context)}
    ${components.seed_input_seedInput(null !== (_b = null === (_a = null === context || void 0 === context ? void 0 : context.theme) || void 0 === _a ? void 0 : _a.seedValue) && void 0 !== _b ? _b : '', color => {
    const theme = google3.ThemeAdapter.fromColor(color, true);
    context.updateTheme(theme);
  })}
    <div style="height: 20px;"></div>
  </div>`;
}
function dynamic_renderImagePreview(context) {
  var _a;
  return google3.html`<div id="image-preview">
    <drop-zone
      id="image-drop"
      accept="image/*"
      .file=${null === (_a = context.theme) || void 0 === _a ? void 0 : _a.imageUrl}
      label="Select image to visualize dynamic color"
      buttonText="${'Select Image'}"
      @file=${e => plugin.dynamic_handleImage(context, e)}
    ></drop-zone>
  </div>`;
}
async function dynamic_handleImage(context, e) {
  var _a;
  const src = e.detail, seed = await theme.index_seedFromImage(src), theme = google3.ThemeAdapter.fromColor(seed, true), oldImageUrl = null === (_a = context.theme) || void 0 === _a ? void 0 : _a.imageUrl;
  theme.props.imageUrl = src;
  context.updateTheme(theme);
  context.updateImage(src);
  if (!oldImageUrl)
    context.onAction();
}
function static_pluginStatic(context) {
  const source = context.theme.source, colors = Object(source), defaultKeys = [
    'seed',
    'imageUrl',
    ...google3.KEY_COLORS
  ], colorKeys = Object.keys(colors).filter(e => !defaultKeys.includes(e));
  colorKeys.sort();
  const buildColorInput = (key, value) => components.color_input_colorInput(src.utils_keyToLabel(key), null !== value && void 0 !== value ? value : '#FFFFFF', color => {
    if (!context.theme) {
      var theme = google3.ThemeAdapter.fromColor(color, true);
      context.updateTheme(theme);
    }
    let theme$jscomp$0 = context.theme;
    'primary' === key ? theme$jscomp$0 = google3.ThemeAdapter.fromColor(color, theme$jscomp$0.is3p) : JSCompiler_StaticMethods_setCustomColor(theme$jscomp$0, key, color);
    context.updateTheme(theme$jscomp$0);
  });
  return google3.html`<div id="static-tab" class="col">
    <span class="tip overline"
      >Tip: Set one or more key colors to create a custom color scheme. Select
      something using Material style tokens to view changes.</span
    >
    <div class="colors col">
      ${google3.html`<h2 class="subhead1">Key Colors</h2>
            ${buildColorInput('primary', source.primary)}
            <div class="row equal">
              ${buildColorInput('secondary', source.secondary)}
              ${buildColorInput('tertiary', source.tertiary)}
            </div>
            ${buildColorInput('neutral', source.neutral)}
            <!-- ${buildColorInput('neutralVariant', source.neutralVariant)} -->
            <!-- ${buildColorInput('error', source.error)} --> `}
      ${google3.html`
            <h2 class="subhead1">Extended Colors</h2>
            ${colorKeys.map(key => components.color_input_colorInput(key, colors[key], color => {
    const theme = context.theme;
    JSCompiler_StaticMethods_setCustomColor(theme, key, color);
    context.updateTheme(theme);
  }))}
            <mwc-button
              class="add-color"
              label="Add a color"
              raised
              icon="add"
              @click=${() => {
        const newKey = `Custom${colorKeys.length}`;
        if (!context.theme) {
          var theme = google3.ThemeAdapter.fromColor('#FFFFFF', true);
          context.updateTheme(theme);
        }
        const theme$jscomp$0 = context.theme;
        JSCompiler_StaticMethods_setCustomColor(theme$jscomp$0, newKey, '#FFFFFF');
        context.updateTheme(theme$jscomp$0);
        context.onAction();
      }}
            ></mwc-button>
          ` }
    </div>
  </div>`;
}
function tabs_pluginTabs(context) {
  return google3.html`<div id="tabs" class="row equal center padded-h">
    ${components.chip_button_chipButton({
    label: 'Dynamic',
    icon: 'auto_awesome',
    active: 0 === context.activeIndex,
    callback: () => {
      context.onTabChange(0);
      const oldTheme = context.theme, seedColor = oldTheme.save().source.primary, theme = oldTheme.isBaseline ? google3.ThemeAdapter.default(true) : google3.ThemeAdapter.fromColor(seedColor, true);
      context.updateTheme(theme);
    }
  })}
    ${components.chip_button_chipButton({
    label: 'Custom',
    icon: 'palette',
    active: 1 === context.activeIndex,
    callback: () => {
      context.onTabChange(1);
      const oldTheme = context.theme, themeSnapshot = oldTheme.save(), seedColor = themeSnapshot.source.seed, theme = oldTheme.isBaseline ? google3.ThemeAdapter.default(true) : google3.ThemeAdapter.fromColor(seedColor, true, { source: themeSnapshot.source });
      context.updateTheme(theme);
    }
  })}
  </div>`;
}
function theme_select_pluginThemeSelect(context) {
  return google3.html`<div id="theme-select">
    <mwc-select
      outlined
      label="Current Theme"
      @selected=${e => {
      e.target.select(context.userThemes.indexOf(context.currentTheme));
    }}
    >
      <mwc-button
        icon="add"
        label="Add new theme"
        @click=${() => {
      context.onShowNewThemeChange(true);
    }}
      ></mwc-button>
      ${google3.html` <mwc-button
            icon="add"
            label="Import Material Tokens (DSP)"
            @click=${() => {
        src.utils_importDirectory(files => {
          plugin.theme_select_handleUploadZip(context, files);
        });
      }}
          ></mwc-button>` }
      ${0 < context.userThemes.length ? google3.html` ${context.userThemes.map(theme => google3.html`<mwc-list-item
              value="${theme}"
              ?selected=${theme === context.currentTheme}
              @click=${() => {
          context.onThemeSwitch(context.currentTheme, theme);
        }}
              >${theme}</mwc-list-item
            >`)}` : google3.html``}
      <li class="menu-divider" divider role="separator"></li>
      <br />
      <span class="menu-header">Pre-sets</span>
      <br />
      <mwc-list-item
        @click=${() => {
      const theme = google3.ThemeAdapter.default(true);
      context.updateTheme(theme);
    }}
        >Baseline</mwc-list-item
      >
      ${google3.html``}
    </mwc-select>
  </div>`;
}
async function theme_select_handleUploadZip(context, files) {
  if (0 !== files.length) {
    var textFiles = await importers.dsp_fileListToTextFiles(files), newTheme = importers.dsp_dspFilesToTheme(textFiles);
    newTheme && context.updateTheme(newTheme);
  }
}
function index_renderPlugin(context) {
  return google3.html`<main id="plugin-ui">
    ${0 === context.userThemes.length ? plugin.get_started_pluginGetStarted(context) : context.showAddTheme ? plugin.theme_add_pluginAddTheme(context) : google3.html` <div id="edit-theme" class="col">
    <div id="theme-options">${plugin.theme_select_pluginThemeSelect(context)}</div>
    ${plugin.tabs_pluginTabs(context)}
    ${0 === context.activeIndex ? plugin.dynamic_pluginDynamic(context) : plugin.static_pluginStatic(context)}
    ${plugin.bottom_bar_pluginBottomBar(context)}
  </div>` }
  </main>`;
}