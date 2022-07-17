function create() {
  // 1. 获取构造函数，并且删除 arguments 中的第一项
  const Fn = [].shift.call(arguments);
  // 2. 创建一个空的对象并链接到构造函数的原型，使它能访问原型中的属性
  const obj = Object.create(Fn.prototype);
  // 3. 使用apply改变构造函数中this的指向实现继承，使obj能访问到构造函数中的属性
  const ret = Fn.apply(obj, arguments);
  // 4. 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
}
// 构造函数中有返回值且为对象，那么创建的实例就只能访问到返回对象中的属性
// 构造函数中没有返回值，那么创建的实例就能访问到这个构造函数中的所有属性了。
function Person (name) {
  this.name = name
  // 无返回值
  // return {name:this.name}
}
Person.prototype.eat = function () {
  console.log('Eatting')
}

const c = create(Person, 'LinDaiDai')
console.log(c) // Person{ name: 'LinDaiDai' }


