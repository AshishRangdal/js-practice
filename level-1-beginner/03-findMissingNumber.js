/**
 * Problem 03: Find Missing Number
 *
 * Description:
 * Given an array containing n distinct numbers taken from 1 to n + 1 (in contiguous order),
 * find the single number that is missing from the array.
 *
 * Example:
 * Input: [1, 2, 3, 5, 6] -> Output: 4
 * Input: [2, 3, 1, 5] -> Output: 4
 */

function findMissingNumber(numbers) {
  // TODO: Implement your solution here
  let total = numbers.reduce((acc,num) => acc+num,0)
  let n = numbers.length + 1
  return (n * (n+1)) / 2 - total;
}

// Test cases
console.log(findMissingNumber([1, 2, 3, 5, 6])); // Expected: 4
console.log(findMissingNumber([1, 3, 4, 5])); // Expected: 2
console.log(findMissingNumber([2, 1, 4, 5, 6, 7, 8])); // Expected: 3
