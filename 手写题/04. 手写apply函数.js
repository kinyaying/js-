/**
 * apply原理：
 * 1. 保存this
 * 2. 执行this
 * 3. 参数是数组
 */

Function.prototype.newApply = function (_this, argvs) {
  let context = _this
  context.fn = this
  let result = context.fn(...argvs)
  delete context.fn
  return result
}

const obj = { a: 1 }
function fn(a, b, c) {
  console.log(this === obj, a, b, c)
}
fn.newApply(obj, [1, 2, 3])
