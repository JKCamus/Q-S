/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start 
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /**
   * @description: 似乎没那么简单
   */
  // if (n === 0 || m === 0) {
  //   return nums1;
  // }
  // const result= [...nums1.filter((item) => item !== 0), ...nums2]
  // .sort((a, b) => a - b)
  // console.log('result', result)
  // return result
  /**
   * @description: 正解来了
   */
  let len1 = m - 1,
    len2 = n - 1,
    len = m + n - 1;
  while (len2 >= 0) {
    /**
     * @description: 整体思路，不断替换num1的末位
     * nums1[len1] >= nums2[len2]成立时，len1才会--否则是len2--
     */
    nums1[len1] >= nums2[len2]
      ? (nums1[len--] = nums1[len1--])
      : (nums1[len--] = nums2[len2--]);
  }
};
// @lc code=end
