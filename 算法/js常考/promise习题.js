/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-17 21:42:36
 * @LastEditors: camus
 * @LastEditTime: 2021-03-17 21:42:37
 */
new Promise((resolve, reject) => {
  reject();
  resolve(); // 这个 promise 最终状态? 失败态/rejected
  console.log("这个是同步代码哦"); // 这个会输出吗? 会
})
  .catch(() => {
    console.log("确实被捕获了");
  })
  .then(() => {
    console.log("就算reject之后的then也是会打印");
  }); // 这个会执行吗? 会

