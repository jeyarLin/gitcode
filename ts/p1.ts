/**
 * 类型：
 * string
 * number
 * boolean
 * 字面量
 * any
 * unknown
 * void
 * never
 * object
 * array
 * tuple 元组，ts新增类型，固定长度数组 [3, 4]
 * enum 枚举，ts新增类型 enum{A, B}
 */
let a: "hello" | "你好" | 10; // 联合类型
a = "hello";
console.log(a);

let b: string | boolean; // 联合类型
b = true;
console.log(b);

let c: string;
c = "";
if (typeof c === "string") {
  c = "你好";
}

// 类型断言
let d: string;
d = c as string; // 类型断言
d = <string>c; // 类型断言

// object
// 可选属性 ?
let e: { name: string; age?: number };
e = { name: "刘宇宁", age: 18 };
console.log(e);
// 任意属性
let f: { name: string; [propName: string]: any };
f = { name: "啊飞", sex: "男" };
console.log(f);

// 函数声明 语法：(形参:类型,形参:类型,...) => 返回值类型
let h: (a: number, b: number) => number;
h = (n1: number, n2: number): number => {
  return n1 + n2;
};
h = function (n1: number, n2: number): number {
  return n1 + n2;
};

// 数组
let i: string[];
i = ["hello", "你好"];
let j: Array<number>;
j = [33, 55];

// 元组 tuple
let k: [string, number];
k = ["你好", 89757];

// 枚举 enum
enum Gender {
  Male = 0,
  Female = 1,
}
let l: { name: string; gender: Gender };
l = {
  name: "刘宇宁",
  gender: Gender.Male,
};
console.log(l.gender === Gender.Male);

// & 与
let m: { name: string } & { age: number };
m = { name: "刘宇宁", age: 18 };

// 类型别名
type myType = 1 | "sss" | 33 | 88;
let n1: myType;
let n2: myType;
let n3: myType;
