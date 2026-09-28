/**
 * Problem 03: Safe Deep Object Lookup (Get Property by Path)
 *
 * Description:
 * Write a function `get(obj, path, defaultValue)` that safely gets the value at `path` of `obj`.
 * If the resolved value is undefined or path does not exist, return `defaultValue`.
 * `path` can be a dot-separated string like `"user.profile.address.city"` or an array of keys.
 *
 * Example:
 * const user = { profile: { name: "Alex", address: { city: "New York" } } };
 * get(user, "profile.address.city", "Unknown"); // "New York"
 * get(user, "profile.contact.phone", "N/A"); // "N/A"
 */

function get(obj, path, defaultValue = undefined) {
  // TODO: Implement your solution here
  const keys = Array.isArray(path) ? path : path.split(".");
  let current = obj;
  if(!current || typeof current !== "object") {
    return defaultValue;
  }
  if(keys.length === 1) {
    return current[keys[0]] ?? defaultValue
  }
  return get(current[keys[0]], keys.slice(1), defaultValue)
}

// Test cases
const user = { profile: { name: "Alex", address: { city: "New York" } } };
console.log(get(user, "profile.address.city", "Unknown")); // Expected: "New York"
console.log(get(user, "profile.contact.phone", "N/A")); // Expected: "N/A"
console.log(get(user, "profile.name")); // Expected: "Alex"
console.log(get(null, "profile.name", "Default")); // Expected: "Default"
