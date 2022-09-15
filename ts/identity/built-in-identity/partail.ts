// TypeScript内置泛型工具类型
// Partial 可选

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

export interface StudentPartail {
  name: string;
  age: number;
}
const student1: StudentPartail = { name: "ok", age: 12 };
const student2: Partial<StudentPartail> = {};
