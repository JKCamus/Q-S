/* 
! call
对象.call(新对象，参数1，参数2.....参数列表)
* apply
对象.apply(新对象，[参数1，参数2])
*/
var foo = {
  name: "张三",
  sayHello: function () {
    console.log(this.name);
  }
}
var lookHere = {
  name: "李四"
}
// 实质是call改变了foo的this指向为lookHere,并调用该函数
foo.sayHello.call(lookHere) //李四

/*************bind绑定**************/
var name = '李四'
var foo = {
  name: "张三",
  logName: function (age) {
    console.log(this.name, age);
    console.log(this);
    
  }
}
var fooNew = foo.logName;
var fooNewBind = foo.logName.bind(foo);
fooNew(10) //李四,10    this指向window，所以调用的是全局name,李四
fooNewBind(11) //张三,11  因为bind改变了fooNewBind里面的this指向

