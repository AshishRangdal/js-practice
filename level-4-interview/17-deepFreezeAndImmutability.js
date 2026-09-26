/**
 * Problem 17: Deep Freeze Recursive Object Seal
 *
 * Description:
 * Implement `deepFreeze(object)` that recursively prevents modification of all properties
 * on the object and any nested objects/arrays/functions/Sets/Maps, making the entire structure immutable.
 *
 * Handle circular references safely.
 */

function deepFreeze(obj) {
  // TODO: Implement your solution here
}

// Test cases
const config = {
  db: { host: "localhost", port: 5432, auth: { user: "admin" } },
  tags: ["production", "api"]
};

deepFreeze(config);

try {
  config.db.port = 8080; // Should fail or throw in strict mode
} catch (e) {}

console.log("Port remains untouched:", config.db.port === 5432); // Expected: true
console.log("Is frozen:", Object.isFrozen(config.db.auth)); // Expected: true
