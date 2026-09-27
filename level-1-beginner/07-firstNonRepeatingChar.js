/**
 * Problem 07: Find First Non-Repeating Character
 *
 * Description:
 * Write a function that takes a string and finds the first character that does not repeat.
 * If all characters repeat, return null.
 *
 * Example:
 * Input: "aabbcdde" -> Output: "c"
 * Input: "swiss" -> Output: "w"
 * Input: "aabb" -> Output: null
 */

function firstNonRepeatingChar(str) {
  // TODO: Implement your solution here
  const mp = new Map();

  for (const ch of str) {
    mp.set(ch, (mp.get(ch) || 0) + 1);
  }

  // 1 approach
  // for(const [key, value] of mp){
  //   if(value === 1){
  //     return key
  //   }
  // }

  // 2 approach
  const keys = [...mp.keys()];
  const values = [...mp.values()];

  for (let it = 0; it < values.length; it++) {
    if (values[it] === 1) {
      return keys[it];
    }
  }
  return null;
}

// Test cases
console.log(firstNonRepeatingChar("aabbcdde")); // Expected: "c"
console.log(firstNonRepeatingChar("swiss")); // Expected: "w"
console.log(firstNonRepeatingChar("aabb")); // Expected: null
