'use strict';
function $n2dzone_uploadFile(cb, options) {
    const elem = document.createElement('input');
    elem.type = 'file';
    const {accept, multiple} = options || {};
    multiple ? (elem.multiple = multiple, elem.setAttribute('webkitdirectory', ''), elem.setAttribute('mozdirectory', '')) : accept && (elem.accept = accept);
    elem.addEventListener('change', e => {
        cb(e.target.files);
    });
    elem.click();
}