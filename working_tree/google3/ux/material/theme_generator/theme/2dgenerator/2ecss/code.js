'use strict';
const google3 = require('google3');
var styles = google3.css(['/* Layout */\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n}\n\nmain {\n  --app-bar-height: 56px;\n  width: var(--plugin-width);\n  height: var(--plugin-height);\n  --content-height: calc(var(--plugin-height) - var(--app-bar-height));\n}\n']);