/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];
  const map = new Map();
  for (let str of strs) {
    // es6语法，创建一个长度为26的数组，并填上0
    const characters = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      // 常用字母统计方法,使用ascii码,减去97为为数组的下标号,之后对字母进行统计
      const ascii = str.charCodeAt(i) - 97;
      characters[ascii]++;
    }
    // 原题目，为空格，但是当字母个数大于10，那么就会发生错误。所以，需要将其用逗号分开，作为key值
    /* ["bdddddddddd", "bbbbbbbbbbc"]超过了10个,则会形成如下数组
        ascii [
        0, 1, 0, 10, 0, 0, 0, 0,
        0, 0, 0,  0, 0, 0, 0, 0,
        0, 0, 0,  0, 0, 0, 0, 0,
        0, 0
      ]
      ascii [
        0, 10, 1, 0, 0, 0, 0, 0,
        0,  0, 0, 0, 0, 0, 0, 0,
        0,  0, 0, 0, 0, 0, 0, 0,
        0,  0
      ]
      转为字符串后,会导致两个相同,
    ascii 010100000000000000000000000
    ascii 010100000000000000000000000
    */
    const key = characters.join(",");
    if (map.has(key)) {
      // map.set(key,map.get(key).push(str))
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }
  const result = [];
  for (const arr of map) {
    result.push(arr[1]);
  }
  return result;
};

// @lc code=end
