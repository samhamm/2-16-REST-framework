'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;
  var input;

  fs.readFile(fullPath, function(err, data) {

    if(err) {
      res.writeHead(404);
      console.log('404: Failed GET from ' + fullPath);

    } else {

      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      console.log('200: Successful GET from ' + fullPath);
      res.write(data);
    }

    res.end();
  });
};
