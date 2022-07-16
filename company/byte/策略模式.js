/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-05-25 23:22:26
 * @LastEditors: camus
 * @LastEditTime: 2021-05-25 23:23:48
 */
// 维护权限列表
const jobList = ["FE", "BE"];

// 策略
var strategies = {
  checkRole: function (value) {
    return value === "juejin";
  },
  checkGrade: function (value) {
    return value >= 1;
  },
  checkJob: function (value) {
    return jobList.indexOf(value) > 1;
  },
  checkEatType: function (value) {
    return value === "eat melons";
  },
};
// 校验规则
var Validator = function () {
  this.cache = [];
  // 添加策略事件
  this.add = function (value, method) {
    this.cache.push(function () {
      return strategies[method](value);
    });
  };
  // 检查
  this.check = function () {
    for (let i = 0; i < this.cache.length; i++) {
      let valiFn = this.cache[i];
      var data = valiFn(); // 开始检查
      if (!data) {
        return false;
      }
    }
    return true;
  };
};
// 小彭使用策略模式进行操作
var compose1 = function () {
  var validator = new Validator();
  const data1 = {
    role: "juejin",
    grade: 0,
  };
  validator.add(data1.role, "checkRole");
  validator.add(data1.grade, "checkGrade");
  const result = validator.check();
  console.log("res=>", result);
  return result;
};
compose1();
