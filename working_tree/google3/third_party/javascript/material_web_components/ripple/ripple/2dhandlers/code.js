'use strict';
var RippleHandlers = class {
    constructor(rippleFn) {
        this.startPress = ev => {
            rippleFn().then(r => {
                r && r.startPress(ev);
            });
        };
        this.endPress = () => {
            rippleFn().then(r => {
                r && r.endPress();
            });
        };
        this.startFocus = () => {
            rippleFn().then(r => {
                r && r.startFocus();
            });
        };
        this.endFocus = () => {
            rippleFn().then(r => {
                r && r.endFocus();
            });
        };
        this.startHover = () => {
            rippleFn().then(r => {
                r && r.startHover();
            });
        };
        this.endHover = () => {
            rippleFn().then(r => {
                r && r.endHover();
            });
        };
    }
};