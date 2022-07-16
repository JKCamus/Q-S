/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
if (A.length!==B.length) {
  return false
}
// 重要思路，如果出现包含，相等，或者各种操作后是否包含相等
// 可以考虑一个，拼接，或者两倍之类的操作
const str=A+A
return str.includes(B)
};
// @lc code=end

