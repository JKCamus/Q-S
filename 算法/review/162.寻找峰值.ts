/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
if(nums.length===1)return nums[0]
for(let i=nums.length-1;i>=0;i--){
  if(nums[i]<=nums[i-1]){
    return i
  }
}
return 0
};
// @lc code=end

