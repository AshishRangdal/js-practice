/**
 * Problem 10: Polyfill for Promise.all
 *
 * Description:
 * Implement `promiseAll(promises)` that takes an iterable of promises (or plain values)
 * and returns a single Promise that:
 * - Resolves to an array of results when all input promises resolve.
 * - Preserves the order of results corresponding to the input array.
 * - Rejects immediately with the reason of the first promise that rejects.
 */

function promiseAll(promises) {
  // TODO: Implement your solution here
}

// Test cases
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 50));
const p3 = 30; // Plain value

promiseAll([p1, p2, p3]).then((results) => {
  console.log("promiseAll resolved:", results); // Expected: [10, 20, 30]
});

const pErr = Promise.reject("Failed!");
promiseAll([p1, pErr, p2]).catch((err) => {
  console.log("promiseAll rejected with:", err); // Expected: "Failed!"
});
