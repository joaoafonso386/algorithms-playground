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
    }

    return final


}

function merge2(arr1, arr2){
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


const mergeSort = (arr) => {

    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}


console.log(mergeSort([3,38,5,20,15,1,47]))


