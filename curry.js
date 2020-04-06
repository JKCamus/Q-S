// // 丐版
// const add = function add(x) {
// 	return function (y) {
// 		return x + y
// 	}
// }
// const add1 = add(1)
// add1(2) // 3
// add1(20) //21=20+1
// // 优化版本
function curring(){
  var args=Array.prototype.slice.call(arguments)
  var fn =function(){
    var newArgs=args.concat(Array.prototype.slice.call(arguments))
    return curring.apply(this,newArgs)
  }
  fn.toString=function(){
    return args.reduce(function(a,b){
      return a*b
    })
  }
  return fn
}
console.log(curring(2)(3)(4));//24
