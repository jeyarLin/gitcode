/**
 * Date
 * ------------
 * Date.parse()
 * getTime
 * setTime
 *
 * getDay 0-6 -------------------
 * getFullYear
 * getMonth 0-11
 * getDate 1-31
 * getHours 0-23
 * getMinutes 0-59
 * getSeconds 0-59
 *
 * setFullYear
 * setMonth 0-11
 * setDate 1-31
 * setHours 0-23
 * setMinutes 0-59
 * setSeconds 0-59
 *
 * toLocaleString
 * toLocaleDateString
 * toLocaleTimeString
 */
let d = new Date();
let time = d.getTime();
let parse = Date.parse(d);
console.log(time, parse, d.toLocaleString());
d.setTime(1661591778268);
