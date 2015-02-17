'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;
  var input;

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  req.on('data', function(data) {
    input = data.toString('utf-8');
  });

  req.on('end', function() {
    console.log('200: Successful PUT to ' + fullPath);
    fs.writeFile(fullPath, input, function(err) {
      res.writeHead(err ? 404 : 200);
      res.end();
    });
  });
};
