'use strict';

const expect = require('chai').expect;
const fs = require('fs');

describe('fs-read', function(){
  let firstDone,
    secondDone;
  describe('#readFirst', function(){
    it('should read first.txt, and produce a buffer with only the first 8 bytes', done => {
      fs.readFile('./first.txt', function(err, data) {
        if(err) throw err;
        let bufferData = data.toString('hex', 0, 8);
        expect(typeof bufferData).to.equal('string');
        expect(bufferData).to.have.length.of(16);
        console.log('first file data', bufferData);
        done();
      });
    });
    firstDone = true;
  });

  if(firstDone){
    describe('#readSecond', function(){
      it('should read second.txt, and produce a buffer with only the first 8 bytes', done => {
        fs.readFile('./second.txt', function(err, data) {
          if(err) throw err;
          let bufferData = data.toString('hex', 0, 8);
          expect(typeof bufferData).to.equal('string');
          expect(bufferData).to.have.length.of(16);
          console.log('second file data', bufferData);
          done();
        });
      });
      secondDone = true;
    });
  }

  if(firstDone && secondDone){
    describe('#readThird', function(){
      it('should read third.txt, and produce a buffer with only the first 8 bytes', done => {
        fs.readFile('./third.txt', function(err, data) {
          if(err) throw err;
          let bufferData = data.toString('hex', 0, 8);
          expect(typeof bufferData).to.equal('string');
          expect(bufferData).to.have.length.of(16);
          console.log('third file data', bufferData);
          done();
        });
      });
    });
  }
});
