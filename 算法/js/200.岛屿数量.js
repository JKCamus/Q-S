/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *思路:碰到1，count+=1，并且将周围的1深度搜索沉默，避免对之后的的遍历造成误判，因为同一片的1，为同一个岛屿
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  function dfs(row, col) {
    // 边界设置
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return;
    }
    // 将当前元素沉默，并深度优先搜索，将周围的元素沉默，碰到0或者边界停止
    grid[row][col] = "0";
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        // 专业名词，沉默。采用深度优先搜索，将连城片的1变为0，避免之后遍历再次预见，
        // 或者做为空间优化
        dfs(row, col);
      }
    }
  }
  // 记得返回count
  return count
};

// @lc code=end
