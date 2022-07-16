/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // const memo = [];
  // // 新建二维数组，为m行二维数组
  // // 如array= [[0 , 1 , 2 ],[1 , 2 , 3, ]]为两行3列二维数组
  // for (let i = 0; i < m; i++) {
  //   memo.push([]);
  // }
  // 生成二维数组的方式，m为行，n为列
  const memo = Array.from({ length: m }, (v) => Array());
  // 遍历行，填充第一行为0
  for (let row = 0; row < m; row++) {
    memo[row][0] = 1;
  }
  // 遍历列，填充第一列为0
  for (let col = 0; col < n; col++) {
    memo[0][col] = 1;
  }
  // 妙招：最终步数为目标左侧第一个的路径数加上方第一个的路径数的和
  for (let col = 1; col < n; col++) {
    for (let row = 1; row < m; row++) {
      memo[row][col] = memo[row - 1][col] + memo[row][col - 1];
    }
  }
  // 返回
  return memo[m - 1][n - 1];
};
// @lc code=end
