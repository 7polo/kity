/**
 * @fileOverview
 *
 * 资源节点基类
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

define(function(require, exports, module) {
    var svg = require('./svg');
    var Class = require('../core/class')

    return Class.createClass('Resource', {
        constructor: function(nodeType, paper) {
            this.callBase2(Class, "constructor", []);

            this.node = svg.createNode(nodeType);
            if (paper) {
                paper.addResource(this);
            }
        },
        toString: function() {
            return 'url(#' + this.node.id + ')';
        }
    });
});
