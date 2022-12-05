- https://juejin.cn/post/6844903811622912014
- https://juejin.cn/post/6844904169376071694
### ES6 2015
类
模块化
箭头函数
函数参数默认值
模板字符串
解构赋值
延展操作符
对象属性简写
Promise
Let与Const

### ES7 2016
- 数组includes()方法，用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false。
- a ** b指数运算符，它与 Math.pow(a, b)相同。

### ES8 2017
async/await
Object.values()
Object.entries()
String padding: padStart()和padEnd()，填充字符串达到当前长度
函数参数列表结尾允许逗号
Object.getOwnPropertyDescriptors()
ShareArrayBuffer和Atomics对象，用于从共享内存位置读取和写入

### ES9 2018
异步迭代
Promise.finally()
Rest/Spread 属性
正则表达式命名捕获组（Regular Expression Named Capture Groups）
正则表达式反向断言（lookbehind）
正则表达式dotAll模式
正则表达式 Unicode 转义
非转义序列的模板字符串

### ES10 2019
行分隔符（U + 2028）和段分隔符（U + 2029）符号现在允许在字符串文字中，与JSON匹配
更加友好的 JSON.stringify
新增了Array的flat()方法和flatMap()方法
新增了String的trimStart()方法和trimEnd()方法
Object.fromEntries()
Symbol.prototype.description
String.prototype.matchAll
Function.prototype.toString()现在返回精确字符，包括空格和注释
简化try {} catch {},修改 catch 绑定
新的基本数据类型BigInt
globalThis
import()
Legacy RegEx
私有的实例方法和访问器

### ES11 2020
Optional Chaining 可选链式调用
Nullish Coalescing 空值合并
Dynamic Import 动态引入
globalThis 全局对象 

Optional Chaining 可选链式调用
```
console.log(flower.species?.lily) // 输出 undefined
```

Nullish Coalescing 空值合并
```
let number = 0
let myNumber = number ?? 7
```

Dynamic Import 动态引入

globalThis 全局对象 
```
// 浏览器
window == globalThis // true

// node.js
global == globalThis // true

```