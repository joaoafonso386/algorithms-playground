/**
 * 
 * A Hash Table is:
 * - A data structure that maps keys to values for efficient lookups.
 * - Uses a hash function to compute an index for storing keys in an array.
 * - Offers average O(1) time complexity for insert, delete, and lookup operations.
 * - Handles collisions using methods like chaining or open addressing.
 * - Commonly used for implementing caches, dictionaries, and sets.
 * 
 */

const hash = (key, length) => {
    let total = 0
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let val = char.charCodeAt(0) - 96 
        total = (total * WEIRD_PRIME + val) % length
    } 

    return total

}
