'use strict';
var MDCFoundation = class {
    constructor(adapter = {}) {
        this.adapter = adapter;
    }
    static get cssClasses() {
        return {};
    }
    static get strings() {
        return {};
    }
    static get numbers() {
        return {};
    }
    static get defaultAdapter() {
        return {};
    }
    init() {
    }
    destroy() {
    }
};