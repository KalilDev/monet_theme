'use strict';
const web = require('../code.js');
const google3 = require('google3');
var dynamicStyles = google3.css`
  ${ google3.seedStyles }

  .overview > * {
    padding: var(--padding);
    min-width: 400px;
  }

  #dynamic-tab {
    display: flex;
    flex: 1;
    flex-direction: row;
  }
  .overview {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  section {
    width: 465px;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
  }
  section > .headline3 {
    font-style: normal;
    font-weight: 500;
    font-size: 49.4177px;
    line-height: 59px;

    display: flex;

    color: var(--md-sys-on-surface);

    padding-bottom: var(--padding);
  }

  section > .subtitle1 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;

    display: flex;

    color: var(--md-sys-on-surface);

    padding-bottom: var(--padding);
  }

  section > .images {
    padding-bottom: var(--padding);
  }

  section > .shuffle {
    cursor: pointer;
  }

  .images > .image {
    width: 57px;
    height: 114px;
    border-radius: 80px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px;
    cursor: pointer;
  }
  .images > .image {
    border-radius: 80px;
    transition: border-radius 100ms;
  }
  .images > .image[selected] {
    border: 2px solid var(--md-sys-primary);
    border-radius: 8px;
  }
  .images > .image:hover {
    border-radius: 8px;
  }

  .wallpaper {
    width: 50%;
    height: 100%;
    position: relative;
    background: var(--md-background-image);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--md-sys-tertiary);
    background-position: center center;
    /* background-image: var(--md-background-image); */
  }
  .wallpaper > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 75%;
  }
  .upload {
    position: absolute;
    bottom: var(--padding);
    right: var(--padding);
    cursor: pointer;
  }
`;
var IMAGES = [
    web.dynamic_img('1', 'Wallpaper 1 red sand dunes'),
    web.dynamic_img('2', 'Wallpaper 2 green mountain top'),
    web.dynamic_img('3', 'Wallpaper 3 orange desert'),
    web.dynamic_img('4', 'Wallpaper 4 blue mountains'),
    web.dynamic_img('5', 'Wallpaper 5 green rocky moutains')
];