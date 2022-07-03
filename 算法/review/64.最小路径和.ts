/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const dp = grid;

  let row = grid.length, col = grid[0].length;
  for (let i = 1; i < row; i++) {
    dp[i][0] += dp[i - 1][0]
  }
  for (let j = 1; j < col; j++) {
    dp[0][j] += dp[0][j - 1]
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])
    }
  }
  return dp[row - 1][col - 1]
};
// @lc code=end

