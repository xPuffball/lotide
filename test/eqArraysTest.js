const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([[1,2],[1,[1,2],3],[1,2,3]], [[1,2],[1,[1,2],3],[1,2,3]]), true)
assertEqual(eqArrays([1,2,3], [1,3,2]), false)