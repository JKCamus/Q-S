/* 
 *将函数设为对象的属性
 *执行和删除这个函数
 *指定this到函数并传入给定参数执行函数
 *如果不传参数，默认指向window
 */
Function.prototype.myCall = function (content = window) {
  content.fn = this
  // 取出content后面参数
  let args = [...arguments].slice(1)
  let res = content.fn(...args)
  // 删除fn
  delete content.fn
  return res
}
Function.prototype.myApply = function (content = window) {
  content.fn = this
  let res
  if (arguments[1]) {
    res = content.fn(...arguments[1])
  } else {
    res = content.fn()
  }
  delete content.fn
  return res
}

var foo = {
  name: "张三",
  sayHello: function () {
    console.log(this.name);
  }
}
var lookHere = {
  name: "李四",
}
foo.sayHello.myCall(lookHere) //李四

let a = {
  value: 1
}

function getValue(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
getValue.myApply(a, ['yck', '24'])

/* 手写一个new */
var new1=function(func){
  var ob=Object.create(func.prototype)//创建对象
  var k=func.call(ob)//改变this指向，把结果赋值给K
  if (k&&typeof k==='object'){

    return k//是返回k
  }else{
    return ob//不是返回构造函数的执行结果
  }
}
