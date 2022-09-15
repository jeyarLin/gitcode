const getRegExp = (re) => {
  var flags = "";
  if (re.global) flags += "g";
  if (re.ignoreCase) flags += "i";
  if (re.multiline) flags += "m";
  return flags;
};
const clone = (oldObj) => {
  // 维护2个数组
  let oldList = [];
  let newList = [];
  const _clone = (oldObj) => {
    if (oldObj === null) return null;
    if (typeof oldObj !== "object") return oldObj;
    let newObj,
      type = Object.prototype.toString.call(oldObj);
    if (type == "[object Array]") {
      newObj = [];
    } else if (type == "[object Date]") {
      newObj = new Date(oldObj.getTime());
      // newObj = new oldObj.constructor(oldObj);
    } else if (type == "[object RegExp]") {
      newObj = new RegExp(oldObj.source, getRegExp(oldObj));
      if (oldObj.lastIndex) newObj.lastIndex = oldObj.lastIndex; // 有g的时候的坑
      // newObj = new oldObj.constructor(oldObj);
    } else {
      let proto = Object.getPrototypeOf(oldObj);
      newObj = Object.create(proto);
    }
    // 处理循环引用
    let index = oldList.indexOf(oldObj);
    if (index != -1) {
      return newList[index];
    }
    oldList.push(oldObj);
    newList.push(newObj);
    for (let i in oldObj) {
      newObj[i] = _clone(oldObj[i]);
    }
    return newObj;
  };
  return _clone(oldObj);
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
newObj.e[0].name = "222222222";
newObj.f.touch = "33333333";
console.log(clobj, newObj);
