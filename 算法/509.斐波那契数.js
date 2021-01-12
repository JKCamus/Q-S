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
  if (n <= 1) {
    return n;
  }
  let cache = [];
  cache[0] = 0;
  cache[1] = 1;
  // 动态规划，重在缓存和memoize
// topDown
  function memoize(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = memoize(n - 1) + memoize(n - 2);
    return cache[n];
  }
  memoize(n);
  return cache[n];
};
// @lc code=end
