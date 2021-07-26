const expect = require("chai").expect;
const convertAnArray = require("../index");

describe("convert-an-array", function () {
  it("should convert [1,2,3,4,5,6,7,8] to '1-8'", function (done) {
    convertAnArray.convert([1, 2, 3, 4, 5, 6, 7, 8]).then((result) => {
      expect(result).to.equal("1-8");
      done();
    });
  });

  it("should convert [1,3,4,5,6,7,8] to '1,3-8'", function (done) {
    convertAnArray.convert([1, 3, 4, 5, 6, 7, 8]).then((result) => {
      expect(result).to.equal("1,3-8");
      done();
    });
  });

  it("should convert [1,3,4,5,6,7,8,10,11,12] to '1,3-8,10-12'", function (done) {
    convertAnArray.convert([1, 3, 4, 5, 6, 7, 8, 10, 11, 12]).then((result) => {
      expect(result).to.equal("1,3-8,10-12");
      done();
    });
  });

  it("should convert [1,2,3] to '1-3'", function (done) {
    convertAnArray.convert([1, 2, 3]).then((result) => {
      expect(result).to.equal("1-3");
      done();
    });
  });

  it("should convert [1,2] to '1,2'", function (done) {
    convertAnArray.convert([1, 2]).then((result) => {
      expect(result).to.equal("1,2");
      done();
    });
  });

  it("should convert [1,2,4] to '1,2,4'", function (done) {
    convertAnArray.convert([1, 2, 4]).then((result) => {
      expect(result).to.equal("1,2,4");
      done();
    });
  });

  it("should convert [1,2,4,5,6] to '1,2,4-6'", function (done) {
    convertAnArray.convert([1, 2, 4, 5, 6]).then((result) => {
      expect(result).to.equal("1,2,4-6");
      done();
    });
  });

  it("should convert [1,2,3,7,8,9,15,17,19,20,21] to '1-3,7-9,15,17,19-21'", function (done) {
    convertAnArray
      .convert([1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21])
      .then((result) => {
        expect(result).to.equal("1-3,7-9,15,17,19-21");
        done();
      });
  });

  it("should convert [1,2,3,4,5,6,100,1091,1999,2000,2001,2002] to '1-6,100,1091,1999-2002'", function (done) {
    convertAnArray
      .convert([1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002])
      .then((result) => {
        expect(result).to.equal("1-6,100,1091,1999-2002");
        done();
      });
  });

  it("should convert [1] to '1'", function (done) {
    convertAnArray.convert([1]).then((result) => {
      expect(result).to.equal("1");
      done();
    });
  });

  it("should convert [1,3,5,7,9,11] to '1,3,5,7,9,11'", function (done) {
    convertAnArray.convert([1, 3, 5, 7, 9, 11]).then((result) => {
      expect(result).to.equal("1,3,5,7,9,11");
      done();
    });
  });

  it("should convert [1,2,3,5,6] to '1-3,5,6'", function (done) {
    convertAnArray.convert([1, 2, 3, 5, 6]).then((result) => {
      expect(result).to.equal("1-3,5,6");
      done();
    });
  });

  it("should convert [] to ''", function (done) {
    convertAnArray.convert([]).then((result) => {
      expect(result).to.equal("");
      done();
    });
  });

  describe("convert-an-array module", function () {
    it("should return a Promise", () => {
      const convertReturnValue = convertAnArray.convert([]);
      expect(convertReturnValue.then).to.be.a("Function");
      expect(convertReturnValue.catch).to.be.a("Function");
    });
  });
});
