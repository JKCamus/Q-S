/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-05-16 15:07:10
 * @LastEditors: camus
 * @LastEditTime: 2021-05-16 15:07:11
 */
function f1() {
  let value = 0;
  return {
    inc: function () {
      return (value += 1);
    },
  };
}
let result = f1();
console.log(result.inc()); //1
console.log(result.inc()); //2
console.log(result.inc()); //3
