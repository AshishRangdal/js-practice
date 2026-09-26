/**
 * Problem 23: Object Diff and Patch Engine (JSON Patch RFC 6902 style)
 *
 * Description:
 * Implement two functions:
 * 1. `generatePatch(objA, objB)`: Compares two objects and returns an array of patch operations
 *    ({ op: 'add' | 'remove' | 'replace', path: '/a/b', value?: ... }).
 * 2. `applyPatch(objA, patches)`: Applies patch operations to objA and returns the transformed object.
 */

function generatePatch(objA, objB) {
  // TODO: Implement your solution here
}

function applyPatch(objA, patches) {
  // TODO: Implement your solution here
}

// Test cases
const source = { a: 1, b: { c: 2 }, d: [1, 2] };
const target = { a: 10, b: { c: 2, e: 3 } };

const patch = generatePatch(source, target);
console.log("Generated patch:", patch);

const reconstructed = applyPatch(source, patch);
console.log("Reconstructed matches target:", JSON.stringify(reconstructed) === JSON.stringify(target));
