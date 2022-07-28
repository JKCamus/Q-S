function multiRequest(urls = [], limit,iteratorFn) {
  const len = urls.length;
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
      console.log('res=>', result)
      iteratorFn(url)
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
const timeout = (i) =>
  new Promise((resolve) => setTimeout(() => {
    console.log('result', i)
    resolve(i)}, i));


    multiRequest( [1000, 5000, 3000, 2000,100,4000],2,timeout).then(res=>{
      console.log('r', res)
    })
//  asyncPool(2, [1000, 5000, 3000, 2000], timeout);

