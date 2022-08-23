// 原数据是这样的
const res = [
  {
    goodsId: "1",
    quota: 12,
    skuId: "1",
  },
  {
    goodsId: "2",
    quota: 12,
    skuId: "2",
  },
  {
    goodsId: "1",
    quota: 12,
    skuId: "1",
  },
];
// 去重后数据是这样的
[
  {
    goodsId: "1",
    quota: 12,
    skuId: "1",
  },
  {
    goodsId: "2",
    quota: 12,
    skuId: "2",
  },
];
// 1.使用filter和Map 不改变原数组
function uniqueFunc(arr, uniId) {
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
// console.log(uniqueFunc(res, "goodsId"));
// console.log(res);
// 2.使用reduce 不改变原数组
function uniqueFunc2(arr, uniId) {
  let hash = {};
  return arr.reduce((accum, item) => {
    hash[item[uniId]] ? "" : (hash[item[uniId]] = true && accum.push(item));
    return accum;
  }, []);
}
// console.log(uniqueFunc2(res, "goodsId"));
// console.log(res);
// 3.使用for循环 不改变原数组
function uniqueFunc3(arr, uniId) {
  let obj = {};
  let tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i][uniId]]) {
      tempArr.push(arr[i]);
      obj[arr[i][uniId]] = true;
    }
  }
  return tempArr;
}
console.log(uniqueFunc3(res, "goodsId"));
console.log(res);
