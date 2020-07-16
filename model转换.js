const preModel = [
  {
    name: "job_type",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "value",
  },
  {
    name: "end_date",
    sqlType: "DATETIME",
    visualType: "date",
    modelType: "category",
  },
  {
    name: "create_time",
    sqlType: "TIMESTAMP",
    visualType: "date",
    modelType: "category",
  },
  {
    name: "is_folder",
    sqlType: "TINYINT",
    visualType: "number",
    modelType: "value",
  },
  {
    name: "description",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category",
  },
  { name: "index", sqlType: "INT", visualType: "number", modelType: "value" },
  {
    name: "exec_log",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category",
  },
  {
    name: "create_by",
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value",
  },
  {
    name: "job_status",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category",
  },
  {
    name: "update_time",
    sqlType: "TIMESTAMP",
    visualType: "date",
    modelType: "category",
  },
  {
    name: "project_id",
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value",
  },
  {
    name: "cron_expression",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category",
  },
  {
    name: "full_parent_id",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category",
  },
  {
    name: "parent_id",
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value",
  },
  {
    name: "name",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category",
  },
  { name: "id", sqlType: "BIGINT", visualType: "number", modelType: "value" },
  {
    name: "update_by",
    sqlType: "BIGINT",
    visualType: "number",
    modelType: "value",
  },
  {
    name: "config",
    sqlType: "VARCHAR",
    visualType: "string",
    modelType: "category",
  },
  {
    name: "start_date",
    sqlType: "DATETIME",
    visualType: "date",
    modelType: "category",
  },
];

let newModel = {};
preModel.forEach((item) => {
  newModel = {
    ...newModel,
    [item.name]: {
      modelType: item.modelType,
      sqlType: item.sqlType,
      visualType: item.visualType,
    },
  };
});

console.log(newModel);
