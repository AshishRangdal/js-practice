/**
 * Problem 22: Basic Function Memoization
 *
 * Description:
 * Write a higher-order function `memoize(fn)` that caches the result of a single-argument pure function.
 * If the function is called again with the same argument, return the cached result instead of recomputing.
 */

function memoize(fn) {
  // TODO: Implement your solution here
  const cache = new Map();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    } else {
      const result = fn(arg);
      cache.set(arg, result);
      return result;
    }
  };
}

// Test cases
let calls = 0;
const slowSquare = (n) => {
  calls++;
  return n * n;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(4)); // Expected: 16 (computes)
console.log(fastSquare(4)); // Expected: 16 (from cache)
console.log(fastSquare(5)); // Expected: 25 (computes)
console.log("Total slowSquare computations:", calls); // Expected: 2
