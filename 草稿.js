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
// let [head,...tail]=[1,2,3,4]
// console.log(tail);
// 
// 日常手写
// function dounce(func,delay){
//   let timer=null
//   return function (...args){
//     if(timer)clearInterval(timer)
//     timer=setTimeout(()=>{
//       func(...args)
//     },delay)
//   }
// }
// function throttle(func,delay){
//   let flag=true
//   return function(...args){
//     if(!flag)return
//     flag=false
//     setTimeout(()=>{
//       func(...args)
//       flag=true
//     },delay)
//   }
// }
// // axios 
// export function request(config){
//   const instance =axios.create({
//   baseURL:'',
//   timeout:''
//   })

//   instance.interceptors.request.use(config=>{
//     return config
//   },err=>{

//   })

//   instance.interceptors.response.use(res=>{
//     return res
//   },err=>{
//     console.log(err);

//   })
//   return instance(config)
// }
// // bubble
// function bubble(arr){
//   let length=arr.length
//   for(let i=0;i<length-1;i++){
//     for(let j=0;j<length-i-1;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]]=[arr[j+1],a[j]]
//       }
//     }
//   }
// }
// //* 深拷贝
// let b=JSON.parse(JSON.stringify(a))

// str.split(' ')
// console.log(str.split(' '));
// str.trim()
// console.log(str);//不改变原值
// console.log(str.trim());//去除了左右空格
// console.log(str.replace(/\s*/g,""));//去除所有空格
// log
// //*典型闭包
// function person(){
//   var name='camus'
//   function group(){
//     console.log(name);
//   }
// return group
// }
// 字符串去重
// let str='qweqweqweqweqsasd'
// // new Set(str)//将字符串转为Set数据结构
// // [...new Set(str)]将Set数据结构解构赋值（转为数组）
// res=[...new Set(str)].join('')//通过join转为字符串
// console.log(res);//qwesad



// function num(str){
//   var arr=str.split(' ')
//   return arr[arr.length-1].length
// }
// console.log(num('hello world'));

// // 初始值
// var number = 100
// // 猜数次数
// var time = 0
// // 每次猜的数字
// var temp = null
// // 标记上一次是猜大了还是猜小了
// var stamp = null
// // 存放猜过的数字
// var array = []
// function guess (target, min = 1, max = 100) {
//   // 判断给的数字是否在范围内
//   if (target > 100 || target < 1) {
//     console.log('要1到100的数字哦！')
//     return
//   }
//   temp = Math.floor((max + min) / 2)
//   temp = tempChange(temp)
//   // 将猜过的数字放进一个数组里
//   array.push(temp)
//   number = Math.floor(number / 2)
//   if (number === 0) number = 1
//   if (target === temp) {
//     console.log('第' + ++time + '次，我猜是' + temp + '%c bingo！', 'color: green')
//     return
//   } else if (target >= min + number) {
//     console.log('第' + ++time + '次，我猜是' + temp + '%c 小了！', 'color: red')
//     // 猜小了，标记为true
//     stamp = true
//     guess(target, min + number, max)
//   } else if (target <= max - number) {
//     console.log('第' + ++time + '次，我猜是' + temp + '%c 大了！', 'color: red')
//     // 猜大了，标记为false
//     stamp = false
//     guess(target, min, max - number)
//   }
// }

// // 判断这个数字是否已经猜过
// function tempChange (temp) {
//   if (array.indexOf(temp) !== -1) {
//     if (stamp) {
//       temp++
//     } else {
//       temp--
//     }
//   }
//   return temp
// }
// guess(9)

// //* eventloop理解
// async function async2(){
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function(){
//   console.log('setTimeout') 
// },0)  
// new Promise(function(resolve){
//   console.log('promise1')
//   resolve();
// }).then(function(){
//   console.log('promise2')
// }).then(function() {
//   console.log('promise3')
// }).then(function() {
//   console.log('promise4')
// }).then(function() {
//   console.log('promise5')
// }).then(function() {
//   console.log('promise6')
// }).then(function() {
//   console.log('promise7')
// }).then(function() {
//   console.log('promise8')
// })
// async1();
// async1();


// console.log('script end')
// async function async1(){
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }

//* 冒泡
// function bubble(arr){
// for(let i=0;i<arr.length-1;i++){
//   for(let j=0;j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//       [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//     }
//   }
// }
// }
// let arr = [1, 44, 6, 77, 3, 7, 99, 12];
// console.log(array);
// 进阶冒泡

//webpack打包流程
// console.log(globalThis);
// 判断环境
// this === window ? console.log('browser') : console.log('node')
//遍历对象
// let [obj, log] = [
//   {
//     a: 1, 
//     b: 2, 
//     c: 3
//   },

// ]
// Object.keys(obj).forEach(key => {
//   // log(key, obj[key]);
//   console.log(key, obj[key]);
//   // return key
// });
// /* 
// a 1
// b 2
// c 3
//  */
// // console.log('key: '+" value: "+obj[key]);

