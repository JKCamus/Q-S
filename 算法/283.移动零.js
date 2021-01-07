/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  // 算法的巧妙，两枚指针，i会一直走下去，j只有nums[i]非0时才会走，
  // 当nums[i]非0时，将nums[j]置为非零的那个元素，j走一步。
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  // 走完上面那步之后，j指针之后的就是都是应该置0的
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
// @lc code=end
