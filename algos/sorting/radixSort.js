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

console.log(getDigit(8582,0))

const digitCount = (num) => {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1 
}

console.log(digitCount(423))

const mostDigits = (arr) => {
    let max = 0;
    for(let num of arr) {
        max = Math.max(max, digitCount(num))
    }
    return max
}

console.log(mostDigits([1234,56,7]))


/**
 * 
 * @returns 
 */

const radixSort = (arr) => {
    let maxDigitCount = mostDigits(arr);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i],k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
        console.debug(arr)
    }
    return arr;
}

console.log(radixSort([23,45,1235,667,34]))