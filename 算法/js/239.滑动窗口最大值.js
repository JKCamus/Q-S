/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  function helpMax(n, q) {
    while (n > q[q.length - 1]) q.pop();
    return n;
  }
  let q = [],
    r = new Int16Array(nums.length - k + 1),
    i = -1;
  while (++i < k) q.push(helpMax(nums[i], q));
  (r[0] = q[0]), i--;
  while (++i < nums.length) {
    q.push(helpMax(nums[i], q));
    if (q[0] === nums[i - k]) q.shift();
    r[i - k + 1] = q[0];
  }
  return r;
};

// @lc code=end
