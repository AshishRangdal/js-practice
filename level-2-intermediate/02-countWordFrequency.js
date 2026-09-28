/**
 * Problem 02: Word Frequency Counter (Case & Punctuation Insensitive)
 *
 * Description:
 * Write a function that takes a text paragraph and returns a frequency map of each word.
 * The counting should be case-insensitive and ignore punctuation (e.g. dots, commas, exclamation marks).
 *
 * Example:
 * Input: "Hello world, hello JavaScript! Welcome to the world."
 * Output: { hello: 2, world: 2, javascript: 1, welcome: 1, to: 1, the: 1 }
 */

function countWordFrequency(text) {
  // TODO: Implement your solution here
  return text
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .reduce((result, word) => {
      result[word] = (result[word] || 0) + 1;
      return result;
    }, {});
}

// Test cases
const text = "Hello world, hello JavaScript! Welcome to the world.";
console.log(countWordFrequency(text));
// Expected: { hello: 2, world: 2, javascript: 1, welcome: 1, to: 1, the: 1 }
