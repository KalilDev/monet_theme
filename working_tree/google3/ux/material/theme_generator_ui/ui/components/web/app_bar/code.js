'use strict';
const google3 = require('google3');
var appBarStyles = google3.css`
  header {
    width: 100%;
    height: var(--app-bar-height);
    display: flex;
    justify-content: space-between;
    border-bottom: var(--md-sys-outline) solid 1px;
  }
  header > #app-bar-left,
  header > #app-bar-right {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  #app-bar-left {
    margin-left: var(--padding);
    align-items: flex-start;
  }
  #app-bar-left > .title {
    width: 170px;
    white-space: nowrap;
    vertical-align: middle;
    padding: auto;
    margin: auto;
    padding-left: 10px;
  }
  #app-bar-left > .logo {
    padding: auto;
    margin: auto;
  }
  #app-bar-right {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: var(--padding);
  }
  #app-bar-right > * {
    margin-left: 10px;
  }
  #app-bar-right > mwc-icon-button {
    --mdc-icon-size: 24px;
  }
`;