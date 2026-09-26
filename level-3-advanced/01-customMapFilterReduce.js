/**
 * Problem 01: Polyfills for Array map, filter, and reduce
 *
 * Description:
 * Implement your own versions of map, filter, and reduce on Array.prototype:
 * - `Array.prototype.myMap(callback, thisArg)`
 * - `Array.prototype.myFilter(callback, thisArg)`
 * - `Array.prototype.myReduce(callback, initialValue)`
 *
 * Requirements:
 * - Handle sparse arrays properly.
 * - Throw TypeError if callback is not a function.
 * - For myReduce, handle case when initialValue is omitted (first non-empty element becomes accumulator).
 */

Array.prototype.myMap = function (callback, thisArg) {
  // TODO: Implement your solution here
};

Array.prototype.myFilter = function (callback, thisArg) {
  // TODO: Implement your solution here
};

Array.prototype.myReduce = function (callback, initialValue) {
  // TODO: Implement your solution here
};

// Test cases
const arr = [1, 2, 3, 4];
console.log(arr.myMap((x) => x * 3)); // Expected: [3, 6, 9, 12]
console.log(arr.myFilter((x) => x % 2 === 0)); // Expected: [2, 4]
console.log(arr.myReduce((acc, x) => acc + x, 0)); // Expected: 10
console.log(arr.myReduce((acc, x) => acc * x)); // Expected: 24
