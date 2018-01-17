/**
 * Merge sort
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return mergeBottomTop(mergeSort(left), mergeSort(right));
}

function mergeTopDown(left, right) {

  var arr = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return arr.concat(left).concat(right);
}

function mergeBottomTop(left, right) {

  var arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return arr.concat(left).concat(right);
}
