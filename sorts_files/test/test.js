//use the BDD interface before loading the test scripts
mocha.setup('bdd');
//add chai assert
var assert = chai.assert;

//counter start point
var start = Date.now();

// //Get one random array for all
// var rand = getRandomArray(25);
// console.log("%cThe random array is: " + rand + " length: " + rand.length, boldLog("red"));

// //merge-sort / second param - switches log on
// console.log("%cThe mergeSort final array is: " + mergeSort(rand) + " length: " + mergeSort(rand).length, boldLog("green"));
// algoCount("Merge sort algorithm", start);

// //quick-sort / second param - switches log on
// console.log("%cThe quickSort final array is: " + quickSort(rand) + " length: " + quickSort(rand).length, boldLog("green"));
// algoCount("Quick sort algorithm", start);

// //binary search / second param - item position of what we want to find
// binarySearch(getOrderedArray(250), 201);
// algoCount("Binary search", start);

describe('Count milliseconds, while process is acrive', function () {
  describe('Start value must be number', function () {
    it('start value should be typeof number', function () {
      assert.typeOf(start,"number");
    });
  });
  describe('Finish value must be number', function () {
    it('return value from algoCount should be typeof number', function () {
      assert.typeOf(algoCount("test", start),"number");
    });
  });
});

describe('Create new random array', function () {
  describe('IsArray', function () {
    it('should return true if function returns new array', function () {
      var rand = getRandomArray(25);
      assert.isArray(rand);
    });
  });
  describe('The length must be equal to length in constructor', function () {
    it('should return 25, when we call getRandomArray(25)', function () {
      var rand = getRandomArray(25);
      assert.equal(rand.length,25);
    });
  });
});

describe('Quick sort', function () {
  describe('The length of random array must be equal to the length of sorted', function () {
    it('should return true, if arrays have equal length', function () {
      var rand = getRandomArray(25);
      assert.lengthOf(rand,quickSort(rand).length);
    });
  });
  describe('All members in random and sorted arrays must be equal', function () {
    it('should return true, if sorted array has same members as the random array', function () {
      var rand = getRandomArray(25);
      assert.sameMembers(rand,quickSort(rand));
    });
  });
});

describe('Merge sort', function () {
  describe('The length of random array must be equal to the length of sorted', function () {
    it('should return true, if arrays have equal length', function () {
      var rand = getRandomArray(25);
      assert.lengthOf(rand,mergeSort(rand).length);
    });
  });
    describe('All members in random and sorted arrays must be equal', function () {
    it('should return true, if sorted array has same members as the random array', function () {
      var rand = getRandomArray(25);
      assert.sameMembers(rand,mergeSort(rand));
    });
  });
});

describe('Result arrays of quick sort and merge sort must be equal', function () {
  it('should return true, if both are equal', function () {
    var rand = getRandomArray(25);
    assert.sameOrderedMembers(quickSort(rand),mergeSort(rand));
  });
});

describe('Create new ordered array', function () {
  describe('IsArray', function () {
    it('should return true if function returns new array', function () {
      var order = getOrderedArray(25);
      assert.isArray(order);
    });
  });
  describe('The length must be equal to length in constructor', function () {
    it('should return 25, when we call getOrderedArray(25)', function () {
      var order = getOrderedArray(25);
      assert.equal(order.length,25);
    });
  });
});

describe('Binary search', function () {
  it('should return same value from array, when we use just default method to get value from array', function () {
    var order = getOrderedArray(25);
    assert.equal(order[21],order[binarySearch(order, order[21])]);
  });
});

mocha.run();
