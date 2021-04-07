/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 双指针也是ok
var isPalindrome = function (x) {
  if (x < 0) return false;
  const arr = (x + "").split("");
  return arr.join("") === arr.reverse().join("");
};
// @lc code=end
