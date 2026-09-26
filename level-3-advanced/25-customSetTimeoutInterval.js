/**
 * Problem 25: Custom SetInterval using SetTimeout
 *
 * Description:
 * Implement `customSetInterval(callback, interval)` and `customClearInterval(id)`
 * using `setTimeout`.
 *
 * Why: Standard setInterval can suffer from drift and overlapping execution if callback takes
 * longer than interval. A recursive setTimeout approach guarantees spacing.
 */

const customIntervals = new Map();

function customSetInterval(callback, interval) {
  // TODO: Implement your solution here
}

function customClearInterval(id) {
  // TODO: Implement your solution here
}

// Test cases
let ticks = 0;
const intervalId = customSetInterval(() => {
  ticks++;
  console.log("Tick:", ticks);
  if (ticks === 3) {
    customClearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 100);
