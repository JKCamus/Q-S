/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  /* 不能新开数组
  那么通过标记第一行第一列是否有0，
  然后完成非第一行第一列的置零后再通过是否有零的标记来处理第一行第一列
 */
  let firstRowHasZero = false;
  let firstColHasZero = false;
  // 循环第一列，标记是否有0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
    }
  }
  // 循环第一行，标记是否有0
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
    }
  }
  // 碰到为零的元素，将对应的第一行第一列置零
  for (let row = 1; row < matrix.length; row++) {  //行数
    for (let col = 1; col < matrix[0].length; col++) {//列数
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  // 通过第一行第一列是否为零将matrix的数字标0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRowHasZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  return matrix;
};

// @lc code=end
