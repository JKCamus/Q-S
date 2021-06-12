/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  let left = 1,
    // mid需要定义在外
    mid,
    // 二分搜索右边界，可以缩短为一半。
    right = Math.floor(x / 2);
  // 终止循环边界，需要等于
  while (left <= right) {
    // mid多数需要Math.floor
    mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      // 右侧更新完mid-1
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }
  return right;
};
// @lc code=end
