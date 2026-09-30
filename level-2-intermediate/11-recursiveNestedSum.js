/**
 * Problem 11: Recursive Nested Sum
 *
 * Description:
 * Write a recursive function that calculates the sum of all numbers in an arbitrarily nested array of numbers.
 *
 * Example:
 * Input: [1, [2, [3, 4], 5], [6, [7]]] -> Output: 28
 */

function recursiveNestedSum(arr) {
  // TODO: Implement your solution here

  // 1 approach
  // return arr.flat(Infinity).reduce((acc,num)=> acc+num,0)

  // 2 approach
  let ans=0;
  for(let item of arr){
    if(Array.isArray(item)){
    ans+= recursiveNestedSum(item);
    }else{
      ans+=item
    }
  }
  return ans;
}

// Test cases
console.log(recursiveNestedSum([1, [2, [3, 4], 5], [6, [7]]])); // Expected: 28
console.log(recursiveNestedSum([[[[5]]]])); // Expected: 5
console.log(recursiveNestedSum([])); // Expected: 0
