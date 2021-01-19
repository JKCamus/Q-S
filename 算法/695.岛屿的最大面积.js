/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        // 每次统计出一个小岛的面积，就检查当前面积和ache谁大，更新最大值
        const count = dfs(row, col);
        result = Math.max(result, count);
      }
    }
  }
  function dfs(row, col) {
    // 边界考虑，是大于等于
    if (
      row < 0 ||
      row >=grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    // 沉没并令当前小岛面积为1
    grid[row][col] = 0;
    let count = 1;
    // 开始dfs搜索计算岛屿最大面积
    count += dfs(row - 1, col);
    count += dfs(row + 1, col);
    count += dfs(row, col - 1);
    count += dfs(row, col + 1);
    return count;
  }
  return result
};
// @lc code=end
