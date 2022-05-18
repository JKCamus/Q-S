/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-15 23:04:29
 * @LastEditors: camus
 * @LastEditTime: 2021-03-21 16:01:58
 */
/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/
function sortExtensions(extensions, sortFn) {
  const result = [...extensions];
  result.sort((a, b) => {
    return sortFn(a, b);
  });
  return result;
}

function sortExtensionsByName(extensions) {
  const compareByName = (a, b) => {
    const combinedA = `${a.firstName}${a.lastName}${a.ext}`;
    const combinedB = `${b.firstName}${b.lastName}${b.ext}`;
    return combinedA.localeCompare(combinedB);
  };
  return sortExtensions(extensions, compareByName);
}

/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions) {
  const orderMap = {
    DigitalUser: 0,
    VirtualUser: 1,
    FaxUser: 2,
    AO: 3,
    Dept: 4,
  };

  const compareByExtType = (a, b) => {
    return orderMap[a.extType] - orderMap[b.extType];
  };

  return sortExtensions(extensions, compareByExtType);
}

/**
  saleItems is an Array has each item has such format:
  {
  month: n, //[1-12],
  date: n, //[1-31],
  transactionId: "xxx",
  salePrice: number
  }
**/

/**
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
    {quarter: 1, totalPrices: xxx, transactionNums: n},
    {....}
  ]
**/
function getDataByQuarter(saleItems, getFunc) {
  const quarterMap = {};
  for (let i = 1; i <= 4; i++) {
    quarterMap[i] = {
      quarter: i,
      totalPrices: 0,
      transactionNums: 0,
    };
  }
  const getQuarter = (month) => Math.ceil(month / 3);
  saleItems.map((item) => {
    const quarterData = quarterMap[getQuarter(item.month)];
    return getFunc(quarterData, item);
  });
  return Object.values(quarterMap);
}

function sumByQuarter(saleItems) {
  const calc = (currQuarterData, currentItem) => {
    currQuarterData.totalPrices += currentItem.salePrice;
    currQuarterData.transactionNums++;
    return currQuarterData;
  };
  return getDataByQuarter(saleItems, calc);
}

/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/

function averageByQuarter(saleItems) {
  // const result = sumByQuarter(saleItems);
  // return result.map((item) => ({
  //   quarter: item.quarter,
  //   averagePrices: item.totalPrices / item.transactionNums,
  //   transactionNums: item.transactionNums,
  // }));
  const calc = (currQuarterData, currentItem) => {
    currQuarterData.totalPrices += currentItem.salePrice;
    currQuarterData.transactionNums++;
    currQuarterData.averagePrices =
      currQuarterData.transactionNums &&
      currQuarterData.totalPrices / currQuarterData.transactionNums;
    return currQuarterData;
  };

  return getDataByQuarter(saleItems, calc).map((item) => ({
    quarter: item.quarter,
    transactionNums: item.transactionNums,
    averagePrices: item.averagePrices,
  }));
}
const QSTest = [
  { month: 1, date: 2, transationId: "asdf", salePrice: 11 },
  { month: 1, date: 3, transationId: "asdf", salePrice: 21 },
  { month: 2, date: 2, transationId: "asdf", salePrice: 31 },
  { month: 3, date: 2, transationId: "asdf", salePrice: 41 },
  { month: 4, date: 2, transationId: "asdf", salePrice: 11 },
  { month: 5, date: 2, transationId: "asdf", salePrice: 1 },
  { month: 6, date: 2, transationId: "asdf", salePrice: 1 },
  { month: 7, date: 2, transationId: "asdf", salePrice: 1 },
  { month: 8, date: 2, transationId: "asdf", salePrice: 1 },
  { month: 9, date: 2, transationId: "asdf", salePrice: 1 },
  { month: 10, date: 2, transationId: "asdf", salePrice: 1 },
];
console.log("res=>", averageByQuarter(QSTest));
/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;

  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/
class Sequence {
  static value = 1;
  next() {
    return Sequence.value++;
  }
}

/**
    Question 6:
    AllKeys: 0-9;
    usedKeys: an array to store all used keys like [2,3,4];
    We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/

function getUnUsedKeys(allKeys, usedKeys) {
  //TODO
  const usedKeysArr = new Set(usedKeys);
  return allKeys.filter((key) => !usedKeysArr.has(key));
}
