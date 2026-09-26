/**
 * Problem 11: Polyfill for Promise.allSettled
 *
 * Description:
 * Implement `promiseAllSettled(promises)` that takes an array of promises (and values)
 * and returns a Promise that resolves when all input promises have settled (either resolved or rejected).
 *
 * Output format:
 * Array of objects with:
 * - { status: 'fulfilled', value: <result> }
 * - { status: 'rejected', reason: <error> }
 */

function promiseAllSettled(promises) {
  // TODO: Implement your solution here
}

// Test cases
const p1 = Promise.resolve("OK");
const p2 = Promise.reject("Error occurred");
const p3 = 42;

promiseAllSettled([p1, p2, p3]).then((results) => {
  console.log("promiseAllSettled results:", results);
  // Expected:
  // [
  //   { status: 'fulfilled', value: 'OK' },
  //   { status: 'rejected', reason: 'Error occurred' },
  //   { status: 'fulfilled', value: 42 }
  // ]
});
