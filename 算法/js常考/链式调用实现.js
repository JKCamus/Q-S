/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-01 09:39:36
 * @LastEditors: camus
 * @LastEditTime: 2021-06-01 09:49:56
 */
// Mask('jack').sleep(5)
function Mask(name) {
  this.sleep = (time) => {
    setTimeout(() => {
      console.log(`${name} sleep`);
    }, time * 1000);
  };
  return this;
}
Mask("camus").sleep(2);
