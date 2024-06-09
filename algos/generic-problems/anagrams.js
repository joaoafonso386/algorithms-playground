/**
 * 
 * Given two strings 
 * Write a function to determine if the second string is an anagram of the first
 * An anagram is a word, a phrase, or a name formed by rearranging the letters of another, such as  cinema, formed from iceman. 
 * 
 */

const validAnagram = (string1, string2) => {
  //check if the same chars in string1 are present in string2
  const sortedString1 = string1.split("").sort();
  const sortedString2 = string2.split("").sort();

  const isIncluded = sortedString1.every(
    (char, index) => char === sortedString2[index]
  );

  return isIncluded
};

validAnagram("anagram", "nagaram");

//Using frequency counter pattern
const validAnagramFC = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  let dictionaryStr1 = {};

  for (let char of first) {
    dictionaryStr1[char] = (dictionaryStr1[char] || 0) + 1;
  }

  for (let char of second) {
    if (!dictionaryStr1[char]) {
      console.log(false);
    } else {
      dictionaryStr1[char] -= 1;
    }
  }

};

validAnagramFC("azz", "zaa");
