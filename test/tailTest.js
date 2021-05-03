const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require('chai').assert;

describe('#tail', function () {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it("length of tail [Hello, Lighthouse, Labs] should be 2", () => {
    assert.strictEqual(result.length, 2)
  })
  it("first element of tail should be \"Lighthouse\"", () => {
    assert.strictEqual(result[0], "Lighthouse")
  })
  it("second element of tail should be \"Labs\"", () => {
    assert.strictEqual(result[1], "Labs")
  })
})