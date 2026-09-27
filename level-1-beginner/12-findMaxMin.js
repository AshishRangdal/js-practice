/**
 * Problem 12: Find Maximum and Minimum Elements
 *
 * Description:
 * Write a function that finds both the minimum and maximum values in an array in a single pass.
 * Returns an object: { min, max }.
 * Return null or undefined if the array is empty.
 *
 * Example:
 * Input: [3, 5, 1, 9, 2, 8] -> Output: { min: 1, max: 9 }
 */

function findMaxMin(numbers) {
  // TODO: Implement your solution here
  if (numbers.length === 0) return null;

  // 1 approach
  // numbers.sort((a,b)=> a-b);
  // return {"min": numbers[0], "max" : numbers[numbers.length -1]}

  // 2 approach
  let mini = [Infinity],
    maxi = [-Infinity];
  for (let num of numbers) {
    if (num > maxi) {
      maxi = num;
    }
    if (num < mini) {
      mini = num;
    }
  }
  return { min: mini, max: maxi };
}

// Test cases
console.log(findMaxMin([3, 5, 1, 9, 2, 8])); // Expected: { min: 1, max: 9 }
console.log(findMaxMin([-10, 0, 50, -20])); // Expected: { min: -20, max: 50 }
console.log(findMaxMin([42])); // Expected: { min: 42, max: 42 }
console.log(findMaxMin([])); // Expected: null
