// TypeScript内置泛型工具类型
// 字面意思，不能为空

// type NonNullable<T> = T extends null | undefined ? never : T;
interface StudentNon {
  name: string;
  age: number;
}
const student_non: NonNullable<StudentNon> = { name: "d", age: 22 };

// const student_non: NonNullable<StudentNon | undefined | null> = null;
// error 不能将类型“null”分配给类型“StudentNon”。
