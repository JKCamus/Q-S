/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-15 09:31:18
 * @LastEditors: camus
 * @LastEditTime: 2021-05-20 19:36:41
 */
let arr = ["old", 1, true, ["old1", "old2"], { old: 1 }];
/**
 * @description: 浅克隆
 */
// 浅克隆
function shallCopy(obj) {
  // 只拷贝对象类型
  if (!obj || typeof obj !== "object") {
    return;
  }
  // 判断是否是数组，生成新的对象基底
  const newObject = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    // 只复制对象自己的属性
    if (obj.hasOwnProperty(key)) {
      newObject[key] = obj[key];
    }
  }
  // 将新的对象返回
  return newObject;
}
/**
 * @description: 深克隆 low
 *  a. 会忽略undefined；
    b. 会忽略symbol；
    c. 不能序列化函数
    d. 不能解决循环引用的对象
 */

const deepCloneLow = (arr) => JSON.parse(JSON.stringify(arr));
// console.log("res=>", deepCloneLow(arr));
/**
 * @description: 有缺陷的深克隆2
 * @param {*} obj
 */
function deepCloneLow2(obj) {
  function isObject(o) {
    return (typeof o === "object" || typeof o === "function") && o !== null;
  }

  if (!isObject) {
    throw new Error("非对象");
  }

  const isArray = Array.isArray(obj);
  const newObj = isArray ? [...obj] : { ...obj };
  // 所有自有属性key，不管是否可枚举，但不包括继承自原型的属性
  Reflect.ownKeys(newObj).forEach((key) => {
    newObj[key] = isObject(obj[key]) ? deepCloneLow2(obj[key]) : obj[key];
  });
  return newObj;
}
console.log("res=>", deepCloneLow2(arr));

// 深克隆完整版本
function deepClone(origin, m = new WeakMap()) {
  if (origin == undefined || typeof origin !== "object") {
    return origin;
  }
  if (origin instanceof Date) {
    return new Date(origin);
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  const val = m.get(origin);
  if (val) {
    return val;
  }
  // {} 字面量生成的 也就是new Object生成的
  // constructor也就是obj继承而来
  // 所以可以通过new这个构造器，生成一个新的对象
  const target = new origin.constructor();
  m.set(origin, target);
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], m);
    }
  }
  return target;
}
let a = {},
  b = {};
b.a = a;
a.b = b;
console.log("res=>", deepClone(b));
