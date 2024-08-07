/**
 * 
 * @function merge
 * @description merges 2 sorted arrays into 1 sorted array. Takes into account if the arrays are of different lengths.
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
        console.log(i < arr1.length || j < arr2.length, arr2.length, arr1.length, arr1, arr2)
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            console.log("j", j, "val j", arr2[j], "i", i, "val i", arr1[i])
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


const mergeSort = (arr) => {
    
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}

console.log(mergeSort([3,38,5,20,15,1,47]))


