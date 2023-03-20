/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  const str = nums.map((n) => n.toString());
  str.sort((a, b) => (b + a).localeCompare(a + b));
  // 如果排序后的第一个元素为"0"，说明整个数组都是0，直接返回"0"
  if (str[0] === "0") return "0";
  return str.join("");
}
// @lc code=end
