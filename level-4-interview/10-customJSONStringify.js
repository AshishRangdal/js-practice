/**
 * Problem 10: Custom JSON.stringify Implementation
 *
 * Description:
 * Write your own implementation of `myJSONStringify(value)`.
 * Handle:
 * - Strings (wrapped in double quotes, escaped characters)
 * - Numbers, booleans, null
 * - undefined and functions (omitted in objects, converted to null in arrays)
 * - Arrays
 * - Plain objects
 * - Date objects (.toISOString())
 */

function myJSONStringify(value) {
  // TODO: Implement your solution here
}

// Test cases
console.log(myJSONStringify({ a: 1, b: "hello", c: true, d: null }));
// Expected: '{"a":1,"b":"hello","c":true,"d":null}'

console.log(myJSONStringify([1, "text", undefined, () => {}, false]));
// Expected: '[1,"text",null,null,false]'

console.log(myJSONStringify({ fn: () => {}, val: undefined, keep: 42 }));
// Expected: '{"keep":42}'
