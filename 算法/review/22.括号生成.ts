/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
/**时间复杂度O(2^2n*n)，字符串的长度为2n，每个位置有两种选择，选择左或者右括号，验证字符串是否有效复杂度O(n)，剪枝之后会优化，最坏的情况是O(2^2n*n)。空间复杂度O(n),递归次数最多2n
 * @description: 思路
 * 1. 递归，创建help方法，三个参数，当前字符串str，左括号数量：left,右括号数量：right
 * 2.递归出口，str长度为两倍的n，即匹配完车了左右括号。结束递归，（当前搜索分支结束
 * 3. 只要左括号剩余，选择左括号，并且递归。
 * 4. 右括号数量比左括号数量多，才能选右括号，并且继续递归
 * 5. 初始化，调用递归函数，空字符串，数量都为n
 * @param {number} n
 */
function generateParenthesis(n: number): string[] {
  const res = []

  const help = (str, left, right) => {
    if (str.length === 2 * n) {
      res.push(str)
      return
    }
    if (left > 0) {
      help(str + '(', left - 1, right)
    }
    if (left < right) {
      help(str + ')', left, right - 1)
    }
  }
  help('', n, n)
  return res
};
// @lc code=end

