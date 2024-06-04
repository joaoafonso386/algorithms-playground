/**
 *
 * TIME COMPLEXITY
 *
 * o(n) -> a subir um reta, o numero de operações esta diretamente ligado com o valor de n (linha a subir reta)
 * o(1) -> o numero de operações é sempre o mesmo independentemente do valor de n (flat line)
 * o(n²) -> por cada operação de n, multiplicamos o valor de n (nested loop por ex. Quando i = 0 e n é 5, o loop vai correr 25 vezes pq por cada valor de i, o loop de j vai correr 5 vezes)
 *
 *
 */

/**
 *
 * SPACE COMPLEXITY
 *
 * primitivos têm smp space complexity de O(1) -> booleans, numbers, undefined, null
 * strings, arrays e objectos é O(n) (linear) ->  quanto maior a string/array/obj mais espaço ocupa
 *
 *
 */

function numberOfCharsStr(string) {
  let output = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    output[char] = output[char] ? output[char] + 1 : 1;
  }

  return output;
}

//console.log(numberOfCharsStr("aaaaaddee!!"));

function goodVsEvil(good, evil) {
  //remove spaces
  const filterGood = good.split(" ");
  const filterEvil = evil.split(" ");

  //sum all numbers
  const sumGood = filterGood.reduce((prev, curr) => +prev + +curr);
  const sumEvil = filterEvil.reduce((prev, curr) => +prev + +curr);

  //return string according values
  if (sumGood > sumEvil) {
    return "Battle Result: Good triumphs over Evil";
  }

  if (sumGood < sumEvil) {
    return "Battle Result: Evil eradicates all trace of Good";
  }

  return "Battle Result: No victor on this battle field";
}
