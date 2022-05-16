//!回文，重点在于reverse
/* // str.split('')//将字符串切割为数组
// "2:3:4:5".split(":")	//将返回["2", "3", "4", "5"]
// arrayObject.reverse()//翻转数组
// join('*')//通过*连接
function checkPalindrome(str) {
  console.log(str.split(''));//转为数组=>["我", "爱", "我"]
  console.log(str.split('').reverse());//翻转数组=>["我", "爱", "我"]
  console.log(str.split('').reverse().join(''));//再次转为字符串用空格连接=>我爱我
  return str == str.split('').reverse().join('')
}
console.log(checkPalindrome('我爱我'));
 */
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
!字符统计
*/
let str = '9876673';

let info = str.split('').reverse().reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});

console.log('res=>', info)
//? array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

/* 


*/

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
/* 
!下落高度计算
 */
/* // let n=1
// let count=0;
// for(let i=0;i<5;i++){
//   count +=n
//   if(i!=0){
//     n /=2
//   }
// }
// console.log(count);
// console.log(n/2);
let str='A Famous Saying: Much Ado About Nothing (2012/8)'
let  arr=str.split(' ')
console.log(arr);
 */

// var str = "12312"
// var str1 = ""
// for (var i = str.length - 1; i >= 0; i--) {
//   if (str1.indexOf(str[i]) == -1) {
//     str1 += str[i]
//   }
// }
// console.log(str1);



// while (n = parseInt(readline())) {
//   fun(n)
// }

// function fun(num) {
//   let res = '';
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     while (num % i === 0) {
//       res += i + ' ';
//       num = num / i;
//     }
//   }
//   if (num > 1) {
//     res += num + ' ';
//   }
//   console.log(res);
// }