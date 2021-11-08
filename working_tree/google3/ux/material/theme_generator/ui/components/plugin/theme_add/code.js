'use strict';
const google3 = require('google3');
var addThemeStyles = google3.css`
  #new-theme {
    width: var(--plugin-width);
    height: var(--plugin-height);
  }
  .new-theme {
    padding: 20px;
    height: 100%;
    justify-content: space-between;
  }
  #theme-save {
    padding-top: 50px;
    display: flex;
    justify-content: end;
    justify-content: space-between;
    height: 100px;
  }
  #theme-name-edit {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 104px;
  }
  #theme-name-edit > mwc-textfield {
    width: 100%;
  }
  #theme-name-edit > .tip {
    width: 100%;
    text-align: left;
  }
`;