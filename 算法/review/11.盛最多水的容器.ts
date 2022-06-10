/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

/**
 * @description:
 * 思路：
 * 1. 双指针，向内循环
 * 2. 高度以矮的为基准，
 * 注意：
 * 长度是j-i
 */
// @lc code=start
function maxArea(height: number[]): number {
  let area = 0, i = 0, j = height.length - 1;
  while (i < j) {
    const h = Math.min(height[i], height[j])
    const curr = h * (j - i)
    area = Math.max(area, curr)
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return area
};
// @lc code=end
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

