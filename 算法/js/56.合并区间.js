/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = [];
  let curr = intervals[0];
  for (let interval of intervals) {
    if (curr[1] >= interval[0]) {
      // 区间拉大，取决于当前数组[1]和interval[1]，直接合并
      curr[1] = Math.max(curr[1], interval[1]);
    } else {
      result.push(curr);
      curr = interval;
    }
  }
  // 重要的一步
  if (curr.length !== 0) {
    result.push(curr);
  }
  return result;
};
// @lc code=end
