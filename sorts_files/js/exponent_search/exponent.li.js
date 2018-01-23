function exponentSearch(arr, search) {
  //if first element equal search return 0
  if (arr[0] == search) {
    return 0;
  } else {
    var ind = 1;
    //else ypgrade undex by exponential
    while (ind < arr.length && arr[ind] < search) {
      ind = ind * 2;
    }
    //i/2 of the last step in while
    console.log("%cNew array for binary search inside exponent - " + arr.slice(ind / 2), "color: orange;background:transparent;font-weight:bold;font-size:20px");
    return binarySearch(arr.slice(ind / 2), search);
  }
}
