/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // const memo = []
  // memo[1] = 1
  // memo[2] = 2
  // for (let i = 3; i <= n; i++) {
  //   memo[i] = memo[i - 2] + memo[i - 1]
  // }
  // return memo[n]
  if (n < 3) {
    return n
  }
  let pre2 = 1, pre1 = 2, curr = pre1
  for (let i = 3; i <= n; i++) {
    curr = pre1 + pre2
    pre2 = pre1
    pre1 = curr
  }

  return curr

};
console.log(climbStairs(4));

// @lc code=end

