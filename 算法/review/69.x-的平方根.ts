/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x < 2) return x;
  let left = 1; let right = Math.floor(x / 2);
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
// @lc code=end

