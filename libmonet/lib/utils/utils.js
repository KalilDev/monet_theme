'use strict';

function math_utils_signum(input) {
    return 0 > input ? -1 : 0 === input ? 0 : 1;
}
function math_utils_clamp(max, input) {
    return Math.min(Math.max(input, 0), max);
}
function math_utils_sanitizeDegrees(degrees) {
    return 0 > degrees ? degrees % 360 + 360 : 360 <= degrees ? degrees % 360 : degrees;
}
export default {
    math_utils_signum,
    math_utils_clamp,
    math_utils_sanitizeDegrees,
}