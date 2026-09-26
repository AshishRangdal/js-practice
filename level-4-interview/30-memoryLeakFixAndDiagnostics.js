/**
 * Problem 30: Memory Leak Diagnostics and Refactoring
 *
 * Task:
 * Inspect the three buggy snippets below that cause memory leaks in production JavaScript apps.
 * Explain or refactor each snippet inside the clean function wrappers to prevent memory leaks:
 *
 * 1. Dangling event listeners
 * 2. Unbounded closure cache
 * 3. Detached DOM elements / setInterval timers
 */

// Buggy Pattern 1: Event listener never removed
class WidgetWithLeak {
  constructor() {
    this.data = new Array(1000000).fill("payload");
    window.addEventListener("resize", this.onResize.bind(this));
  }
  onResize() {
    console.log("Resized");
  }
}

// TODO: Refactor WidgetWithLeak to provide a clean destroy/cleanup lifecycle method
class CleanWidget {
  constructor() {
    // TODO: Implement your solution here
  }

  destroy() {
    // TODO: Implement clean tear-down here
  }
}

// Buggy Pattern 2: Cache growing indefinitely without eviction or WeakMap
const leakyCache = new Map();
function processUserSession(user) {
  leakyCache.set(user, { lastSeen: Date.now() });
}

// TODO: Refactor using WeakMap or bounded cache to avoid memory leak
function cleanProcessUserSession(user) {
  // TODO: Implement your solution here
}
