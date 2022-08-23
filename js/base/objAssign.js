// Object.assign(target, ...sources)
// target 目标对象
// sources 源对象
// 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。
// 后来的源对象的属性将类似地覆盖早先的属性。
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };
let c = Object.assign({}, o1, o2, o3);
console.log(c, o1, o2, o3);
