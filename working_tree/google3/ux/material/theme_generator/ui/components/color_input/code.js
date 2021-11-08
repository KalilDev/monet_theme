'use strict';
const google3 = require('google3');
var colorStyles = google3.css`
  #color-input {
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: space-between;
    border-radius: var(--mdc-shape-small);
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .color-body {
    width: 100%;
    height: 64px;
  }
  #color-edit-container {
    width: 100%;
    height: 64px;
  }
  #color-edit-container > span {
    color: rgba(0, 0, 0, 0.68);
  }
  #color-edit-container.primary {
    height: 128px;
  }
  input[type="color"] {
    background-color: transparent;
    -webkit-appearance: none;
    border: none;
    height: 100%;
    flex: 1;
    cursor: pointer;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: var(--mdc-shape-small);
    border: var(--mdc-theme-outline) solid 1px;
  }
`;