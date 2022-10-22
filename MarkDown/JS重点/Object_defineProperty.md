### Object.defineProperty(obj, key, descriptor)
- 新增或修改对象属性
- descriptor 描述符
- 数据描述符、存取描述符

```
var o = { 'b' : 35}

// 数据描述符
Object.defineProperty(o, 'b', {
  value: 37,
  writable: true,
  enumerable: true, // 默认 false
  configurable: true 
})

// 存取描述符
var aVal = 38;
Object.defineProperty(o, 'a', {
  get() {
    return aVal;
  },
  set(newVal){
    aVal = newVal;
  },
  enumerable: true, // for ... in Object.keys
  configurable: true // 对象的属性是否可以被删除，除 value 和 writable 特性除外的其他特性是否可以被修改
})

// for...in 语句以任意顺序迭代一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。
for(let prop in o){
  console.log(prop)
}
// for ... in是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用Array.prototype.forEach()和for ... of
```
