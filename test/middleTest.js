const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")

assertArraysEqual([], middle([1]))
assertArraysEqual([], middle([1, 2]))

assertArraysEqual([2], middle([1, 2, 3]))
assertArraysEqual([3], middle([1, 2, 3, 4, 5]))

assertArraysEqual([2,3], middle([1, 2, 3, 4]))
assertArraysEqual([3,4], middle([1, 2, 3, 4, 5, 6]))