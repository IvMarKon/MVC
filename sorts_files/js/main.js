/**
 * 
 * File for sorts functions
 * 
 */
//counter start point
var start = Date.now();

//Get one random array for all
var rand = getRandomArray(25);
console.log("%cThe random array is: " + rand + " length: " + rand.length, boldLog("red"));

//merge-sort / second param - switches log on
console.log("%cThe mergeSort final array is: " + mergeSort(rand) + " length: " + mergeSort(rand).length, boldLog("green"));
algoCount("Merge sort algorithm", start);

//quick-sort / second param - switches log on
console.log("%cThe quickSort final array is: " + quickSort(rand) + " length: " + quickSort(rand).length, boldLog("green"));
algoCount("Quick sort algorithm", start);

//binary search / second param - item position of what we want to find
binarySearch(getOrderedArray(250), 201);
algoCount("Binary search", start);
