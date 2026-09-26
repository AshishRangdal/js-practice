/**
 * Problem 19: Memoize with Custom Key Resolver and TTL
 *
 * Description:
 * Implement an advanced memoize utility: `memoizeAdvanced(fn, options)`
 * Options:
 * - `resolver`: function that generates cache key from arguments (default: JSON.stringify)
 * - `ttl`: time-to-live in milliseconds for cache entries. Entries older than `ttl` expire.
 */

function memoizeAdvanced(fn, options = {}) {
  // TODO: Implement your solution here
}

// Test cases
let computeCount = 0;
const add = (a, b) => {
  computeCount++;
  return a + b;
};

const memoizedAdd = memoizeAdvanced(add, { ttl: 200 });

console.log(memoizedAdd(2, 3)); // Expected: 5 (computed)
console.log(memoizedAdd(2, 3)); // Expected: 5 (cached)
console.log("Computations:", computeCount); // Expected: 1

setTimeout(() => {
  console.log(memoizedAdd(2, 3)); // Expected: 5 (recomputed after TTL expiration)
  console.log("Computations after TTL:", computeCount); // Expected: 2
}, 300);
