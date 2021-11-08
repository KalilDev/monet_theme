import libmonet from 'libmonet';
import { ThemeAdapter, ComposeExporter } from '../lib/index.js';

//console.log(libmonet)
//console.log(theme_generator)
let adapter = ThemeAdapter.fromColor('#deadbe', true)
adapter.save()
let dspexporter = new ComposeExporter(adapter, 'deadbeef', (blob, a, _) => console.log(blob))
console.log(dspexporter.generate())