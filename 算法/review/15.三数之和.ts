/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */
/**
 * @description:
题意不能有重复的数组, 但是每一个数组中是可以有相同的数字的.
考虑输入的数组长度小于3的情况;
先将数组从小到大排序;
利用for循环以nums[i]为基点数进行遍历;
在遍历时定义两个起点, 最左侧left (i + 1)和最右侧right (nums.length - 1);
每次计算nums[i] + nums[left] + nums[right]的值sum;
若sum大于0则right向左移, 即right--;
若sum小于0则left向右移, 即left++;
若sum等于0, 则证明找到了一组数, 依次移动两个起点, 但是每次移动的时候要考虑是否和上一项相等
 */
// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (!nums || nums.length < 3) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 移位时，注意检查重复情况
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let s = i + 1,
        e = nums.length - 1;
      while (s < e) {
        const res = nums[s] + nums[i] + nums[e];
        if (res === 0) {
          result.push([nums[i], nums[s], nums[e]]);
          s++;
          e--;
          // 移位时，注意检查重复情况
          while (s < e && nums[s] === nums[s - 1]) {
            s++;
          }
          while (s < e && nums[e] === nums[e + 1]) {
            e--;
          }
        } else if (res < 0) {
          s++;
        } else {
          e--;
        }
      }
    }
  }
  return result;
}
// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
