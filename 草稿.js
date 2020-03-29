// const throttle = (func, delay = 500) => {
//   let flag = true
//   return (...args) => {
//     if (!flag) return
//     flag = false
//     setTimeout(() => {
//       func.apply(this, args)
//       flag = true
//     }, delay)
//   }
// }
// 创建axios实例
// let obj=JSON.parse(JSON.stringify(obj))
// var array =[1,2,22,3,4,5,-1,996]
// var max = Math.max.apply(null,array)//直接返回最大值99
// console.log(max);
let [head,...tail]=[1,2,3,4]
console.log(tail);
