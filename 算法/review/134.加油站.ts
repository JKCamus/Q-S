/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */
/**
 * @description:
 * 思路：
 * 1.计算总cost和总gas
 * 2.如果cost>gas是肯定到不了的
 * 3. 计算currentGas，更新起始位置。重置currentGas
 *
 */
// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0, totalCost = 0
  for (let i = 0; i < gas.length; i++) {
    totalCost += cost[i]
    totalGas += gas[i]
  }
  if (totalGas < totalCost) {
    return -1
  }

  let start = 0, currentGas = 0
  for (let i = 0; i < gas.length; i++) {
    currentGas = currentGas + gas[i] - cost[i]
    if (currentGas < 0) {
      start = i + 1
      currentGas = 0
    }
  }
  return start
};
// @lc code=end

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
