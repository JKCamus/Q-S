/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-04-18 18:02:21
 * @LastEditors: camus
 * @LastEditTime: 2021-04-18 18:04:44
 */
var s = 0;

var i = 1;

var funcs = [];

var n = 3;

function x(n) {
  for (i = 0; i < 3; i++) {
    funcs[i] = () => {
      console.log("res=>", s);
      s = s + i * n;
      console.log(s);
    };
  }
}

x(1);
funcs[0]();
funcs[1]();
funcs[2]();


var x = style`{background: red;}`;

