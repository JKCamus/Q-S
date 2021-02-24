/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 埃拉托斯特尼筛法
 * 从 2 开始，将每个素数的各个倍数，标记成合数。
  一个素数的各个倍数，是一个差为此素数本身的等差数列。此为这个筛法和试除法不同  关键之处，后者是以素数来测试每个待测数能否被整除。
 */
var countPrimes = function (n) {

  let count = 0;
  let arr = new Array(n);
  for (let i = 2; i < n; i++) {
    if (!arr[i - 1]) {
      count++;
      for (let j = i * i; j <= n; j += i) {
        arr[j - 1] = true;
      }
    }
  }
  return count;
};
// @lc code=end
