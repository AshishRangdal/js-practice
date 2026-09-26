/**
 * Problem 09: Basic Debounce Function
 *
 * Description:
 * Implement a basic debounce function that delays invoking a callback function until
 * after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * Parameters:
 * - fn: The target function to debounce
 * - delay: The delay in milliseconds
 *
 * Returns:
 * - A new debounced function
 */

function debounce(fn, delay) {
  // TODO: Implement your solution here
}

// Test cases
const logMessage = (msg) => console.log(`Executed: ${msg} at ${Date.now()}`);
const debouncedLog = debounce(logMessage, 300);

debouncedLog("Call 1");
debouncedLog("Call 2");
debouncedLog("Call 3");
// Expected: Only "Executed: Call 3" should be logged after ~300ms delay
