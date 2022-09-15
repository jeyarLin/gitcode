// 函数参数类型(Parameters<T>)
// 获取函数的参数类型组成的 元组

function parm(name: string, age: number): void {
  console.log("s");
}
type A = Parameters<typeof parm>; // [name: string, age: number]
// type B = Parameters<typeofArray.isArray>; // [any]
// type C = Parameters<typeofparseInt>; // [string, (number | undefined)?]
// type D = Parameters<typeofMath.max>; // number[]

// https://juejin.cn/post/6985296521495314445#heading-26
type FunctionType = (name: string, age: number) => boolean;
type FunctionParamsType = Parameters<FunctionType>; // [name: string, age: number]
const params: FunctionParamsType = ["Jack", 20];
console.log(params);

// ReturnType<T>
// function T的返回类型
function Tdd(a: string): number {
  return 9;
}
type T99 = ReturnType<typeof Tdd>; // number
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void

// 构造函数参数类型(ConstructorParameters<typeof T>)
// 返回 class 中构造函数参数类型组成的 元组类型
class Person {
  name: string;
  age: number;
  weight: number;
  gender: "man" | "women";

  constructor(name: string, age: number, gender: "man" | "women") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

type ConstructorType = ConstructorParameters<typeof Person>; //  [name: string, age: number, gender: "man" | "women"]

const params_: ConstructorType = ["Jack", 20, "man"];
