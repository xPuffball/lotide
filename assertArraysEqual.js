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

assertArraysEqual([1, [1,2,3], 3], [1, [1,2,3], 3]);
