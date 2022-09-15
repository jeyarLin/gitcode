// TypeScript内置泛型工具类型
// omit 省略

// all part

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
interface StudentOmit {
  name: string;
  age: number;
  class: string;
  school: string;
}
type PersonOmitAttr = "name" | "age";
type StudentOmitAttr = "name" | "age" | "class" | "school";
const student_omit: Omit<StudentOmit, PersonOmitAttr> = {
  class: "s",
  school: "w",
};
