/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): any {
  let left = 0, right = nums.length - 1, i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]]
      left++
      i++
    } else if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    }else{
      i++
    }
  }
  return nums
};
// @lc code=endD
console.log(sortColors([1,2,0]));

