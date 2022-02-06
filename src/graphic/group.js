define(function(require, exports, module) {
    var ShapeContainer = require('./shapecontainer');
    var Shape = require('./shape')
    return require('../core/class').createClass('Group', {
        mixins: [ShapeContainer],
        base: Shape,

        constructor: function Group() {

            this.callBase2(Shape, 'constructor', ['g']);

        }

    });

});