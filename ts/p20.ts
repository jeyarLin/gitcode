/**
 * 属性的封装
 * public 修饰的属性可以在任意位置访问（修改）默认值
 * private 私有属性，只能在内部进行访问（修改）
 * --通过在类型添加方法使得私有属性可以被外部访问（修改）
 * protected 受包含属性：只能在当前类和当前类的子类中访问（修改）
 */
class MyClass20 {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get age() {
    return this._age;
  }
  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }
}
const per = new MyClass20("ming", 12);
console.log(per, per.name, per.age);
per.age = 19;
console.log(per, per.name, per.age);
per.age = -12;
console.log(per, per.name, per.age);

// protected
class A20 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class B20 extends A20 {
  test() {
    console.log(this.name);
  }
}
const b = new B20("dd");
console.log(b);
// console.log(b.name); 实例上不能访问 name

// 简写
// class C20 {
//   public name: string;
//   public age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class C20 {
  // 可以直接将属性定义在构造函数中
  constructor(public name: string, public age: number) {}
}
const cc20 = new C20("dd", 22);
console.log(cc20);
