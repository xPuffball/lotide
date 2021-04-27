const eqArrays = function(arr1, arr2){
  if(arr1.length === 0){
    return true;
  }
  else if(Array.isArray(arr1[0]) && Array.isArray(arr2[0])){
    return eqArrays(arr1[0], arr2[0]) && eqArrays(arr1.slice(1), arr2.slice(1));
  }
  else if(arr1[0] !== arr2[0]){
    return false;
  }
  else{
    return eqArrays(arr1.slice(1), arr2.slice(1))
  }
}

const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2)){
    console.log(`Assertion Passed 😇: ${arr1} === ${arr2}`);
  }
  else{
    console.log(`Assertion Failed 😈: ${arr1} !== ${arr2}`);
  }
}

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

assertArraysEqual([], middle([1]))
assertArraysEqual([], middle([1, 2]))

assertArraysEqual([2], middle([1, 2, 3]))
assertArraysEqual([3], middle([1, 2, 3, 4, 5]))

assertArraysEqual([2,3], middle([1, 2, 3, 4]))
assertArraysEqual([3,4], middle([1, 2, 3, 4, 5, 6]))