// Sam Hamm
// Build a REST framework
// Assignment for Code Fellows JavaScript Development Accelerator
// Due 2/16/15
// Collaborators: Trish Buckenberger, Gaye Bulut, Rory Sterley

'use strict';

var dude = require('./dude.js');

// Instructions can be added following these comments.
// The syntax is simple.
// The server's name is Jeffrey, but he prefers to be called dude.
// All you have to do is tell The Dude what you want him to do.

// dude.at(location).place(data) is the same as HTTP POST
// dude.read(location) is the same as HTTP GET
// dude.oppress(location).with(newData) is the same as HTTP PUT
// dude.mix(location).with(otherData) is the same as HTTP PATCH
// dude.trash(location) is the same as HTTP DELETE

// (location) can be a simple name or number. If you don't give one, The Dude will.

// The Dude is simple. He stores things with small integers (1, 2, 3...),
//  so you might want to avoid those if you specify your own location.

// (data) can be actual JSON, or a path to an existing JSON file.

//Get to it!

dude.addResource('rug');

// dude.at();
// dude.read();
// dude.oppress();
// dude.mix();
// dude.trash();

dude.wakeUp(); // this starts the server
