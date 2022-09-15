// TypeScript内置泛型工具类型
// 针对联合类型（interface这种没用）
// Exclude 排除相同的，留下不同的

// type Exclude<T, U> = T extends U ? never : T;

type PersonExcludeAttr = "name" | "age";
type StudentExcludeAttr = "name" | "age" | "class" | "school";
let student_exclude1: Exclude<StudentExcludeAttr, PersonExcludeAttr> = "class";
let student_exclude2: Exclude<StudentExcludeAttr, PersonExcludeAttr> = "school";
