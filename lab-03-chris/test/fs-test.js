'use strict';

const expect = require('chai').expect;
const read = require('../script/lib/fs-read');


describe('fs-read', function(){

  before(done => {
    read.start();
    done();
  });

  describe('read()', function(){

    describe('readFirst()', function() {
      it('should read first.txt, and produce a buffer as a string\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', done => {
        let bufferData = read.dataArray[0],
          type = typeof bufferData;

        console.log(`expected typeof data to be a string - it actually is: '${type}'`);
        expect(type).to.equal('string');
        done();
      });

      it('should be 16\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n', done => {
        let bufferData = read.dataArray[0],
          length = bufferData.length;

        console.log(`length of string should be 16 - it actually is: '${length}'`);
        expect(length).to.equal(16);
        done();
      });
    });

    describe('readSecond()', function() {
      it('should read second.txt, and produce a buffer as a string\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', done => {
        let bufferData = read.dataArray[1],
          type = typeof bufferData;

        console.log(`expected typeof data to be a string - it actually is: '${type}'`);
        expect(type).to.equal('string');
        done();
      });

      it('should be 16\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n', done => {
        let bufferData = read.dataArray[1],
          length = bufferData.length;

        console.log(`length of string should be 16 - it actually is: '${length}'\n ${bufferData[0, 1, 3]}`);
        expect(length).to.equal(16);
        done();
      });
    });

    describe('readThird()', function() {
      it('should read third.txt, and produce a buffer as a string\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', done => {
        let bufferData = read.dataArray[2],
          type = typeof bufferData;

        console.log(`expected typeof data to be a string - it actually is: '${type}'`);
        expect(type).to.equal('string');
        done();
      });

      it('should be 16\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', done => {
        let bufferData = read.dataArray[2],
          length = bufferData.length;
          
        console.log(`length of string should be 16 - it actually is: '${length}'`);
        expect(length).to.equal(16);
        done();
      });
    });
  });
});
