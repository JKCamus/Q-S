/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-05-16 15:29:26
 * @LastEditors: camus
 * @LastEditTime: 2021-05-16 16:42:35
 */
// [-4,1, 10, -1, -8, 3, 6, -9, 1]
// [-4, -1,-8,-9,1,10,3,6,1]
// 不允许新建数组、时间复杂度O(N)，调整后正数和负数部分的顺序无所谓
const arr = [-4, 1, 10, -1, -8, 3, 6, -9, 1];
function sort(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] > 0 && arr[j] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (arr[i] < 0) {
      i += 1;
    }
    if (arr[j] > 0) {
      j -=1
    }
  }
  return arr;
}

console.log("res=>", sort(arr));
