/**
 * 
 * File for sorts functions
 * 
 */
//counter start point
var start = Date.now();

//Get one random array for all
var rand = getRandomArray(100);
var order = getOrderedArray(25);
console.log("%cThe random array is: " + rand + " length: " + rand.length, boldLog("red"));

//merge-sort / second param - switches log on
console.log("%cThe mergeSort final array is: " + mergeSort(rand) + " length: " + mergeSort(rand).length, boldLog("green"));
algoCount("Merge sort algorithm", start);

//quick-sort / second param - switches log on
console.log("%cThe quickSort final array is: " + quickSort(rand) + " length: " + quickSort(rand).length, boldLog("green"));
algoCount("Quick sort algorithm", start);

//binary search / second param - item position of what we want to find
console.log("%cBinary search: the position of item in array is - " + binarySearch(order, 10), "color: green;background:white;font-weight:bold;font-size:20px");
algoCount("Binary search", start);

//jump search / second param - item position of what we want to find
console.log("%cJump search: the position of item in array is - " + jumpSearch(order, 10), "color: green;background:white;font-weight:bold;font-size:20px");
algoCount("Jump search", start);

//exponent search / second param - item position of what we want to find
console.log("%cExponent search: the position of item in array is - " + exponentSearch(order, 10), "color: green;background:white;font-weight:bold;font-size:20px");
algoCount("Exponent search", start);

console.log("%cFibonachi search: the position of item in array is - " + fibonachiSearch(order, 10), "color: green;background:white;font-weight:bold;font-size:20px");
algoCount("Fibonachi search", start);
