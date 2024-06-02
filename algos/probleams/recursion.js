// Write factorial using recursion
// Factorial is the sum of multiplication of all the integers smaller than that positive integer
// Factorial of 4 is 4 * 3 * 2 * 1 = 24

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5002));
