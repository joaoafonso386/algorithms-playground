/**
 * 
 * @function pivot
 * @description
 * the pivot function compares a pivot (first element in the array in this case) with the current iterated element (arr[i]) and adds a swapIndex that default to the start (swapIndex = start)
 * if pivot > arr[i] then we swap the arr[swapIndex] with arr[i]
 * at the end, swap the element in the swapIndex position (arr[swapIndex]) with arr[start]
 * return the index
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

/**
 * 
 * @function quickSort
 * @description
 * in quick sort, similar to merge sort, we split the array on the pivot point into 2 smaller arrays
 * we sort the left side first until the end recursively and then the right side recursively as well (see merge sort explanation pic in docs/)
 * 
 * Time Complexity: O(n log n)
 *                   log n comes from splitting the array into smaller arrays recursively
 *                   the n comes from the merge function witch is O(n)
 *                   that results in O(n log n)
 * 
 * Space Complexity: O(n log n)
 * 
 *
 * @param {number[]} arr 
 * @param {number} start 
 * @param {number} end 
 * @returns {number[]} arr
 * 
 */

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

console.log(quickSort([4,8,2,1,5,7,6,3]))