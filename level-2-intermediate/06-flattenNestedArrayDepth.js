/**
 * Problem 06: Flatten Array to a Specified Depth
 *
 * Description:
 * Write a function `flattenDepth(arr, depth)` that flattens a nested array up to the given `depth`.
 * Do not use the native `Array.prototype.flat()`.
 *
 * Example:
 * Input: [1, [2, [3, [4]], 5]], 1 -> Output: [1, 2, [3, [4]], 5]
 * Input: [1, [2, [3, [4]], 5]], 2 -> Output: [1, 2, 3, [4], 5]
 */

function flattenDepth(arr, depth = 1) {
  // TODO: Implement your solution here
}

// Test cases
const nested = [1, [2, [3, [4]], 5]];
console.log(flattenDepth(nested, 1)); // Expected: [1, 2, [3, [4]], 5]
console.log(flattenDepth(nested, 2)); // Expected: [1, 2, 3, [4], 5]
console.log(flattenDepth(nested, Infinity)); // Expected: [1, 2, 3, 4, 5]
