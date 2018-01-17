//adds hash table basic object
function HashTable(size) {
  this.values = {};
  this.numberOfValues = 0;
  this.size = size;
}

HashTable.prototype.add = function (key, value) {
  //calculate the hash number
  var hash = this.calculateHash(key);
  //if there no sub hash array create it
  if (!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {};
  }
  //if sub hash array don't exist put +1 to amount count of values
  if (!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++;
  }
  //put value to array
  this.values[hash][key] = value;
};

HashTable.prototype.search = function (key) {
  //calculate hash for key
  var hash = this.calculateHash(key);
  //if array has such subhash array and if there is such key in this array
  if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  } else {
    return null;
  }
}

HashTable.prototype.remove = function (key) {
  //calculate hash for key
  var hash = this.calculateHash(key);
  //if array has such subhash array and if there is such key in this array
  if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key];
    this.numberOfValues--;
  }
}

//number of values in array, values can be not unique
HashTable.prototype.length = function () {
  return this.numberOfValues;
};

//calculate the hash number based on given value and string length
HashTable.prototype.calculateHash = function (key) {
  return key.toString().length % this.size;
};

//run loop in loop, concat all values in one string and output it
HashTable.prototype.print = function () {
  var string = '';
  for (var value in this.values) {
    for (var key in this.values[value]) {
      string += this.values[value][key] + ' ';
    }
  }
  console.log(string.trim());
};
