/**
 * Problem 13: Pivot Object Data (Pairs to Object & Object to Pairs)
 *
 * Description:
 * Write two conversion utilities:
 * 1. `entriesToObject(entries)`: Converts an array of [key, value] pairs into an object (without Object.fromEntries).
 * 2. `objectToEntries(obj)`: Converts an object into an array of [key, value] pairs (without Object.entries).
 */

function entriesToObject(entries) {
  // TODO: Implement your solution here
  return entries.reduce((acc,[key,value])=>{
      acc[key] = value
      return acc
  },{})
}

function objectToEntries(obj) {
  // TODO: Implement your solution here
  const result = []
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for(let i =0;i<keys.length; i++){
    result.push([keys[i],values[i]]);
  }
  return result
}

// Test cases
const sampleEntries = [["a", 1], ["b", 2], ["c", 3]];
const sampleObj = { a: 1, b: 2, c: 3 };

console.log(entriesToObject(sampleEntries)); // Expected: { a: 1, b: 2, c: 3 }
console.log(objectToEntries(sampleObj)); // Expected: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
