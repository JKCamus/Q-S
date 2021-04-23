/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  // 能进来说明初始长度为1
  let start = 0,
    maxLength = 1;
  function expandFromCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      right++;
      left--;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandFromCenter(i - 1, i + 1);
    // 考虑偶数情况
    expandFromCenter(i, i + 1);
  }
  return s.substring(start, start + maxLength);
};
// @lc code=end
