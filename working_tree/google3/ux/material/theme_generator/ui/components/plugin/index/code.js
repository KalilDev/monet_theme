'use strict';
const google3 = require('google3');
var pluginStyles = google3.css`
  .plugin-welcome {
    --md-sys-background: #fffbfd;
    --md-sys-on-background: #1d1b1f;
    color: var(--md-sys-on-background);
  }

  ${ google3.editThemeStyles }
  ${ google3.getStartedStyles }
  ${ google3.addThemeStyles }

  #plugin-ui,
  #edit-theme {
    height: var(--plugin-height);
    width: var(--plugin-width);
  }
  .center {
    justify-content: center;
  }
  .grow {
    flex: 1;
  }
  .equal > * {
    flex: 1;
  }
  .equal {
    justify-content: space-evenly;
  }
  .padded {
    padding: var(--padding);
  }
  .padded-h {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .padded-v {
    padding-top: var(--padding);
    padding-bottom: var(--padding);
  }
  .info-header {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .info-header > span {
    text-align: center;
  }
  #theme-select {
    width: 100%;
  }
  #tabs {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #bottom-bar {
    background-color: var(--mdc-theme-surface);
    justify-content: space-between;
    padding: var(--padding);
  }
  #static-tab {
    flex: 1;
    overflow-y: scroll;
  }
  #custom-tab {
    flex: 1;
  }
  .add-color {
    margin-bottom: var(--padding);
    padding-left: var(--padding);
    padding-right: var(--padding);
    --mdc-theme-primary: var(--md-sys-tertiary);
    --mdc-theme-on-primary: var(--md-sys-on-tertiary);
  }
  #image-preview {
    flex: 1;
    margin: var(--padding);
    background-color: var(--mdc-theme-surface);
    border-radius: var(--mdc-shape-small);
  }
  .export-action {
    justify-content: center;
    position: relative;
  }
  .add-color {
    padding-top: 10px;
  }
  .menu-header {
    padding-left: 15px;
    margin-top: 25px;
    color: var(--mdc-theme-on-surface-variant);
  }
  .menu-divider {
    height: 1px;
    color: var(--mdc-theme-on-surface-variant);
  }
  .menu-title {
    font-size: 22px;
  }

  h2.display3 {
    margin-block-end: var(--padding);
  }
  .colors {
    justify-content: center;
  }

  .icon {
    padding-right: 10px;
  }
  .hint {
    font-size: 12px;
  }
  .menu-button {
    padding-left: var(--padding);
  }
  .tip {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  mwc-icon-button.toggle {
    border: 1px solid var(--md-sys-outline);
    border-radius: 50%;
    padding: 6px;
    color: var(--md-sys-primary);
    --mdc-icon-size: 17px;
  }
  .colors > h2 {
    padding-left: var(--padding);
  }
`;