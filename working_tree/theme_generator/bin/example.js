const libmonet = require('libmonet');
const theme_generator = require('../lib/index.js');

//console.log(libmonet)
//console.log(theme_generator)
let adapter = theme_generator.ThemeAdapter.fromColor('#deadbe', true)
console.log(adapter.dark)