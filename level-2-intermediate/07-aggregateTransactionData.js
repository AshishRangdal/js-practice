/**
 * Problem 07: Aggregate Transaction Data
 *
 * Description:
 * Given a list of transactions (each with category, amount, type: 'credit' | 'debit'),
 * calculate the total net balance, total credits, total debits, and a breakdown of spending by category.
 *
 * Example:
 * const txs = [
 *   { category: "groceries", amount: 50, type: "debit" },
 *   { category: "salary", amount: 2000, type: "credit" },
 *   { category: "groceries", amount: 30, type: "debit" },
 *   { category: "entertainment", amount: 20, type: "debit" }
 * ];
 */

function aggregateTransactions(transactions) {
  // TODO: Implement your solution here

  // 1 approach
  const result = {
    netBalance: 0,
    totalCredit: 0,
    totalDebit: 0,
    categoryBreakdown: {},
  };
  for (let item of txs) {
    if (item.type === "debit") {
      result.totalDebit += item.amount;
    } else {
      result.totalCredit += item.amount;
    }
    result.categoryBreakdown[item.category] =
      (result.categoryBreakdown[item.category] || 0) + item.amount;
  }
  result.netBalance = result.totalCredit - result.totalDebit;
  return result;
}

// Test cases
const txs = [
  { category: "groceries", amount: 50, type: "debit" },
  { category: "salary", amount: 2000, type: "credit" },
  { category: "groceries", amount: 30, type: "debit" },
  { category: "entertainment", amount: 20, type: "debit" },
];

console.log(aggregateTransactions(txs));
// Expected:
// {
//   netBalance: 1900,
//   totalCredit: 2000,
//   totalDebit: 100,
//   categoryBreakdown: { groceries: 80, entertainment: 20 }
// }
