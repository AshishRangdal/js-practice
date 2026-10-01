/**
 * Problem 17: Find Duplicate Elements and Their Indices
 *
 * Description:
 * Write a function that takes an array and returns an object mapping every duplicate element
 * to an array of its index positions. Elements that appear only once should be omitted.
 *
 * Example:
 * Input: ["a", "b", "c", "a", "d", "b", "a"]
 * Output: { a: [0, 3, 6], b: [1, 5] }
 */

function findDuplicatesWithIndices(arr) {
  // TODO: Implement your solution here
  const result = {}
  for(let it=0; it<arr.length;it++){
    (result[arr[it]] ??= []).push(it)
  }
  for(let key in result){
    if(result[key].length <=1){
      delete result[key]
    }
  }
  return result;
}

// Test cases
console.log(findDuplicatesWithIndices(["a", "b", "c", "a", "d", "b", "a"]));
// Expected: { a: [0, 3, 6], b: [1, 5] }

console.log(findDuplicatesWithIndices([1, 2, 3, 4]));
// Expected: {}
