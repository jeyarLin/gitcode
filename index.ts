// 字符串类型
// let a: string = "111";
// 支持es6的字符串模板
// let str: string = `ddd${a}`;
// console.log(str);

// 数字类型 支持十六进制、十进制、八进制、二进制
// let hex: number = 0xf00d; // 十六进制
// let decimal: number = 22; // 十进制
// let octal: number = 0o744; // 八进制
// let binary: number = 0b1010; // 二进制
// let Nan: number = NaN;
// let infinityVal: number = Infinity; // 无穷大
// console.log(hex, decimal, octal, binary, Nan, infinityVal);

// 布尔类型
// let booleanVal: boolean = false;
// console.log(booleanVal);

// undefined null
// let u: undefined = undefined;
// let n: null = null;
// let unn: void = undefined;
// let nzz: void = null;
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
// 这能避免 很多常见的问题。
// 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
// 再次说明，稍后我们会介绍联合类型。

//空值类型 void
// function voidFn(): void {
//   console.log("Fn void");
// }
// voidFn();

// never 类型表示的是那些永不存在的值的类型。
// // 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message);
// }

// // 推断的返回值类型为never
// function fail() {
//   return error("Something failed");
// }

// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//   while (true) {
//   }
// }

//

// interface
// interface Person {
//   readonly firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "Jane", lastName: "User" };
// console.log(greeter(user));

// interface Person {
//   readonly name: string;
//   age?: number;
//   [propName: string]: any;
//   ddc(): number;
// }
// let p: Person = {
//   name: "翠翠",
//   age: 18,
//   aaa: 99,
//   ddc: (): number => {
//     return 123;
//   },
// };
// console.log(p);

// interface A {
//   name: string;
// }
// interface B extends A {
//   age: number;
// }
// let b: B = {
//   name: "zhansan",
//   age: 13,
// };
// console.log(b);

// let arr: number[] = [1, 2, 3];
// let arr1: string[] = ["11", "hh"];
// let arr2: boolean[] = [false];
// let arr3: any[] = [false, 1, "s"];
// console.log(arr, arr1, arr2, arr3);

// let arr: Array<number> = [2, 3];
// console.log(arr);

// let arr1: number[][][] = [[[2]], [[]], [[1, 2, 3]]];
// let arr2: Array<Array<number>> = [
//   [1, 2, 3],
//   [3, 4, 5],
// ];
// console.log(arr1, arr2);

// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }
// function Arr(...args: any): void {
//   console.log(arguments);
//   let arg: IArguments = arguments;
//   console.log(arg);
// }
// Arr(1, 2, 3);

// interface ArrNumber {
//   [index: number]: number;
// }
// let arr: ArrNumber = [1, 2, 3];
// console.log(arr);

interface ArrString {
  [index: number]: string;
}
let arr: ArrString = ["1", "2", "3"];
console.log(arr);
