/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG_ = 1;
const CLONE_FLAT_FLAG_ = 2;
const CLONE_SYMBOLS_FLAG_ = 4;
var objects = [{ a: 1 }, { b: 2 }];
var deep = cloneDeep(objects);
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG_ | CLONE_SYMBOLS_FLAG_);
}
console.log(deep[0] === objects[0]);
console.log(objects, deep);

// var objects = [{ a: 1 }, { b: 2 }];
// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]);
// console.log(objects, deep);
