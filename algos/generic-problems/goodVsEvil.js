/**
 * 
 * Given two strings representing the number of units of different types of good and evil forces
 * determine the outcome of a battle between them.
 * 
 */

export const goodVsEvil = (good, evil) => {
    //remove spaces
    const filterGood = good.split(" ");
    const filterEvil = evil.split(" ");
  
    //sum all numbers
    const sumGood = filterGood.reduce((prev, curr) => +prev + +curr, 0);
    const sumEvil = filterEvil.reduce((prev, curr) => +prev + +curr, 0);
  
    //return string according values
    if (sumGood > sumEvil) {
      return "Battle Result: Good triumphs over Evil";
    }
  
    if (sumGood < sumEvil) {
      return "Battle Result: Evil eradicates all trace of Good";
    }
  
    return "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil("1 2 3 4", "5 5 5 5"))