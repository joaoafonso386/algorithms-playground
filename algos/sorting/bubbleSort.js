/**
 * 
 * Define a function called bubbleSort that takes an array and implements the bubble sorting algorithm 
 * Return the sorted array at the end
 * 
 */

const bubbleSort = (arr) => {
    for(let i = arr.length - 1; i >= 0; i--) {
        console.log("i",arr[i])
        for(let j = 0; j < i ; j++) {
            console.log("j",arr[j])
            if(arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        console.log(arr)
    }

    return arr
}

console.log(bubbleSort([1,2,13,46,34,20,4,5,3,6,10]))