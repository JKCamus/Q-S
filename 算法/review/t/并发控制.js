function multiRequest(urls = [], limit) {
  const len = url.length;
  const result = Array(len).fill(false);
  let count = 0;
  return new Promise((resolve, reject) => {
    const start = () => {
      let curr = count++;
      if (curr >= len) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        !result.includes(false) && resolve(result);
        return;
      }
      const url = urls[curr];
      fetch(url)
        .then((res) => {
          result[curr] = res;
          if (curr < len) start();
        })
        .catch((err) => {
          result[curr] = err;
          if (curr < len) start();
        });
    };
    // 请求maxNum个
    while (count < limit) {
      start();
    }
  });
}

// async function asyncPool(poolLimit, array, iteratorFn) {
//   const ret = []; // 存储所有的异步任务
//   const executing = []; // 存储正在执行的异步任务
//   for (const item of array) {
//     // 调用iteratorFn函数创建异步任务
//     const p = Promise.resolve().then(() => iteratorFn(item, array));
//     ret.push(p); // 保存新的异步任务

//     // 当poolLimit值小于或等于总任务个数时，进行并发控制
//     if (poolLimit <= array.length) {
//       // 当任务完成后，从正在执行的任务数组中移除已完成的任务
//       const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//       executing.push(e); // 保存正在执行的异步任务
//       if (executing.length >= poolLimit) {
//         await Promise.race(executing); // 等待较快的任务执行完成
//       }
//     }
//   }
//   return Promise.all(ret);
// }

// const timeout = i => new Promise(resolve => setTimeout(() => {
//   console.log('res=>', i)
//   resolve(i)}, i));

//  asyncPool(2, [1000, 5000, 3000, 2000], timeout);

