/**
 * 
 * Start by creating a pivot function that compares a pivot (first element in the array in this case) with the current iterated element (arr[i]) and add a swapIndex that default to the start (swapIndex = start)
 * If pivot > arr[i] then swap the arr[swapIndex] with arr[i]
 * At the end, swap the element in the swapIndex position (arr[swapIndex]) with arr[start]
 * Return the array
 * 
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
    return swapIndex

}

const quickSort = () => {

}

console.log(pivot([4,8,2,1,5,7,6,3]))