/**
 * Problem 22: Circuit Breaker Pattern for Asynchronous Calls
 *
 * Description:
 * Implement a Circuit Breaker wrapper: `createCircuitBreaker(asyncFn, options)`
 * Options:
 * - `failureThreshold`: number of consecutive failures to trip the circuit to 'OPEN'
 * - `recoveryTimeout`: milliseconds before transitioning from 'OPEN' to 'HALF_OPEN'
 *
 * States:
 * - CLOSED: Calls proceed normally. Consecutive failures increment counter.
 * - OPEN: Calls immediately reject without calling asyncFn ("Circuit is OPEN").
 * - HALF_OPEN: Allows one trial call. If succeeds -> CLOSED; if fails -> OPEN.
 */

function createCircuitBreaker(asyncFn, options = {}) {
  // TODO: Implement your solution here
}

// Test cases
let shouldFail = true;
const unstableService = async () => {
  if (shouldFail) throw new Error("Service down");
  return "Service OK";
};

const breaker = createCircuitBreaker(unstableService, { failureThreshold: 2, recoveryTimeout: 200 });
