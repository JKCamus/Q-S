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
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <=n; i++) {
    // 动态规划常用套路
    memo[i] = memo[i - 2] + memo[i - 1];
    // console.log('memo', memo[i])
  }
  return memo[n];
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
