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
    bucket.push([key, value]);
    this.count += 1;
  };
  HashTable.prototype.get = function (key) {
    let index = this.hashFunc(key, this.limit);
    let bucket = this.storage[index];
    if (bucket === null) {
      return null;
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null
    return "未找到"
  };
}
// 测试哈希表
// 1.创建哈希表
var ht = new HashTable()

// 2.插入数据
ht.put("abc", "123")
ht.put("cba", "321")
ht.put("nba", "521")
ht.put("mba", "520")

// 3.获取数据
alert(ht.get("abc"))
ht.put("abc", "111")
alert(ht.get("abc"))

// 4.删除数据
alert(ht.remove("abc"))
alert(ht.get("abc"))
