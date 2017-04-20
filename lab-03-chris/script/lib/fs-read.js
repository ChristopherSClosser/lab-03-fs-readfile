'use strict';

const fs = require('fs');
module.exports = exports = {};

exports.readFirst = function(){
  fs.readFile('./first.txt', function(err, data){
    if(err) throw err;
    let newDataFirst = data.toString('hex', 0, 8);
    console.log('This is data from the first file', newDataFirst);
  });
};

exports.readSecond = function(){
  fs.readFile('./second.txt', function(err, data){
    if(err) throw err;
    let newDataSecond = data.toString('hex', 0, 8);
    console.log('This is data from the second file', newDataSecond);
  });
};

exports.readThird = function(){
  fs.readFile('./third.txt', function(err, data){
    if(err) throw err;
    let newDataThird = data.toString('hex', 0, 8);
    console.log('This is data from the third file', newDataThird);
  });
};
