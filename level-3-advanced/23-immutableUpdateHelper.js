/**
 * Problem 23: Immutable Deep Update Helper
 *
 * Description:
 * Implement an immutable update utility `update(state, path, updaterFn)` that produces a new state
 * object with the value at `path` updated by calling `updaterFn(oldValue)`.
 * None of the original nested objects/arrays along the path should be mutated.
 * Unmodified branches should preserve referential equality.
 */

function update(state, path, updaterFn) {
  // TODO: Implement your solution here
}

// Test cases
const originalState = {
  user: {
    profile: { name: "John", age: 30 },
    settings: { theme: "dark" }
  },
  posts: [1, 2, 3]
};

const newState = update(originalState, "user.profile.age", (age) => age + 1);

console.log("Old age:", originalState.user.profile.age); // Expected: 30
console.log("New age:", newState.user.profile.age); // Expected: 31
console.log("Unmodified branch preserved:", originalState.user.settings === newState.user.settings); // Expected: true
console.log("Root changed:", originalState !== newState); // Expected: true
