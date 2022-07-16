/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //创建记忆化数组
  // if (n < 2) {
  //   return n;
  // }
  // const memo = [1, 2];
  // for (let i = 2; i <= n; i++) {
  //   memo[i] = memo[i - 1] + memo[i - 2];
  // }
  // return memo[n - 1];
  if (n <= 2) {
    return n;
  }
  let pre1 = 1,
    pre2 = 2,
    total = pre2;
  for (let i = 3; i <= n; i++) {
    total = pre1 + pre2;
    pre1 = pre2;
    pre2 = total;
  }
  return total;

  // 递归回调 策略更优
  // const memo = [];
  // memo[1] = 1;
  // memo[2] = 2;
  // function memoize(n) {
  //   if (memo[n] !== undefined) {
  //     return memo[n];
  //   }
  //   memo[n] = memoize(n - 1) + memoize(n - 2);
  //   return memo[n]
  // }
  // memoize(n);
  // return memo[n];
};
// @lc code=end
