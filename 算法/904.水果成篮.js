/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  const fruitMap = new Map();
  // max最小为1，因为题目1 <= tree.length <= 40000
  let max = 1,
    j = 0;
  for (let i = 0; i < tree.length; i++) {
    fruitMap.set(tree[i], i);
    //当map中元素大于2的时候需要做移除一个元素
    if (fruitMap.size > 2) {
      // 先初始化一个最大index，如果当前fruitMap中有index比这个来的小就更新这个minIndex
      // 以此得到fruit中最小即最左侧的那类水果的index
      let minIndex = tree.length - 1;
      for (const [fruit, index] of fruitMap) {
        if (index < minIndex) {
          minIndex = index;
        }
      }
      // 删除fruitMap中index 较小的元素，即左侧元素
      fruitMap.delete(tree[minIndex]);
      // 并将j指针移动到下一种水果
      j = minIndex + 1;
    }
    // 当前最大水果数，比较之前最大的水果数和当前水果数i-j+1
    max = Math.max(max, i - j + 1);
  }
  return max;
};
// @lc code=end
