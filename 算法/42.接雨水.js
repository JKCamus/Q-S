/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *双指针法
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  if (n === 0) return 0;
  let res = 0,
    left = 0,
    right = n - 1,
    // 左边max初始化为左侧第一个高度，右侧max初始化为右侧第一个高度
    l_max = height[0],
    r_max = height[n - 1];
  while (left < right) {
    // 比较得出左侧最高，和右侧指针划过最高，
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);
    // 判断是否进入谷底，木桶效应，取决于低的那块
    if (l_max < r_max) {
      res += l_max - height[left];
      left++;
    } else {
      res += r_max - height[right];
      right--;
    }
  }
  return res;
};
// @lc code=end
