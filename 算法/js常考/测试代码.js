// console.log("1");
// setTimeout(() => {
//   console.log("2");
//   Promise.resolve().then(() => {
//     console.log("3");
//   });
// }, 0);
// new Promise((resolve, reject) => {
//   console.log("4");
//   resolve();
// })
//   .then(() => {
//     console.log("5");
//     setTimeout(() => {
//       console.log("6");
//     }, 0);
//     Promise.resolve().then(() => {
//       console.log("7");
//     });
//   })
//   .then(() => {
//     console.log("8");
//   });
// console.log("9");


inner = 'window';

function say() {
    console.log(inner);
    console.log(this.inner);
}

var obj1 = (function() {
    var inner = '1-1';
    return {
        inner: '1-2',
        say: function() {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();

var obj2 = (function() {
    var inner = '2-1';
    return {
        inner: '2-2',
        say: () => {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();


say();//window  window
obj1.say();// 1-1 1-2
obj2.say();// 2-1 window
obj1.say = say;
obj1.say();//window  1-2  ---
obj1.say = obj2.say;
obj1.say();//2-1 window
// 闭包的入参在定义的时候就确定了，
// this的指向跟调用的对象有关

Function.prototype.myCall = function (context = window) {
  //   context =
  //     context !== null && context !== undefined ? Object(context) : window;
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  let fn = Symbol();
  context[fn] = this;
  let args = [...arguments].slice(1);
  let result = context[fn](...args);
  delete context[fn];
  return result;
};
Function.prototype.myApply = function (context = window) {
  context = context ? Object(context) : window;
  let fn = Symbol();
  context[fn] = this;
  let result = arguments[1] ? context[fn](...arr) : context[fn]();
  delete context[fn];
  return result;
};


