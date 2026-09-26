/**
 * Problem 12: Senior Event Loop Complex Quiz
 *
 * Task:
 * Trace the execution order of all logged statements across Node.js microtask/macrotask queues
 * (queueMicrotask, Promise, setTimeout, async/await).
 *
 * Write down your predicted output order in `predictedOrder`.
 */

function runSeniorEventLoopQuiz() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
    queueMicrotask(() => console.log("3"));
  }, 0);

  queueMicrotask(() => {
    console.log("4");
    Promise.resolve().then(() => console.log("5"));
  });

  (async () => {
    console.log("6");
    await Promise.resolve();
    console.log("7");
  })();

  Promise.resolve()
    .then(() => {
      console.log("8");
    })
    .then(() => {
      console.log("9");
    });

  console.log("10");
}

// TODO: Fill in your predicted array
const predictedOrder = [
  // Fill in order here
];

console.log("Your prediction:", predictedOrder);
// Expected order: ["1", "6", "10", "4", "7", "8", "5", "9", "2", "3"]
