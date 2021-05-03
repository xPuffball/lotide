const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0){
    return [array[(array.length / 2) - 1], array[array.length / 2]]
  } else {
    return [array[Math.floor(array.length/2)]]
  }
}

module.exports = middle;