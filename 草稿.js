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
// // 深拷贝
// let b=JSON.parse(JSON.stringify(a))

// str.split(' ')
// console.log(str.split(' '));
str.trim()
console.log(str);//不改变原值
console.log(str.trim());//去除了左右空格
console.log(str.replace(/\s*/g,""));//去除所有空格
log




