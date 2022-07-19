function call(con) {
  if (typeof this !== "function") {
    throw TypeError("need function");
  }
  // 1. 若是传入的context是null或者undefined时指向window;
  // 2. 若是传入的是原始数据类型, 原生的call会调用 Object() 转换
  const context = con !== null && con !== undefined ? Object(con) : window;
  // 3. 创建一个独一无二的fn函数的命名,避免覆盖上下文中的同名fn函数
  const fn = Symbol();
  // 4. 这里的this就是指调用call的那个函数
  // 5. 将调用的这个函数赋值到context中,
  // 这样之后执行context.fn的时候, fn里的this就是指向context了
  context[fn] = this;
  // 第0项参数是context，所以传参是从第一项开始的
  const args = [...arguments].slice(1);
  const result = context[fn](...args);
  // 第0项参数是context，所以传参是从第一项开始的
  delete context[fn];
  // result可能有返回值
  return result;
}
// 构造函数中有返回值且为对象，那么创建的实例就只能访问到返回对象中的属性
// 构造函数中没有返回值，那么创建的实例就能访问到这个构造函数中的所有属性了。
function Person(name) {
  this.name = name;
  // 无返回值
  // return {name:this.name}
}
Person.prototype.eat = function () {
  console.log("Eatting");
};

const c = create(Person, "LinDaiDai");
console.log(c); // Person{ name: 'LinDaiDai' }

Function.prototype.apply = function (con, arr) {
  if (typeof this !== "function") {
    throw TypeError("must be function");
  }
  const context = con === null || con === undefined ? window : Object(con);
  const fn = Symbol();
  context[fn] = this;
  const result = Array.isArray(arr) ? context[fn](...arr) : context[fn]();
  delete context[fn];
  return result;
};

Function.prototype.bind = function (con) {
  if (typeof this !== "function") {
    throw TypeError("error");
  }
  const context = con === null || con === undefined ? window : Object(con);
  const fn = this,
    args = [...arguments].slice(1);
  return function Fn() {
    return fn.apply(this instanceof Fn ? context : args.concat(...arguments));
  };
};
var obj = {
  name: "objName",
};
var name = "globalName";

function consoleInfo(sex, weight) {
  console.log(this, sex, weight);
}
consoleInfo("man", 100); // globalName man 100
consoleInfo.call(obj, "man", 100); // 'objName' 'man' 100
consoleInfo.call(obj, "woman", 120); // 'objName' 'woman' 120


Function.prototype.myApply = function(con) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  const context = con === null || con === undefined ? window : Object(con);
  let result = null;

  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};
