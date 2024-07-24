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

    while(start <= end) {

        let mid = Math.round((start + end) / 2)

        if(arr[mid] === val) return mid;

        if(val < arr[mid]) end = mid - 1
        if(val > arr[mid]) start = mid + 1

    }

    return -1

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,24,56,65,69], 23))

/** Visual explanation of the algorithm when searching for 23 */

// [1,2,3,4,5,6,7,8,9,10,24,56,65,69]
// { start: 0, mid: 7, end: 13 }
// [9,10,24,56,65,69]
// { start: 8, mid: 11, end: 13 }
// [9,10,24]
// { start: 8, mid: 9, end: 10 }
// [24]
// { start: 10, mid: 10, end: 10 }
// return -1
