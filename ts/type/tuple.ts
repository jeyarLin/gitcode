// https://juejin.cn/post/6981728323051192357
// type annotation 类型注解 我们来告诉TS变量类型是什么类型
// type inference 类型推断 TS会会自带地去尝试分析变量的类型

// 元组 tuple

// 数组 某个位置的值可以是注解中的任何一个
const zu00w: (string | number)[] = ["zed", 25, "darts"];

// 元祖 每一项数据类型必须一致
const zu001: [string, string, number] = ["zed", "darts", 25];
