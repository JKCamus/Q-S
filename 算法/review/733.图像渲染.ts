/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  if (image[sr][sc] === newColor) return image
  const oldColor = image[sr][sc]
  const dfs = (sr, sc) => {
    if (sr < 0 || sc || 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== oldColor) {
      return
    }
    image[sr][sc] = newColor
    dfs(sr + 1, sc)
    dfs(sr - 1, sc)
    dfs(sr, sc + 1)
    dfs(sr, sc - 1)
  }
  dfs(sr,sc)
  return image
};
// @lc code=end

