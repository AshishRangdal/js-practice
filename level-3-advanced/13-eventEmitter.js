/**
 * Problem 13: Custom EventEmitter Implementation
 *
 * Description:
 * Build a custom `EventEmitter` class supporting:
 * - `on(eventName, listener)`: Registers a listener
 * - `off(eventName, listener)`: Unregisters a specific listener
 * - `emit(eventName, ...args)`: Triggers all listeners for the event with arguments
 * - `once(eventName, listener)`: Registers a one-time listener that removes itself after execution
 */

class EventEmitter {
  constructor() {
    // TODO: Implement your solution here
  }

  on(eventName, listener) {
    // TODO: Implement your solution here
  }

  off(eventName, listener) {
    // TODO: Implement your solution here
  }

  emit(eventName, ...args) {
    // TODO: Implement your solution here
  }

  once(eventName, listener) {
    // TODO: Implement your solution here
  }
}

// Test cases
const emitter = new EventEmitter();
const onUserLogin = (name) => console.log(`User logged in: ${name}`);

emitter.on("login", onUserLogin);
emitter.emit("login", "Alice"); // Expected: "User logged in: Alice"

emitter.once("welcome", (msg) => console.log(`Welcome message: ${msg}`));
emitter.emit("welcome", "Hello!"); // Expected: "Welcome message: Hello!"
emitter.emit("welcome", "Hello again!"); // Nothing should be logged (once)

emitter.off("login", onUserLogin);
emitter.emit("login", "Bob"); // Nothing logged (unregistered)
