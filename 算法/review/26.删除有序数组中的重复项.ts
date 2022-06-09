/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
if(nums.length===0)return 0
let i=0,j=0;
const len=nums.length
while(j<len){
  while(j<len&&nums[i]===nums[j])j++
  if(j<len&&nums[i]!==nums[j]){
    i++
    nums[i]=nums[j]
  }
  j++
}
return i+1
};
// @lc code=end

