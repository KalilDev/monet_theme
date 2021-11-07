'use strict';
const google3 = require('google3');
var staticStyles = google3.css`
  ${ google3.colorStyles }
  #custom-tab {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: var(--plugin-width);
    height: var(--content-height);
    background-color: var(--md-sys-background);
  }
  #custom-tab > .source-colors {
    min-width: 300px;
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #custom-tab > .preview {
    flex: 8;
    height: var(--content-height);
    /* height: 100%; */
    width: 100%;
    min-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: auto;
    padding: var(--padding);
    overflow-y: auto;
  }
  .mockup {
    min-width: 380px;
    flex: 4;
    height: 100%;
    position: relative;
    border-left: 1px solid var(--md-sys-outline);
    border-right: 1px solid var(--md-sys-outline);
  }
  .mockup > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 75%;
  }
  .options > .headline3 {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: var(--md-sys-on-surface);

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: var(--padding);
  }
  .options > .subtitle1 {
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: var(--md-sys-on-surface);
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: var(--padding);
  }
  .preview-content > .headline2 {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 33px;
    letter-spacing: 0.18px;
    color: var(--md-sys-on-surface);
    padding-bottom: calc(var(--padding) * 2);
    padding-top: 44px;
  }
  .preview-content > .subtitle1 {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.18px;
    color: var(--md-sys-on-surface);
  }
  .color-scheme {
    padding-bottom: var(--padding);
  }
  .color-scheme > .color-family:first-of-type {
    height: 118px;
  }
  .primary > .color-item:first-child {
    border-top-left-radius: 16px;
  }
  .primary > .color-item:last-child {
    border-top-right-radius: 16px;
  }
  .surface-variant > .color-item:first-child {
    border-bottom-left-radius: 16px;
  }
  .surface-variant > .color-item:last-child {
    border-bottom-right-radius: 16px;
  }
  .color-family {
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 8px;
    margin-bottom: 8px;
    min-width: 585.05px;
    max-width: 585.05px;
  }
  .color-item {
    height: 100%;
    border: 1px solid var(--md-sys-outline);
    flex: 1;
    position: relative;
  }
  .color-item-2x {
    flex: 2;
  }
  .color-item > .color-label {
    position: absolute;
    left: 14px;
    top: 14px;
    word-wrap: break-word;

    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.002em;

    text-transform: capitalize;
  }
`;