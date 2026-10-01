/**
 * Problem 16: Basic Deep Merge of Two Objects
 *
 * Description:
 * Write a function that merges two objects deeply (up to nested object level).
 * Values from `target2` should overwrite primitive values in `target1`.
 * Nested objects should be merged recursively, without mutating original objects.
 *
 * Example:
 * const obj1 = { a: 1, b: { x: 10, y: 20 } };
 * const obj2 = { b: { y: 30, z: 40 }, c: 3 };
 * deepMergeBasic(obj1, obj2);
 * Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }
 */

function deepMergeBasic(target1, target2) {
  // TODO: Implement your solution here

  const merged = { ...target1 };
  for (const key in target2) {
    if (target2.hasOwnProperty(key)) {
      if (
        typeof target2[key] === 'object' &&
        target2[key] !== null &&
        !Array.isArray(target2[key]) &&
        typeof merged[key] === 'object' &&
        merged[key] !== null &&
        !Array.isArray(merged[key])
      ) {
        merged[key] = deepMergeBasic(merged[key], target2[key]);
      } else {
        merged[key] = target2[key];
      }
    }
  }

  return merged;

  
  
}

// Test cases
const obj1 = { a: 1, b: { x: 10, y: 20 } };
const obj2 = { b: { y: 30, z: 40 }, c: 3 };
console.log(deepMergeBasic(obj1, obj2));
// Expected: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }
