'use strict';
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = 3 > c ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ('object' === typeof Reflect && Reflect && 'function' === typeof Reflect.decorate)
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; 0 <= i; i--)
            if (d = decorators[i])
                r = (3 > c ? d(r) : 3 < c ? d(target, key, r) : d(target, key)) || r;
    return 3 < c && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function (metadataKey, metadataValue) {
    if ('object' === typeof Reflect && Reflect && 'function' === typeof Reflect.metadata)
        return Reflect.metadata(metadataKey, metadataValue);
};