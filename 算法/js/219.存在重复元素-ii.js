/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  // 滑窗，常见套路
  // 创建更新滑窗
  for (let i = 0; i < nums.length; i++) {
    // 从i判断，区间是否小于k
    if (map.has(nums[i]) &&i- map.get(nums[i]) <=k) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};
// console.log("ssss", containsNearbyDuplicate([1,2,3,1,2,3], 2));
// @lc code=end
