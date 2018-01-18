/**
 * Quick sort
 */

// swap two elements in array
function quickSort(arr) {
  var pivot = arr[0];
  var less = [];
  var great = [];
  var equal = [];

  if (arr.length < 2) {
    return arr;
  } else {
    for (var i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        less.push(arr[i]);
      } else if (pivot < arr[i]) {
        great.push(arr[i]);
      } else if (pivot == arr[i]) {
        equal.push(arr[i]);
      }
    }
    return quickSort(less).concat(equal, [pivot], quickSort(great));

  // if (arr.length < 2) {
  //   return arr;
  // } else {
  //   while (arr.length >= 1) {
  //     if (pivot == arr[arr.length - 1]) {
  //       equal.push(arr[arr.length - 1]);
  //     } else if (pivot > arr[arr.length - 1]) {
  //       less.push(arr[arr.length - 1]);
  //     } else if (pivot < arr[arr.length - 1]) {
  //       great.push(arr[arr.length - 1]);
  //     }
  //     arr.length = arr.length - 1;
  //   }
  //   return quickSort(less).concat(equal, [pivot], quickSort(great));
  }
}
