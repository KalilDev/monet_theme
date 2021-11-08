'use strict';
const src = require('../../src/utils.js');
const components = require('code.js');
const google3 = require('google3');
const export_exportOptions = function () {
  const platforms = [
    {
      icon: 'android',
      label: 'Jetpack Compose (Theme.kt)',
      exporter: (theme, name) => new google3.ComposeExporter(theme, name)
    },
    {
      icon: 'android',
      label: 'Android Views (XML)',
      exporter: (theme, name) => new google3.AndroidExporter(theme, name)
    }
  ];
  platforms.push({
    icon: 'file_download',
    label: 'Export Material Tokens (DSP)',
    exporter: (theme, name) => new google3.DspExporter(theme, name)
  });
  return platforms;
}();
function export_exportButton(context) {
  return google3.html` <div class="col export-action">
    <mwc-button
      id="export-button"
      raised
      label="Export"
      icon="arrow_drop_down"
      class="secondary-action"
      trailingIcon
      ?disabled=${!context.theme}
      @click=${e => {
      void 0 !== context.theme && (context.root.querySelector('#export-menu').anchor = e.target, context.onExportChange(!context.showExport));
    }}
    ></mwc-button>
    <mwc-menu
      id="export-menu"
      ?open=${context.showExport}
      @closed=${() => {
      context.onExportChange(!1);
    }}
      @selected=${e => {
      const platform = components.export_exportOptions[e.detail.index], materialTheme = context.theme.save();
      platform.exporter(materialTheme, context.themeName).download();
    }}
    >
      ${components.export_exportOptions.map(e => google3.html`<mwc-list-item graphic="icon">
          <mwc-icon slot="graphic" aria-hidden="true">${e.icon}</mwc-icon>
          <span>${e.label}</span>
        </mwc-list-item>`)}
    </mwc-menu>
  </div>`;
}
function seed_input_seedInput(value, onColorChange) {
  return google3.html`<div id="color-input" class="col">
    <span class="body2">Source Color</span>
    <div class="color-body row seed-color">
      <div
        class="col center"
        style="width: 40px"
        @click=${() => {
      onColorChange(src.utils_randomColor());
    }}
      >
        ${google3.randomSeedButton}
      </div>
      <div style="width: 10px;"></div>
      <input
        type="color"
        .value="${value}"
        @change=${e => {
      onColorChange(e.target.value);
    }}
      />
    </div>
  </div>`;
}
function color_input_colorInput(label, value, onColorChange) {
  return google3.html`<div id="color-input" class="col">
    <div id="color-edit-container" class="row ${label.toLowerCase()}">
      <input
        type="color"
        .value="${value}"
        @change=${e => {
      onColorChange(e.target.value);
    }}
      />
    </div>
    <span class="body2">${label}</span>
  </div>`;
}
function chip_button_chipButton(options) {
  return options.active ? options.icon ? 'string' === typeof options.icon ? google3.html`<mwc-button
          @click=${() => {
      options.callback();
    }}
          raised
          label="${options.label}"
          icon="${options.icon}"
        ></mwc-button>` : google3.html`<mwc-button
          @click=${() => {
      options.callback();
    }}
          raised
          label="${options.label}"
          >${options.icon}</mwc-button
        >` : google3.html`<mwc-button
        @click=${() => {
      options.callback();
    }}
        raised
        label="${options.label}"
      ></mwc-button>` : options.icon ? 'string' === typeof options.icon ? google3.html`<mwc-button
        @click=${() => {
      options.callback();
    }}
        class="btn"
        label="${options.label}"
        icon="${options.icon}"
      ></mwc-button>` : google3.html`<mwc-button
        @click=${() => {
      options.callback();
    }}
        class="btn"
        label="${options.label}"
        >${options.icon}</mwc-button
      >` : google3.html`<mwc-button
      @click=${() => {
      options.callback();
    }}
      class="btn"
      label="${options.label}"
    ></mwc-button>`;
}