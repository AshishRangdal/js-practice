/**
 * Problem 08: Implement Map and Filter using Reduce
 *
 * Description:
 * Implement your own versions of array `map` and `filter` using ONLY `Array.prototype.reduce`.
 *
 * Functions to create:
 * 1. `mapWithReduce(arr, callback)`
 * 2. `filterWithReduce(arr, predicate)`
 */

function mapWithReduce(arr, callback) {
  // TODO: Implement your solution here using arr.reduce
}

function filterWithReduce(arr, predicate) {
  // TODO: Implement your solution here using arr.reduce
}

// Test cases
const nums = [1, 2, 3, 4, 5];
console.log(mapWithReduce(nums, (x) => x * 2)); // Expected: [2, 4, 6, 8, 10]
console.log(filterWithReduce(nums, (x) => x % 2 === 0)); // Expected: [2, 4]
