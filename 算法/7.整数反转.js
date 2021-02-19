/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  if (x < 0) {
    result = -parseInt(
      Array.from(x + "")
        .reverse()
        .join("")
    );
  } else {
    result = parseInt(
      Array.from(x + "")
        .reverse()
        .join("")
    );
  }

  if (result <= Math.pow(-2, 31) || result >= Math.pow(2, 31) - 1) {
    result = 0;
  }
  return result;
  // let result = 0;
  // while (x) {
  //   result = result * 10 + (x % 10);
  //   console.log('sss', parseFloat((x /= 10)))
  //   if (x < 0 && parseFloat((x /= 10)) < -1) {
  //     break;
  //   } else if (x > 0 && parseFloat((x /= 10)) < 1) {
  //     break;
  //   }
  //   // parseFloat((x /= 10))
  //   x /= 10;
  // }
  // console.log("", result);
  // if (result <= Math.pow(-2, 31) || result >= Math.pow(2, 31) - 1) {
  //   result = 0;
  // }
  // return result;
};
console.log("", reverse(-123));

// @lc code=end
