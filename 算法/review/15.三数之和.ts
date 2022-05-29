/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */
/**
 * @description:
 * 1. 给数组排序、
  2. 遍历数组，从O遍历到length-2（为什么？）
  3. 如果当前的数宁等于前一个数字，则跳过这个数（为什么？）
  4. 如果数字不同，则设置start = i+1,end=length-1， 查看i， start和end三个数的和比零大还是小，如果比0小，start++，如果比0大，end-如果等于0，把这三个数加入到结果里。
  5. 返回结果
 */
// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    // 移位时，注意检查重复情况
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let s = i + 1, e = nums.length - 1
      while (s < e) {
        const res = nums[s] + nums[i] + nums[e]
        if (res === 0) {
          result.push([nums[i], nums[s], nums[e]])
          s++
          e--
          // 移位时，注意检查重复情况
          while (s < e && nums[s] === nums[s - 1]) {
            s++
          }
          while (s < e && nums[e] === nums[e + 1]) {
            e--
          }
        } else if (res < 0) {
          s++
        } else {
          e--
        }
      }
    }
  }
  return result
};
// @lc code=end


console.log(threeSum([-1, 0, 1, 2, -1, -4]));
