/**
 * Problem 14: Asynchronous Retry Mechanism with Backoff
 *
 * Description:
 * Write a function `retryAsync(fn, retries, delay, backoffFactor)` that attempts to run an
 * async function `fn`. If it fails, retry up to `retries` times, waiting `delay * (backoffFactor ** attempt)` ms.
 * If all retries fail, reject with the last error.
 */

async function retryAsync(fn, retries = 3, delay = 100, backoffFactor = 2) {
  // TODO: Implement your solution here
}

// Test cases
let attempts = 0;
const unstableApi = async () => {
  attempts++;
  if (attempts < 3) {
    throw new Error(`Failed attempt ${attempts}`);
  }
  return "API Success!";
};

retryAsync(unstableApi, 4, 50, 1.5)
  .then((res) => console.log("Result:", res)) // Expected: "API Success!"
  .catch((err) => console.error("Failed:", err));
