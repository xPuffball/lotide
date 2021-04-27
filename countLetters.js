const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 😇: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 😈: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str){
  freqTable = {};
  for (let letter of str) {
    if (letter != " "){
      if (freqTable[letter]) {
        freqTable[letter] += 1;
      }
      else {
        freqTable[letter] = 1;
      }
    }
  }
  return freqTable;
}