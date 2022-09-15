// TypeScript内置泛型工具类型
// Pick 选择

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
interface StudentPick {
  name: string;
  age: number;
  school: string;
}
const student_pick1: StudentPick = {
  name: "jeyarLin",
  age: 20,
  school: "sichuan",
};
const student_pick2: Pick<StudentPick, "age"> = {
  age: 22,
};
const student_pick3: Pick<StudentPick, "name"> = {
  name: "jeyarLin",
};
