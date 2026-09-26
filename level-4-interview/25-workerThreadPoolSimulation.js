/**
 * Problem 25: Asynchronous Worker Thread Pool Simulation
 *
 * Description:
 * Implement a worker pool class `WorkerPool(size)` simulating concurrent worker threads.
 *
 * Features:
 * - A pool of `size` workers.
 * - `execute(taskFunction, ...args)`: Dispatches work to the first available idle worker.
 * - If all workers are busy, queues the task.
 * - As soon as a worker finishes, it picks up the next task from the queue.
 */

class WorkerPool {
  constructor(size = 4) {
    // TODO: Implement your solution here
  }

  execute(taskFn, ...args) {
    // TODO: Implement your solution here
  }
}

// Test cases
const pool = new WorkerPool(2);
const work = (name, delay) =>
  new Promise((res) => setTimeout(() => res(`Done ${name}`), delay));

pool.execute(work, "Task 1", 100).then(console.log);
pool.execute(work, "Task 2", 100).then(console.log);
pool.execute(work, "Task 3", 50).then(console.log); // Should run after Task 1 or 2 finishes
