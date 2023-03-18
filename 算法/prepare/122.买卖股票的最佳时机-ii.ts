/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let peak = prices[0],
    valley = prices[0],
    max = 0;
  let i = 0,
    len = prices.length-1;
  while (i < len) {
    while (i < len && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];
    while (i < len && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];
    max+=peak-valley
  }
  return max
}
// @lc code=end
