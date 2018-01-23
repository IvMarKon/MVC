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
    arr.push(getRandomArbitrary(0, 1000));
  }

  return arr;
}
//algorithm counter output
function algoCount(message, start) {
  console.warn(message + " runs: " + new Date(new Date() - start).getUTCMilliseconds() + " milliseconds");
  return new Date(new Date() - start).getUTCMilliseconds();
}
//generates ordered array
function getOrderedArray(size) {
  var arr = [];
  if (size < 2) {
    return [1];
  } else if (size > 2) {
    for (var i = 1; i < size + 1; i++) {
      arr.push(i);
    }
    return arr;
  } else {
    return null;
  }
}




