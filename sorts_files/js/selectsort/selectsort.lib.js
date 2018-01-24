function selectSort(arr) {
  var resArr = [];
  var min = 0;
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    min = 0;
    if (i == len - 1) {
      resArr.push(arr[0]);
    } else {
      for (var j = 0; j < len; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      resArr.push(arr[min]);
      arr.splice(min, 1);
    }
  }
  return resArr;
}
