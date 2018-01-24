function fibonachiSearch(arr, srch) {
  var fib_m2 = 0;
  var fib_m1 = 1;
  var fib = fib_m2 + fib_m1;

  var offset = -1;

  //if first equal to search
  if (fib_m1 && arr[offset + 1] == srch) return offset + 1;

  //find maximum fibonachi values
  while (fib < arr.length) {
    fib_m2 = fib_m1;
    fib_m1 = fib;
    fib = fib_m2 + fib_m1;
  }

  //if array greater then one element and search not equal to first element
  while (fib > 1) {

    //index of search value
    var i = 0;

    //check array length bigger then one element
    if (offset + fib_m2 < 0) {
      i = arr.length - 1;
    } else {
      i = offset + fib_m2;
    }

    //if current value less then search
    if (arr[i] < srch) {
      fib = fib_m1;
      fib_m1 = fib_m2;
      fib_m2 = fib - fib_m1;
      offset = i;

      //if current value greater then search
    } else if (arr[i] > srch) {
      fib = fib_m2;
      fib_m1 = fib_m1 - fib_m2;
      fib_m2 = fib - fib_m1;

      //if current value equal to search
    } else if (arr[i] == srch) {
      return i;
    }
  }

  //if error or smth goes wrong
  return null;
}
