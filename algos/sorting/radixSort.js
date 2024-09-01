/**
 * 
 * Returns the digit in num at the given position provided. The solution bellow is guaranteed O(1) time complexity (most solutions are O(n)/O(log n))
 * 
 * Ex: getDigit(12345, 0); // returns 5
 * 
 * 
 * @param {number} num 
 * @param {number} position 
 * @returns {number} digit
 */

const getDigit = (num, position) => {
    return Math.floor(Math.abs(num) / Math.pow(10, position) % 10)
} 

console.log(getDigit(8582,3))

const digitCount = (num) => {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1 
}

console.log(digitCount(423))

/**
 * 
 * @returns 
 */

const radixSort = () => {
    return
}