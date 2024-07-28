/**
 *
 * Selection sort finds the minimum value of an iteration and then swaps the current value with the minimum.
 * Instead of storing the value we store the index of the val and then compare it to the iteration index (i !== min)
 * If the values are not the same we swap
 * 
 * Ex: [1,8,7,2,5] -> at the second iteration (val = 8) the minimum value will be 2, so swap 8 with 2, resulting in [1,2,7,8,5]
 *
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
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

console.log(selectionSort([1, 4, 5, 24, 8, 6, 2]));
