// 副作用存放位置
const bucket = new WeakMap();
let activeEffect = null;
function isObject(value) {
  return typeof value === "object" && value !== null;
}
// 收集依赖
function track(target, key) {
  if (!activeEffect) return;

  let depMap = bucket.get(target);
  if (!depMap) {
    depMap = new Map();
    bucket.set(target, depMap);
  }

  let depSet = depMap.get(key);
  if (!depSet) {
    depSet = new Set();
    depMap.set(key, depSet);
  }

  depSet.add(activeEffect);
}

// 触发依赖
function trigger(target, key) {
  let depMap = bucket.get(target);
  if (!depMap) return;

  let depSet = depMap.get(key);
  if (depSet) {
    depSet.forEach((fn) => fn());
  }
}

// 响应式
function reactive(data) {
  if (!isObject(data)) return;
  return new Proxy(data, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      trigger(target, key);
      return true;
    },
  });
}

// 注册副作用函数
function effect(fn) {
  if (typeof fn !== "function") return;
  console.log(typeof fn);
  activeEffect = fn;
  fn();
  activeEffect = null;
}
