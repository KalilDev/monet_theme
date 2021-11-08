'use strict';
const google3 = require('google3');
var DropZone = class extends google3.LitElement {
    constructor() {
        super(...arguments);
        this.label = 'Drag & Drop Image';
        this.buttonText = 'Upload Image';
        this.accept = '';
        this.multiple = !1;
    }
    updateImage() {
        this.accept.startsWith('image') && this.root.style.setProperty('background-image', `url(${ this.file })`);
    }
    firstUpdated() {
        this.updateImage();
    }
    render() {
        const dropFile = e => {
            e.preventDefault();
            e.stopPropagation();
            JSCompiler_StaticMethods_handleFiles(this, e.dataTransfer.files);
        };
        return google3.html`<div
      id="drop-zone"
      ?multiple=${ this.multiple }
      webkitdirectory=${ this.multiple }
      mozdirectory=${ this.multiple }
      accept="${ this.accept }"
      @dragenter=${ e => {
            dropFile(e);
        } }
      @dragover=${ e => {
            dropFile(e);
        } }
      @drop=${ e => {
            dropFile(e);
        } }
      @dragleave=${ e => {
            dropFile(e);
        } }
      @click=${ () => {
            JSCompiler_StaticMethods_requestFile(this);
        } }
    >
      ${ this.file && this.accept.startsWith('image') ? google3.html`` : google3.html` <span class="label">${ this.label }</span>
      <mwc-button outlined label=${ this.buttonText }></mwc-button>` }
    </div>`;
    }
};