//use the BDD interface before loading the test scripts
mocha.setup('bdd');
//add chai assert
var assert = chai.assert;
//init new hash table
var singl = new SingleLinkedList();

  describe('Check if list is empty', function () {
    it('In the begining should return ""', function () {
      assert.equal(singl.print(), '');
    });
  });

describe('We add 6 values, from 1 to 6', function () {
  it('Print function should return string 1 2 3 4 5 6', function () {
    singl.add(1);
    singl.add(2);
    singl.add(3);
    singl.add(4);
    singl.add(5);
    singl.add(6);
    assert.equal(singl.print(), '1 2 3 4 5 6');
  });
  it('Length of list must be equal to 6', function () {
    assert.equal(singl.length(),6);
  });
});

describe('We insertAfter 3 more values after 1,3 and 6', function () {
  it('So the list must print this string 1 100 2 3 100 4 5 6 100', function () {
    singl.insertAfter(100, 1)
    singl.insertAfter(100, 3);
    singl.insertAfter(100, 6);
    assert.equal(singl.print(), '1 100 2 3 100 4 5 6 100');
  });
  it('Length of list must be equal to 9', function () {
    assert.equal(singl.length(),9);
  });
});



//running test scripts
mocha.run();
