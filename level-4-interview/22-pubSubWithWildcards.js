/**
 * Problem 22: Publish-Subscribe System with Wildcard Topics
 *
 * Description:
 * Implement a Publish/Subscribe system supporting hierarchical topics and wildcards:
 * - `*` matches a single topic segment (e.g. `"user.*"` matches `"user.login"`, `"user.logout"`)
 * - `#` matches zero or more topic segments (e.g. `"order.#"` matches `"order.item.add"`, `"order.created"`)
 *
 * Methods:
 * - `subscribe(pattern, callback)`: returns an unsubscribe function
 * - `publish(topic, data)`: invokes matching subscriber callbacks
 */

class WildcardPubSub {
  constructor() {
    // TODO: Implement your solution here
  }

  subscribe(pattern, callback) {
    // TODO: Implement your solution here
  }

  publish(topic, data) {
    // TODO: Implement your solution here
  }
}

// Test cases
const ps = new WildcardPubSub();
ps.subscribe("user.*", (data, topic) => console.log(`[user.*] matched ${topic}:`, data));
ps.subscribe("system.#", (data, topic) => console.log(`[system.#] matched ${topic}:`, data));

ps.publish("user.login", { userId: 42 }); // Matches user.*
ps.publish("user.profile.update", { name: "Bob" }); // Does NOT match user.* (2 segments)
ps.publish("system.auth.token.refresh", { status: "OK" }); // Matches system.#
