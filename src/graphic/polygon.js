define(function(require, exports, module) {

    var Poly = require('./poly')
    return require('../core/class').createClass('Polygon', {

        base: Poly,

        constructor: function(points) {

            this.callBase2(Poly, 'constructor', [points, true]);

        }

    });
});