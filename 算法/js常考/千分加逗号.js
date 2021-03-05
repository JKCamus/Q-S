/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-03 13:53:14
 * @LastEditors: camus
 * @LastEditTime: 2021-03-03 15:04:45
 */
/**
 * @description: 考虑正负，考虑小数
 * @param {*} nums
 */
function numFormat(nums) {
  // console.log("res=>", ~~nums); //12345678
  // 这里需要区别整数负数，正数Math.floor(nums) 负数Math.ceil(nums)
  // return nums>=0 ? Math.floor(num) : Math.ceil(num);
  let result = "";
  let flag = nums > 0 ? "" : "-";
  const numArr = (Math.abs(nums) + "").split(".");
  let integerStr = numArr[0];
  while (integerStr.length > 3) {
    result = "," + integerStr.slice(-3) + result;
    integerStr = integerStr.slice(0, integerStr.length - 3);
  }
  if (integerStr) {
    result = integerStr + result;
  }
  result = numArr[1] ? result + `.${numArr[1]}` : "";
  result = flag + result;
  return result;
}

console.log("res=>", numFormat(-1123456789.25585555555));

// /**
//  * @description: 会截取小数点后三位，四舍五入
//  */
// console.log("res1=>", (12345678.123456).toLocaleString()); //12,345,678.123
// /**
//  * @description: 同样也会四舍五入保留三位小数
//  */
// const formatter = new Intl.NumberFormat();
// console.log("res2=>", formatter.format(12345678.123456));
// /**
//  * @description: 正则，小数点后数字保留
//  * @param {*} num
//  */
// function millionFormat(num) {
//   return num && num.toString()
//     .replace(/\d+/, function(s){
//     return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
//   })
// }

// console.log("res2=>", millionFormat(12345678.123456));
