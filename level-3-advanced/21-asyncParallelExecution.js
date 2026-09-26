/**
 * Problem 21: Async Parallel Runner with Error Capture
 *
 * Description:
 * Write a function `asyncParallel(tasks)` that runs an array of async functions in parallel
 * (without using Promise.all) and returns a promise resolving to an array of results or rejecting
 * on the first encountered error.
 */

function asyncParallel(tasks) {
  // TODO: Implement your solution here
}

// Test cases
const t1 = () => new Promise((res) => setTimeout(() => res("Task 1"), 60));
const t2 = () => new Promise((res) => setTimeout(() => res("Task 2"), 30));
const t3 = () => Promise.resolve("Task 3");

asyncParallel([t1, t2, t3]).then((results) => {
  console.log("Parallel results:", results);
  // Expected: ['Task 1', 'Task 2', 'Task 3'] (maintaining order)
});
