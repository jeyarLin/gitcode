### for of
- for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
- 对于for...of的循环，可以由 break, throw 或 return 终止
- DOM 元素集合，比如一个NodeList对象；类数组对象

### map forEach filter reduce
- filter  过滤 浅拷贝  newArr  filter(function(element, index, array), thisArg)
- map     加工        newArr  array.map(function(element, index, array), thisArg)
- forEach doSomething  返回undefined array.forEach(function(element, index, arr), thisArg)

### 迭代器 Iterator 
- 一些语句和表达式专用于可迭代对象，例如 for-of 循环，展开语法，yield* 和 解构赋值
### 生成器 Generator function* yield 一步一步走