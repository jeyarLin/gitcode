// keys() 方法返回一个包含数组中每个索引键的 Array Iterator 对象

const array1 = ["a", "b", "c"];
const iterator = array1.keys(); //  iterator 迭代器
for (const key of iterator) {
  console.log(key);
}