// console.log(Object.getOwnPropertyNames(obj));//[ 'a', 'b', 'c' ]
// console.log(Reflect.ownKeys(obj));//[ 'a', 'b', 'c' ]
// console.log(Object.keys(obj));//[ 'a', 'b', 'c' ]
// console.log(Object.values(obj));//[ 1, 2, 3 ]
// var a =0
// if(true){
//   a=1
//   function a(){}
//   a=21
//   console.log(a);
// }
// console.log(a);

// function createNew(Con, ...args) {
//   let obj = {} // 创建一个对象，因为new操作符会返回一个对象
//   Object.setPrototypeOf(obj, Con.prototype) // 将对象与构造函数原型链接起来
//   // obj.__proto__ = Con.prototype // 等价于上面的写法
//   let result = Con.apply(obj, args) // 将构造函数中的this指向这个对象，并传递参数
//   return result instanceof Object ? result : obj
// }

class Promise {
  constructor(executor) {
    this.status = 'pending' // 初始化状态
    this.value = undefined // 初始化成功返回的值
    this.reason = undefined // 初始化失败返回的原因

    // 解决处理异步的resolve
    this.onResolvedCallbacks = [] // 存放所有成功的resolve
    this.onRejectedCallbacks = [] // 存放所有失败的reject

    /**
     * @param {*} value 成功返回值
     * 定义resolve方法
     * 注意：状态只能从pending->fulfilled和pending->rejected两个
     */
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled' // 成功时将状态转换为成功态fulfilled
        this.value = value // 将成功返回的值赋值给promise
        // 为了解决异步resolve以及返回多层promise
        this.onResolvedCallbacks.forEach(fn => {
          fn() // 当状态变为成功态依次执行所有的resolve函数
        })
      }
    }
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected' // 失败时将状态转换为成功态失败态rejected
        this.reason = reason // 将失败返回的原因赋值给promise
        this.onRejectedCallbacks.forEach(fn => {
          fn() // 当状态变为失败态依次执行所有的reject函数
        })
      }
    }
    executor(resolve, reject) // 执行promise传的回调函数
  }
  /**
   * 定义promise的then方法 
   * @param {*} onFulfilled 成功的回调
   * @param {*} onRejected 失败的回调
   */
  then(onFulfilled, onRejected) {
    // 为了解决then方法返回Promise的情况
    const promise2 = new Promise((resolve, reject) => {
      if (this.status === 'fulfilled') { // 如果状态为fulfilled时则将值传给这个成功的回调
        setTimeout(() => {
          const x = onFulfilled(this.value) // x的值有可能为 promise || 123 || '123'...
          // 注意：此时调用promise2时还没有返回值，要用setTimeout模拟进入第二次事件循环；先有鸡先有蛋
          resolvePromise(promise2, x, resolve, reject)
        }, 0)
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          const x = onRejected(this.reason) // 如果状态为rejected时则将视频的原因传给失败的回调
          resolvePromise(promise2, x, resolve, reject)
        }, 0)
      }
      if (this.status === 'pending') { // 记录-》解决异步
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            const x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            const x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          }, 0)
        })
      }
    })
    return promise2; // 解决多次链式调用的问题
  }
}

const resolvePromise = (promise2, x, resolve, reject) => {
  // console.log(promise2, x, resolve, reject)
  if (promise2 === x) { // 如果返回的值与then方法返回的值相同时
    throw TypeError('循环引用')
  }
  // 判断x是不是promise;注意：null的typeof也是object要排除
  if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    try {
      const then = x.then // 获取返回值x上的then方法；注意方法会报错要捕获异常；原因111
      if (typeof then === 'function') { // 就认为是promise
        then.call(x, y => {
          // resolve(y)
          // 递归解析 ; 有可能返回多个嵌套的promise
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          reject(r)
        })
      }
    } catch (e) {
      reject(e)
    }
  } else {
    resolve(x);
  }
}
module.exports = Promise;

function deepClone(obj) {
  // 过滤一些特殊情况
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (obj instanceof RegExp) { // 正则
    return new RegExp(obj);
  }
  if (obj instanceof Date) { // 日期
    return new Date(obj);
  }
  // let newObj = {}
  // let newObj = new Object()
  let newObj = new obj.constructor; 
  // 不直接创建空对象的目的：克隆的结果和之前保持所属类  =》 即能克隆普通对象，又能克隆某个实例对象
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
// 第一种：instanceof
console.log(arr instanceof Array)
// 第二种：constructor
console.log(arr.constructor === Array)
// 第三种：判断对象是否有 push 等数组的一些方法
console.log(!!arr.push && !!arr.concat)
// 第四种： toString
console.log(Object.prototype.toString.call(arr) === '[object Array]')
// 第五种：Array.isArray
console.log(Array.isArray(arr))