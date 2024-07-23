/**
 *
 * Write factorial using recursion
 * Factorial is the sum of multiplication of all the integers smaller than that positive integer
 * Factorial of 4 is 4 * 3 * 2 * 1 = 24
 * 
 */

export const factorialIterative = (num) => {
  let total = 1
  for(let i = 1; i <= num; i++) {
    total *= i 
  }
  return total
}

export const factorialRecursive = (num) => {
  if (num === 1) return 1;
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(10));
console.log(factorialIterative(10));
