/**
 * Problem 13: Filter Even and Odd Numbers
 *
 * Description:
 * Write a function that separates numbers into even and odd arrays.
 * Returns an object with two properties: { evens: [...], odds: [...] }.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5, 6] -> Output: { evens: [2, 4, 6], odds: [1, 3, 5] }
 */

function filterEvenOdd(numbers) {
  // TODO: Implement your solution here
  const even = numbers.filter((item)=> item % 2 === 0)
  const odd = numbers.filter((item)=> item % 2 !== 0)
  return {"evens": even, "odds": odd}

}

// Test cases
console.log(filterEvenOdd([1, 2, 3, 4, 5, 6]));
// Expected: { evens: [2, 4, 6], odds: [1, 3, 5] }

console.log(filterEvenOdd([10, 21, 32, 43]));
// Expected: { evens: [10, 32], odds: [21, 43] }
