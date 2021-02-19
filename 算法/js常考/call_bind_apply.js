/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-19 16:28:56
 * @LastEditors: camus
 * @LastEditTime: 2021-02-19 17:40:22
 */
Function.prototype.myCall = function (content = window) {
  content.fn = this;
  let args = [...arguments].slice(1);
  let res = content.fn(...args);
  delete content.fn;
  return res;
};

Function.prototype.myApply = function (content = window) {
  content.fn = this;
  let res;
  if (arguments[1]) {
    res = content.fn(...arguments[1]);
  } else {
    res = content.fn();
  }
  delete content.fn();
  return res;
};
