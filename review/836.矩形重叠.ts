/*
 * @lc app=leetcode.cn id=836 lang=typescript
 *
 * [836] 矩形重叠
 */

// @lc code=start
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {

    if (rec1[2] <= rec2[0] || rec1[0] >= rec2[2] || rec1[1] >= rec2[3] || rec1[3] <= rec2[1]) {
        return false
    } else {
        return true
    }
};
// @lc code=end

