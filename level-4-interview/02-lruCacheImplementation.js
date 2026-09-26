/**
 * Problem 02: LRU (Least Recently Used) Cache
 *
 * Description:
 * Design and implement a data structure for a Least Recently Used (LRU) Cache.
 *
 * Methods:
 * - `get(key)`: Returns the value of the key if it exists in the cache, otherwise `-1`.
 * - `put(key, value)`: Update or insert the value. When the cache reaches its `capacity`,
 *   it must invalidate and evict the least recently used item before inserting the new item.
 *
 * Constraints:
 * Both `get` and `put` operations must run in O(1) average time complexity.
 */

class LRUCache {
  constructor(capacity) {
    // TODO: Implement your solution here
  }

  get(key) {
    // TODO: Implement your solution here
  }

  put(key, value) {
    // TODO: Implement your solution here
  }
}

// Test cases
const cache = new LRUCache(2);
cache.put(1, 1); // cache is {1=1}
cache.put(2, 2); // cache is {1=1, 2=2}
console.log(cache.get(1)); // returns 1
cache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // LRU key was 1, evicts key 1, cache is {3=3, 4=4}
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
