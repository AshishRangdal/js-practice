/**
 * Problem 01: Promise Pool with Concurrency Limit
 *
 * Description:
 * Implement a function `promisePool(tasks, limit)` that executes an array of async functions
 * (functions returning a Promise) with a maximum of `limit` tasks running concurrently at any moment.
 *
 * Requirements:
 * - When a task finishes, the next pending task starts immediately.
 * - Return a Promise that resolves with an array of results preserving the original order.
 * - If any task rejects, the overall promise should reject with that error.
 */

async function promisePool(tasks, limit) {
  // TODO: Implement your solution here
}

// Test cases
const createTask = (id, duration) => () =>
  new Promise((res) => {
    console.log(`Task ${id} started`);
    setTimeout(() => {
      console.log(`Task ${id} finished after ${duration}ms`);
      res(`Result ${id}`);
    }, duration);
  });

const tasks = [
  createTask(1, 100),
  createTask(2, 50),
  createTask(3, 80),
  createTask(4, 30),
  createTask(5, 60)
];

promisePool(tasks, 2).then((results) => {
  console.log("All tasks completed:", results);
  // Expected order of results: ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5']
});
