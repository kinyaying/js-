/**
 * 防抖：一开始不触发，只触发最后一次
 * 节流：固定时间触发一次
 */
// 防抖
const debounce = function (cb, delay) {
  let timer = null
  return (...argv) => {
    clearTimeout(timer)
    timer = setTimeout(function () {
      cb(...argv)
    }, delay)
  }
}

// let keyup = debounce((...argv) => {
//   console.log('ok:', ...argv)
// }, 1000)

// keyup(1)
// keyup(2)
// keyup(3)

//节流
const throttle = (cb, delay) => {
  let pre = 0,
    timer = null
  return (...argv) => {
    let now = new Date().getTime()
    if (now - pre > delay) {
      cb(...argv)
      pre = now
    } else {
      clearTimeout(timer)
      timer = setTimeout(function () {
        cb(...argv)
      }, delay)
    }
  }
}
let keyup = throttle((...argv) => {
  console.log('ok:', ...argv)
}, 2000)

keyup(1)
keyup(2)
keyup(3)
