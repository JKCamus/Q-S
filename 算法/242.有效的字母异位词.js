/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *建立map，一个循环中，s中出现map中没有的字母则在map中添加，出现有的就+1.
 *t中当map中没有的就置为-1，有的就-1.最后遍历map，看是不是全为0
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();
  // s=>map 中有s[i]? 有+1 没有 置为1
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
    // t中相反
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      map.set(t[i], -1);
    }
  }
  // !注意不要使用forEach ,因为forEach中return返回的是forEach函数中的return
  // !我们需要返回的是最外层的函数
  // ? map for of遍历出来的是个数组
  for (const item of map) {
    if (item[1] !== 0) {
      return false;
    }
  }
  return true;
};

// @lc code=end
