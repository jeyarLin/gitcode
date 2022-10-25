/**
 * 改变原数组
 * sort
 * reverse
 * splice 删除、新增 splice(start, deleteCount, item1)
 * push
 * pop
 * unshift
 * shift
 */

/**
 * 不改变原数组
 * slice   截取        newArr  array.slice(start, end)
 * concat  连接        newArr  array.concat(newArr)
 * filter  过滤 浅拷贝  newArr  filter(function(element, index, array), thisArg)
 * map     加工        newArr  array.map(function(element, index, array), thisArg)
 * forEach doSomething  返回undefined array.forEach(function(element, index, arr), thisArg)
 *
 * some  boolean 数组里至少有一个元素 通过-提供的函数-的测试 array.some(function(element, index, arr), thisArg)
 * every boolean 全部元素，通过测试
 * includes arr.includes(searchElement) boolean
 *
 * find      返回 通过-提供的函数-的测试 的元素 value find(function(element, index, array), thisArg)
 * findIndex 返回 通过-提供的函数-的测试 的位置 index findIndex(function(element, index, array), thisArg)
 * findLast      逆向查找 返回 通过-提供的函数-的测试 的元素 value findLast(function(element, index, array), thisArg)
 * findLastIndex 逆向查找 返回 通过-提供的函数-的测试 的位置 index findLastIndex(function(element, index, array), thisArg)
 * indexOf     顺序查找       index  indexOf(searchElement, fromIndex)
 * lastIndexOf 逆向查找       index  lastIndexOf(searchElement, fromIndex)
 *
 * reduce       累加器 顺序 返回累计操作处理的结果
 * reduceRight  累加器 逆序 reduceRight(function(accumulator, currentValue, index, array) , initialValue)
 * accumulator 累加器：上一次调用回调函数时，回调函数返回的值。
 * 首次调用回调函数时，如果 initialValue 存在，累加器即为 initialValue，否则须为数组中的最后一个元素
 *
 * keys
 * from
 * isArray boolean
 * toString
 *
 */
