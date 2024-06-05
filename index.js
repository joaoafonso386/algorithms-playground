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
