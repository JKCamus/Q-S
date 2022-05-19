/* 
!字符统计
*/
let str = '9876673';

let info = str.split('').reverse().reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});

console.log('res=>', info)
//? array.reduce(function(total, currentValue, currentIndex, arr), initialValue)