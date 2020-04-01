let p1=Promise.resolve(1)
let p2=Promise.resolve(2)
let p=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(3)
  },2000)
})
Promise.all([p1,p2,p]).then(console.log)
// 原生js实现