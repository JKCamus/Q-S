/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 */
/**
 * @description:
 * 思路：
 * 1.建立篮子，key为水果种类（数组元素），value为index
 * 2. 循环放入元素，当size>2时， 找出map中index最小的，删掉。
 * 3. j移动到删除index+1的位置
 * 4. 更新果树值
 * 注意：
 * map的删除
 * 果树数量计算，i-j+1
 */
// @lc code=start
function totalFruit(fruits: number[]): number {
  const basket = new Map()
  let max = 1, j = 0
  for (let i = 0; i < fruits.length; i++) {
    basket.set(fruits[i], i)
    if (basket.size > 2) {
      let minIndex = fruits.length - 1
      for (const [item, index] of basket) {
        minIndex = Math.min(minIndex, index)
      }
      basket.delete(fruits[minIndex])
      j = minIndex + 1
    }
    max=Math.max(max,i-j+1)
  }
  return max
};
// @lc code=end
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));

