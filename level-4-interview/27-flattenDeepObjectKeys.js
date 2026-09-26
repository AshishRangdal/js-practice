/**
 * Problem 27: Flatten Nested Object to Dot-Notation & Unflatten Back
 *
 * Description:
 * Implement two inverse functions:
 * 1. `flattenObject(obj)`: Converts nested object into single-level object with dot keys:
 *    { a: { b: { c: 1 }, d: 2 } } -> { "a.b.c": 1, "a.d": 2 }
 * 2. `unflattenObject(flatObj)`: Converts dot keys back into nested object hierarchy.
 */

function flattenObject(obj, prefix = "") {
  // TODO: Implement your solution here
}

function unflattenObject(flatObj) {
  // TODO: Implement your solution here
}

// Test cases
const nested = { user: { profile: { name: "Alice", age: 25 }, active: true } };
const flattened = flattenObject(nested);
console.log("Flattened:", flattened);
// Expected: { 'user.profile.name': 'Alice', 'user.profile.age': 25, 'user.active': true }

const unflattened = unflattenObject(flattened);
console.log("Matches original:", JSON.stringify(unflattened) === JSON.stringify(nested)); // Expected: true
