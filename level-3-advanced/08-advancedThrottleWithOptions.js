/**
 * Problem 08: Advanced Throttle with Options and Cancellation
 *
 * Description:
 * Implement an advanced throttle function `throttle(fn, wait, options)` where options include:
 * - `leading` (boolean, default: true): invoke on leading edge
 * - `trailing` (boolean, default: true): invoke on trailing edge
 *
 * Must also include:
 * - `.cancel()`: cancels pending throttled execution
 */

function throttle(fn, wait, options = {}) {
  // TODO: Implement your solution here
}

// Test cases
const record = (val) => console.log(`Throttled: ${val} at ${Date.now()}`);
const throttled = throttle(record, 200, { leading: true, trailing: true });

throttled(1);
throttled(2);
setTimeout(() => throttled(3), 250);
