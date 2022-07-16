/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 看到不重复，多半选择是set
  // 本题可以使用nums2.includes(item),但是时间复杂度变为O（m*n）
  // 而map.has和set.has 时间复杂度为O(1),所以改用set
  const result = new Set();
  const nums2Set = new Set(nums2);
  for (let item of nums1) {
    if (nums2Set.has(item)) {
      result.add(item);
    }
  }
  // Array.form可以将很多结构直接改为数组，如set和map
  return Array.from(result);
};
// @lc code=end
