const promiseAll = (promises) => {
  const result = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then((res) => {
        result[index] = res;
        counter += 1;
        if (counter === promises.length) resolve(result);
      }, reject);
    });
  });
};
