// Sam Hamm
// Build a REST framework
// Assignment for Code Fellows JavaScript Development Accelerator
// Due 2/16/15
// Collaborators: Trish Buckenberger, Gaye Bulut, Rory Sterley

'use strict';

require('./server.js');
require('./lib/router.js');
var event = require('events').EventEmitter;

var dude = exports = module.exports = {};

dude.at = function(location, data) {
  console.log("at: The Dude POSTs")
};

dude.read = function(location){
  console.log("read: The Dude GETs")
};

dude.oppress = function(location, data) {
  console.log("replace: The Dude PUTs")
};

dude.mix = function(location, data) {
  console.log("mix: The Dude PATCHes")
};

dude.trash = function(location){
  console.log("trash: The Dude DELETEs")
};



// dude.at(location).place(data) is the same as HTTP POST
// dude.read(location) is the same as HTTP GET
// dude.oppress(location).with(newData) is the same as HTTP PUT
// dude.mix(location).with(otherData) is the same as HTTP PATCH
// dude.trash(location) is the same as HTTP DELETE
