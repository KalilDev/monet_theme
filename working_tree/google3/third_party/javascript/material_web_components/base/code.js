'use strict';
function utils_addHasRemoveClass(element) {
    return {
        addClass: className => {
            element.classList.add(className);
        },
        removeClass: className => {
            element.classList.remove(className);
        },
        hasClass: className => element.classList.contains(className)
    };
}
const utils_fn = () => {
};