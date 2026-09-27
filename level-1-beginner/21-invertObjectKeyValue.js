/**
 * Problem 21: Invert Object Keys and Values
 *
 * Description:
 * Write a function that takes an object and inverts its keys and values.
 * Assume all property values are unique strings or numbers.
 *
 * Example:
 * Input: { a: "1", b: "2", c: "3" }
 * Output: { "1": "a", "2": "b", "3": "c" }
 */

function invertObject(obj) {
  // TODO: Implement your solution here

  // 1 approach
  // const keys = Object.keys(obj);
  // const values = Object.values(obj);
  // const result = {};
  // for (let it = 0; it < values.length; it++) {
  //   result[values[it]] = keys[it];
  // }
  // return result;

  // 2 approach
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
}

// Test cases
console.log(invertObject({ a: "1", b: "2", c: "3" }));
// Expected: { '1': 'a', '2': 'b', '3': 'c' }

console.log(invertObject({ red: "#f00", green: "#0f0" }));
// Expected: { '#f00': 'red', '#0f0': 'green' }
