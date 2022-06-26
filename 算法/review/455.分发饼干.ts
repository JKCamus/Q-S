/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  let result = 0, i = g.length - 1, j = s.length;
  const sortedG = g.sort((a, b) => b - a)
  const sortedS = s.sort((a, b) => b - a)

  while (j--) {
    if (sortedG[i] <= sortedS[j]) {
      result += 1
      if (i-- === 0) break
    }
  }
  return result
};
// @lc code=end

