/*
 * @Description:转驼峰
 * @version:
 * @Author: camus
 * @Date: 2021-03-17 14:16:30
 * @LastEditors: camus
 * @LastEditTime: 2021-03-17 14:22:07
 */
function change(str) {
  const arr = str.split("-");
  // 大驼峰为0小驼峰为1
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join("");
}

console.log("res=>", change("hello-world"));
