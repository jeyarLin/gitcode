// const Fn = function (name: string, age: number = 16): string {
//   return name + age;
// };
// let a = Fn("翠翠", 18);
// console.log(a);
// let b = Fn("jeyar");
// console.log(b);

// interface User {
//   name: string;
//   age: number;
// }
// const people = function (use: User): User {
//   return use;
// };
// let man = people({
//   name: "年年",
//   age: 13,
// });
// console.log(man);

// 函数重载
// 返回类型可以不同
// function fn(params: number): void;
// function fn(params: string, params2: number): void;
// function fn(params: any, params2?: any): void {
//   console.log(params, params2);
// }
// fn(1);
// fn("s", 22);

//交集
// interface Person {
//   name: string;
//   age: number;
// }
// interface Man {
//   sex: string;
// }
// const cuicui = (man: Person & Man): void => {
//   console.log(man);
// };
// cuicui({ name: "翠翠", age: 18, sex: "女" });

// 断言 不能乱用，类型不对，运行还是会出错
// interface A {
//   run: string;
// }
// interface B {
//   build: string;
// }
// const Fn = (rat: A | B): void => {
//   console.log((rat as A).run); // undefined
// };
// Fn({
//   build: "123",
// });

// const fn = (rat: any): boolean => {
//   return rat as boolean;
// };
// console.log(fn(1)); // 1
