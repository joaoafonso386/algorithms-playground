/**
 * 
 * Create a program where the user enters a string, and then calculates and displays the number of characters in that string.
 * 
 */

export const numberOfCharsStr = (string) => {
    let output = {};
    for (let char of string) {
        output[char] = output[char] ? output[char] + 1 : 1;
    }

    return output;
}

console.log(numberOfCharsStr("aaaaaddee!!"));




