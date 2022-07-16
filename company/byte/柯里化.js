/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-12 20:29:06
 * @LastEditors: camus
 * @LastEditTime: 2021-03-12 20:29:24
 */
function add(...args) {
  let sum=args.reduce((acc,cur)=>acc+cur)
  return (...nextArgs)=>nextArgs.length?add(sum,...nextArgs):sum
}

console.log("res=>", add(1)(2, 3, 4)(5)());


const carried=(func, ...args)=> {
  return args.length >= func.length
    ? func(...args)
    : (...nextArgs) => carried(func, ...args, ...nextArgs);
}
// function add1(x, y, z) {
//   return x + y + z;
// }
// const add2=carried(add1)
// console.log('res=>',add2(1)(2)(5))
