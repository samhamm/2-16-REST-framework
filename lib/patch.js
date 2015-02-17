'use strict';

var fs = require('fs');
var url = require('url');

module.exports = function(req, res) {
  var urlpieces = req.url.split('/');
  var id = urlpieces[urlpieces.length-1];
  var filename = id + ".json";
  var fullPath = './data/' + filename;
  var file;
  var input;

  fs.open(fullPath, 'r+', function(err) {

    if(err) {
      console.log('404: File not found; falied PATCH to ' + fullPath);
      res.writeHead(404);
      res.end();

    } else {

      console.log('200: Successful PATCH to ' + fullPath);
      req.on('data', function(data) {
        input = data.toString('utf8');
        input = JSON.parse(input);
      });

      fs.readFile(fullPath, function(err, datas) {

        if(err) {
          res.writeHead(404);
          res.end();

        } else {

          file = datas.toString('utf8');
          file = JSON.parse(file);

          for(var key in input) {
            file[key] = input[key];
          }
      }
    });
  }


    file = JSON.stringify(file);

    fs.writeFile(fullPath, file, function(err) {
      res.writeHead(err ? 404:200);
      res.end();
    });
  });
};
