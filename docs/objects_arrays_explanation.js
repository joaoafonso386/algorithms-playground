/**
 * 
 * Time complexity for Object methods
 * 
 * Objec.keys --> O(n)
 * Objec.values --> O(n)
 * Objec.entries --> O(n)
 * instructor.hasOwnProperty --> O(1)
 *
 */

let instructor = {
  firstName: "João",
  lastName: "Cardoso",
  favoriteNumbers: [7, 17, 10],
};


/**
 * 
 * Array methods - push and pop O(1) VS shift and unshift O(n) 
 * 
 * When we add an element to the beginning of an array, you have to reindex all elements
 * Which makes shift and unshift less performant compared to push and pop (hence, the O(1) vs O(n))
 * 
 */

let arrNames = ["Jorge", "Carlos", "Miguel"];
