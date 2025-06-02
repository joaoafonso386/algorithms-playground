/**
 * 
 * Maximum Length Substring With Two Occurrences
 * Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.
 * maximumLengthSubstring("bcbbbcba") //4 -> The following substring has a length of 4 and contains at most two occurrences of each character: "bcba"
 * maximumLengthSubstring("aaaa") //2 -> The following substring has a length of 2 and contains at most two occurrences of each character: "aa".
 * 
 * Source problem: Leetcode 3090 https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/?envType=problem-list-v2&envId=sliding-window
 * 
 */

const maximumLengthSubstring = (s) => {
    let ans = 0, j = 0; 
    const freq = new Map(); 
    for (const [i, ch] of s.split('').entries()) {
        freq.set(ch, 1 + (freq.get(ch) ?? 0)); 
        //freq.get(ch) == 3 means window is invalid
        while (freq.get(ch) == 3) {
            //move window to the right (j is left pointer, i is right) and make window valid again. Update frequency of the removed char
            freq.set(s[j], freq.get(s[j])-1); 
            ++j; 
        }
        //i - j + 1 calculates the length of the string
        ans = Math.max(ans, i-j+1); 
    }
    return ans; 
    
};


console.log(maximumLengthSubstring("bcbbbcba"))
console.log(maximumLengthSubstring("aaaa"))