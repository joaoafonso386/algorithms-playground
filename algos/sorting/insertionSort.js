/**
 * @function insertionSort
 * @description Insertion sort builds a sorted portion of the array and then we have to position the element we are comparing in the correct place of that sorted portion.
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * 
 * Visual representation: Ex: [41,4,19,5,3]  (look at the code)
 *    
 *   When i = 1, On the first inner loop iteration (j), arr[i] = 4, arr[j] = 41, curr = 4
 *   We start by checking if arr[j] > curr which is true - we compare to curr because if it was arr[i] we would loose reference of the position of the element in the array
 *   We then swap 41 with 4 -> [4,41,19,5,3]
 *   There is no second inner loop iteration since j >= 0 condition will not be fulfilled
 *                
 *   When i = 2, On the first inner loop iteration (j), arr[i] = 19, arr[j] = 41, curr = 19
 *   We start by checking if arr[j] > curr which is true
 *   We then swap 19 with 41 -> [4,19,41,5,3]
 *   There is no second inner loop iteration since the arr[j] > curr condition will not be fulfilled (arr[j] = 4 and curr = 19, arr[i] = 41 for reference)
 *
 *   When i = 3, On the first inner loop iteration (j), arr[i] = 5, arr[j] = 41, curr = 5
 *   We start by checking if arr[j] > curr which is true
 *   We then swap 5 with 41 -> [4,19,5,41,3]
 *   There is a second inner loop iteration since the arr[j] > curr condition will be fulfilled (arr[j] = 19, curr = 5)
 *   We then swap 5 with 19 -> [4,5,19,41,3]
 *   There is no third inner loop iteration since the arr[j] > curr condition will not be fulfilled (arr[j] = 4, curr = 5)
 * 
 *   When i = 4, On the first inner loop iteration (j), arr[i] = 3, arr[j] = 41, curr = 3
 *   We start by checking if arr[j] > curr which is true
 *   We then swap 3 with 41 -> [4,5,19,3,41]
 *   There is a second inner loop iteration since the arr[j] > curr condition will be fulfilled (arr[j] = 19, curr = 3)
 *   We then swap 3 with 19 -> [4,5,3,19,41]
 *   There is a third inner loop iteration since the arr[j] > curr condition will be fulfilled (arr[j] = 5, curr = 3)
 *   We then swap 3 with 5 -> [4,3,5,19,41]
 *   There is a forth inner loop iteration since the arr[j] > curr condition will be fulfilled (arr[j] = 4, curr = 3)
 *   We then swap 3 with 4 -> [3,4,5,19,41]
 *   There is no fifth inner loop iteration since j >= 0 condition will not be fulfilled
 * 
 *   @IMPORTANT We have to use curr = arr[i] at the beginning because when we swap, arr[i] will change so we save the initial value saved in curr. We are always compering j to curr, but j is the only element moving in each inner iteration 
 * 
 * 
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 * 
 */

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        const curr = arr[i]
        for(let j = i - 1; j >= 0 && arr[j] > curr; j--) {
            arr[j + 1] = arr[j]
            arr[j] = curr
        }
    }
    return arr
}


console.log(insertionSort([41,4,19,5,3]))