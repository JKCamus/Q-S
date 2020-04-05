res=['1','2','3'].map(parseInt)
console.log(res);//[ 1, NaN, NaN ]

//! 实际上，执行的是下列函数
res1=['1','2','3'].map((item,index)=>{
  return parseInt(item,index)
})
console.log(res1);//[ 1, NaN, NaN ]
// 返回的值为：
parseInt('1',0)//0进制，就是本身
parseInt('2',1)//1进制，没有2
parseInt('3',2)//2进制，2进制没有3


