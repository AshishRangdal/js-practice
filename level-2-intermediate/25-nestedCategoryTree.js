/**
 * Problem 25: Convert Flat Categories List to Tree Hierarchy
 *
 * Description:
 * Write a function that takes a flat array of category items with `id` and `parentId`
 * and converts it into a nested hierarchical tree structure where each parent has a `children` array.
 * Items with `parentId: null` are root nodes.
 *
 * Example:
 * const categories = [
 *   { id: 1, name: "Electronics", parentId: null },
 *   { id: 2, name: "Laptops", parentId: 1 },
 *   { id: 3, name: "Phones", parentId: 1 },
 *   { id: 4, name: "Gaming Laptops", parentId: 2 }
 * ];
 */


function buildCategoryTree(flatList) {
  // TODO: Implement your solution here
  const idToNodeMap = {};
  const tree = [];

  for (const item of flatList) {
    idToNodeMap[item.id] = { ...item, children: [] };
  }

  for (const item of flatList) {
    if (item.parentId === null) {
      tree.push(idToNodeMap[item.id]);
    } else {
      const parentNode = idToNodeMap[item.parentId];
      if (parentNode) {
        parentNode.children.push(idToNodeMap[item.id]);
      }
    }
  }

  return tree;
  
}

// Test cases
const categories = [
  { id: 1, name: "Electronics", parentId: null },
  { id: 2, name: "Laptops", parentId: 1 },
  { id: 3, name: "Phones", parentId: 1 },
  { id: 4, name: "Gaming Laptops", parentId: 2 }
];

console.log(JSON.stringify(buildCategoryTree(categories), null, 2));
// Expected:
// [
//   {
//     "id": 1,
//     "name": "Electronics",
//     "parentId": null,
//     "children": [
//       {
//         "id": 2,
//         "name": "Laptops",
//         "parentId": 1,
//         "children": [
//           { "id": 4, "name": "Gaming Laptops", "parentId": 2, "children": [] }
//         ]
//       },
//       { "id": 3, "name": "Phones", "parentId": 1, "children": [] }
//     ]
//   }
// ]
