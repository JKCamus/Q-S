/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  let result = 0, len = nums.length, count = 1
  if (len === 1) {
    return 1
  }
  for (let i = 1; i < len; i++) {
// 如果当前数小于等于他前面的数，说明不是递增序列了，重新开始计算
    if (nums[i] <= nums[i - 1]) {
      count = 1
    } else {
      count++// 如果满足递增，继续增加
    }
    result = Math.max(result, count)// 每次都重新赋值，选择大的
  }
  return result

};
// @lc code=end

