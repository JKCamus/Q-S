const val = {
  a: {
    b: "hello ",
    c: {
      d: {
        e: null,
      },
    },
  },
  e: "hello world",
};

// 转换为
// {
//   'a.b': 'hello',
//   'a.c.d': 'world',
//   'e': 'hello wolrd'
// }

function flatObj(obj) {
  const res = {};
  function keyToStr(keyStr, value) {
    if (typeof value !== "object" || value === null) {
      res[keyStr.slice(1)] = valueStr;
      return;
    }
    Object.keys(value).forEach((ele) => {
      valueStr = value[ele];
      // 递归
      keyToStr(keyStr + "." + ele, value[ele]);
    });
  }
  keyToStr("", obj)
  return res;
}
console.log("result", flatObj(val));
