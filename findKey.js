const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 😇: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 😈: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
}

let testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

assertEqual(findKey(testObj, x => x.stars === 5), undefined)
assertEqual(findKey(testObj, x => x.stars === 3), "Akaleri")
assertEqual(findKey(testObj, x => x.stars === 2), "noma")
