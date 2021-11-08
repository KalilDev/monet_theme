'use strict';
const google3 = require('google3');
var infoDialogStyles = google3.css`
  mwc-dialog {
    --mdc-dialog-max-width: 500px;
  }
  .info-dialog {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--padding);
    padding-top: calc(var(--padding) * 2);
  }
  .info-dialog > span {
    margin-bottom: var(--padding);
  }
  .info-dialog > span.title {
    /* Material Theme Builder */
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 48px;
    /* or 108% */
    text-align: center;
    letter-spacing: 0.5px;

    color: var(--md-sys-on-surface);
  }
  .info-dialog > span.about {
    /* Visualize dynamic color, build a custom theme, and export to code. */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    text-align: center;

    color: var(--md-sys-on-surface);
  }
  .info-dialog > span.color {
    margin-top: var(--padding);
    /* Title */
    /* MIO/Display L */
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    /* identical to box height, or 125% */

    color: var(--md-sys-on-surface);
  }
  .info-dialog > span.description {
    /* Description */
    /* MIO/Body L */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    color: var(--md-sys-on-surface);
  }
  .info-links {
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    border: 1px solid var(--md-sys-outline);
  }
  .info-links > a:first-of-type {
    border-bottom: 1px solid var(--md-sys-outline);
  }
  .info-links > a {
    text-decoration: none;
    padding: var(--padding);
    /* Migrating from Material 2 to 3 */

    /* MIO/Title L */
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    /* Next baseline/Light/primary */
    color: var(--md-sys-primary);

    cursor: pointer;
  }
`;