const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 😇: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 😈: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([[1,2],[1,[1,2],3],[1,2,3]], [[1,2],[1,[1,2],3],[1,2,3]]), true)
assertEqual(eqArrays([1,2,3], [1,3,2]), false)