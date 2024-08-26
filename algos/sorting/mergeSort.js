/**
 * 
 * @function merge
 * @description 
 * merges 2 sorted arrays into 1 sorted array. Takes into account if the arrays are of different lengths.
 * use && (i < arr1.length && j < arr2.length) to make sure you are not getting out of bounds of one of the arrays since they can have different lengths
 * this is will make it stop when you reach the end of the shortest array
 * after that, push the remaining of the longest array in the 2 while loops after. These loops just check if there are still items in one of the arrays and push them
 * 
 * Time Complexity: O(n)
 *   
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number[]}
 * 
 */

const  merge = (arr1, arr2) => {
    console.debug("mergeFunc inputs", arr1, arr2)
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    console.debug("mergeFunc results", results)
    return results;
}

/**
 * 
 * @function mergeSort
 * @description
 * for a step by step example look at folder assets/mergeSortExplanation.png and follow the numbers to visualize the algorithm
 * split the original array in half -> got to left side of the array -> complete left recursion -> return a merge -> complete right recursion -> return another merge -> merge the 2 merges until the array gets sorted
 * go to the right side of the array ->  complete left recursion -> return a merge -> complete right recursion -> return another merge -> merge the 2 merges until the array gets sorted
 * 
 * Time Complexity: O(n log n)
 *                  log n comes from splitting the array into smaller arrays recursively
 *                  the n comes from the merge function witch is O(n)
 *                  that results in O(n log n)
 * 
 * Space Complexity: O(n)
 *                   if the array to merge sort gets larger, we store more arrays (as we recursively call mergeSort) having the need for more space
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 * 
 */

const mergeSort = (arr) => {
    console.debug("mergeSort", arr)
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}

console.log(mergeSort([3,38,5,9,14,91,20,15,1,47]))


