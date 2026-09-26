/**
 * Problem 07: Advanced Debounce with Options and Cancellation
 *
 * Description:
 * Implement an advanced debounce utility `debounce(fn, wait, options)` where options can include:
 * - `leading` (boolean, default: false): invoke on the leading edge of the timeout
 * - `trailing` (boolean, default: true): invoke on the trailing edge of the timeout
 * - `maxWait` (number, optional): maximum time fn is allowed to be delayed before execution
 *
 * The returned debounced function must also provide:
 * - `.cancel()`: cancels pending invocations
 * - `.flush()`: immediately executes pending invocation if any
 */

function debounce(fn, wait, options = {}) {
  // TODO: Implement your solution here
}

// Test cases
let count = 0;
const increment = () => ++count;

const debouncedInc = debounce(increment, 200, { leading: true, trailing: false });
debouncedInc(); // Executes immediately (leading edge)
debouncedInc(); // Ignored
console.log("Immediate leading count:", count); // Expected: 1
