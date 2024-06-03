/**
 * Use the Multiple Pointers pattern to solve the challange
 *
 * take the first and last element of the array to make the calculations needed
 * don't go for a O(n^2) solution -- nested for loop
 * function takes a sorted array as parameter
 * 
 */

function countUniqueValues(array) {
  //if the current is different then the next increment the counter
  //else do nothing
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    const next = array[i + 1];
    const current = array[i];
    if (current !== next) {
      counter++;
    }
  }

  return counter;
}

const test = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; //6
const counter = countUniqueValues(test);
console.log(counter);


