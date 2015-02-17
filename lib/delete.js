'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;
  var input;

  fs.unlink(fullPath, function(err) {
    console.log('200: Successful DELETE of ' + fullPath);
    res.writeHead(err ? 404 : 200);
    res.end();
  });
};
