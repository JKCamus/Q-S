/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-15 11:54:26
 * @LastEditors: camus
 * @LastEditTime: 2022-05-19 22:32:31
 */
/**
 * @description: 参数柯里化
 */
function currying(curriedFunc) {
  return function curried(...args) {
    if (args.length >= curriedFunc.length) {
      return curriedFunc.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

function multiply(a,b,c) {
  return a*b*c
}
let curried=currying(multiply)
console.log('', curried(1)(2,3))
