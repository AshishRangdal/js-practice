/**
 * Problem 09: Minimal Custom Promise Implementation
 *
 * Description:
 * Build a basic `MyPromise` class adhering to core Promise behavior:
 * - States: 'pending', 'fulfilled', 'rejected'
 * - Constructor executor: `(resolve, reject) => ...`
 * - Methods: `.then(onFulfilled, onRejected)`, `.catch(onRejected)`
 * - Must support asynchronous execution and chaining.
 */

class MyPromise {
  constructor(executor) {
    // TODO: Implement your solution here
  }

  then(onFulfilled, onRejected) {
    // TODO: Implement your solution here
  }

  catch(onRejected) {
    // TODO: Implement your solution here
  }
}

// Test cases
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 100);
});

p.then((res) => {
  console.log("Resolved with:", res); // Expected: "Resolved with: Success!"
  return "Next result";
}).then((val) => {
  console.log("Chained:", val); // Expected: "Chained: Next result"
});
