/**
 * Problem 28: Micro Template Engine with Variables and Conditionals
 *
 * Description:
 * Implement a simple template parser `renderTemplate(template, data)` supporting:
 * 1. Variable interpolation: `Hello {{ user.name }}!`
 * 2. Conditional blocks:
 *    `{{#if isLoggedIn}}Welcome back, {{ user.name }}!{{else}}Please sign in.{{/if}}`
 */

function renderTemplate(template, data) {
  // TODO: Implement your solution here
}

// Test cases
const tpl1 = "Hello, {{ name }}! You have {{ unreadCount }} new messages.";
console.log(renderTemplate(tpl1, { name: "Alice", unreadCount: 5 }));
// Expected: "Hello, Alice! You have 5 new messages."

const tpl2 = "{{#if isVip}}VIP Member: {{ name }}{{else}}Standard User: {{ name }}{{/if}}";
console.log(renderTemplate(tpl2, { isVip: true, name: "Bob" }));
// Expected: "VIP Member: Bob"
console.log(renderTemplate(tpl2, { isVip: false, name: "Bob" }));
// Expected: "Standard User: Bob"
