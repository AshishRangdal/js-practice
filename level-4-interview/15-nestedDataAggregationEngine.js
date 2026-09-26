/**
 * Problem 15: Nested Multi-Level Data Aggregation Engine
 *
 * Description:
 * Write an aggregation function `aggregateData(records, groupByFields, metrics)`
 * that performs multi-level hierarchical grouping and computes summary metrics
 * (such as 'sum', 'avg', 'count', 'min', 'max') at each level.
 *
 * Example:
 * const sales = [
 *   { region: "North", department: "Electronics", revenue: 100, units: 2 },
 *   { region: "North", department: "Electronics", revenue: 200, units: 3 },
 *   { region: "South", department: "Clothing", revenue: 50, units: 1 }
 * ];
 */

function aggregateData(records, groupByFields, metrics) {
  // TODO: Implement your solution here
}

// Test cases
const sales = [
  { region: "North", department: "Electronics", revenue: 100, units: 2 },
  { region: "North", department: "Electronics", revenue: 200, units: 3 },
  { region: "South", department: "Clothing", revenue: 50, units: 1 }
];

console.log(JSON.stringify(
  aggregateData(sales, ["region", "department"], { totalRevenue: ["revenue", "sum"], avgUnits: ["units", "avg"] }),
  null,
  2
));
