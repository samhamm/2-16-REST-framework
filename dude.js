// Sam Hamm
// Build a REST framework
// Assignment for Code Fellows JavaScript Development Accelerator
// Due 2/16/15
// Collaborators: Trish Buckenberger, Gaye Bulut, Rory Sterley

'use strict';

var server = require('./server.js');
require('./lib/router.js');

var dude = exports = module.exports = {};

dude.at = function(location, stuff) {
  console.log("at: The Dude POSTs");
};

dude.read = function(location){
  console.log("read: The Dude GETs");
  // location = 'fart';
  // server.id = location;
  // console.log("The location passed into dude.read is " + server.id);
  // router.req.method = 'GET';
};

dude.oppress = function(location, newStuff) {
  console.log("replace: The Dude PUTs");
};

dude.mix = function(location, otherStuff) {
  console.log("mix: The Dude PATCHes");
};

dude.trash = function(location){
  // location = 'fuck';
  server.id = location;
  server.req = 'DELETE';
  console.log("trash: The Dude DELETEs the route called " + server.id);
};



// dude.at(location).place(stuff) is the same as HTTP POST
// dude.read(location) is the same as HTTP GET
// dude.oppress(location).with(newStuff) is the same as HTTP PUT
// dude.mix(location).with(otherStuff) is the same as HTTP PATCH
// dude.trash(location) is the same as HTTP DELETE
