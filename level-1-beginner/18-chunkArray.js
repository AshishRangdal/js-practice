/**
 * Problem 18: Chunk an Array
 *
 * Description:
 * Write a function that splits an array into groups of length `size` and returns them as a 2D array.
 * If the array cannot be split evenly, the final chunk will be the remaining elements.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5], 2 -> Output: [[1, 2], [3, 4], [5]]
 * Input: [1, 2, 3, 4], 3 -> Output: [[1, 2, 3], [4]]
 */

function chunkArray(arr, size) {
  // TODO: Implement your solution here
  if (arr.length === 0) return [];

  // 1 approach iterative
  const result = [];
  // while(arr.length){
  //   result.push(arr.splice(0,size))
  // }

  // for (let i = 0; i < arr.length; i += size) {
  //       result.push(arr.slice(i, i + size));
  //   }

  // return result

  // return arr.reduce((result, item, index) => {
  //       const chunkIndex = Math.floor(index / size);

  //       if (!result[chunkIndex]) {
  //           result[chunkIndex] = [];
  //       }

  //       result[chunkIndex].push(item);

  //       return result;
  //   }, []);

  return [arr.slice(0, size), ...chunkArray(arr.slice(size), size)];
}

// Test cases
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Expected: [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // Expected: [[1, 2, 3], [4, 5, 6]]
console.log(chunkArray([1, 2, 3], 5)); // Expected: [[1, 2, 3]]
console.log(chunkArray([], 2)); // Expected: []
