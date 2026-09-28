/**
 * Problem 05: Two Sum
 *
 * Description:
 * Given an array of integers `nums` and an integer `target`, return the indices of the
 * two numbers such that they add up to `target`.
 * You may assume each input has exactly one solution, and you may not use the same element twice.
 * Aim for an O(n) time complexity approach.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] (because nums[0] + nums[1] == 9)
 */

function twoSum(nums, target) {
  // TODO: Implement your solution here
  const numToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]
