/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
function numSquares(n: number): number {
  // 建立dp初始化数组
  const dp = Array(n).fill(0)
  // 这边初始值1，i到n
  for (let i = 1; i <=n; i++) {
    dp[i] = i  // 最坏情况，每次都是1，dp[3]=1+1+1
    for (let j = 1; i - j * j >= 0; j++) {//枚举前一个状态
      // 状态转移方程
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
};
// @lc code=end

console.log(numSquares(13));
