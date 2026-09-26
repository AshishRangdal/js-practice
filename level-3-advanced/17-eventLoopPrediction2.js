/**
 * Problem 17: Event Loop Output Prediction Quiz 2 (async/await & microtasks)
 *
 * Task:
 * Analyze the asynchronous execution order and write down your predicted console.log outputs in `predictedOrder`.
 */

async function asyncSample() {
  console.log("A");

  await new Promise((resolve) => {
    console.log("B");
    resolve();
  });

  console.log("C");
}

function runQuiz() {
  console.log("D");

  setTimeout(() => {
    console.log("E");
  }, 0);

  asyncSample();

  new Promise((resolve) => {
    console.log("F");
    resolve();
  }).then(() => {
    console.log("G");
  });

  console.log("H");
}

// TODO: Fill in your prediction
const predictedOrder = [
  // Fill in order here
];

console.log("Your prediction:", predictedOrder);
// Expected order: ["D", "A", "B", "F", "H", "C", "G", "E"]
