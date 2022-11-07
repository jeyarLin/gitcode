### def 
```
/**
  * Define a property.
  */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true,
  });
}
```
### watch
```
initWatch(vm, watch)
createWatcher(vm, expOrFn, handler, options)
```
### VNode
var VNode = /** @class */

### Dep
var Dep = /** @class */

Dep.target = null;
var targetStack = [];
function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}
function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

if (Dep.target)
dep.depend
dep.notify

### observer
var Observer = /** @class */
if (isArray(value))

数组
value.__proto__ = arrayMethods; // 重写 原型对象
this.observeArray(value); // 递归 -- observe(value[i])

对象
defineReactive(obj, key, val, customSetter, shallow, mock) // 递归 -- observe(val, false, mock)

### EffectScope
var EffectScope = /** @class */

### Watcher
var Watcher = /** @class */
Watcher(vm, expOrFn, cb, options, isRenderWatcher)
Watcher.prototype.get // pushTarget -> popTarget -> popTarget

mountComponent(vm, el, hydrating) -> new Watcher
watcher -> new Watcher
initComputed -> new Watcher
stateMixin -> watch -> new Watcher // ***

initState -> initData -> getData(data, vm) // pushTarget -> popTarget -> popTarget

var data = vm.$options.data;
data = vm._data = isFunction(data) ? getData(data, vm) : data || {};
// 。。。
var ob = observe(data);
ob && ob.vmCount++;

observe(value, shallow, ssrMockReactivity)
return ob = new Observer(value, shallow, ssrMockReactivity);

### CodegenState
var CodegenState = /** @class */

### compiler

```
createCompiler

createCompilerCreator(baseCompile)
{
    compile: compile,
    compileToFunctions: createCompileToFunctionFn(compile)
}

baseCompile(template, options)
{
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
}
// parse(template, options) 解析器 生成 ast
// var finalOptions = Object.create(baseOptions);
// baseOptions
```