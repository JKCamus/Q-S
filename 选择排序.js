/* 通用 */
function checkArray(array) {
  if (!array) return
}

function swap(array, left, right) {
  let rightValue = array[right]
  array[right] = array[left]
  array[left] = rightValue
}
//!思路
/* 
选择排序的思路:
选定第一个索引位置，然后和后面元素依次比较
如果后面的队员, 小于第一个索引位置的队员, 则交换位置
经过一轮的比较后, 可以确定第一个位置是最小的
然后使用同样的方法把剩下的元素逐个比较即可
可以看出选择排序，第一轮会选出最小值，第二轮会选出第二小的值，直到最后
*/
/* 主体*/
function selection(array) {
  checkArray(array);
  // 2外层循环: 从0位置开始取出数据, 直到length-2位置
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    // 3.内层循环: 从i+1位置开始, 和后面的内容比较
    for (let j = i + 1; j < array.length; j++) {
      // 4.如果i位置的数据大于j位置的数据, 那么记录最小的位置
      minIndex = array[j] < array[minIndex] ? j : minIndex;
    }
    // 交换min和i的位置
    swap(array, i, minIndex);
  }
  return array;
}
let array = [1, 2, 2, 3, -10, 0, 20]
console.log(selection(array)); //[-10, 0, 1, 2, 2, 3, 20]
