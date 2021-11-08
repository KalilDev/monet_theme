'use strict';
function utils_keyToLabel(key) {
    return (key.includes('-') ? key.split('-') : key.replace(/([A-Z][a-z])/g, ' $1').split(' ')).map(e => e.slice(0, 1).toUpperCase() + e.slice(1, e.length)).join(' ');
}
// TODO: this is a placeholder
async function utils_downloadBlob(blob, fileName) {
    const downloader = null;
    await downloader.init();
    await downloader.download(blob, fileName);
    downloader.dispose();
}
function utils_readFileBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = res => {
            resolve(res.target.result);
        };
        reader.onerror = err => {
            reject(err);
        };
        reader.readAsArrayBuffer(file);
    });
}
function utils_readFileString(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = res => {
            resolve(res.target.result);
        };
        reader.onerror = err => {
            reject(err);
        };
        reader.readAsText(file);
    });
}
function utils_importDirectory(onChange) {
    const elem = document.createElement('input');
    elem.hidden = !0;
    elem.type = 'file';
    elem.setAttribute('webkitdirectory', '');
    elem.setAttribute('mozdirectory', '');
    elem.addEventListener('change', e => {
        onChange(e.target.files);
    });
    elem.click();
}
function utils_randomColor() {
    let color = '#';
    for (let i = 0; 6 > i; i++)
        color += '0123456789ABCDEF'[Math.floor(16 * Math.random())];
    return color;
}