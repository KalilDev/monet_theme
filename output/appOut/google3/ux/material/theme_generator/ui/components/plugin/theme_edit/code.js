'use strict';
const google3 = require('google3');
var editThemeStyles = google3.css`
  ${ google3.themeSelectStyles }
  ${ google3.dynamicStyles }
  ${ google3.staticStyles }
`;