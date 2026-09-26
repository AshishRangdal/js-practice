/**
 * Problem 19: DAG (Directed Acyclic Graph) Task Dependency Resolver
 *
 * Description:
 * Given a set of async tasks with dependencies:
 * `{ [taskId]: { deps: [depTaskId, ...], run: async () => result } }`
 *
 * Execute all tasks in valid topological dependency order. Tasks whose dependencies are satisfied
 * can execute concurrently in parallel.
 * Throw an error if a circular dependency is detected.
 */

async function executeDAG(tasks) {
  // TODO: Implement your solution here
}

// Test cases
const taskGraph = {
  fetchUser: { deps: [], run: async () => ({ id: 1, name: "Alice" }) },
  fetchOrders: { deps: ["fetchUser"], run: async () => ["Order-A", "Order-B"] },
  fetchPreferences: { deps: ["fetchUser"], run: async () => ({ theme: "dark" }) },
  renderDashboard: { deps: ["fetchOrders", "fetchPreferences"], run: async () => "Dashboard Rendered" }
};

executeDAG(taskGraph).then((results) => {
  console.log("All DAG tasks resolved:", results);
});
