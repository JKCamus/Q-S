/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @description: 无限比交易，每一轮波峰波谷都需要加上。先找波谷
 * 思路：
 * 1. max，波峰波谷记录，一枚指针
 * 2. while循环，循环到数组倒数第二个即可
 * 3. while循环，寻找波谷，找到后记录，
 * 4. while循环，找到波峰，找到后记录
 * 5。计算一轮收益
 * 注意：
 * 边界
 * 循环内循环，指针的使用
 * 可以不断买卖
 */
// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length === 0) {
    return 0
  }
  let max = 0, valley = prices[0], peak = prices[0], i = 0
  const len = prices.length - 1
  while (i < len) {
    while (i < len && prices[i] >= prices[i + 1]) {
      i++
    }
    valley = prices[i]
    while (i < len && prices[i] <= prices[i + 1]) {
      i++
    }
    peak = prices[i]
    max+=peak-valley
  }


  return max

};
// @lc code=end
console.log(maxProfit([7,1,5,3,6,4]));

