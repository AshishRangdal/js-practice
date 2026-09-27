/**
 * Problem 20: Merge Two Sorted Arrays
 *
 * Description:
 * Given two sorted arrays of numbers, merge them into a single sorted array.
 * Aim for an efficient O(n + m) solution without simply concatenating and calling .sort().
 *
 * Example:
 * Input: [1, 3, 5], [2, 4, 6] -> Output: [1, 2, 3, 4, 5, 6]
 * Input: [10, 20], [5, 15, 25] -> Output: [5, 10, 15, 20, 25]
 */

function mergeSortedArrays(arr1, arr2) {
  // TODO: Implement your solution here
  let i = 0,
    j = 0,
    l = arr1.length - 1,
    m = arr2.length - 1;
  const result = [];
  while (i <= l && j <= m) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i <= l) {
    result.push(arr1[i]);
    i++;
  }
  while (j <= m) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// Test cases
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([10, 20], [5, 15, 25])); // Expected: [5, 10, 15, 20, 25]
console.log(mergeSortedArrays([], [1, 2])); // Expected: [1, 2]
