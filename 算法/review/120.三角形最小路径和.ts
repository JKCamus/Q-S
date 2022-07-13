/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  const bottom = triangle[triangle.length - 1]
  const dp = Array(bottom.length).fill(0)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = bottom[i]
  }
// 从倒数第二行进行迭代
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 状态转移方程,每一排找到最小的+当前的数
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
};
// @lc code=end

