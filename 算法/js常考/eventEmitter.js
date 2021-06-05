/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-04-28 19:49:06
 * @LastEditors: camus
 * @LastEditTime: 2021-05-05 21:06:53
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }
  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.log("没有这个事件");
      return this;
    }
    cbs.forEach((cb) => cb.apply(this, args));
    return this;
  }
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
    return this;
  }
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this;
  }
  once(event, cb) {
    const func = (...args) => {
      cb.apply(this, args);
      this.off(event, func);
    };
    this.on(event, func);
    return this;
  }
}
const emitter = new EventEmitter();
emitter.on("log", (param) => {
  console.log(param);
});
emitter.once("log", "Event Fire");
emitter.once("log", "Event Fire");
emitter.once("log", "Event Fire");


// 第三版
Array.prototype.fakeReduce = function fakeReduce(fn, base) {
  if (typeof fn !== "function") {
    throw new TypeError("arguments[0] is not a function");
  }
  let initialArr = this;
  let arr = initialArr.concat();

  if (base) arr.unshift(base);
  let index, newValue;

  while (arr.length > 1) {
    index = initialArr.length - arr.length + 1;
    newValue = fn.call(null, arr[0], arr[1], index, initialArr);

    arr.splice(0, 2, newValue); // 直接用 splice 实现替换
  }

  return newValue;
};
