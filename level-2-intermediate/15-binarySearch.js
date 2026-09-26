/**
 * Problem 15: Binary Search Implementation
 *
 * Description:
 * Implement the Binary Search algorithm on a sorted array of numbers.
 * Return the index of `target` if found, or -1 if not found.
 * Aim for O(log n) time complexity.
 *
 * Example:
 * Input: [1, 3, 5, 7, 9, 11, 13], 7 -> Output: 3
 * Input: [1, 3, 5, 7, 9, 11, 13], 8 -> Output: -1
 */

function binarySearch(sortedArr, target) {
  // TODO: Implement your solution here
}

// Test cases
const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr, 7)); // Expected: 3
console.log(binarySearch(arr, 1)); // Expected: 0
console.log(binarySearch(arr, 13)); // Expected: 6
console.log(binarySearch(arr, 8)); // Expected: -1
