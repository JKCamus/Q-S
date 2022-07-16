/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 0 ~ 9 (Unicode编码值范围：48~57)
 * A ~ Z(Unicode编码值范围：[65~90])
 * !a ~ z(Unicode编码值范围：97~122)
 */

var getSmallestString = function (n, k) {
  let s = "";
  for (let i = 1; i <= n; i++) {
    let pos = k - (n - i) * 26;
    if (pos <= 1) {
      pos = 1;
    }
    k = k - pos;
    s += String.fromCharCode(96 + pos);
  }
  return s;
};
// @lc code=end
