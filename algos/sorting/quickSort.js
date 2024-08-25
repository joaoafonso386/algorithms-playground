/**
 * 
 */

const pivot = (arr, start = 0, end = arr.length - 1) => {

    const swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pivot = arr[start]
    let swapIndex = start

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }

}

const quickSort = () => {

}