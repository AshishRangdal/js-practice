/**
 * Problem 07: Virtual DOM JSON Tree Renderer
 *
 * Description:
 * Write a function `renderVNodeToHTML(vNode)` that converts a Virtual DOM representation
 * into an HTML string.
 *
 * VNode structure:
 * {
 *   tag: 'div',
 *   props: { id: 'container', className: 'box' },
 *   children: [
 *     'Hello, ',
 *     { tag: 'span', props: { style: 'color: red' }, children: ['World'] }
 *   ]
 * }
 *
 * Expected HTML output:
 * '<div id="container" class="box">Hello, <span style="color: red">World</span></div>'
 */

function renderVNodeToHTML(vNode) {
  // TODO: Implement your solution here
}

// Test cases
const vNode = {
  tag: "div",
  props: { id: "main", className: "card" },
  children: [
    "Title: ",
    { tag: "h1", props: {}, children: ["Hello Virtual DOM"] },
    { tag: "p", props: { class: "lead" }, children: ["This is a test paragraph."] }
  ]
};

console.log(renderVNodeToHTML(vNode));
// Expected: '<div id="main" class="card">Title: <h1>Hello Virtual DOM</h1><p class="lead">This is a test paragraph.</p></div>'
