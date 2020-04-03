// let str=' a a a  ae ff fasdfsf  '
// ///* trim()去除左右两端的空格，replace配合正则可以去除所有的空格 */
// console.log(str.trim());//a a a  ae ff fasdfsf
// console.log(str.replace(/\s*/g,""));//aaaaefffasdfsf

// 字符串去重
function removeRepeat(str){
  let res=''
  let len=str.length 
  for(let i=0;i<len;i++){
    if(res.indexOf(str[i])==-1){
      res=res+str[i]
    }
  }
  return res
}
let str='womendouyiwuwuqasyang'
console.log(removeRepeat(str));



