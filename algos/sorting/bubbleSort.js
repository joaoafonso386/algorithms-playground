/**
 * The Bubble sorting algorithm sorts each number to its last possible place until the array is sorted. It "bubbles" values to the end of the array
 * 
 * Define a function called bubbleSort that takes an array and implements the bubble sorting algorithm. 
 * Return the sorted array at the end
 * 
 * PS: the noSwap variable helps to prevent the algorithm from going when the array is already sorted. 
 *     during the nested loop iteration no swaps where made, then the array is already sorted.
 * 
 */

const bubbleSort = (arr) => {
    for(let i = arr.length - 1; i >= 0; i--) {
        let noSwap = true;
        console.log("i", i)
        for(let j = 0; j < i ; j++) {
            console.log(j)
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwap = false
            }
        }
        if(noSwap) break
    }

    return arr
}

// console.log(bubbleSort([1,2,13,46,34,20,4,5,3,6,10]))
console.log(bubbleSort([8,2,4,5,7]))