/**
 *
 * @function selectionSort
 * @description
 * Selection sort finds the index of the minimum value on an iteration and then swaps the current value with the minimum
 * Instead of storing the value we store the index of the val
 * At each outer iteration we define a minimum of the first element (i) and then start comparing in each iteration to see if that minimum is surpassed
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * 
 * 
 * Ex: [1,8,7,2,5] -> to swap 8 with 2 the following happens: (look at the code for this. i starts at 0 and j at i +1 and min = i)
 *     In the first iteration min = 0, then arr[0] > arr[1] makes min = 0
 *     In the second iteration min = 1, then arr[1] > arr[2] makes min = 2
 *     In the next iteration arr[2] > arr[3] makes min = 3
 *     In the last iteration arr[3] > arr[4] min remains unchanged
 *     We then swap arr[1] with arr[3] making 8 and 2 swap because i !== min 
 *     
 *     The i !== min also prevents unnecessary swaps when the value you are trying to sort already in the correct position
 *     if the condition didn't exist, in the first iteration (where the value 1 is correctly sorted) you would still try to swap arr[i] with arr[min] which would result in arr[0] swapping with arr[0]
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 * 
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if(i !== min) {
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
  }

  return arr;
};

console.log(selectionSort([49, 1, 4, 5, 24, 8, 6, 2]));
