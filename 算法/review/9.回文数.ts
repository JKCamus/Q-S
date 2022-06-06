/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false
  let res = 0, sum = x
  while (sum !== 0) {
    res = res * 10 + (sum % 10)
    sum = Math.floor(sum / 10)
  }
  return x == res
};
// @lc code=end

