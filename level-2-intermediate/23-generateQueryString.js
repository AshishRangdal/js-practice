/**
 * Problem 23: Query String Parser and Builder
 *
 * Description:
 * Write two utility functions:
 * 1. `buildQueryString(params)`: converts an object { page: 1, sort: "desc", filter: "active" }
 *    into "?page=1&sort=desc&filter=active".
 * 2. `parseQueryString(queryString)`: parses "?page=1&sort=desc&filter=active"
 *    back into an object { page: "1", sort: "desc", filter: "active" }.
 */

function buildQueryString(params) {
  // TODO: Implement your solution here
}

function parseQueryString(queryString) {
  // TODO: Implement your solution here
}

// Test cases
const params = { page: "1", sort: "desc", filter: "active" };
const qs = buildQueryString(params);
console.log(qs); // Expected: "?page=1&sort=desc&filter=active" (order of params may vary)
console.log(parseQueryString(qs)); // Expected: { page: '1', sort: 'desc', filter: 'active' }
