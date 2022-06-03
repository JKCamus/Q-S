/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  const maxProductMemo = []
  const minProductMemo = []

  maxProductMemo[0] = nums[0]
  minProductMemo[0] = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    maxProductMemo[i] = Math.max(maxProductMemo[i - 1] * nums[i], minProductMemo[i - 1] * nums[i], nums[i])
    minProductMemo[i] = Math.min(maxProductMemo[i - 1] * nums[i], minProductMemo[i - 1] * nums[i], nums[i])
    max = Math.max(maxProductMemo[i],max)
  }
  return max
};
// @lc code=end

console.log(maxProduct([2,3,-2,4]));
