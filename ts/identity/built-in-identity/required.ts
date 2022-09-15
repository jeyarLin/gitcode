// TypeScript内置泛型工具类型
// Required 必选

// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

interface StudentRequired {
  name?: string;
  age?: number;
}
const student_required: StudentRequired = {};
const student_required2: Required<StudentRequired> = { name: "ok", age: 12 };
