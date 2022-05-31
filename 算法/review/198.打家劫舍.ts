/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  // 空间优化
  let pre2 = nums[0], pre1 = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    const temp = Math.max(nums[i] + pre2, pre1)
    pre2 = pre1
    pre1 = temp
  }
  return pre1


  // const memo = []
  // memo[0] = nums[0]
  // memo[1] = Math.max(nums[0], nums[1])
  // for (let i = 2; i < nums.length; i++) {
  //   memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1])
  // }
  // return memo[nums.length-1]
};
// @lc code=end

console.log(rob([1, 2, 3, 1]));
