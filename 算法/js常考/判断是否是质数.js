/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-24 16:50:17
 * @LastEditors: camus
 * @LastEditTime: 2021-02-24 17:57:26
 */
var countPrimes = function (n) {
  let count = 0;
  let arr = Array(n).fill(0);
  for (let i = 2; i < n; i++) {
    if (!arr[i - 1]) {
      count++;
      for (let j = i * i; j <= n; j += i) {
        arr[j - 1] = true;
      }
    }
  }
  return count;
};
// 合数num为它的两个平方根之积，即num = \sqrt{num} * \sqrt{num}，num=a*b,当a,b不相等时，一个大于\sqrt{num}，一个小于\sqrt{num}，即合数num较小的因数范围为2到\sqrt{num}之间。
function isPrime(num) {
  if (num <= 3) {
    return num > 1;
  } else {
    let sq = Math.sqrt(num);
    // 用2到sq的整数去除，均无法整除，则n为质数。
    for (let i = 2; i <= sq; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log("res=>", isPrime(21));

console.log("res=>", new Uint8Array(8));
// console.log("res=>", countPrimes(10));
