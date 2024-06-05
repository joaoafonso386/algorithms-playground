/**
 * 
 * Create a program where the user enters a string, and then calculates and displays the number of characters in that string.
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

console.log(numberOfCharsStr("aaaaaddee!!"));




