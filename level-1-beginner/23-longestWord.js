/**
 * Problem 23: Find Longest Word in a Sentence
 *
 * Description:
 * Write a function that takes a sentence string and returns the longest word in it.
 * If there are multiple words of the same maximum length, return the first one found.
 *
 * Example:
 * Input: "The quick brown fox jumped over the lazy dog" -> Output: "jumped"
 */

function findLongestWord(sentence) {
  // TODO: Implement your solution here
  let idx=0;
  const words = sentence.trim().split(" ");
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > words[idx].length) {
      idx = i;
    }
  }
  return words[idx];
}

// Test cases
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Expected: "jumped"
console.log(findLongestWord("Coding in JavaScript is awesome")); // Expected: "JavaScript"
console.log(findLongestWord("One two three")); // Expected: "three"
