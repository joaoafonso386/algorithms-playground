/**
 * Sorts an array of numbers using the Bucket Sort algorithm.
 * Assumes input numbers are non-negative integers or can be mapped to such.
 * Works best for uniformly distributed data over a known range.
 *
 * Time Complexity:
 * - Average Case: O(n), where n is the number of elements in the input array.
 * This is achieved when the input data is uniformly distributed over the range,
 * leading to a small, constant number of elements per bucket on average.
 * The time to sort elements within each bucket is then effectively constant
 * per element.
 * - Worst Case: O(n log n) or O(n^2), depending on the sorting algorithm used
 * within the buckets and the data distribution. If all elements fall into
 * a single bucket, and that bucket is sorted with a comparison sort like
 * Merge Sort (O(m log m)), the overall time is O(n log n). If using
 * Insertion Sort (O(m^2)) on a single bucket with n elements, it becomes O(n^2).
 *
 * Space Complexity: O(n), where n is the number of elements in the input array.
 * This is because, in the worst case, all elements could be distributed across
 * the buckets, requiring space proportional to the input size to store the buckets
 * and their contents. The number of buckets is typically chosen to be O(n).
 *
 * @param {number[]} arr The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */

const bucketSort = (arr) => {
  // Already sorted
  if (arr.length <= 1) return arr;

  // Get min and max val for the range of buckets
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);

  if (minVal === maxVal) return arr; // Already sorted

  const numberOfBuckets = arr.length;
  // total size (range) / number of slots -> size of each bucket (value range)
  const bucketRange = ((maxVal - minVal) / numberOfBuckets)

  const buckets = Array.from({ length: numberOfBuckets }, () => []);

  for (let v of arr) {
    // v - minVal is the difference between start and current val (min val is 5, lets say v is 15, the distance from the start the v has is 10 aka offset)
    // we need this to place smaller vals in the first buckets (offsets will be smaller) and bigger vals in the last buckets
    // Divide the distance by the size of each bucket's value range (bucketRange). Dividing by bucketRange give you the correct index of the bucket that can hold that value
    let bucketIndex = Math.floor((v - minVal) / bucketRange);

    
    // Ensure index is within bounds (should mostly be covered by the maxVal edge case and logic, but good practice)
    bucketIndex = Math.min(bucketIndex, numberOfBuckets - 1);

    console.log({buckets, bucketRange, numberOfBuckets, maxVal, minVal, bucketIndex,v })

    buckets[bucketIndex].push(v);
  }

  //sort each bucket with your preferred sorting algo
  for (let i = 0; i < numberOfBuckets; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  const sortedArr = [];
  for (let i = 0; i < numberOfBuckets; i++) {
    sortedArr.push(...buckets[i]);
  }

  return sortedArr;
};

const unsortedArray = [50, 30, 8, 10, 9, 40, 7, 60, 20];
const sortedArray = bucketSort(unsortedArray);
console.log("Original:", unsortedArray);
console.log("Sorted:", sortedArray);
