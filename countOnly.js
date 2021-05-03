const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]){
        results[item] += 1; 
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 😇: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 😈: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Fang",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
//{Jason: 1,
// Salima: 2,
// whatever: 1}
//}

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 3);
assertEqual(result1["Agouhanna"], undefined);