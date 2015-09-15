/**
 * Created by Henka on 13.06.14.
 */

var BlueprintSteps = require("merlot").BlueprintSteps;
var selPath = require('path').join(__dirname, '../../bin/selenium-server-standalone-2.42.0.jar');

module.exports = function () {
    this.World =  require("../support/myWorldForMyTest").World;
    BlueprintSteps.call(this);
};
