/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  //   if(nums.length===1)return 0
  //   for(let i=nums.length-1;i>=0;i--){
  //     if(nums[i]>=nums[i-1]){
  //       return i
  //     }
  //   }

  // return 0

  let left=0,right=nums.length-1
  while(left<right){
    let mid=Math.floor(left+(right-left)/2)
    if(nums[mid]<nums[mid+1]){
      left=mid+1
    }else{
      right=mid
    }
  }
return left
}
// @lc code=end
