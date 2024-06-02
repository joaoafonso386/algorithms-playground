// Write a function that accepts an array and a value
// Loop through the entire array and check if the current array element is equal to the value
// If it is, return the index at witch the element is found
// If the value is not found, return -1

// function linearSearch(array, value) {}

Array.prototype.linearSearch = function (value) {
  const array = this;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (current === value) return i;
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5, 6];

const index = arr.linearSearch(3);
console.log(index);
