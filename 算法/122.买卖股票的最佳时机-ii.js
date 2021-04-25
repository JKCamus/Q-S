/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *只能用while循环，顺序执行while循环，得到波谷和波峰，取得一次利润
  i相当于拨轮，while循环通过拨动拨轮获得最低点和最高点
  尤其注意，越界问题
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }
  let profit = 0,
    valley = prices[0],
    peak = prices[0];
  const len = prices.length;
  let i = 0;
  while (i < len - 1) {
    while (i < len - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];
    while (i < len - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];
    profit += peak - valley;
  }
  return profit;
};
// @lc code=end
