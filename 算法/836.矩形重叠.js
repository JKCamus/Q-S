/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 简单，却极其恶心，会出现线条，线条不算重叠
  if (
    rec1[2] <= rec2[0] ||
    rec1[1] >= rec2[3] ||
    rec1[0] >= rec2[2] ||
    rec1[3] <= rec2[1] ||
    (rec1[2] - rec1[0])*(rec1[3] - rec1[1]) <= 0 ||
    (rec2[2] - rec2[0])*(rec2[3] - rec2[1]) <= 0
  ) {
    return false;
  } else {
    return true;
  }
};
// @lc code=end
