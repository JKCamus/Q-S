/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  if (nums.length===1) {
    return nums[0]
  }
  const numMap= new Map()
  for (const num of nums) {
    if (numMap.has(num)) {
      const counter = numMap.get(num) + 1
      numMap.set(num, counter)
      // const val = Array.from(numMap.values()).reduce((p,v)=>p+v,0)
      const target=Math.floor(nums.length/2)
      if (counter>target) {
        return num
      }
    }else{
      numMap.set(num,1)
    }
  }
  return 0
};
// @lc code=end
majorityElement([2,2,1,1,1,2,2])
