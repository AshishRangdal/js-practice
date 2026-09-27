/**
 * Problem 05: Remove Duplicates from Array
 *
 * Description:
 * Write a function that takes an array and returns a new array containing only unique elements,
 * preserving the original order of their first appearance.
 *
 * Example:
 * Input: [1, 2, 2, 3, 4, 4, 5, 5] -> Output: [1, 2, 3, 4, 5]
 * Input: ["a", "b", "a", "c", "b"] -> Output: ["a", "b", "c"]
 */

function removeDuplicates(arr) {
  // TODO: Implement your solution here

  // 1 approach
  // return [...new Set(arr)]

  // 2 approach
  return arr.filter((item,index)=> arr.indexOf(item) === index)
}

// Test cases
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5])); // Expected: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // Expected: ["a", "b", "c"]
console.log(removeDuplicates([])); // Expected: []
