/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let firstColHasZero = false, firstRowHasZero = false

  // 循环第一行，标记是否有0
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true
    }
  }
  // 循环第一列，标记是否有0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true
    }
  }
  // 碰到为零的元素，将对应的第一行第一列置零
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0
        matrix[0][col] = 0
      }
    }
  }
  // 根据标记情况处理除第一行第一列的0情况
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0
      }
    }
  }
  // 通过初始标0情况对第一列标0
  if (firstColHasZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0
    }
  }
  // 通过初始标0情况对第一行标0
  if (firstRowHasZero === true) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0
    }
  }
  return matrix
};
// @lc code=end

