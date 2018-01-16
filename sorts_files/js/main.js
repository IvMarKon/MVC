/**
 * 
 * File for sorts functions
 * 
 */
//counter start point
var start = Date.now();

(function () {
  //merge-sort / second param - switches log on
  mergeSort(getRandomArray(25), false);
  algoCount("Merge sort algorithm",start);

  //quick-sort / second param - switches log on
  quickSort(getRandomArray(25), false);
  algoCount("Quick sort algorithm",start);

  //binary search / second param - item position of what we want to find
  binarySearch(getOrderedArray(250),201);
  algoCount("Binary search",start);
})();
