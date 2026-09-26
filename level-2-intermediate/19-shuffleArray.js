/**
 * Problem 19: Fisher-Yates Array Shuffle
 *
 * Description:
 * Implement the Fisher-Yates (Knuth) shuffle algorithm to randomly shuffle an array.
 * The shuffle should be in-place or return a new uniformly shuffled array.
 *
 * Properties:
 * Every permutation should have an equal probability of occurring.
 */

function shuffleArray(arr) {
  // TODO: Implement your solution here
}

// Test cases
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = shuffleArray([...original]);
console.log("Original:", original);
console.log("Shuffled:", shuffled);
console.log("Length preserved:", shuffled.length === original.length);
console.log("Elements preserved:", shuffled.sort().join(",") === original.sort().join(","));
