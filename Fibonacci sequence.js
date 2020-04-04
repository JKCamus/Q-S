/* 
!在开发中尽量避免使用递归，虽然好用且易读。
!递归如果没有写好结合条件，容易造成无线循环
!递归调用非常占用数据空间（空间复杂度）和效率低（时间复杂度）
!当输入个数num较大时，容易发生栈的溢出，因为调用帧过多
*/
//! 递归实现斐波拉契数列
function fib(num) {
  if (num === 0 || num === 1) {
    return 1
  }
  return fib(num - 1) + fib(num - 2)
}
console.log(fib(5));
//* 优化
function fib1(num, ac1 = 1, ac2 = 1) {
  if (num <= 1) {
    return ac2
  }
  return fib1(num - 1,ac2, ac1 + ac2)
}
console.log(fib1(5));

