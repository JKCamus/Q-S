// {
//   a: {
//       b: 'hello ',
//       c {
//           d: 'world'
//       }
//   },
//   e: 'hello world'
// }

// 转换为
// {
//   'a.b': 'hello',
//   'a.c.d': 'world',
//   'e': 'hello wolrd'
// }

function flatObj(obj) {
  const res = {};
  function keyToStr(keyStr, value, valueStr) {
    if (typeof value !== "object" || value === null) {
      res[keyStr.slice(1)] = valueStr;
      return;
    }
    Object.keys(value).forEach((ele) => {
      if (typeof value[ele] === "string") {
        valueStr = valueStr + value[ele];
      }
      console.log(ele, valueStr);
      keyToStr(keyStr + "." + ele, value[ele], valueStr);
    });
  }
  keyToStr("", obj, "");
  return res;
}
