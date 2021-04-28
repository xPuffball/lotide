 const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    else if (typeof object1[key] === 'object' && object1[key] !== null){
      return eqObjects(object1[key], object2[key]);
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`Assertion Passed 😇: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else{
    console.log(`Assertion Failed 😈: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const xy = { c: {a: 1}, d: {b: 2}};
const yx = { d: {b: 2}, c: {a: 1}};

const yz = { d: {b: 2}, c: {d: 2}};
assertObjectsEqual(xy, yx);
assertObjectsEqual(xy, yz);

