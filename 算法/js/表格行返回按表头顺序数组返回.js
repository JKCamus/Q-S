/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2020-12-07 09:57:26
 * @LastEditors: camus
 * @LastEditTime: 2020-12-09 17:20:39
 */
let data = [
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2004",
    INCOME: "402.23240614240837",
    UUID: "5BA8547FCD5B4BAD",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2005",
    INCOME: "932.4613424559612",
    UUID: "1ED9109B9C344188",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2006",
    INCOME: "580.3437716644024",
    UUID: "450D108754ED43E0",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2007",
    INCOME: "562.3351399120255",
    UUID: "0E94F7CBD8944ECB",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2008",
    INCOME: "1078.6899570142118",
    UUID: "B185BC2AFB4742D8",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2009",
    INCOME: "292.6518326788577",
    UUID: "F9CDCDD08C4E44D0",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2010",
    INCOME: "469.565200465759",
    UUID: "F0DB5FA58BA4465F",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2011",
    INCOME: "948.7455304995186",
    UUID: "3B887F87211A4971",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2012",
    INCOME: "1280.092798066019",
    UUID: "5F88EB2FC8044528",
  },
  {
    PROVINCE: "上海市",
    TIMEFLAG: "2013",
    INCOME: "799.5780199626238",
    UUID: "FDB3FBAD031A4E9F",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "10.354162671403493",
    UUID: "DB27FC24452B4795",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "11.346883578708006",
    UUID: "908228FDCBAB4F61",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "12.999404629851824",
    UUID: "6F5933FB58844C20",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "13.600743972654906",
    UUID: "9431155DAFF94D25",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "14.195319397540421",
    UUID: "63342504B7724C34",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "14.21250859061487",
    UUID: "8AE553AF201E4DC3",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "4.007377583402147",
    UUID: "233E19D3E26644ED",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "4.048071009452566",
    UUID: "0B2965DB29C74439",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "4.331520614312485",
    UUID: "BF1453BE1CE44124",
  },
  {
    PROVINCE: "云南",
    TIMEFLAG: "2004",
    INCOME: "6.197290359621001",
    UUID: "20F39888835E43B6",
  },
];

let tableArray = Object.keys(data[0]);
let res = [tableArray];
data.forEach((col) => {
  let cache = [];
  tableArray.forEach((head) => cache.push(col[head]));
  res.push(cache);
});

console.log(res);
