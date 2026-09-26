/**
 * Problem 18: Flatten Deep Heterogeneous Structure
 *
 * Description:
 * Write a function `flattenDeep(input)` that recursively flattens deeply nested arrays
 * and extracts all primitive values into a single flat array.
 *
 * Example:
 * Input: [1, [2, [3, [4, [5]]]], [[6, 7], 8], 9]
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

function flattenDeep(input) {
  // TODO: Implement your solution here
}

// Test cases
console.log(flattenDeep([1, [2, [3, [4, [5]]]], [[6, 7], 8], 9]));
// Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(flattenDeep([[[]]])); // Expected: []
console.log(flattenDeep([1, ["a", ["b", [true]]]])); // Expected: [1, "a", "b", true]
