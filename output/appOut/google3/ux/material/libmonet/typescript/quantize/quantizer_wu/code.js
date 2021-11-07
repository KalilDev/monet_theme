'use strict';
var QuantizerWu = class {
    constructor() {
        this.weights = [];
        this.momentsR = [];
        this.momentsG = [];
        this.momentsB = [];
        this.moments = [];
        this.cubes = [];
    }
    volume(cube, moment) {
        return moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g1, cube.b1)] - moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g1, cube.b0)] - moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g0, cube.b1)] + moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g0, cube.b0)] - moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g1, cube.b1)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g1, cube.b0)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, cube.b1)] - moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, cube.b0)];
    }
    bottom(cube, direction, moment) {
        switch (direction) {
        case 'red':
            return -moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g1, cube.b1)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g1, cube.b0)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, cube.b1)] - moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, cube.b0)];
        case 'green':
            return -moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g0, cube.b1)] + moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g0, cube.b0)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, cube.b1)] - moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, cube.b0)];
        case 'blue':
            return -moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g1, cube.b0)] + moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g0, cube.b0)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g1, cube.b0)] - moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, cube.b0)];
        default:
            throw Error('unexpected direction $direction');
        }
    }
    top(cube, direction, position, moment) {
        switch (direction) {
        case 'red':
            return moment[JSCompiler_StaticMethods_getIndex(position, cube.g1, cube.b1)] - moment[JSCompiler_StaticMethods_getIndex(position, cube.g1, cube.b0)] - moment[JSCompiler_StaticMethods_getIndex(position, cube.g0, cube.b1)] + moment[JSCompiler_StaticMethods_getIndex(position, cube.g0, cube.b0)];
        case 'green':
            return moment[JSCompiler_StaticMethods_getIndex(cube.r1, position, cube.b1)] - moment[JSCompiler_StaticMethods_getIndex(cube.r1, position, cube.b0)] - moment[JSCompiler_StaticMethods_getIndex(cube.r0, position, cube.b1)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, position, cube.b0)];
        case 'blue':
            return moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g1, position)] - moment[JSCompiler_StaticMethods_getIndex(cube.r1, cube.g0, position)] - moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g1, position)] + moment[JSCompiler_StaticMethods_getIndex(cube.r0, cube.g0, position)];
        default:
            throw Error('unexpected direction $direction');
        }
    }
};