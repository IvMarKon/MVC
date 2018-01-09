//generates random value
function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//generates random array
function getRandomArray(size) {
  var arr = [];

  for (let i = 0; i < size; i++) {
    arr.push(getRandomArbitrary(0, 100));
  }

  return arr;
}
//algorithm counter output
function algoCount(start) {
  console.warn("Algorithm runs: " + new Date(new Date() - start).getUTCMilliseconds() + " milliseconds");
}

/**
 * Merge sort
 */

//sorts two arrays and concat them to one
function mergeTopDown(left, right, switcher) {
  //final array
  var arr = [];
  //watch if there any value in array
  while (left.length > 0 && right.length > 0) {
    //if true compare first values
    //the less first value goes to result array and cut from parent array
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  if (switcher === true) {
    console.log("+ --------------------------------------Output-------------------------------------- +");
    console.log("| Result array of iteration: " + arr.concat(left).concat(right));
    console.log("+ ---------------------------------------------------------------------------------- +");
  }
  //in the end we concat all three final arrays that we get
  return arr.concat(left).concat(right);
}
//take array and recursively divide it
function mergeSort(arr, switcher) {
  //if array empty or have one element it is sorted
  if (arr.length < 2) {
    return arr;
  }
  //else we divide array on two parts
  else {
    var left = arr.slice(0, Math.floor(arr.length / 2));
    var right = arr.slice(Math.floor(arr.length / 2), arr.length);

    if (switcher === true) {
      console.log("+ --------------------------------Start-of-iteration-------------------------------- +");
      console.log("| Start array: " + arr);
      console.log("| Input left array: " + left);
      console.log("| Input right array: " + right);
      console.log("+ ---------------------------------End-of-iteration--------------------------------- +");
    }

    //call of sort function and continue divide both left and right arrays recursively
    return mergeTopDown(mergeSort(left, switcher), mergeSort(right, switcher));
  }

}

/**
 * Quick sort
 */

// swap two elements in array
function quickSort(arr, switcher) {

  //if array length less than 2, just return array
  if (arr.length < 2) {
    return arr;
  }

  //enable log to console
  if (switcher === true) {
    console.log("+ ------------------------------------Start-array----------------------------------- +");
    console.log("| " + arr);
    console.log("+ ---------------------------------------------------------------------------------- +");
  }

  //two arrays for greater elements and for less elements
  var lesser = [];
  var greater = [];

  //if element bigger then first one push it to greater else to lesser
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      lesser.push(arr[i]);
    } else if (arr[i] > arr[0]) {
      greater.push(arr[i]);
    }
  }

  if (switcher === true) {
    console.log("+ --------------------------------Start-of-iteration-------------------------------- +");
    console.log("| Less array: " + lesser);
    console.log("| Pivot value: " + arr[0]);
    console.log("| Great array: " + greater);
    console.log("| Returns: " + quickSort(lesser).concat(arr[0], quickSort(greater)));
    console.log("+ ---------------------------------End-of-iteration--------------------------------- +");
  }

  //concat two arrays and first element in the middle and call quickSort recursively
  return quickSort(lesser, switcher).concat(arr[0], quickSort(greater, switcher));
}
