/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const result = Array(nums.length).fill(1)
  let product = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] * product
    product = nums[i] * product;
  }

  product = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * product
    product = nums[i] * product;
  }
  return result
};
// @lc code=end

console.log(productExceptSelf([1,2,3,4]));
