/**
 * Problem 26: Async Memoize with Stale-While-Revalidate Caching Pattern
 *
 * Description:
 * Implement `memoizeWithSWR(asyncFn, options)`
 * Options:
 * - `staleTime`: duration in ms after which cached data is considered stale.
 * - `maxAge`: duration in ms after which cached data expires completely.
 *
 * Behavior:
 * - Fresh data (< staleTime): Return cached data immediately.
 * - Stale data (staleTime < age < maxAge): Return cached data immediately, but asynchronously
 *   re-fetch in background to update cache for subsequent calls.
 * - Expired data (> maxAge): Wait for fresh fetch.
 */

function memoizeWithSWR(asyncFn, options = {}) {
  // TODO: Implement your solution here
}

// Test cases
let apiCalls = 0;
const fetchPrice = async (ticker) => {
  apiCalls++;
  return { ticker, price: Math.floor(Math.random() * 100), callCount: apiCalls };
};

const getCachedPrice = memoizeWithSWR(fetchPrice, { staleTime: 100, maxAge: 500 });
