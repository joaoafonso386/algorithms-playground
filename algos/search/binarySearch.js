/**
 * 
 * Binary Search only works on sorted arrays!
 * It is also good to use in cases of a big complete array (pagination kills this)
 */

/** 
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
 * This algorithm should be more efficient than linearSearch - you can read how to implement it here:
 * 
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
 * https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 *  
 */


const binarySearch = (arr, val) => {
    let start = 0
    let end = arr.length - 1
    let mid = Math.round((start + end) / 2)
    console.log(mid)

    while(arr[mid] !== val && start <= end) {
        if(val < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }

        mid = Math.round((start + end) / 2)
        console.log(mid)
    }

    return arr[mid] === val ? mid : -1

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1))