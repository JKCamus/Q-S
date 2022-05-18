/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/
function sortExtensionsByName(extensions) {
  const result = [...extensions];
  result.sort((a, b) => {
    const combinedA = `${a.firstName}${a.lastName}${a.ext}`;
    const combinedB = `${b.firstName}${b.lastName}${b.ext}`;
    return combinedA.localeCompare(combinedB);
  });
  return result;
}

/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions) {
  const result = [...extensions];
  const orderMap = {
    DigitalUser: 0,
    VirtualUser: 1,
    FaxUser: 2,
    AO: 3,
    Dept: 4,
  };
  result.sort((a, b) => {
    return orderMap[a.extType] - orderMap[b.extType];
  });
  return result;
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

function sumByQuarter(saleItems) {
  const quarterMap = new Map();
  saleItems.forEach((item) => {
    const quarter = Math.ceil(item.month / 3);
    if (quarterMap.has(quarter)) {
      const curQuarter = quarterMap.get(quarter);
      quarterMap.set(quarter, {
        quarter,
        totalPrices: (curQuarter.totalPrices += item.salePrice),
        transactionNums: (curQuarter.transactionNums += 1),
      });
    } else {
      quarterMap.set(quarter, {
        quarter,
        totalPrices: item.salePrice,
        transactionNums: 1,
      });
    }
  });
  return [...quarterMap.values()];
}


/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/

function averageByQuarter(saleItems) {
  const result = sumByQuarter(saleItems);
  return result.map((item) => ({
    quarter: item.quarter,
    averagePrices: item.totalPrices / item.transactionNums,
    transactionNums: item.transactionNums,
  }));
}

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
