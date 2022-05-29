/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (n < 2) return n
  // 根据bottom=》up 优化
  let pre2 = 0, pre1 = 1, result = 1
  for (let i = 2; i <= n; i++) {
    result = pre1 + pre2
    pre2 = pre1
    pre1 = result
  }
  return result

  //! bottom=>up
  // const cache = []
  // cache[0] = 0
  // cache[1] = 1
  // for (let i = 2; i <= n; i++) {
  //   cache[i] = cache[i - 1] + cache[i - 2]
  // }
  // return cache[n]
  //! top=>down
  // const cache: number[] = []
  // cache[0] = 0
  // cache[1] = 1
  // const memoize = (num: number): number => {
  //   if (cache[num] === undefined) {
  //     cache[num] = memoize(num - 1) + memoize(num - 2)
  //   }
  //   return cache[num]
  // }
  // const result = memoize(n)
  // return result
};
// @lc code=end

console.log(fib(4));
