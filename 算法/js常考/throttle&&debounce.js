/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-03 17:34:24
 * @LastEditors: camus
 * @LastEditTime: 2021-03-03 17:42:18
 */
function debounce(func, delay = 300) {
  let timer = null;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(
      () => {
        func(...args);
      }, //es6
      delay
    );
  };
}

function throttle(func, delay = 300) {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      func.apply(this, args);
      flag = true;
    }, delay);
  };
}
