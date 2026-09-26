/**
 * Problem 09: Asynchronous Auto-Retry with Exponential Backoff and Jitter
 *
 * Description:
 * Implement `retryWithJitter(asyncFn, options)`
 * Options:
 * - `maxRetries` (number): e.g. 4
 * - `baseDelay` (number): base delay in ms e.g. 100
 * - `maxDelay` (number): maximum cap for delay e.g. 2000
 * - `shouldRetry` (function): `(error) => boolean` predicate whether error is retryable
 *
 * Jitter formula:
 * delay = Math.min(maxDelay, baseDelay * (2 ** attempt)) * (0.5 + Math.random() * 0.5)
 */

async function retryWithJitter(asyncFn, options = {}) {
  // TODO: Implement your solution here
}

// Test cases
let calls = 0;
const networkRequest = async () => {
  calls++;
  if (calls < 3) {
    const err = new Error("503 Service Unavailable");
    err.status = 503;
    throw err;
  }
  return { status: 200, data: "OK" };
};

retryWithJitter(networkRequest, {
  maxRetries: 3,
  baseDelay: 50,
  shouldRetry: (err) => err.status === 503
}).then((res) => console.log("Final response:", res));
