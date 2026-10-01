/**
 * Problem 18: Difference Between Two Objects
 *
 * Description:
 * Write a function that compares two flat objects and returns an object describing their differences:
 * - `added`: keys present in obj2 but not in obj1
 * - `updated`: keys present in both but with different values (shows { from, to })
 * - `removed`: keys present in obj1 but not in obj2
 *
 * Example:
 * const o1 = { a: 1, b: 2, c: 3 };
 * const o2 = { b: 20, c: 3, d: 4 };
 */

function diffObjects(obj1, obj2) {
  // TODO: Implement your solution here
  const added = {};
  const updated = {};
  const removed = {};

  for (const key in obj2) {
    if (!(key in obj1)) {
      added[key] = obj2[key];
    } else if (obj1[key] !== obj2[key]) {
      updated[key] = { from: obj1[key], to: obj2[key] };
    }
  }

  for (const key in obj1) {
    if (!(key in obj2)) {
      removed[key] = obj1[key];
    }
  }

  return { added, updated, removed };
}

// Test cases
const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 20, c: 3, d: 4 };
console.log(diffObjects(o1, o2));
// Expected:
// {
//   added: { d: 4 },
//   updated: { b: { from: 2, to: 20 } },
//   removed: { a: 1 }
// }
