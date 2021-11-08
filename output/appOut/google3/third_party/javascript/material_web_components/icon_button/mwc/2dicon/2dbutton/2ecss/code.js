'use strict';
const google3 = require('google3');
var styles = google3.css(['/**\n * @license\n * Copyright 2018 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n.material-icons {\n  font-family: var(--mdc-icon-font, "Material Icons");\n  font-weight: normal;\n  font-style: normal;\n  font-size: var(--mdc-icon-size, 24px);\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: "liga";\n}\n\n/**\n * @license\n * Copyright 2021 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n/**\n * @license\n * Copyright 2018 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n.mdc-icon-button {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n}\n.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple {\n  width: 40px;\n  height: 40px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */\n  /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  /* @alternate */\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n.mdc-icon-button svg,\n.mdc-icon-button img {\n  width: 24px;\n  height: 24px;\n}\n\n.mdc-icon-button {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n  z-index: 0;\n  overflow: visible;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */\n  /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-icon-button--display-flex {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n.mdc-icon-button__icon {\n  display: inline-block;\n}\n.mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: none;\n}\n\n.mdc-icon-button--on .mdc-icon-button__icon {\n  display: none;\n}\n.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: inline-block;\n}\n\n.mdc-icon-button__link {\n  height: 100%;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.mdc-icon-button {\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none;\n  z-index: 0;\n  overflow: visible;\n}\n.mdc-icon-button .mdc-icon-button__touch {\n  position: absolute;\n  top: 50%;\n  height: 48px;\n  /* @noflip */\n  /*rtl:ignore*/\n  left: 50%;\n  width: 48px;\n  transform: translate(-50%, -50%);\n}\n.mdc-icon-button:disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-icon-button--display-flex {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n\n.mdc-icon-button__icon {\n  display: inline-block;\n}\n.mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: none;\n}\n\n.mdc-icon-button--on .mdc-icon-button__icon {\n  display: none;\n}\n.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on {\n  display: inline-block;\n}\n\n.mdc-icon-button__link {\n  height: 100%;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n:host {\n  display: inline-block;\n  outline: none;\n}\n\n:host([disabled]) {\n  pointer-events: none;\n}\n\n.mdc-icon-button i,\n.mdc-icon-button svg,\n.mdc-icon-button img,\n.mdc-icon-button ::slotted(*) {\n  display: block;\n}\n\n:host {\n  --mdc-ripple-color: currentcolor;\n  -webkit-tap-highlight-color: transparent;\n}\n\n:host,\n.mdc-icon-button {\n  /**\n   * Any vertical-align other than the default of "baseline" will work here (and\n   * "top" is the shortest).\n   *\n   * In general, when an inline-block element has vertical-align: baseline and\n   * also a fixed height, extra space may "appear" below it. This is because the\n   * baseline it is aligned to is not the very bottom of the line, it\'s the line\n   * above the "descenders" (e.g. the tail of a "y" or "j"). This means the\n   * container must grow to accomodate both the fixed height inline-element, and\n   * the descender height below it.\n   *\n   * For unknown reasons, in this particular case, this only causes incorrect\n   * alignment in IE.\n   *\n   * IE needs the vertical-align on both the button and the host element.\n   */\n  vertical-align: top;\n}\n\n.mdc-icon-button {\n  width: var(--mdc-icon-button-size, 48px);\n  height: var(--mdc-icon-button-size, 48px);\n  padding: calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 );\n}\n.mdc-icon-button i,\n.mdc-icon-button svg,\n.mdc-icon-button img,\n.mdc-icon-button ::slotted(*) {\n  display: block;\n  width: var(--mdc-icon-size, 24px);\n  height: var(--mdc-icon-size, 24px);\n}\n']);