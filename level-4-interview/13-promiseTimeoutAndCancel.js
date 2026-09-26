/**
 * Problem 13: Promise Timeout and Cancellation with AbortSignal
 *
 * Description:
 * Implement `withTimeoutAndSignal(promiseFactory, ms, signal)`
 * - Rejects with TimeoutError if the promise does not settle within `ms` milliseconds.
 * - Rejects with AbortError if `signal` is aborted before resolution.
 * - Resolves with the result if the promise completes successfully in time.
 */

function withTimeoutAndSignal(promiseFactory, ms, signal) {
  // TODO: Implement your solution here
}

// Test cases
const longTask = (signal) =>
  new Promise((res) => setTimeout(() => res("Finished!"), 200));

// Case 1: Timeout triggers
withTimeoutAndSignal(longTask, 100)
  .catch((err) => console.log("Timeout triggered:", err.message)); // Expected: Timeout error

// Case 2: AbortController aborts
const controller = new AbortController();
withTimeoutAndSignal(longTask, 500, controller.signal)
  .catch((err) => console.log("Abort triggered:", err.name)); // Expected: AbortError
controller.abort();
