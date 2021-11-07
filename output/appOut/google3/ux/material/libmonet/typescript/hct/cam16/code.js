'use strict';
var CAM16 = class {
    constructor(hue, chroma, j, q, s, jstar, astar, bstar) {
        this.hue = hue;
        this.chroma = chroma;
        this.j = j;
        this.q = q;
        this.s = s;
        this.jstar = jstar;
        this.astar = astar;
        this.bstar = bstar;
    }
    distance(other) {
        const dJ = this.jstar - other.jstar, dA = this.astar - other.astar, dB = this.bstar - other.bstar;
        return 1.41 * Math.pow(Math.sqrt(dJ * dJ + dA * dA + dB * dB), 0.63);
    }
};