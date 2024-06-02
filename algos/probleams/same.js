// Write a functions called same, wich accepts two arrays
// The function should return true if every value in the array has it's corresponding value squared in the second array
// the frequency of values must be the same

//same([1,2,3], [4,1,9]) //true
//same([1,2,3], [1,9]) //false
//same([1,2,1], [4,4,1]) //false (must be same frequency)

function same(array1, array2) {
  // o(n) solution
  const squaredArr = array1.map((num) => Math.pow(num, 2));
  let match = false;
  match = squaredArr.every((num, index) => num === array2[index]);

  if (match) return console.log("true");
  return console.log("false");
}

same([2, 4, 4], [4, 16, 16]);
