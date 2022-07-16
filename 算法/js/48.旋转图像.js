/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
// 顺序遍历，拷贝：原=>新=>原
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 生成二维数组
  let n = matrix.length,
    m = Array.from({ length: n }, (v) => Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // [j,n-1-i] =[i,j]
      // 顺序遍历，拷贝：原=>新=>原
      m[j][n - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = m[i][j];
    }
  }
  return matrix;
  //  console.log('res=>', m)
};
// const matrix = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];
// console.log("res=>", rotate(matrix));
// @lc code=end
