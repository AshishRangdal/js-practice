/**
 * Problem 20: Priority-Based Async Task Scheduler
 *
 * Description:
 * Implement `PriorityTaskScheduler(concurrency)` supporting:
 * - `add(asyncTask, priority)`: schedules a task. Higher priority number runs before lower priority.
 * - Tasks with the same priority run in FIFO order.
 * - Max `concurrency` tasks run concurrently.
 * - Returns a Promise resolving to the task's result.
 */

class PriorityTaskScheduler {
  constructor(concurrency = 2) {
    // TODO: Implement your solution here
  }

  add(task, priority = 0) {
    // TODO: Implement your solution here
  }
}

// Test cases
const scheduler = new PriorityTaskScheduler(1); // 1 task at a time to test priority ordering

scheduler.add(() => Promise.resolve("Low Priority"), 1).then(console.log);
scheduler.add(() => Promise.resolve("High Priority"), 10).then(console.log);
scheduler.add(() => Promise.resolve("Medium Priority"), 5).then(console.log);
// Expected resolution order: High Priority -> Medium Priority -> Low Priority
