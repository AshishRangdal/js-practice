/**
 * Problem 08: Reactive State Store using ES6 Proxy
 *
 * Description:
 * Implement `createReactiveStore(initialState)` that wraps an object with a Proxy so that:
 * - Any property read / nested mutation is intercepted.
 * - `store.subscribe(callback)` allows registering listeners that fire whenever ANY nested state changes.
 * - The callback receives the modified property path, old value, and new value.
 */

function createReactiveStore(initialState) {
  // TODO: Implement your solution here
}

// Test cases
const state = createReactiveStore({
  user: { name: "Alice", count: 0 }
});

state.subscribe((path, oldVal, newVal) => {
  console.log(`Change detected at "${path}": ${oldVal} -> ${newVal}`);
});

state.user.count = 1; // Expected log: Change detected at "user.count": 0 -> 1
state.user.name = "Bob"; // Expected log: Change detected at "user.name": Alice -> Bob
