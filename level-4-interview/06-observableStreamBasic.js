/**
 * Problem 06: Minimal Observable / Reactive Stream Implementation
 *
 * Description:
 * Build a minimal `Observable` class that supports:
 * - Constructor taking a subscribe function: `new Observable(subscriber => ...)`
 * - `.subscribe(observer)` where observer has `next(val)`, `error(err)`, `complete()`
 * - Operators:
 *   - `.map(fn)`
 *   - `.filter(predicate)`
 */

class Observable {
  constructor(subscribe) {
    // TODO: Implement your solution here
  }

  subscribe(observer) {
    // TODO: Implement your solution here
  }

  map(fn) {
    // TODO: Implement your solution here
  }

  filter(predicate) {
    // TODO: Implement your solution here
  }
}

// Test cases
const stream = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.complete();
});

stream
  .filter((x) => x % 2 === 0)
  .map((x) => x * 10)
  .subscribe({
    next: (val) => console.log("Received:", val), // Expected: 20, 40
    complete: () => console.log("Stream Complete")
  });
