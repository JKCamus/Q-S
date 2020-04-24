let str = 'hello world!';
console.log(Array.from(str)) // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]
console.log(str);
console.log(str.split(' '));
console.log(str);

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(function(){
    return Math.random() - 0.5;
})
console.log(arr);

var script = document.createElement('script');
script.type = 'text/javascript';

// 传参并指定回调执行函数为onBack
script.src = 'http://www.....:8080/login?user=admin&callback=onBack';
document.head.appendChild(script);

// 回调执行函数
function onBack(res) {
    alert(JSON.stringify(res));
}





//resultArr即中获取到了页面中的所有checkbox
var resultArr= [];
var input = document.querySelectorAll('input');
for( var i = 0; i < input.length; i++ ) {
    if( input[i].type == 'checkbox' ) {
        resultArr.push( input[i] );
    }
}

// var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
// console.log(Array.isArray ([...new Set(arr)]));
// function unique(arr) {
//   if (!Array.isArray(arr)) {
//       console.log('type error!')
//       return
//   }
//   var array = [];
//   for (var i = 0; i < arr.length; i++) {
//       if (array .indexOf(arr[i]) === -1) {
//           array .push(arr[i])
//       }
//   }
//   return array;
// }
// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))
// function unique(arr) {
//   return arr.filter(function(item, index, arr) {
//     //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
//     return arr.indexOf(item, 0) === index;
//   });
// }

// function unique(arr){
//   return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
// }
// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]



class Parent(){
  constructor(){
    this.value=value
  }
  getValue(){
    console.log(this.value);
    
  }
}
class Son extends Parent{
  constructor(){
    super(value)
    this.value=value
  }
}
let child=new child(1)
