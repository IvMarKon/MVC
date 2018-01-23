/**
 * Binary search
 */

function binarySearch(list, item) {
  //get low and highest index
  var low = 0;
  var high = list.length - 1;

  //while there won't be the one element
  while (low <= high) {

    //take the middle element
    var mid = Math.ceil((low + high) / 2);

    //great we find the item that we need, output it's index
    if (list[mid] === item) {
      //console.warn("The position of item in array is: "+mid);
      return mid;

      //item is less than array item you take, cut off the bigger array part
    } else if (list[mid] > item) {
      high = mid - 1;

      //item is bigger than array item you take, cut off the less array part
    } else if (list[mid] < item) {
      low = mid + 1;
    }

  }
  //if nothing works
  return null;
}
