(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    function getRandomString(stringLength) {
        var myStrings = [
            'hello',
            'world',
            'going',
            'home',
            'with',
            'and',
            'eating',
            'food',
            'drink',
            'cola',
            'orange',
            'melon',
            'dragon',
            'chicken',
            'walking',
            'road',
            'city'];
        var result = '';
        for (var i = 0; i < stringLength; i++) {
            var index = Math.floor((Math.random() * 100)) % myStrings.length;
            result += ((myStrings[index]) + ' ');
        }
        return result;
    }
    exports.getRandomString = getRandomString;
});
