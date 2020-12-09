let currentItems = [
  {
    config: "",
    dashboardId: 285,
    frequency: 60,
    height: 6,
    id: 522,
    polling: false,
    widgetId: 447,
    width: 6,
    x: 0,
    y: 5,
  },
  {
    config: "",
    dashboardId: 285,
    frequency: 60,
    height: 6,
    id: 523,
    polling: false,
    widgetId: 446,
    width: 6,
    x: 6,
    y: 5,
  },
  {
    config: "",
    dashboardId: 285,
    frequency: 60,
    height: 5,
    id: 526,
    polling: false,
    widgetId: 349,
    width: 12,
    x: 0,
    y: 0,
  },
  {
    config: "",
    dashboardId: 285,
    frequency: 60,
    height: 9,
    id: 532,
    polling: false,
    widgetId: 30,
    width: 12,
    x: 0,
    y: 11,
  },
  {
    config: "",
    dashboardId: 285,
    frequency: 60,
    height: 5,
    id: 534,
    polling: false,
    widgetId: 336,
    width: 12,
    x: 0,
    y: 20,
  },
];

let exportData = [
  { itemId: 526, type: "richText" },
  { itemId: 534, type: "richText" },
  { itemId: 523, type: "echarts" },
  { itemId: 522, type: "echarts" },
  { itemId: 532, type: "table" },
];

exportData.map((val) => {
  currentItems.map((val1) => {
    if (val.itemId === val1.id) {
      return Object.assign(val,val1)
    }
  });
});
console.log("totalArray", exportData);
