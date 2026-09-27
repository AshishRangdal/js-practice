/**
 * Problem 10: Basic Throttle Function
 *
 * Description:
 * Implement a basic throttle function that guarantees the callback function is invoked
 * at most once in every specified `delay` milliseconds window.
 *
 * Parameters:
 * - fn: The target function to throttle
 * - delay: The time window in milliseconds
 *
 * Returns:
 * - A new throttled function
 */

function throttle(fn, delay) {
  // TODO: Implement your solution here
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Test cases
const recordEvent = (val) => console.log(`Throttled: ${val} at ${Date.now()}`);
const throttledRecord = throttle(recordEvent, 500);

throttledRecord("Event 1"); // Should execute immediately
setTimeout(() => throttledRecord("Event 2"), 100); // Should be ignored (within 500ms)
setTimeout(() => throttledRecord("Event 3"), 600); // Should execute (after 500ms window)
