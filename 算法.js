//!回文，重点在于reverse
//str.split('')将字符串切割为数组
//"2:3:4:5".split(":")	//将返回["2", "3", "4", "5"]
//arrayObject.reverse()翻转数组
//join('*')通过*连接
function checkPalindrome(str) {
  console.log(str.split(''));//转为数组=>["我", "爱", "我"]
  console.log(str.split('').reverse());//翻转数组=>["我", "爱", "我"]
  console.log(str.split('').reverse().join(''));//再次转为字符串用空格连接=>我爱我
  return str == str.split('').reverse().join('')
}
console.log(checkPalindrome('我爱我'));

//!
let arr=[1,13,24,11,11,14,1,2]

console.log([...new Set(arr)]);
