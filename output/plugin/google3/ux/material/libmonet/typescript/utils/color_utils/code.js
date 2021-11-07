'use strict';
const google3 = require('google3');
var WHITE_POINT_D65 = [
    95.047,
    100,
    108.883
];
var lstarFromInt = argb => {
    let y = 21.26 * google3.linearized(((argb & 16711680) >> 16) / 255) + 71.52 * google3.linearized(((argb & 65280) >> 8) / 255) + 7.22 * google3.linearized((argb & 255) / 255);
    y /= 100;
    return y <= 216 / 24389 ? 24389 / 27 * y : 116 * Math.pow(y, 1 / 3) - 16;
};
var intFromXyzComponents = (x, y, z) => {
    x /= 100;
    y /= 100;
    z /= 100;
    var rgb = [
        Math.round(Math.min(Math.max(255 * google3.delinearized(3.2406 * x + -1.5372 * y + -0.4986 * z), 0), 255)),
        Math.round(Math.min(Math.max(255 * google3.delinearized(-0.9689 * x + 1.8758 * y + 0.0415 * z), 0), 255)),
        Math.round(Math.min(Math.max(255 * google3.delinearized(0.0557 * x + -0.204 * y + 1.057 * z), 0), 255))
    ];
    return (-16777216 | (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255) >>> 0;
};
var intFromHex = hex => {
    hex = hex.replace('#', '');
    const isThree = 3 === hex.length, isSix = 6 === hex.length, isEight = 8 === hex.length;
    if (!isThree && !isSix && !isEight)
        throw Error('unexpected hex ' + hex);
    let r = 0, g = 0, b = 0;
    isThree ? (r = parseInt(hex.slice(0, 1).repeat(2), 16), g = parseInt(hex.slice(1, 2).repeat(2), 16), b = parseInt(hex.slice(2, 3).repeat(2), 16)) : isSix ? (r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16)) : isEight && (r = parseInt(hex.slice(2, 4), 16), g = parseInt(hex.slice(4, 6), 16), b = parseInt(hex.slice(6, 8), 16));
    return (-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;
};
var intFromLstar = lstar => {
    const fy = (lstar + 16) / 116, kappa = 24389 / 27, cubeExceedEpsilon = fy * fy * fy > 216 / 24389;
    var xyz = [
        (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * google3.WHITE_POINT_D65[0],
        (8 < lstar ? fy * fy * fy : lstar / kappa) * google3.WHITE_POINT_D65[1],
        (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * google3.WHITE_POINT_D65[2]
    ];
    return google3.intFromXyzComponents(xyz[0], xyz[1], xyz[2]);
};
var linearized = rgb => 0.04045 >= rgb ? rgb / 12.92 : Math.pow((rgb + 0.055) / 1.055, 2.4);
var delinearized = rgb => 0.0031308 >= rgb ? 12.92 * rgb : 1.055 * Math.pow(rgb, 1 / 2.4) - 0.055;