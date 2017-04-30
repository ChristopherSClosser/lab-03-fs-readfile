'use strict';

const fs = require('fs');
const paths = [
  './third.txt',
  './second.txt',
  './first.txt',
];

module.exports = exports = {};

exports.start = function(){
  exports.dataArray = [];

  // read first file
  fs.readFile(paths[2], function(err, data){
    if(err) throw err;
    exports.dataArray.push(data.toString('hex', 0, 8));
    console.log('This is data from the first file\n', exports.dataArray[0]);

    // read second file
    fs.readFile(paths[1], function(err, data){
      if(err) throw err;
      exports.dataArray.push(data.toString('hex', 0, 8));
      console.log('This is data from the second file:\n', exports.dataArray[1]);

      // read third file
      fs.readFile(paths[0], function(err, data){
        if(err) throw err;
        exports.dataArray.push(data.toString('hex', 0, 8));

        console.log('This is data from the third file:\n', exports.dataArray[2]);
        console.log(exports.dataArray);
        // return exports.dataArray;
      });
    });
  });
};
