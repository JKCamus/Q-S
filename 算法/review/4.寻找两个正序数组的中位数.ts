
/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

  /*//! leetCode04 */
// let nums1 = [1,2];
// let nums2 = [3,4];
let nums1 = [3];
let nums2 = [-2, -1];
let a = [nums1, ...nums2];
var findMedianSortedArrays = function (nums1, nums2) {
  let b = [...nums1, ...nums2];
  let a = b.sort((a, b) => a - b);
  if (a.length % 2 === 0) {
    return (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
  } else if (a.length % 2 === 1) {
    return a[Math.ceil(a.length / 2) - 1];
  }
};
let res = findMedianSortedArrays(nums1, nums2);
console.log("ss", res);
};
// @lc code=end

