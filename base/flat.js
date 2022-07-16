// Array.prototype.fakeFlat = function (num = 1) {
//   if (!Number(num) || num < 0) return this;
//   let arr = [...this];
//   return num>0?arr.reduce(
//     (pre, curr) =>
//       Array.isArray(curr) ? [...pre, curr.fakeFlat(--num)] : [...pre, ...curr],
//     []
//   ):arr.slice();
// };


function Parent(name,age) {
  this.name=name
  this.age=age||0
}
Parent.prototype.say=function (){
  console.log('res=>person')
}

function Son(name) {
  this.name=name
  this.score=90

}
Son.prototype.study=function () {
  console.log('Son', )
}
Son.prototype=new Parent()
const son=new Son('peter')
son.study()
