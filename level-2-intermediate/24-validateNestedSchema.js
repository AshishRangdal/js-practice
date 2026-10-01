/**
 * Problem 24: Validate Object Schema
 *
 * Description:
 * Write a function `validateSchema(obj, schema)` that validates an object against a schema definition.
 * Schema specifies expected types ('string', 'number', 'boolean', 'object', 'array') and `required` flags.
 * Returns `{ valid: boolean, errors: string[] }`.
 *
 * Example:
 * const schema = {
 *   name: { type: 'string', required: true },
 *   age: { type: 'number', required: true },
 *   isActive: { type: 'boolean', required: false }
 * };
 */

function validateSchema(obj, schema) {
  // TODO: Implement your solution here
  const errors = [];
  for (const key in schema) {
    const { type, required } = schema[key];
    if (required && !(key in obj)) {
      errors.push(`Field "${key}" is required`);
    } else if (key in obj && typeof obj[key] !== type) {
      errors.push(`Field "${key}" must be of type ${type}`);
    }
  }
  return { valid: errors.length === 0, errors };
}

// Test cases
const schema = {
  name: { type: 'string', required: true },
  age: { type: 'number', required: true },
  isActive: { type: 'boolean', required: false }
};

console.log(validateSchema({ name: "Alice", age: 25 }, schema));
// Expected: { valid: true, errors: [] }

console.log(validateSchema({ name: "Bob", age: "thirty" }, schema));
// Expected: { valid: false, errors: ['Field "age" must be of type number'] }
