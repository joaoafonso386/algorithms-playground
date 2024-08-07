/**
 * 
 * @function merge
 * @description merges 2 sorted arrays into 1 sorted array. Takes into account if the arrays are of different lengths.
 * Use && (i < arr1.length && j < arr2.length) to make sure you are not getting out of bounds of one of the arrays since they can have different lengths
 * This is will make it stop when you reach the end of the shortest array
 * After that, push the remaining of the longest array in the 2 while loops after. These loops just check if there are still items in one of the arrays and push them
 * 
 *   
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number[]}
 * 
 */

const  merge = (arr1, arr2) => {
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
    return results;
}

console.log(merge([1,2,4,5], [8,10,14,21,43,48,65,79]))


/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */

const mergeSort = (arr) => {
    
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}

console.log(mergeSort([3,38,5,20,15,1,47]))


