/**
 * 
 * Start by creating a pivot function that compares a pivot (first element in the array in this case) with the current iterated element (arr[i]) and add a swapIndex that default to the start (swapIndex = start)
 * If pivot > arr[i] then swap the arr[swapIndex] with arr[i]
 * At the end, swap the element in the swapIndex position (arr[swapIndex]) with arr[start]
 * Return the array
 * 
 * In quick sort, similar to merge sort, we split the array on the pivot point into 2 smaller arrays
 * We sort the left side first until the end recursively and then the right side recursively as well (see merge sort explanation pic in docs/)
 * 
 */


/**
 * 
 * @param {number[]} arr 
 * @param {number} start 
 * @param {number} end 
 * @returns {number} index
 */

const pivot = (arr, start = 0, end = arr.length - 1) => {

    let pivot = arr[start]
    let swapIndex = start

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIndex++
            let temp = arr[swapIndex]
            arr[swapIndex] = arr[i]
            arr[i] = temp
        }
    }

    let temp = arr[start]
    arr[start] = arr[swapIndex]
    arr[swapIndex] = temp
    console.debug("Log array", arr)
    console.debug("Log returned index", swapIndex)
    return swapIndex

}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right) // returns 3
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

console.log(quickSort([4,8,2,1,5,7,6,3]))