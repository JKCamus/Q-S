/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    var val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.size < this.capacity && !this.cache.has(key)) {
    this.cache.set(key, value);
  } else if (this.cache.has(key)) {
    this.cache.delete(key);
    this.cache.set(key, value);
  } else if ((this.cache.size = this.capacity)) {
    // Map.prototype.keys() 返回一个迭代对象，而不是数组
    // 迭代对象 Iterator.next() 是迭代对象的第一个对象，而不是值，需要 .value获取值
    this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.map = new Map();
//   }

//   get(key) {
//     let val = this.map.get(key);
//     if (typeof val === "undefined") {
//       return -1;
//     }
//     this.map.delete(key);
//     this.map.set(key, val);
//     return val;
//   }

//   put(key, value) {
//     if (this.map.has(key)) {
//       this.map.delete(key);
//     }

//     this.map.set(key, value);
//     let keys = this.map.keys();
//     while (this.map.size > this.capacity) {
//       this.map.delete(keys.next().value);
//     }
//   }
// }
