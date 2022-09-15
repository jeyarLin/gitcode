// TypeScript内置泛型工具类型
// 针对联合类型（interface这种没用）
// Extract 排除不同的，留下相同的

// type Extract<T, U> = T extends U ? T : never;

type PersonExtractAttr = "name" | "age";
type StudentExtractAttr = "name" | "age" | "class" | "school";
let student_extract01: Extract<StudentExtractAttr, PersonExtractAttr> = "name";
let student_extract02: Extract<StudentExtractAttr, PersonExtractAttr> = "age";
