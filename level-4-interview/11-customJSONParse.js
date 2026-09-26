/**
 * Problem 11: Custom JSON Parser (Recursive Descent)
 *
 * Description:
 * Implement a simple JSON parser `myJSONParse(jsonString)` without using `eval` or native `JSON.parse`.
 * Parse:
 * - Numbers (integers, floats, negative)
 * - Strings
 * - Booleans (true, false)
 * - Null
 * - Arrays
 * - Objects
 */

function myJSONParse(jsonString) {
  // TODO: Implement your solution here
}

// Test cases
console.log(myJSONParse('{"name": "Alice", "age": 30, "isMember": true}'));
// Expected: { name: 'Alice', age: 30, isMember: true }

console.log(myJSONParse('[1, 2, "three", false, null]'));
// Expected: [1, 2, 'three', false, null]

console.log(myJSONParse('{"nested": {"items": [10, 20]}}'));
// Expected: { nested: { items: [10, 20] } }
