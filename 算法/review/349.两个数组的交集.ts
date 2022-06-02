/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const result = new Set<number>()
  const setting = new Set<number>(nums2)
  for (let i = 0; i < nums1.length; i++) {
    if (setting.has(nums1[i])) {
      result.add(nums1[i])
    }
  }

  return Array.from(result)
};
// @lc code=end

console.log(intersection([1,2,2,1], [2,2]));
