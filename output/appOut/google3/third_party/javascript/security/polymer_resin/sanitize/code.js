'use strict';
var CONSOLE_LOGGING_REPORT_HANDLER = (isViolation, message, element) => {
    isViolation ? console.warn(message, element) : console.log(message);
};