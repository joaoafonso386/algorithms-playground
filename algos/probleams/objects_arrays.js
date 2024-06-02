let instructor = {
  firstName: "João",
  lastName: "Cardoso",
  favoriteNumbers: [7, 17, 10],
};

// Objec.keys --> O(n)
// Objec.values --> O(n)
// Objec.entries --> O(n)
// instructor.hasOwnProperty --> O(1)

let arrNames = ["Jorge", "Carlos", "Miguel"];

//push and pop O(1), shift and unshift O(n) --> quando adicionas um elemento no incio de um array tens de reindexar todos os elementos o que é stress p performance
