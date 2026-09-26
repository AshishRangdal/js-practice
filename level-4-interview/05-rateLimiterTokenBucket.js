/**
 * Problem 05: Token Bucket Rate Limiter
 *
 * Description:
 * Implement a Token Bucket Rate Limiter class `TokenBucketRateLimiter`.
 *
 * Constructor parameters:
 * - `capacity`: Maximum number of tokens the bucket can hold.
 * - `refillRatePerSecond`: Number of tokens added to the bucket every second.
 *
 * Method:
 * - `tryConsume(tokens = 1)`: Returns `true` if enough tokens are available to consume,
 *   deducts them, and returns `true`. Otherwise returns `false`.
 */

class TokenBucketRateLimiter {
  constructor(capacity, refillRatePerSecond) {
    // TODO: Implement your solution here
  }

  tryConsume(tokens = 1) {
    // TODO: Implement your solution here
  }
}

// Test cases
const limiter = new TokenBucketRateLimiter(3, 1); // Max 3 tokens, 1 token/sec
console.log(limiter.tryConsume(2)); // Expected: true (1 left)
console.log(limiter.tryConsume(1)); // Expected: true (0 left)
console.log(limiter.tryConsume(1)); // Expected: false (exhausted)

setTimeout(() => {
  console.log(limiter.tryConsume(1)); // Expected: true (after 1s refill)
}, 1100);
