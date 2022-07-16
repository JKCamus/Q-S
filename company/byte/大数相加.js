/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-11 21:57:14
 * @LastEditors: camus
 * @LastEditTime: 2021-03-11 22:41:41
 */
let a = "9007199254740991";
let b = "1234567899999999999";

function add(a, b) {
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, 0);
  b = b.padStart(maxLength, 0);
  let sum = 0,
    carr = 0,
    res = "";
  for (let i = maxLength - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carr;
    carr = Math.floor(sum / 10);
    res = (sum % 10) + res;
  }
  if (carr > 1) {
    sum = carr + sum;
  }
  return res;
}
console.log("res=>", add(a, b));
// console.log("res=>", "xxx".padStart(4, "ab")); //axxx
