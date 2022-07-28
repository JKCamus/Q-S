let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  }, 2000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 错误
    reject(3);
  }, 3000);
});
console.time("res=>", new Date().getMilliseconds());
Promise.any([promise1, promise2, promise3]).then((res) => {
  console.timeEnd("res=>", new Date().getMilliseconds());
  console.log(res);
  //结果为：[1,2,3]
}).catch(err=>{
  console.timeEnd("res=>", new Date().getMilliseconds());
  console.log("err",err);
})
