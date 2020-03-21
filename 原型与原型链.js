// *构造函数prototype访问原型 也是最简单属性继承
// function Person(){}
// console.log(Person);
// Person.prototype.name ='object named Person'
// person=new Person()

// res=person.name

// res=person instanceof Person//检查person是否为Person 的实例
// console.log(res);

/* _proto_隐式访问原型 */
// function Person() {}
// Person.prototype.type = 'name'
// person = new Person()
// res = person.__proto__ === Person.prototype
// console.log(res);

//!原型访问构造函数 
// function Person() {}
// Person.prototype.type = 'name'
// person = new Person()
// res=Person.prototype.constructor===Person
// console.log(res);//true

//!原型查找
// function Person() {}
// Person.prototype.name = 'camus'
// person = new Person()

// // 情况一，person实例无属性，往原型查找属性
// res = Reflect.ownKeys(person)
// console.log(res); //[],说明本身是没有这个属性的，
// res = person.name //当前使用的是原型上的name属性
// console.log(res); //camus，那么会通过原型链继续向上找==>__proto__==>Person.prototype

// //情况二 person实例拥有name属性
// person.name='jkCamus'
// res = Reflect.ownKeys(person)
// console.log(res); //说明本身拥有属性了，那么他会使用自己的name属性，此时，res返回["name"]
// res = person.name //当前使用的是自己的name属性
// console.log(res); //camus，那么会通过原型链继续向上找==>__proto__==>Person.prototype

//!加深印象的一道题
// function Fn(){
//     this.x = 100;
//     this.y = 200;
//     this.getX = function(){
//         console.log(this.x);
//     }
// }
// Fn.prototype.getX = function(){
//     console.log(this.x);
// }
// Fn.prototype.getY = function(){
//     console.log(this.y);
// }
// var f1 = new Fn;
// var f2 = new Fn;

// console.log('0',new Fn==new Fn); //false
// console.log('1',f1.getX === f2.getX);//false
// console.log('2',f1.getY === f2.getY);//true
// console.log('3',f1.__proto__.getY === Fn.prototype.getY);//true
// console.log('4',f1.__proto__.getX === f2.getX);//false
// console.log('4.1',f1.__proto__.getX === f2.__proto__.getX);//true
// console.log('5',f1.getX === Fn.prototype.getX); //false
// console.log('6',f1.constructor);//父级的constructor属性 Fn
// console.log('7',f1.__proto__.constructor);//自己的constructor属性，通过到原型上获取
// console.dir(Fn.prototype.__proto__.constructor);//Obj
// f1.getX();//100
// f1.__proto__.getX();//und
// f2.getY();//200
// f2.__proto__.getY();//und
// Fn.prototype.getY();//und
// console.log('8',Fn.prototype);//{getX:f getY:f,constructor:f}
// console.log('9',f1.__proto__);//同上
// console.log('10',Fn.prototype === f1.__proto__);//true

// *题目2
// var A = function () {};
// A.prototype.n = 1;
// var b = new A();
// A.prototype = {
//     n: 2,
//     m: 3
// }
// var c = new A();
// console.log(b.n);
// console.log(b.m);
// console.log(c.n);
// console.log(c.m);

// *题目3
// var F = function () {};
// Object.prototype.a = function () {
//     console.log('a');
// };
// Function.prototype.b = function () {
//     console.log('b');
// }

// var f = new F();

// f.a();
// f.b();

// F.a();
// F.b();
// 题目4
function Person(name) {
    this.name = name
}
let p = new Person('Tom');
console.log(p.__proto__);
