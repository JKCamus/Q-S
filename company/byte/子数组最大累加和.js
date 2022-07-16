/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-13 08:12:08
 * @LastEditors: camus
 * @LastEditTime: 2021-02-13 08:41:11
 */
/*
给定一个数组arr，返回子数组的最大累加和
例如，arr = [1, -2, 3, 5, -2, 6, -1]，所有子数组中，[3, 5, -2, 6]可以累加出最大的和12，所以返回12.
题目保证没有全为负数的数据
[要求]
时间复杂度为O(n)O(n)，空间复杂度为O(1)O(1)
 */
function maxsumofSubarray(arr) {
  if (!arr.length) {
    return 0;
  }
  let res = arr[0],
    temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    temp = temp < 0 ? arr[i] : temp + arr[i];
    res = Math.max(temp, res);
  }
  return res;
  // write code here
}
console.log("maxsumofSubarray", maxsumofSubarray([1, -2, 3, 5, -2, 6, -1]));
