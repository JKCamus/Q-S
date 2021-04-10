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
  if (prices.length === 0) {
    return 0;
  }
  let minPrice = prices[0],
    maxProfit = 0;
  for (let item of prices) {
    if (item < minPrice) {
      minPrice = item;
    } else if (item - minPrice > maxProfit) {
      maxProfit = item - minPrice;
    }
  }
  return maxProfit;
};
// @lc code=end
