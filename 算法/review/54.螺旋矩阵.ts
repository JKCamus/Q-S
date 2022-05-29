/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

/**
 * @description:
 * 思路:
 * 1. 数组为空，
 */
// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length < 1) {
    return []
  }
  let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
  let direction: 'right' | 'left' | 'bottom' | 'up' = 'right';
  let result = []
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top += 1
      direction = 'bottom'
    } else if (direction === 'bottom') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right -= 1
      direction = 'left'
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom -= 1
      direction = 'up'
    }
    else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left += 1
      direction = 'right'
    }
  }
  return result
};
// @lc code=end

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
