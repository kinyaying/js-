/**
 * 利用apply或call实现
 * 不太会
 */

Function.prototype.newBind = function (_this) {
  let context = this
  return function () {
    context.call()
  }
}
let obj = { a: 1 }
function fn() {
  console.log(this)
}
let newFn = fn.newBind(obj)
console.log(newFn())
