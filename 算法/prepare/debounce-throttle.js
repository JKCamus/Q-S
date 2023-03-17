function debounce(func, delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, delay = 1000) {
  let flag = true;
  return function (...args) {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      func.apply(this, args);
      flag = true;
    }, delay);
  };
}

const obj = {
  name: "foo",
  logName() {
    console.log(this.name);
  },
};

const throttledLogName = debounce(obj.logName, 300);
throttledLogName(); // 输出 "foo"



