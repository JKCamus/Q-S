// let str='hello-world'
// let b=str.split('-').map(item=>{
//   console.log(item[0]);
  
//   return item[0].toUpperCase()+item.substr(1,item.length)
// }).join('')
// console.log(b);
// 较好的方式
function change(str){
  let arr=str.split('-')
  for(let i=1;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1)
  }
  return arr.join('')
}
str='hello-world'
str1='best-future'
console.log(change(str));
console.log(change(str1));



