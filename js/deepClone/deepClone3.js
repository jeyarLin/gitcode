function cloneRegExp(regexp) {
  const result = new regexp.constructor(regexp.source, /\w*$/.exec(regexp));
  result.lastIndex = regexp.lastIndex; // 有g的时候的坑
  return result;
}
function cloneSymbol(symbol) {
  return Symbol.prototype.valueOf ? Object(symbol.valueOf()) : {};
}
function cloneBoolean(boolean) {
  return new Boolean(+boolean);
}
// 普通对象clone
// 是否是原型对象
function isPrototype(value) {
  return value === (value.constructor.prototype || Object.prototype);
}
function initCloneObject(object) {
  // 不是原型对象，那就Object.create保持继承关系
  // 是原型对象，那就直接返回一个空对象
  return typeof object.constructor == "function" && !isPrototype(object)
    ? Object.create(Object.getPrototypeOf(object))
    : {};
}
// 链接：https://juejin.cn/post/6844903999972474887
function initCloneArray(array) {
  const length = array.length;
  const result = new array.constructor(length);

  // 正则match返回
  if (
    length &&
    typeof array[0] == "string" &&
    hasOwnProperty.call(array, "index")
  ) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
