/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

/**
 * @description:
 * 思路：
 * 1，双循环
 * 2.判断为岛屿，调用dfs，并计数
 * 3.dfs，边界考虑，沉没，并递归调用
 * 注意点：
 * 1.dfs边界，及矩阵的循环基础
 * 2. 记得沉没
 */
// @lc code=start
function numIslands(grid: string[][]): number {

  const dfs = (row: number, col: number)=>{
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
      return
    }
    // 记住需要沉没
    grid[row][col]='0'
    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)

  }
let counter=0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        dfs(row, col)
        counter+=1
      }
    }
  }
return counter
};
// @lc code=end
console.log(numIslands(  [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));

