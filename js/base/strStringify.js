// 详细描述：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
/**
 * JSON.stringify(value[, replacer [, space]])
 * value 必填
 * 1.将要序列化成 一个 JSON 字符串的值。
 * replacer 可选
 * 1.如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
 * 2.如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；
 * 3.如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
 * space 可选
 * 1.指定缩进用的空白字符串，用于美化输出（pretty-print）；
 * 2.如果参数是个数字，它代表有多少的空格；上限为 10。
 * 3.该值若小于 1，则意味着没有空格；
 * 4.如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；
 * 5.如果该参数没有提供（或者为 null），将没有空格。
 */
var obj1 = {
  x: 1,
  y: 2,
};
var obj2 = JSON.stringify(obj1, function (key, value) {
  if (typeof value == "number") {
    return value * 2;
  }
  return value;
});
console.log(obj2);

/**
 * 抛出异常
 * 1.当值存在 循环引用 或 bigInt时
 * 喵喵喵喵
 * 存在的问题：JSON.stringify(obj)
 * 1.转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
 * 2.非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
 * 3.布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
 * 4.undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
 * 5.函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function(){}) or JSON.stringify(undefined).
 * 6.对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
 * 7.所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
 * 8.Date 日期调用了 toJSON() 将其转换为了 string 字符串（同 Date.toISOString()），因此会被当做字符串处理。
 * 9.NaN 和 Infinity 格式的数值及 null 都会被当做 null。
 * 10.其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
 */
