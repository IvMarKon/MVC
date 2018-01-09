/**
 * 
 * File for sorts functions
 * 
 */
//counter start point
var start = Date.now();

(function () {
  //merge-sort / second param - switches log on
  mergeSort(getRandomArray(25), true);
  algoCount(start);

  //quick-sort / second param - switches log on
  quickSort(getRandomArray(25), true);
  algoCount(start);
})();
