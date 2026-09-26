/**
 * Problem 20: Async Sequence (Waterfall) Execution
 *
 * Description:
 * Write a function `asyncSeries(tasks, initialValue)` that executes an array of asynchronous tasks
 * in sequential series (one after another), passing the result of each task as input to the next task.
 *
 * Example:
 * const tasks = [
 *   async (x) => x + 1,
 *   async (x) => x * 2,
 *   async (x) => x - 3
 * ];
 * asyncSeries(tasks, 5); // ((5 + 1) * 2) - 3 = 9
 */

async function asyncSeries(tasks, initialValue) {
  // TODO: Implement your solution here
}

// Test cases
const tasks = [
  async (x) => new Promise((res) => setTimeout(() => res(x + 10), 50)),
  async (x) => new Promise((res) => setTimeout(() => res(x * 2), 50)),
  async (x) => x - 5
];

asyncSeries(tasks, 5).then((result) => {
  console.log("Sequential result:", result); // Expected: 25 ((5 + 10) * 2 - 5 = 25)
});
