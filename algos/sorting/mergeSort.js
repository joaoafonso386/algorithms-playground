/**
 * 
 * 
 */

// const mergeSort = (arr) => {

// }


// console.log(mergeSort([3,44,38,5,47,15,36]))


const merge = (arr1, arr2) => {
    const final = []
    let i = 0
    let j = 0

    while(i < arr1.length || j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            final.push(arr1[i])
            i++
        } else {
            final.push(arr2[j])
            j++
        } 
        console.log(arr1[i], arr2[j])
    }

    return final


}

console.log(merge([1,10,50], [2,14,99,100]))