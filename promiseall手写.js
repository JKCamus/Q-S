let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 2000)
})
Promise.all([p1, p2, p]).then(console.log)
// 原生js实现

Promise.all = function (promise) {
  let res = []
  // 返回一个Promise
  return new Promise(function (res, rej) {
    // 遍历传入的Promise数组对象
    Promise.forEach(promise=>{
      promise.then(res=>{
        // 将结果压入数组
        res.push(res)
        // 当长度与数组长度相同时返回结果
        if(res.length==promise.length){
          resolve(res)
        }
      })
      .catch(rej)
    })
  })
}