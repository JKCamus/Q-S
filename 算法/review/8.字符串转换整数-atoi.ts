/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const res = parseInt(s,10)
  if (isNaN(res)) {
    return 0
  }
  return res >= 0 ? Math.min(res, 2 ** 31 - 1) : Math.max(res, -(2 ** 31))
};
// @lc code=end

console.log(myAtoi("words and 987"));
