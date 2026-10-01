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
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// Test cases
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = shuffleArray([...original]);
console.log("Original:", original);
console.log("Shuffled:", shuffled);
console.log("Length preserved:", shuffled.length === original.length);
console.log("Elements preserved:", shuffled.sort().join(",") === original.sort().join(","));
