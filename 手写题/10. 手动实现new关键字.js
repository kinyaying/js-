/**
 *
 */

function mockNew() {
  // 剩余的arguments是其他参数
  let Constructor = [].shift.call(arguments)
  let obj = {}
  obj.__proto__ = Constructor.prototype
  let r = Constructor.apply(obj, arguments)
  return obj
}
