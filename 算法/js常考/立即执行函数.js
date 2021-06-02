/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-02 18:14:47
 * @LastEditors: camus
 * @LastEditTime: 2021-06-02 18:19:55
 */
(function test(a, b, c, d) {
  console.log("res=>", test);
  // 假如未在函数内重新定义与立即函数重名变量，则test为立即执行函数。
  // 重新定义后则依据定义的规则行事
  var test = "2";
  console.log('res=>', this)//指向全局
  this.a=()=>console.log('res=>',this )//指向全局
  console.log("res=>", test);
  return this
})(1, 2, 3).a()
