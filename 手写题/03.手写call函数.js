/**
 * call的实现原理：
 * 1. 保存this
 * 2. 执行this
 * 3. 参数多个
 */

Function.prototype.newCall = function (_this, ...argvs) {
  let context = _this
  context.fn = this
  let result = context.fn(...argvs)
  delete context.fn
  return result
}
let obj = {
  a: 1,
}
function test(a, b) {
  console.log(this.a, '-----', a, b)
  return 111
}
const res = test.newCall(obj, 'a', 'b')
console.log('res:', res)
