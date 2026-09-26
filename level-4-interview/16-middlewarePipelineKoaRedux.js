/**
 * Problem 16: Onion-Model Middleware Pipeline Runner
 *
 * Description:
 * Implement a middleware composer `composeMiddleware(middlewares)` (similar to Koa / Redux).
 * Each middleware has the signature `async (context, next) => { ... await next(); ... }`.
 *
 * Calling the composed pipeline executes middlewares in sequence down the stack and rolls
 * back up in reverse order after awaiting `next()`.
 */

function composeMiddleware(middlewares) {
  // TODO: Implement your solution here
}

// Test cases
const logs = [];
const m1 = async (ctx, next) => {
  logs.push("m1 start");
  ctx.value += 1;
  await next();
  logs.push("m1 end");
};

const m2 = async (ctx, next) => {
  logs.push("m2 start");
  ctx.value *= 2;
  await next();
  logs.push("m2 end");
};

const pipeline = composeMiddleware([m1, m2]);
const context = { value: 5 };

pipeline(context).then(() => {
  console.log("Final context:", context); // Expected value: (5 + 1) * 2 = 12
  console.log("Execution log:", logs); // Expected: ['m1 start', 'm2 start', 'm2 end', 'm1 end']
});
