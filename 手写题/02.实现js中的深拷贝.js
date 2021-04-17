function deepClone(object, hash = new WeakMap()) {
  if (object == null) return object
  if (object instanceof Date) return new Date(object)
  if (object instanceof RegExp) return new RegExp(object)
  let newObj = object.constructor()
  console.log(Reflect.ownKeys(object), newObj)
  Reflect.ownKeys(object).forEach((key) => {
    newObj[key] = object[key]
  })
  return newObj
}
let obj1 = {}
let obj2 = {
  b: obj1,
}
obj1.a = obj2

// let a = { b: 1 }
// let obj = { a, b: 2 }
// a.b = obj
let newArr = deepClone(obj1)
console.log(newArr, obj1 === newArr)
