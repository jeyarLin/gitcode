// 泛型 某个类型的形参
// 在定义类或函数时，如果遇到参数类型不明确的时候就可以用泛型
function fn<T>(a: T): T {
  return a;
}
let result1 = fn(10);
let result2 = fn("hello");
let result3 = fn<string>("hello");

function fn2<T, K>(a: T, b: K): T {
  return a;
}
fn2(111, "ddd");
fn2<number, string>(111, "ddd");

interface Inter {
  length: number;
}
// T extends Inter 表示泛型T是Inter的实现类（子类）
function fn3<T extends Inter>(a: T): number {
  return a.length;
}
fn3({ length: 22 });

class MyClass21<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
// const mc = new MyClass21("小明");
const mc = new MyClass21<string>("小明");
console.log(mc);
