/**
 * Problem 14: Batch Async Request Processor (DataLoader Pattern)
 *
 * Description:
 * Implement a batching queue `createBatcher(batchFetchFn, delayMs)` that collects individual
 * calls to `batcher.load(id)` made within a `delayMs` window and issues a single batch call:
 * `batchFetchFn(idsArray)`.
 *
 * Each caller of `batcher.load(id)` receives its specific resolved value from the batch result.
 */

function createBatcher(batchFetchFn, delayMs = 50) {
  // TODO: Implement your solution here
}

// Test cases
const mockBatchApi = async (ids) => {
  console.log(`Batch API called with IDs: [${ids.join(", ")}]`);
  return ids.map((id) => ({ id, name: `User-${id}` }));
};

const userBatcher = createBatcher(mockBatchApi, 20);

// Individual requests triggered concurrently
userBatcher.load(1).then((user) => console.log("User 1:", user));
userBatcher.load(2).then((user) => console.log("User 2:", user));
userBatcher.load(3).then((user) => console.log("User 3:", user));
// Expected: Only 1 Batch API call with IDs: [1, 2, 3]
