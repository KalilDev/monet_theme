const libmonet = require('libmonet');
const theme_generator = require('../lib/index.js');

//console.log(libmonet)
//console.log(theme_generator)
let adapter = theme_generator.ThemeAdapter.fromColor('#deadbe', true)
adapter.save()
let dspexporter = new theme_generator.ComposeExporter(adapter, 'deadbeef', (blob, a, _) => console.log(blob))
console.log(dspexporter.generate())