function HashTable() {
  HashTable.prototype.hashFunc = function (str, size) {
    this.storage = [];
    this.count = 0;
    this.limit = 7;
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    let index = hashCode % size;
    return index;
  };
  HashTable.prototype.put = function (key, value) {
    let index = this.hashFunc(key, this.limit);
    let bucket = this.storage[index];
    if (bucket === null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }
  };
}
