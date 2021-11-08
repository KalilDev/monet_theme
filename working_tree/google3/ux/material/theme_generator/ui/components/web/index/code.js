'use strict';
const google3 = require('google3');
var webStyles = google3.css`
  ${ google3.dynamicStyles }
  ${ google3.staticStyles }
  ${ google3.appBarStyles }
  ${ google3.infoDialogStyles }
  #web-ui {
    min-width: 1330px;
    height: var(--plugin-height);
    width: var(--plugin-width);
  }
`;