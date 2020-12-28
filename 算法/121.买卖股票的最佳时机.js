/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @思路：股票低值，肯定在左侧，循环比较，获取左侧的最低值。
 *
 * @return {number}
 */

var maxProfit = function (prices) {
  let minPrice = prices[0],
    maxProfit = 0;
  if (prices.length === 0) return 0;
  for (let i = 0; i < prices.length; i++) {
    // 左侧最低值
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else {
      // 有更好的利润肯定出现在右侧
      if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
  }
  return maxProfit;
};
// @lc code=end
