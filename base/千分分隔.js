const formatNum = (num) => {
  let result = "";
  // 处理正负号
  const flag = num > 0 ? "" : "-";
  // 转化为数组
  const numArr = (Math.abs(num) + "").split(".");
// 取得整数部分
  let integer = numArr[0];
  // 开始构造字符串
  while (integer.length > 3) {
    result = "," + integer.slice(-3) + result;
    integer = integer.slice(0, integer.length - 3);
  }

  if (integer.length > 0) {
    result = integer + result;
  }
  result = numArr[1]
    ? flag + result + `${"." + numArr[1]}`
    : flag + result;

  return result;
};

console.log('res=>', formatNum(1323))
