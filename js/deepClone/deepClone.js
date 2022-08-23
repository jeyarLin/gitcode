/**
 * * 抛出异常
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
let smb = Symbol("foo");
const obj = {
  name: "jeayrLin",
  date: new Date(),
  undef: undefined,
  smb: smb,
  fun: () => {
    console.log("jeyarLin");
  },
  num: NaN,
  count: Infinity,
  No: -Infinity,
  nothing: null,
};
// const objCopy = JSON.parse(JSON.stringify(obj));
// console.log(objCopy);

// 方法二
const isType = (obj, type) => {
  if (typeof obj !== "object") return false;
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case "Array":
      flag = typeString === "[object Array]";
      break;
    case "Date":
      flag = typeString === "[object Date]";
      break;
    case "RegExp":
      flag = typeString === "[object RegExp]";
      break;
    default:
      flag = false;
  }
  return flag;
};

const arr = Array.of(3, 4, 5, 2);
console.log(isType(arr, "Array")); // true

const getRegExp = (re) => {
  var flags = "";
  if (re.global) flags += "g";
  if (re.ignoreCase) flags += "i";
  if (re.multiline) flags += "m";
  return flags;
};

// ES5 的 source 属性
// 返回正则表达式的正文
// /abc/ig.source
// "abc"

// ES6 的 flags 属性
// 返回正则表达式的修饰符
// /abc/ig.flags
// 'gi'
/**
 * deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
const clone = (parent) => {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = (parent) => {
    if (parent === null) return null;
    if (typeof parent !== "object") return parent;

    let child, proto;

    if (isType(parent, "Array")) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, "RegExp")) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex; // 有g的时候的坑
    } else if (isType(parent, "Date")) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      console.log(i);
      // 递归
      child[i] = _clone(parent[i]);
    }
    console.log("*****************");
    return child;
  };
  return _clone(parent);
};

function person(pname) {
  this.name = pname;
}
const Messi = new person("Jeyar");
function say() {
  console.log("hi");
}
let rg = new RegExp("ab+c", "i");
let newObj = {
  a: say,
  c: rg,
  c2: /[./]/,
  d: Messi,
  e: [{ name: "Lin" }, "msg"],
  f: { touch: "king", map: { mini: "ni" } },
};
let clobj = clone(newObj);
newObj.e[0].name = "2222222222";
newObj.f.touch = "33333333";
console.log(clobj, newObj);
