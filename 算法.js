//!回文，重点在于reverse
//str.split('')将字符串切割为数组
//"2:3:4:5".split(":")	//将返回["2", "3", "4", "5"]
//arrayObject.reverse()翻转数组
//join('*')通过*连接
// function checkPalindrome(str) {
//   console.log(str.split(''));//转为数组=>["我", "爱", "我"]
//   console.log(str.split('').reverse());//翻转数组=>["我", "爱", "我"]
//   console.log(str.split('').reverse().join(''));//再次转为字符串用空格连接=>我爱我
//   return str == str.split('').reverse().join('')
// }
// console.log(checkPalindrome('我爱我'));

// //!
// let arr=[1,13,24,11,11,14,1,2]

// console.log([...new Set(arr)]);

/* 
!字符串翻转 
*/
/* let string="Hello World!"
let reverseString=string.split('').reverse().join('')

console.log(reverseString);
let reverseString2=string.split('').reduce((res,char)=>{
  console.log(char);
  return char+res
}
)
console.log(reverseString2); */

/* 
字符统计
*/
let str = 'sdfsdfasfa';

let info = str.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
//? array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
console.log(Array.isArray([1, 1, 2]));
console.log(info); //{ a: 3, b: 2, c: 2, d: 1 }
console.log(Object.keys(info)); //[ 'a', 'b', 'c', 'd' ]
console.log(Object.values(info)); //[ 3, 2, 2, 1 ]
let arr = Object.values(info)
// let arr=[2,3,3,4,5,65,9]
var max = Math.max(...arr)
// let max1=Math.max.apply({},arr)
// var indexOfMax=str.indexOf('c')//2
// var objMax=info.indexOf(max)//
// *不支持对象，支持数组，字符串
//*indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
var indexOfMax = arr.indexOf(max) //2
console.log(max);
console.log(indexOfMax);
//*reduce万岁
var indexOfMax1 = 0
var max1 = arr.reduce((count, value, index) => {
  return value > count ? (indexOfMax1 = index, value) : count, 0
})
console.log(indexOfMax);