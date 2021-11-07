'use strict';
var AnimationFrame = class {
    constructor() {
        this.rafIDs = new Map();
    }
    request(key, callback) {
        this.cancel(key);
        const frameID = requestAnimationFrame(frame => {
            this.rafIDs.delete(key);
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    }
    cancel(key) {
        const rafID = this.rafIDs.get(key);
        rafID && (cancelAnimationFrame(rafID), this.rafIDs.delete(key));
    }
};