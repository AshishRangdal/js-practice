/**
 * Problem 16: Event Loop Output Prediction Quiz 1
 *
 * Task:
 * Analyze the code snippet below and determine the exact order of console.log outputs.
 * Write down your predicted output sequence in the array `predictedOrder`.
 */

function runEventLoopSample1() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => {
      console.log("3");
    });
  }, 0);

  Promise.resolve().then(() => {
    console.log("4");
  }).then(() => {
    console.log("5");
  });

  setTimeout(() => {
    console.log("6");
  }, 0);

  console.log("7");
}

// TODO: Fill in your predicted log sequence as strings in the array below
const predictedOrder = [
  // e.g., "1", "7", ...
];

console.log("Your prediction:", predictedOrder);
// Expected order: ["1", "7", "4", "5", "2", "3", "6"]
