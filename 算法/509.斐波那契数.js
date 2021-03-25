/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // top down
  // if (n <= 1) {
  //   return n;
  // }
  // let memo = [];
  // memo[0] = 0;
  // memo[1] = 1;
  // function memoize(n) {
  //   if (memo[n] !== undefined) {
  //     return memo[n];
  //   }
  //   memo[n] = memoize(n - 1) + memoize(n - 2);
  //   return memo[n];
  // }
  // const res = memoize(n);
  // return res;
  /**
   * @description: bottom up
   */
  // if (n <= 1) return n;
  // let memo = [0, 1];
  // for (let i = 2; i <=n; i++) {
  //   memo[i] = memo[i - 1] + memo[i - 2];
  // }
  // return memo[n]
  /**
   * @description: 空间优化，实际用到只有之前两个值，不必去维护数组
   */
  if (n <= 1) {
    return n;
  }
  let pre1 = 1,
    pre2 = 0,
    result;
  for (let i = 2; i <= n; i++) {
    result = pre1 + pre2;
    pre2 = pre1;
    pre1 = result;
  }
  return result;
};
// @lc code=end
