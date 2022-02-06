define(function(require, exports, module) {

    var ShapeContainer = require('./shapecontainer');
    var ViewBox = require('./viewbox');
    var View = require('./view')
    return require('../core/class').createClass('View', {
        mixins: [ShapeContainer, ViewBox],

        base: View,

        constructor: function() {

            this.callBase2(View, 'constructor', ['view']);

        }

    });

});