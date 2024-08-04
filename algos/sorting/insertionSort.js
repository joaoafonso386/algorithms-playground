/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        const curr = arr[i]
        for(let j = i - 1; j >= 0 && arr[j] > curr; j--) {
            arr[j + 1] = arr[j]
            arr[j] = curr
        }
    }
    return arr
}


console.log(insertionSort([41,4,19,5,2,54,10]))