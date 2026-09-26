/**
 * Problem 03: Deep Clone Supporting Complex Data Types
 *
 * Description:
 * Write a recursive function `deepClone(value)` that creates a full deep clone of JavaScript values.
 * Should handle:
 * - Primitives (string, number, boolean, null, undefined, symbol)
 * - Plain Objects
 * - Arrays
 * - Date objects
 * - RegExp objects
 * - Maps and Sets
 */

function deepClone(value) {
  // TODO: Implement your solution here
}

// Test cases
const original = {
  num: 42,
  str: "hello",
  date: new Date("2025-01-01"),
  regex: /test/gi,
  arr: [1, { a: 2 }],
  map: new Map([["key", "val"]]),
  set: new Set([1, 2, 3]),
  nested: { inner: { deep: true } }
};

const copy = deepClone(original);
copy.nested.inner.deep = false;
copy.arr[1].a = 99;

console.log("Original deeply preserved:", original.nested.inner.deep === true); // Expected: true
console.log("Original array item preserved:", original.arr[1].a === 2); // Expected: true
console.log("Date cloned properly:", copy.date instanceof Date && copy.date.getTime() === original.date.getTime()); // Expected: true
