'use strict';
const google3 = require('google3');
var dynamicStyles = google3.css`
  ${ google3.seedStyles }
  #plugin-dynamic-tab {
    flex: 1;
  }
  #plugin-dynamic-tab > drop-zone {
    --drop-width: 100%;
    --drop-height: 100%;
  }
`;