/**
 *  
 * @function bubbleSort
 * @description 
 * The Bubble sorting algorithm sorts each number to its last possible place until the array is sorted.
 * It "bubbles" values to the end of the array
 *
 * Define a function called bubbleSort that takes an array and implements the bubble sorting algorithm. 
 * Return the sorted array at the end
 *
 * PS: The noSwap variable helps to prevent the algorithm from going when the array is already sorted. 
 *     during the nested loop iteration no swaps where made, then the array is already sorted.
 *
 * Time complexity: Worst case O(n^2). Best case (with noSwap) O(n)
 * Space Complexity: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 * 
 */

const bubbleSort = (arr) => {
    for(let i = arr.length - 1; i >= 0; i--) {
        let noSwap = true;
        for(let j = 0; j < i ; j++) {
            console.debug("debug", { j: arr[j], i: arr[i], jPlus: arr[j + 1] })
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwap = false
            }
            console.debug("array order in each iteration", arr)
        }
        if(noSwap) break
    }

    return arr
}

console.log("result", bubbleSort([8,2,4,5,7]))
