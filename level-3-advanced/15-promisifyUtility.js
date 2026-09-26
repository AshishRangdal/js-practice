/**
 * Problem 15: Promisify Utility (Error-First Callbacks to Promises)
 *
 * Description:
 * Implement a custom `promisify(fn)` utility that converts a standard Node.js error-first
 * callback function `fn(...args, (err, result) => { ... })` into a function that returns a Promise.
 */

function promisify(fn) {
  // TODO: Implement your solution here
}

// Test cases
function legacyAsyncOperation(x, y, callback) {
  setTimeout(() => {
    if (x < 0 || y < 0) {
      callback(new Error("Negative numbers not allowed"));
    } else {
      callback(null, x + y);
    }
  }, 50);
}

const promisedAdd = promisify(legacyAsyncOperation);

promisedAdd(5, 10).then((sum) => console.log("Sum:", sum)); // Expected: 15
promisedAdd(-1, 5).catch((err) => console.log("Caught:", err.message)); // Expected: "Caught: Negative numbers not allowed"
