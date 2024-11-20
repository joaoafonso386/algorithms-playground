/**
 *
 * A Hash Table is:
 * - A data structure that maps keys to values for efficient lookups.
 * - Uses a hash function to compute an index for storing keys in an array.
 * - Offers average O(1) time complexity for insert, delete, and lookup operations.
 * - Handles collisions using methods like separate chaining (store multiple values in each position) or linear probing (1 value for each position).
 * - Commonly used for implementing caches, dictionaries, and sets.
 *
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + val) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }
    this.keyMap[hash].push([key, val]);
  }

  get(key) {
    const hash = this._hash(key);
    let entries = this.keyMap[hash];
    if (!entries) return undefined;
    for (let [k, v] of entries) {
        if (k === key) return [k, v];
    }
    return undefined;
  }
}

const ht = new HashTable(10);
ht.set("one", 34);
ht.set("two", 18);
ht.set("three", 25);
ht.set("four", 90);
ht.set("five", 90);
ht.set("five2", 190);
console.log(ht.get("three"));
console.log(ht.keyMap);
