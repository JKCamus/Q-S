class SingletonPattern {
  private static instance: SingletonPattern;
  private constructor() {}
  public static getInstance() {
    if (!SingletonPattern.instance) {
      SingletonPattern.instance = new SingletonPattern();
    }
    return SingletonPattern.instance;
  }
}

let single1 = SingletonPattern.getInstance();
let single2 = SingletonPattern.getInstance();
console.log("is ok?", single1 === single2);

class Singleton {
  // 静态私有成员变量
  // 提供全局访问的方法
  private static instance: Singleton | null;
  public name: string;

  constructor(name: string) {
    this.name = name;
    Singleton.instance = null;
  }

  static getInstance(name: string) {
    //this 指向当前类，静态方法通过构造函数调用
    // 确保一个类只有一个实例
    if (!this.instance) {
      // 自行实例化并提供这个实例
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
  // 私有构造函数
  // 公有的静态工厂方法
  getName() {
    return this.name;
  }
}
// 简单的测试
let sven1 = Singleton.getInstance("sven1");
let sven2 = Singleton.getInstance("sven2");

console.log(sven1 === sven2); // true

// 惰性单例
let createLoginLayer = (function () {
  let div;
  return function () {
    if (!div) {
      div = document.createElement("div");
      div.innerHTML = "我是登录浮窗";
      div.style.display = "none";
      document.body.appendChild(div);
    }
    return div;
  };
})();

document.getElementById("loginBtn").onclick = function () {
  let loginLayer = createLoginLayer();
  loginLayer.style.display = "block";
};
