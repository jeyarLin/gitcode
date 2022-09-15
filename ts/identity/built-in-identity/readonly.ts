// TypeScript内置泛型工具类型
// Readonly 只读

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

interface StudentReadonly {
  name: string;
  age: number;
}
const student_readonly: Readonly<StudentReadonly> = {
  name: "张三",
  age: 20,
};
// student_readonly.age = 21;
// error 无法为“age”赋值，因为它是只读属性。
