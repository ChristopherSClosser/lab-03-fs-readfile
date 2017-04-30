'use strict';

const fs = require('fs');
const paths = [
  './third.txt',
  './second.txt',
  './first.txt',
];
module.exports = exports = {};
let dataArray = [];
exports.dataArray = dataArray;

exports.start = function(){

  // read first file
  fs.readFile(paths[2], function(err, data){
    if(err) throw err;
    dataArray.push(data.toString('hex', 0, 8));
    // console.log('This is data from the first file\n', dataArray[0]);

    // read second file
    fs.readFile(paths[1], function(err, data){
      if(err) throw err;
      dataArray.push(data.toString('hex', 0, 8));
      // console.log('This is data from the second file:\n', dataArray[1]);

      // read third file
      fs.readFile(paths[0], function(err, data){
        if(err) throw err;
        dataArray.push(data.toString('hex', 0, 8));
        // console.log('This is data from the third file:\n', dataArray[2]);
      });
    });
  });
};
exports.start();
