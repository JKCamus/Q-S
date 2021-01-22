/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const eleMap = new Map();
  if (nums.length === 1) {
    return nums[0];
  }
  // 只需找到数量大于nums.length/2的数
  for (const item of nums) {
    if (!eleMap.has(item)) {
      eleMap.set(item, 1);
    } else {
      eleMap.set(item, eleMap.get(item) + 1);
      if (eleMap.get(item) > Math.floor(nums.length / 2)) {
        return item;
      }
    }
  }
};
// console.log("majorityElement", majorityElement([2, 2, 1, 1, 1, 2, 2]));
// @lc code=end
