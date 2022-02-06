define(function(require, exports, module) {
    var Sweep = require('./sweep')
    return require('../core/class').createClass({
        base: Sweep,
        constructor: function(radius, angle, angleOffset) {
            this.callBase2(Sweep, 'constructor', [[0, radius], angle, angleOffset]);
        },
        getRadius: function() {
            return this.getSectionArray()[1];
        },
        setRadius: function(radius) {
            this.setSectionArray([0, radius]);
        }
    });
});