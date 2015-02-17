'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;
  var input;

  fs.open(fullPath, 'wx', function(err) {

    if(err) {
      console.log('405: Failed POST; you may not POST to the existing file at ' + fullPath);
    res.writeHead(405);
    res.end();

    } else {

    console.log("201: Successful POST of resource at " + fullPath);
    input = '';

    req.on('data', function(data) {
      input += data.toString('utf-8');
    });

    req.on('end', function() {
      fs.writeFile(fullPath, input, function(err) {
        res.writeHead(err ? 405 : 201);
        res.end();
      });
    });
  res.end();
}
});
};
