/*
 * 高斯模糊滤镜
 */

define(function(require, exports, module) {

    var GaussianblurEffect = require('./effect/gaussianblureffect');
    var Filter = require('./filter')
    return require('../core/class').createClass('GaussianblurFilter', {

        base: Filter,

        constructor: function(stdDeviation) {

            this.callBase2(Filter, 'constructor', []);

            this.addEffect(new GaussianblurEffect(stdDeviation));

        }

    });

});