'use strict';
const google3 = require('google3');
var getStartedStyles = google3.css`
  #plugin-welcome {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  #plugin-welcome > svg {
    width: var(--plugin-width);
    height: var(--plugin-height);
  }
  .plugin-welcome {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }
  .welcome-logo > svg {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  .plugin-welcome > mwc-button {
    padding: 50px;
  }
  .no-theme {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .logo {
    width: 100%;
    justify-content: center;
  }
  #no-theme {
    width: var(--plugin-width);
    height: var(--plugin-height);
    position: relative;
  }
  #more-info {
    background-color: var(--md-sys-background);
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }
`;