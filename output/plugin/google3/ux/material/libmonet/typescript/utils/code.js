'use strict';
function math_utils_signum(input) {
    return 0 > input ? -1 : 0 === input ? 0 : 1;
}
function math_utils_sanitizeDegrees(degrees) {
    return 0 > degrees ? degrees % 360 + 360 : 360 <= degrees ? degrees % 360 : degrees;
}