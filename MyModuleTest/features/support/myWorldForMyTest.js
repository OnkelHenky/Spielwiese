/**
 * Created by Henka on 13.06.14.
 */

var BlueprintRunner = require('merlot').BlueprintRunner;

var World = exports.World = function World(callback) {

    this.browser = new BlueprintRunner({
            'seleniumPath': require('path').join(__dirname, '../../bin/selenium-server-standalone-2.42.0.jar'),
            'port' : '4444',
            'browser' : 'firefox'
    });

    callback();
};


