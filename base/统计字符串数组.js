// ["a","b","c","d","e","f","g"]

const handle = (nums) => {
  const res = nums.reduce((p, v) => {
    if (p[v]) {
      p[v] += 1;
    } else {
      p[v] = 1;
    }
    return p
  }, {});
  return res;
};
console.log('res=>', handle( ["a","b","c","d","e","f","g"]))
