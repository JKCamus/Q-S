/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-25 20:29:30
 * @LastEditors: camus
 * @LastEditTime: 2021-03-11 23:16:29
 */
/**
 * 二分查找
 * @param n int整型 数组长度
 * @param v int整型 查找值
 * @param a int整型一维数组 有序数组
 * @return int整型
 */
function upper_bound_(n, v, a) {
  if (a[n-1]<v) {
    return n+1
  }
  let left = 0,
    right = n - 1;
  let res = n + 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (a[mid] >= v) {
      // 不断更新最接近的值
      res = mid + 1;
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return res;
}

console.log('res', upper_bound_(100,97,[3,3,4,4,4,5,6,6,6,7,8,8,12,13,15,16,21,21,22,24,24,27,28,32,34,35,35,36,36,39,40,41,41,42,44,44,45,45,47,47,47,47,48,48,50,51,51,53,53,53,54,54,54,56,56,57,59,60,60,60,60,61,62,63,65,65,65,65,67,67,68,70,71,71,74,75,75,79,81,84,84,86,86,87,90,90,90,90,91,92,93,94,94,94,95,97,97,98,98,99]))
