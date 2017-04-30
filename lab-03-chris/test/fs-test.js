'use strict';

const expect = require('chai').expect;
const read = require('../script/lib/fs-read.js');

// read.start();
describe('fs-read', function(){
  describe('read()', function(){
    // read.start.readFirst();
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
          // type = typeof bufferData,
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
          // type = typeof bufferData,
          length = bufferData.length;
        console.log(`length of string should be 16 - it actually is: '${length}'`);
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
          // type = typeof bufferData,
          length = bufferData.length;
        console.log(`length of string should be 16 - it actually is: '${length}'`);
        expect(length).to.equal(16);
        done();
      });
    });
  });


    // it('should read second.txt, \nand produce a buffer with only the first 16 characters as a string\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', done => {
    //   let bufferData = read.dataArray[1],
    //     type = typeof bufferData,
    //     length = bufferData.length;
    //
    //   console.log(`expected typeof string === '${type}'`);
    //   console.log(`length of string should be 16: '${length}'`);
    //   expect(type).to.equal('string');
    //   expect(length).to.equal(16);
    //   done();
    // });
    //
    // it('should read third.txt, \nand produce a buffer with only the first 16 characters as a string\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', done => {
    //   let bufferData = read.dataArray[2],
    //     type = typeof bufferData,
    //     length = bufferData.length;
    //
    //   console.log(`expected typeof string === '${type}'`);
    //   console.log(`length of string should be 16: '${length}'`);
    //   expect(type).to.equal('string');
    //   expect(length).to.equal(16);
    //
    //   done()
    // });

    // read.start.readSecond();
    // it('should read second.txt, and produce a buffer with only the first 8 bytes as a string', function() {
    //   // if(err) throw err;
    //   let bufferData = read.dataArray[1];
    //   console.log('expected typeof string ===', typeof bufferData);
    //   console.log('length of string:', bufferData.length);
    //   expect(typeof bufferData).to.equal('string');
    //   expect(bufferData.length).to.equal(16);
    // });
    //
    // it('should read third.txt, and produce a buffer with only the first 8 bytes as a string', function() {
    //   // if(err) throw err;
    //   let bufferData = read.dataArray[2];
    //   console.log('expected typeof string ===', typeof bufferData);
    //   console.log('length of string:', bufferData.length);
    //   expect(typeof bufferData).to.equal('string');
    //   expect(bufferData.length).to.equal(16);
    // });
  // });
});
