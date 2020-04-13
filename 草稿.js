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