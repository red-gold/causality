// If you're not using an AMD loader, machina is available on the window
// Just make sure you have lodash loaded before machina
var MyFsm = machina.Fsm.extend({ /* your stuff */});

// If you're using an AMD loader:
require(['machina'], function(machina){
    return machina.Fsm.extend({ /* your stuff */});
});

// node.js/CommonJS:
var machina = require('machina');

// FYI machina v0.3.x & earlier returned a factory
// function in CommonJS environments:
var lodash = require('lodash');
var machina = require('machina')(lodash);
var MyFsm = machina.Fsm.extend({ /* your stuff */});