function jumpSearch(arr, srch) {
  //getting start step
  var step = Math.sqrt(arr.length);

  //start index is 0
  var ind = 0;

  //go to the prelast part
  while (arr[step] < srch && step < arr.length) {
    ind = step;
    step += Math.sqrt(arr.length);
    //if now we in the end or array enpty then null
    if (ind >= arr.length) {
      return null;
    }
  }

  //go to the last value before index we need
  while (arr[ind] < srch) {
    ind++;
    //if now we in the end or array enpty then null
    if (ind == arr.length) {
      return null
    };
  }

  //last index - the index we need
  if (arr[ind] == srch) {
    return ind;
  }

  //if something wrong null
  return null;
}
