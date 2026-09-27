/**
 * Problem 19: Flatten a 2D Array (1-Level Deep)
 *
 * Description:
 * Write a function that flattens a two-dimensional array into a single one-dimensional array.
 * Do not use Array.prototype.flat().
 *
 * Example:
 * Input: [[1, 2], [3, 4], [5]] -> Output: [1, 2, 3, 4, 5]
 * Input: [["a", "b"], ["c"]] -> Output: ["a", "b", "c"]
 */

function flattenBasic(arr) {
  // TODO: Implement your solution here

  // 1 approach inbuilt method
  // return arr.flat(Infinity)

  // 2 iterative
  const result = []
  for(let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenBasic(item))
    }else{
      result.push(item)
    }
  }
  return result
}

// Test cases
console.log(flattenBasic([[1, 2], [3, 4], [5]])); // Expected: [1, 2, 3, 4, 5]
console.log(flattenBasic([["a"], ["b", "c"], ["d"]])); // Expected: ["a", "b", "c", "d"]
console.log(flattenBasic([])); // Expected: []
