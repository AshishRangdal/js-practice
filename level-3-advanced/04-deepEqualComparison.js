/**
 * Problem 04: Deep Equality Comparator
 *
 * Description:
 * Write a function `deepEqual(a, b)` that determines whether two values are deeply equivalent.
 * Should support primitives, NaN, nested objects, and arrays.
 *
 * Example:
 * deepEqual({ a: [1, 2], b: { c: 3 } }, { a: [1, 2], b: { c: 3 } }) -> true
 * deepEqual({ a: 1 }, { a: "1" }) -> false
 * deepEqual(NaN, NaN) -> true
 */

function deepEqual(a, b) {
  // TODO: Implement your solution here
}

// Test cases
console.log(deepEqual(1, 1)); // Expected: true
console.log(deepEqual(NaN, NaN)); // Expected: true
console.log(deepEqual([1, 2, { a: 3 }], [1, 2, { a: 3 }])); // Expected: true
console.log(deepEqual({ x: 1, y: 2 }, { y: 2, x: 1 })); // Expected: true
console.log(deepEqual({ a: 1 }, { a: 2 })); // Expected: false
console.log(deepEqual([1, 2], [1, 2, 3])); // Expected: false
