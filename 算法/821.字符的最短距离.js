/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  /**
   * @description: fromindex为新字符串中开始检索的位置
   */
  // stringObject.indexOf(searchvalue,fromindex)
  let left = s[0] === c ? 0 : s.length,
    right = s.indexOf(c, 1);
  const res = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    // 计算字符到当前窗口左右边界的最小距离
    res[i] = Math.min(Math.abs(i - left), Math.abs(right - i));
    // 滑窗右移
    if (i === right) {
      left= right;
      right = s.indexOf(c, left+ 1);
    }
  }
  return res;
};
// @lc code=end
