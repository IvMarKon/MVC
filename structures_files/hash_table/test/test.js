mocha.setup('bdd');
var assert = chai.assert;
var hashTable = new HashTable(3);

describe('Add new item to hash table', function () {
  describe('Add item with key: "first" and value: 1', function () {
    it('should return value:1, when we search with the key:"first"', function () {
      hashTable.add('first', 1);
      assert.equal(hashTable.search('first'), 1);
    });
  });
  describe('Add item with key: "second" and value: 2', function () {
    it('should return value:2, when we search with the key:"second"', function () {
      hashTable.add('second', 2);
      assert.equal(hashTable.search('second'), 2);
    });
  });
  describe('Add item with key: "third" and value: 3', function () {
    it('should return value:3, when we search with the key:"third"', function () {
      hashTable.add('third', 3);
      assert.equal(hashTable.search('third'), 3);
    });
  });
  describe('Add item with key: "fourth" and value: 4', function () {
    it('should return value:4, when we search with the key:"fourth"', function () {
      hashTable.add('fourth', 4);
      assert.equal(hashTable.search('fourth'), 4);
    });
  });
  describe('Add item with key: "fifth" and value: 5', function () {
    it('should return value:5, when we search with the key:"fifth"', function () {
      hashTable.add('fifth', 5);
      assert.equal(hashTable.search('fifth'), 5);
    });
  });
});

describe('Show the length of current hash table', function () {
  it('should return value:5, when we use length() function', function () {
    assert.equal(hashTable.length(), 5);
  });
});

describe('Show the current hash table state', function () {
  it('should return string 2 4 1 3 5, when we use print() function', function () {
    assert.equal(hashTable.print(), '2 4 1 3 5');
  });
});

describe('Remove items from hash table', function () {
  describe('Remove "first" element', function () {
    it('should return string 2 4 3 5', function () {
      hashTable.remove('first');
      assert.equal(hashTable.print(), '2 4 3 5');
    });
  });
  describe('Remove "third" element', function () {
    it('should return string 2 4 5', function () {
      hashTable.remove('third');
      assert.equal(hashTable.print(), '2 4 5');
    });
  });
});

mocha.run();
