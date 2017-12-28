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
//sorts two arrays and concat them to one
function mergeTopDown(left, right) {
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


  console.log("+ --------------------------------------Output-------------------------------------- +");
  console.log("| Result array of iteration: " + arr.concat(left).concat(right));
  console.log("+ ---------------------------------------------------------------------------------- +");

  //in the end we concat all three final arrays that we get
  return arr.concat(left).concat(right);
}

function mergeSort(arr) {
  //if array empty or have one element it is sorted
  if (arr.length < 2) {
    return arr;
  }
  //else we divide array on two parts
  else {
    var left = arr.slice(0, Math.floor(arr.length / 2));
    var right = arr.slice(Math.floor(arr.length / 2), arr.length);


    console.log("+ --------------------------------Start-of-iteration-------------------------------- +");
    console.log("| Start array: " + arr);
    console.log("| Input left array: " + left);
    console.log("| Input right array: " + right);
    console.log("+ ---------------------------------End-of-iteration--------------------------------- +");


    //call of sort function and continue divide both left and right arrays recursively
    return mergeTopDown(mergeSort(left), mergeSort(right));
  }

}
