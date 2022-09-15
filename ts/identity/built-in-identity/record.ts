// TypeScript内置泛型工具类型
// 针对 对象 {}
// Record 记录

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

const student_record: Record<string, any> = {
  name: "jeyarLin",
  age: 20,
};
