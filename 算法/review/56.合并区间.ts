/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */
/**
 * @description:
 * 思路
 * 1. 边界考虑
 * 2. 区间可能乱序，需要进行排序
 * 3. 建立一个缓存区间，存储当前的区间，用它去扩张。
 * 4. 当，存在第一个元素比他大的时候，把他推入结果
 * 注意
 * 最后一个可能永远不会推入，所以，需要手动推入结果
 *
 */
// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) {
    return intervals
  }
  intervals.sort((a, b) => a[0] - b[0])
  let result = []
  let curr = intervals[0]
  for (const interval of intervals) {
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(interval[1], curr[1])
    } else {
      result.push(curr)
      curr = interval
    }
  }

  result.push(curr)
  return result
};
// @lc code=end

console.log(merge([[1, 3], [8, 10], [15, 18], [2, 6]]));
